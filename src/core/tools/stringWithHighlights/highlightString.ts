import { replaceAll } from "core/tools/String.prototype.replaceAll";

export type StringWithHighlights = {
    charArray: string[];
    highlightedIndexes: number[];
};

export function highlightString(params: {
    str: string;
    search: string;
}): StringWithHighlights {
    const { str, search } = params;

    return {
        charArray: str.normalize().split(""),
        highlightedIndexes: getMatchPositions({ text: str, search }),
    };
}

function getMatchPositions(params: { text: string; search: string }): number[] {
    const { text, search } = params;

    if (search.length < 2) {
        return [];
    }

    const escapedSearch = search.trim().replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
    const regexp = RegExp("(" + replaceAll(escapedSearch, " ", "|") + ")", "ig");
    let result;
    const matchPositions: number[] = [];

    if (text) {
        while ((result = regexp.exec(text)) !== null) {
            for (let i = result.index; i < regexp.lastIndex; i++) {
                matchPositions.push(i);
            }
        }
    }

    return matchPositions;
}
