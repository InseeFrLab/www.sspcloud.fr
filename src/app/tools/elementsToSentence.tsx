import type { ReactNode } from "react";
import type { Language } from "i18n"

export function elementsToSentence(params: {
    elements: ArrayLike<ReactNode>;
    lang: Language;
}): JSX.Element {
    const { elements, lang } = params;

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
            {Array.from(elements).map((element, i) => (
                <span key={i}>
                    {element}
                    {i === elements.length - 1
                        ? ""
                        : i === elements.length - 2
                        ? ` ${separatorWord} `
                        : ", "}
                </span>
            ))}
        </>
    );
}
