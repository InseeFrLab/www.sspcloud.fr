import type { Language } from "./Language";

export type LocalizedString = string | { [language in Language]: string };

export function localizedStringToString(
    localizedString: LocalizedString,
    language: Language,
): string {
    return typeof localizedString === "string"
        ? localizedString
        : localizedString[language];
}
