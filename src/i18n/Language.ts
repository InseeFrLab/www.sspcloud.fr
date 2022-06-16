import type { LocalizedString as GenericLocalizedString } from "i18nifty";

//List the languages you with to support
export const languages = ["en", "fr"] as const;

//If the user's browser language doesn't match any
//of the languages above specify the language to fallback to:

export type Language = typeof languages[number];

export const fallbackLanguage: Language = "fr";

export type LocalizedString = GenericLocalizedString<Language>;
