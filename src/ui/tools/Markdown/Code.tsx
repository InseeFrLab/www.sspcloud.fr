import type { ExtraProps } from "react-markdown";
import { useStyles } from "ui/tss";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";
import { coldarkDark, coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Code(
    props: React.ClassAttributes<HTMLElement> &
        React.HTMLAttributes<HTMLElement> &
        ExtraProps,
) {
    const { theme, css, cx } = useStyles();

    const { children, className, node, ...rest } = props;

    const language = (() => {
        const match = /language-(\w+)/.exec(className || "");

        return match === null ? undefined : match[1];
    })();

    return (
        //@ts-expect-error: As documented
        <SyntaxHighlighter
            {...rest}
            className={cx(
                css({
                    borderRadius: theme.spacing(2),
                    backgroundColor: `${theme.colors.useCases.surfaces.surface2} !important`,
                    padding: language === undefined ? `3px !important` : undefined,
                }),
                className,
            )}
            PreTag={language === undefined ? "span" : "div"}
            children={String(children).replace(/\n$/, "")}
            language={language}
            style={theme.isDarkModeEnabled ? coldarkDark : coldarkCold}
        />
    );
}
