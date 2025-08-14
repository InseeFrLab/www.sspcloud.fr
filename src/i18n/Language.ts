import type { LocalizedString as LocalizedString_base } from "i18nifty";
import type { Language } from "../../trainings_and_tutorials/__index";
import { assert, type Equals } from "tsafe/assert";

export type { Language };

//List the languages you with to support
export const languages = ["en", "fr"] as const;

assert<Equals<(typeof languages)[number], Language>>;

//If the user's browser language doesn't match any
//of the languages above specify the language to fallback to:
export const fallbackLanguage = "en";

export type LocalizedString = LocalizedString_base<Language>;
