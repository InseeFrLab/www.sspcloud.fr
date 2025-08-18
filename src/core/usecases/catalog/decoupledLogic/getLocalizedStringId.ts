import type { LocalizedString } from "i18nifty/LocalizedString";
import { Language } from "core/ports/CatalogData";
import { assert } from "tsafe/assert";
import { objectKeys } from "tsafe/objectKeys";

export function getLocalizedStringId(localizedString: LocalizedString<Language>): string {
    if (typeof localizedString === "string") {
        return localizedString;
    }

    {
        const candidate = localizedString.en;
        if (candidate !== undefined) {
            return candidate;
        }
    }

    {
        const key = objectKeys(localizedString)[0];
        assert(key !== undefined);
        const candidate = localizedString[key];
        assert(candidate !== undefined);
        return candidate;
    }
}
