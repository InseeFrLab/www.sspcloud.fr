import type { TextMaybeNotInAmbientLanguage } from "core/usecases/catalog";
import type { StringWithHighlights } from "core/tools/stringWithHighlights";
import { tss } from "ui/tss";
import { CoreViewText } from "ui/shared/CoreViewText";
import { Text } from "onyxia-ui/Text";

type Props = {
    className?: string;
    tagId: string;
    label:
        | TextMaybeNotInAmbientLanguage<StringWithHighlights>
        | TextMaybeNotInAmbientLanguage<string>;

    longerLabelLength: number;
    isSelected: boolean;
    count: number | undefined;

    onClick: () => void;
};

export function Tag(props: Props) {
    const { className, tagId, label, longerLabelLength, isSelected, count, onClick } =
        props;

    const { classes, cx, css, theme } = useStyles({ isSelected, tagId });

    return (
        <div className={cx(classes.root, className)} onClick={() => onClick()}>
            <div
                className={css({
                    display: "inline-flex",
                })}
            >
                <Text
                    typo="body 1"
                    fixedSize_enabled
                    fixedSize_content={new Array(longerLabelLength + 2)
                        .fill("_")
                        .join("")}
                    className={classes.text}
                >
                    <span>
                        <span
                            className={css({
                                fontWeight: "bold",
                            })}
                        >
                            <CoreViewText text={label} doCapitalize={false} />
                        </span>
                        &nbsp;
                        {count !== undefined && (
                            <span
                                className={css({
                                    color: theme.colors.useCases.typography.textSecondary,
                                })}
                            >
                                {" "}
                                {count}
                            </span>
                        )}
                    </span>
                </Text>
            </div>
        </div>
    );
}

const useStyles = tss
    .withName({ Tag })
    .withParams<{ tagId: string; isSelected: boolean }>()
    .create(({ theme, isSelected }) => ({
        root: {
            display: "inline",
            cursor: "pointer",
            borderRadius: theme.typography.rootFontSizePx,
            border: `1px solid ${isSelected ? theme.colors.useCases.typography.textFocus : theme.colors.useCases.typography.textTertiary}`,
            ...theme.spacing.rightLeft("padding", 3),
            ...theme.spacing.topBottom("padding", "1px"),
            "&:hover": {
                backgroundColor: theme.colors.useCases.surfaces.surface1,
                boxShadow: theme.shadows[4],
            },
        },
        text: {
            color: isSelected ? theme.colors.useCases.typography.textFocus : undefined,
            "&:active": {
                color: theme.colors.useCases.typography.textFocus,
            },
        },
    }));
