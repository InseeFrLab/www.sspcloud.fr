import { assert, is } from "tsafe/assert";
import memoize from "memoizee";
import FlexSearch from "flexsearch";
import type { EducationalResource, LocalizedString } from "core/ports/CatalogData";
import { objectKeys } from "tsafe/objectKeys";
import { id } from "tsafe/id";

type IndexedPart = {
    // serialized number[];
    path_str: string;
    searchableText: string;
};

function computeSearchableText(params: {
    educationalResource: EducationalResource.Resource;
    tagLabelByTagId: Record<EducationalResource.Tag, LocalizedString>;
}): string {
    const { educationalResource: er, tagLabelByTagId } = params;

    const serializeLocalizedString = (ls: LocalizedString) =>
        typeof ls === "string"
            ? ls
            : objectKeys(ls)
                  .map(tag => ls[tag])
                  .filter(str => str !== undefined)
                  .join(" ");

    return [
        serializeLocalizedString(er.name),
        er.tags
            .map(tag => tagLabelByTagId[tag])
            .map(serializeLocalizedString)
            .join(" | "),
        serializeLocalizedString(er.abstract),
        er.authors.map(serializeLocalizedString).join(" | "),
    ].join("\n--\n");
}

function partsToIndexedParts(params: {
    parts: EducationalResource[];
    tagLabelByTagId: Record<EducationalResource.Tag, LocalizedString>;
}): IndexedPart[] {
    const { parts, tagLabelByTagId } = params;

    return partsToIndexedParts_rec({
        path: [],
        parts,
        tagLabelByTagId,
    });
}

function partsToIndexedParts_rec(params: {
    path: number[];
    parts: EducationalResource[];
    tagLabelByTagId: Record<EducationalResource.Tag, LocalizedString>;
}): IndexedPart[] {
    const { path, parts, tagLabelByTagId } = params;

    return parts
        .map((part, i) =>
            "parts" in part
                ? partsToIndexedParts_rec({
                      path: [...path, i],
                      parts: part.parts,
                      tagLabelByTagId,
                  })
                : id<IndexedPart>({
                      path_str: JSON.stringify([...path, i]),
                      searchableText: computeSearchableText({
                          educationalResource: part,
                          tagLabelByTagId,
                      }),
                  }),
        )
        .flat();
}

function flexSearchResultToSearchResult(params: {
    parts: EducationalResource[];
    path_str_arr: string[];
}): number[] {
    const { parts, path_str_arr } = params;

    const path_arr = path_str_arr
        .map(path_str => JSON.parse(path_str) as number[])
        .map((path, i) => ({ path, score: 1 / i }));

    const scoreByIndex = new Map<number, number>();

    for( const { path, score } of path_arr ){

        if( path.length === 1 ){
            scoreByIndex.set(path[0], score);
        }else{

            const [index]= path;

            scoreByIndex.set(index, Math.max(scoreByIndex.get(index)?? 0, score));
        }

    }

    const indexAndScores: { index: number; score: number; }[] = [];

    for( let index=0; index<parts.length; index++){

        const score = scoreByIndex.get(index);

        if( score === undefined ){
            continue;
        }

        indexAndScores.push({ index, score });

    }

    return indexAndScores.sort((a,b)=> b.score - a.score).map(({ index })=> index)

}



export const getFlexSearch = memoize(
    (
        parts: EducationalResource[],
        tagLabelByTagId: Record<EducationalResource.Tag, LocalizedString>,
    ) => {
        const index = new FlexSearch.Document<IndexedPart>({
            document: {
                id: "path_str",
                field: ["searchableText"],
            },
            cache: 100,
            tokenize: "full",
            context: {
                resolution: 9,
                depth: 2,
                bidirectional: true,
            },
        });

        const indexedParts = partsToIndexedParts({ parts, tagLabelByTagId });

        for (const indexedPart of indexedParts) {
            index.add(indexedPart);
        }

        async function flexSearch(params: { search: string }): Promise<number[]> {
            const { search } = params;

            assert(search !== "");

            const resultOfSearchAsync = await index.searchAsync(search, {
                bool: "or",
                suggest: true,
                enrich: true,
            });

            const path_str_arr = resultOfSearchAsync[0].result;

            assert(is<string[]>(path_str_arr));

            return flexSearchResultToSearchResult({
                parts,
                path_str_arr,
            });
        }

        return { flexSearch };
    },
    { max: 1 },
);
