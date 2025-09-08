import type { ReactNode, JSX } from "react";
import type { Language } from "core/ports/CatalogData";

export function elementsToSentence(params: {
    nodes: ArrayLike<ReactNode>;
    lang: Language;
}): JSX.Element {
    const { nodes, lang } = params;

    const separatorWord = (() => {
        switch (lang) {
            case "en":
                return "and";
            case "fr":
                return "et";
        }
    })();

    return (
        <>
            {Array.from(nodes).map((element, i) => (
                <span key={i}>
                    {element}
                    {i === nodes.length - 1
                        ? ""
                        : i === nodes.length - 2
                          ? ` ${separatorWord} `
                          : ", "}
                </span>
            ))}
        </>
    );
}
