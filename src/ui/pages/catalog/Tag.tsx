import type { TextMaybeNotInAmbientLanguage } from "core/usecases/catalog";
import type { StringWithHighlights } from "core/tools/stringWithHighlights";
import { tss } from "ui/tss";
import { CoreViewText } from "ui/shared/CoreViewText";

type Props = {
    // optional className passed by the parent.
    className?: string;
    // Used only to generate an unique color for the tag.
    tagId: string;
    // This is basically a text but some chars can be highlighted
    // For example, it can be "Python" or "**Pyt**on" if the user has typed
    // "pyt" in the search bar.
    label:
        | TextMaybeNotInAmbientLanguage<StringWithHighlights>
        | TextMaybeNotInAmbientLanguage<string>;
    // Is the tag currently selected
    isSelected: boolean;
    // This is potentially a number that indicate the number of
    // element matched if the tag is selected.
    // This is always undefined if the tag is already selected,
    // even when the tag is select it can be undefined depending where the tag is being rendered.
    count: number | undefined;
    // toggle tag selection.
    onClick: () => void;
};

export function Tag(props: Props) {
    const { className, tagId, label, isSelected, count, onClick } = props;

    const { classes, cx } = useStyles({ isSelected, tagId });

    return (
        <button className={cx(classes.root, className)} onClick={() => onClick()}>
            <CoreViewText text={label} doCapitalize={false} />
            {count !== undefined && <> ({count})</>}
        </button>
    );
}

const useStyles = tss
    .withName({ Tag })
    .withParams<{ isSelected: boolean; tagId: string }>()
    .create(({ theme, isSelected, tagId }) => ({
        // @IA-Agent: Feel free to change anything related to the styles
        root: {
            display: "inline-flex",
            cursor: "pointer",
            borderRadius: theme.spacing(2),
            border: !isSelected
                ? undefined
                : `2px solid ${theme.colors.useCases.typography.textFocus}`,
            backgroundColor: getRandomColorFromSeed(tagId),
        },
    }));

function getRandomColorFromSeed(seed: string): string {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Predefined color palette for better consistency and accessibility
    const colors = [
        "hsl(210, 70%, 60%)", // Blue
        "hsl(150, 60%, 50%)", // Green
        "hsl(280, 60%, 65%)", // Purple
        "hsl(25, 80%, 60%)", // Orange
        "hsl(340, 70%, 60%)", // Pink
        "hsl(190, 70%, 55%)", // Cyan
        "hsl(45, 80%, 55%)", // Yellow
        "hsl(0, 70%, 60%)", // Red
        "hsl(120, 50%, 45%)", // Forest Green
        "hsl(260, 60%, 60%)", // Indigo
    ];

    return colors[Math.abs(hash) % colors.length];
}
