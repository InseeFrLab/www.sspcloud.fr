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

export function areSameLocalizedString(a: LocalizedString, b: LocalizedString) {
    const toObj = (locStr: LocalizedString): Exclude<LocalizedString, string> =>
        typeof locStr === "string" ? { "en": locStr, "fr": locStr } : locStr;

    const aObj = toObj(a);
    const bObj = toObj(b);

    return aObj.en === bObj.en || aObj.fr === bObj.fr;
}
