import type { EducationalResource, LocalizedString } from "core/ports/CatalogData";
import { objectKeys } from "tsafe/objectKeys";
import { id } from "tsafe/id";
import {
    type SearchableEntry,
    createFindRelevant as createFindRelevant_generic,
} from "core/tools/findRelevant";
import memoize from "memoizee";

const erToSearchableText = memoize(
    (
        collection: EducationalResource.Collection | undefined,
        er: EducationalResource.Resource,
        tagLabelByTagId: Record<EducationalResource.Tag, LocalizedString>,
    ) => {
        const serializeLocalizedString = (ls: LocalizedString) =>
            typeof ls === "string"
                ? ls
                : objectKeys(ls)
                      .map(tag => ls[tag])
                      .filter(str => str !== undefined)
                      .join(" _ ");

        return [
            ...(collection === undefined
                ? []
                : [
                      serializeLocalizedString(collection.name),
                      serializeLocalizedString(collection.abstract),
                      "----",
                  ]),
            serializeLocalizedString(er.name),
            er.tags
                .map(tag => tagLabelByTagId[tag])
                .map(serializeLocalizedString)
                .join(" | "),
            serializeLocalizedString(er.abstract),
            er.authors.map(serializeLocalizedString).join(" | "),
        ].join("\n--\n");
    },
);

const partsToSearchableEntries = memoize(
    (
        parts: EducationalResource[],
        tagLabelByTagId: Record<EducationalResource.Tag, LocalizedString>,
    ): SearchableEntry[] => {
        return partsToSearchableEntries_rec({
            path: [],
            collection: undefined,
            parts,
            tagLabelByTagId,
        });
    },
);

function partsToSearchableEntries_rec(params: {
    path: number[];
    collection: EducationalResource.Collection | undefined;
    parts: EducationalResource[];
    tagLabelByTagId: Record<EducationalResource.Tag, LocalizedString>;
}): SearchableEntry[] {
    const { path, collection, parts, tagLabelByTagId } = params;

    return parts
        .map((part, i) =>
            "parts" in part
                ? partsToSearchableEntries_rec({
                      path: [...path, i],
                      collection: collection ?? part,
                      parts: part.parts,
                      tagLabelByTagId,
                  })
                : id<SearchableEntry>({
                      searchableTextId: JSON.stringify([...path, i]),
                      searchableText: erToSearchableText(
                          collection,
                          part,
                          tagLabelByTagId,
                      ),
                  }),
        )
        .flat();
}

function resultOfGenericFindRelevantToIndexOfParts(params: {
    parts: EducationalResource[];
    resultOfFindRelevant_generic: { searchableTextId: string }[];
}): number[] {
    const { parts, resultOfFindRelevant_generic } = params;

    const path_arr = resultOfFindRelevant_generic
        .map(({ searchableTextId: path_str }) => JSON.parse(path_str) as number[])
        .map((path, i) => ({ path, score: 1 / i }));

    const scoreByIndex = new Map<number, number>();

    for (const { path, score } of path_arr) {
        if (path.length === 1) {
            scoreByIndex.set(path[0], score);
        } else {
            const [index] = path;

            scoreByIndex.set(index, Math.max(scoreByIndex.get(index) ?? 0, score));
        }
    }

    const indexAndScores: { index: number; score: number }[] = [];

    for (let index = 0; index < parts.length; index++) {
        const score = scoreByIndex.get(index);

        if (score === undefined) {
            continue;
        }

        indexAndScores.push({ index, score });
    }

    return indexAndScores.sort((a, b) => b.score - a.score).map(({ index }) => index);
}

export function createFindRelevant() {
    const { findRelevant: findRelevant_generic } = createFindRelevant_generic();

    async function findRelevant(params: {
        parts: EducationalResource[];
        tagLabelByTagId: Record<EducationalResource.Tag, LocalizedString>;
        searchedText: string;
    }): Promise<number[]> {
        const { parts, tagLabelByTagId, searchedText } = params;

        const result = await findRelevant_generic({
            entries: partsToSearchableEntries(parts, tagLabelByTagId),
            searchedText,
        });

        return resultOfGenericFindRelevantToIndexOfParts({
            parts,
            resultOfFindRelevant_generic: result,
        });
    }

    return { findRelevant };
}
