import { useEffect, lazy, Suspense, type ReactNode } from "react";
import { useCoreState } from "core";
import { assert } from "tsafe";
import { createGeLinkPropsMarkdown } from "ui/shared/getLinkPropsMarkdown";

const Markdown = lazy(() =>
    import("onyxia-ui/Markdown").then(({ Markdown }) => ({ default: Markdown })),
);

export function AppMarkdown(props: { className?: string; fallback: ReactNode }) {
    const { className, fallback } = props;

    const { body } = useCoreState("catalog", "main").view;
    assert(body.type === "file");
    const { markdownText } = body;

    useEffect(() => {
        if (markdownText === undefined) {
            import("onyxia-ui/Markdown");
        }
    }, []);

    if (markdownText === undefined) {
        return fallback;
    }

    return (
        <Suspense fallback={fallback}>
            <Markdown
                lang={markdownText.langAttrValue}
                className={className}
                getLinkProps={createGeLinkPropsMarkdown({ urlDirPath: undefined })}
            >
                {markdownText.text}
            </Markdown>
        </Suspense>
    );
}
