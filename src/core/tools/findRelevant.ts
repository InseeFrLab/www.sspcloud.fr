import memoize from "memoizee";

export type SearchableEntry = {
    searchableTextId: string;
    searchableText: string;
};

export function createFindRelevant() {
    const createFuse = memoize(
        async (entries: SearchableEntry[]) => {
            const Fuse = (await import("fuse.js")).default;

            return new Fuse(entries, {
                // We index the single field you care about
                keys: ["searchableText"],

                // Good "set-and-forget" defaults for general UX:
                includeScore: true, // so we can naturally sort by relevance
                threshold: 0.3, // 0.0 = exact, 1.0 = everything; 0.2-0.4 is a sweet spot
                ignoreLocation: true, // doesn't penalize where the match occurs in the string
                distance: 100, // how far the match can be from the expected location
                minMatchCharLength: 2, // avoids very short (noisy) matches
                useExtendedSearch: false, // simple fuzzy search
            });
        },
        { max: 1, promise: true },
    );

    /**
     * Zero-config fuzzy search with sane defaults:
     * - typo tolerant
     * - case-insensitive
     * - ranks by relevance
     * - filters out weak matches
     */
    async function findRelevant(params: {
        entries: SearchableEntry[];
        searchedText: string;
    }): Promise<{ searchableTextId: string }[]> {
        const { entries, searchedText } = params;

        if (!searchedText?.trim()) {
            return [];
        }

        const fuse = await createFuse(entries);

        const results = fuse.search(searchedText);

        // Map to the requested output shape, already sorted by relevance
        return results.map(({ item }) => ({ searchableTextId: item.searchableTextId }));
    }

    return { findRelevant };
}

// Example:
/*
(async () => {
    const entries = [
        { searchableTextId: "1", searchableText: "Hello World" },
        { searchableTextId: "2", searchableText: "Goodbye World" },
        { searchableTextId: "3", searchableText: "Foo bar" },
    ];

    console.log(
        await search({ entries, searchedText: "World" }),
        // => [ { searchableTextId: "1" }, { searchableTextId: "2" } ]
    );
})();
*/
