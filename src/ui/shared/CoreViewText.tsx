import type { TextMaybeNotInAmbientLanguage } from "core/usecases/catalog";
import {
    type StringWithHighlights,
    renderStringWithHighlights,
} from "core/tools/stringWithHighlights";
import { renderStringMaybeNotInAmbientLanguage } from "ui/shared/renderStringMaybeNotInAmbientLanguage";
import { tss } from "ui/tss";
import { id } from "tsafe/id";
import { capitalize } from "tsafe/capitalize";

type Props = {
    text:
        | TextMaybeNotInAmbientLanguage<StringWithHighlights>
        | TextMaybeNotInAmbientLanguage<string>;
    doCapitalize: boolean;
};

export function CoreViewText(props: Props) {
    const { text, doCapitalize } = props;

    const { classes } = useStyles();

    return renderStringMaybeNotInAmbientLanguage({
        textMaybeNotInAmbientLanguage:
            id<TextMaybeNotInAmbientLanguage<string | StringWithHighlights>>(text),
        renderText: str =>
            typeof str === "string"
                ? doCapitalize
                    ? capitalize(str)
                    : str
                : renderStringWithHighlights({
                      stringWithHighlights: str,
                      doCapitalize,
                      highlightedCharClassName: classes.highlightedCharClassName,
                  }),
    });
}

const useStyles = tss.withName({ CoreViewText }).create(({ theme }) => ({
    highlightedCharClassName: {
        color: theme.colors.useCases.typography.textFocus,
    },
}));
