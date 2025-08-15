
import { assert, is } from "tsafe/assert";
import memoize from "memoizee";
import FlexSearch from "flexsearch";
import type { EducationalResource } from "core/ports/CatalogData";


type IndexedPart = {
    // serialized number[];
    path_str: string;
    searchableText: string;
};

function computeSearchableText(educationalResource: EducationalResource.Resource): string{
    return null as any;
}

function partsToIndexedParts(parts: EducationalResource[]): IndexedPart[] {
    return null as any;
}

function flexSearchResultToSearchResult(
    params: {
        parts: EducationalResource[];
        path_str_arr: string[];
    }
): boolean[] {

}

export const getFlexSearch = memoize(
    (parts: EducationalResource[]) => {

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

        const indexedParts = partsToIndexedParts(parts);

        for( const indexedPart of indexedParts){
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
                path_str_arr
            });

        }

        return { flexSearch };
    },
    { max: 1 },
);