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
    labelByTag: Record<EducationalResource.Tag, LocalizedString>;
}): string {
    const { educationalResource: er, labelByTag } = params;

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
            .map(tag => labelByTag[tag])
            .map(serializeLocalizedString)
            .join(" | "),
        serializeLocalizedString(er.abstract),
        er.authors.map(serializeLocalizedString).join(" | "),
    ].join("\n--\n");
}

function partsToIndexedParts(params: {
    parts: EducationalResource[];
    labelByTag: Record<EducationalResource.Tag, LocalizedString>;
}): IndexedPart[] {
    const { parts, labelByTag } = params;

    return partsToIndexedParts_rec({
        path: [],
        parts,
        labelByTag,
    });
}

function partsToIndexedParts_rec(params: {
    path: number[];
    parts: EducationalResource[];
    labelByTag: Record<EducationalResource.Tag, LocalizedString>;
}): IndexedPart[] {
    const { path, parts, labelByTag } = params;

    return parts
        .map((part, i) =>
            "parts" in part
                ? partsToIndexedParts_rec({
                      path: [...path, i],
                      parts: part.parts,
                      labelByTag,
                  })
                : id<IndexedPart>({
                      path_str: JSON.stringify([...path, i]),
                      searchableText: computeSearchableText({
                          educationalResource: part,
                          labelByTag,
                      }),
                  }),
        )
        .flat();
}

function flexSearchResultToSearchResult(params: {
    parts: EducationalResource[];
    path_str_arr: string[];
}): boolean[] {
    const { parts, path_str_arr } = params;

    return flexSearchResultToSearchResult_rec({
        parts,
        path_arr: path_str_arr.map(path_str => JSON.parse(path_str) as number[])
    });

}

function flexSearchResultToSearchResult_rec(params: {
    parts: EducationalResource[];
    path_arr: number[][];
}): boolean[] {
    const { parts, path_arr } = params;

    const matchedIndexes = new Set<number>();
    const path_arr_next_by_index = new Map<number, number[][]>();

    for( const path of path_arr){

        assert(path.length !== 0);

        if( path.length === 1 ){
            matchedIndexes.add(path[0]);
        }else{

            const [i, ...rest]= path;

            path_arr_next_by_index.set(i, [
                ...(path_arr_next_by_index.get(i) ?? []),
                rest,
            ]);
        }

    }

    return parts.map((part,i)=> {

        if( "parts" in part ){

            const path_arr_next = path_arr_next_by_index.get(i);

            if( path_arr_next === undefined ){
                return false;
            }

            const isMatched_arr= flexSearchResultToSearchResult_rec({
                parts: part.parts,
                path_arr: path_arr_next
            });

            return isMatched_arr.find(v => v) !== undefined;

        }

        return matchedIndexes.has(i);

    });

}

export const getFlexSearch = memoize(
    (
        parts: EducationalResource[],
        labelByTag: Record<EducationalResource.Tag, LocalizedString>,
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

        const indexedParts = partsToIndexedParts({ parts, labelByTag });

        for (const indexedPart of indexedParts) {
            index.add(indexedPart);
        }

        async function flexSearch(params: { search: string }): Promise<boolean[]> {
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