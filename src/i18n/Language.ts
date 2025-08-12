import type { LocalizedString as LocalizedString_base } from "i18nifty";

//List the languages you with to support
export const languages = ["en", "fr"] as const;

//If the user's browser language doesn't match any
//of the languages above specify the language to fallback to:
export const fallbackLanguage = "en";

export type Language = (typeof languages)[number];

export type LocalizedString = LocalizedString_base<Language>;
