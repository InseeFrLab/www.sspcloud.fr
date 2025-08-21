import { replaceAll } from "core/tools/String.prototype.replaceAll";

export type StringWithHighlights = {
    charArray: string[];
    highlightedIndexes: number[];
};

export function highlightString(params: { str: string; search: string }): StringWithHighlights {
    const { str, search } = params;

    const escapedSearch = search.trim().replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
    const regexp = RegExp("(" + replaceAll(escapedSearch, " ", "|") + ")", "ig");
    let result;
    const matchPositions: number[] = [];

    if (str) {
        while ((result = regexp.exec(str)) !== null) {
            for (let i = result.index; i < regexp.lastIndex; i++) {
                matchPositions.push(i);
            }
        }
    }

    return {
        charArray: str.normalize().split(""),
        highlightedIndexes: matchPositions
    };
}


