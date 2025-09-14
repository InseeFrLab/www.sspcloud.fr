import type { Language } from "core/ports/CatalogData";
import type { View as View_catalog } from "core/usecases/catalog/decoupledLogic/types";

export type TextMaybeNotInAmbientLanguage<Text> = {
    text: Text;
    langAttrValue: Language | undefined;
};

export type View = {
    header: View_catalog.Header | undefined;
    markdownText: TextMaybeNotInAmbientLanguage<string> | undefined;
    editOnGitHubUrl: string;
    relativeNavigation:
        | Record<
              "previous" | "next" | "back",
              | {
                    path: string[];
                    name: TextMaybeNotInAmbientLanguage<string>;
                }
              | undefined
          >
        | undefined;
};
