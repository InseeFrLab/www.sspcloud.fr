import { id } from "tsafe/id";
import type { StringWithHighlights } from "./highlightString";
import { capitalize } from "tsafe/capitalize";

export function renderStringWithHighlights(params: {
    stringWithHighlights: StringWithHighlights;
    doCapitalize: boolean;
    highlightedCharClassName: string;
}): JSX.Element | string {
    const {
        stringWithHighlights: { charArray, highlightedIndexes },
        doCapitalize,
        highlightedCharClassName,
    } = params;

    const str = charArray.join("");

    if (highlightedIndexes.length === 0) {
        return doCapitalize ? capitalize(str) : str;
    }

    return (
        <span aria-label={str}>
            {charArray
                .map(
                    !doCapitalize
                        ? id
                        : (char, i) => (i === 0 ? char.toUpperCase() : char),
                )
                .map((char, i) =>
                    highlightedIndexes.includes(i) ? (
                        <span key={i} className={highlightedCharClassName}>
                            {char}
                        </span>
                    ) : (
                        char
                    ),
                )}
        </span>
    );
}
