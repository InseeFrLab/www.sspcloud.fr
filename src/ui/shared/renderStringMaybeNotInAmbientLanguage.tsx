import type { ReactNode } from "react";
import type { TextMaybeNotInAmbientLanguage } from "core/usecases/catalog";

export function renderStringMaybeNotInAmbientLanguage<Text>(params: {
    textMaybeNotInAmbientLanguage: TextMaybeNotInAmbientLanguage<Text>;
    renderText: (text: Text) => ReactNode;
}): ReactNode {
    const { textMaybeNotInAmbientLanguage, renderText } = params;

    if (typeof textMaybeNotInAmbientLanguage === "string") {
        return renderText(textMaybeNotInAmbientLanguage);
    }

    const { text, langAttrValue } = textMaybeNotInAmbientLanguage;

    return <span lang={langAttrValue}>{renderText(text)}</span>;
}
