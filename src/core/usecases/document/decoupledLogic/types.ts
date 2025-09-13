import type { Language } from "core/ports/CatalogData";

export type TextMaybeNotInAmbientLanguage<Text> = {
    text: Text;
    langAttrValue: Language | undefined;
};

export type View = {
    header:
        | {
              path: TextMaybeNotInAmbientLanguage<string>[];
              name: TextMaybeNotInAmbientLanguage<string>;
              imageUrl: string | undefined;
              authors: TextMaybeNotInAmbientLanguage<string>[];
          }
        | undefined;
    markdownText: TextMaybeNotInAmbientLanguage<string> | undefined;
};
