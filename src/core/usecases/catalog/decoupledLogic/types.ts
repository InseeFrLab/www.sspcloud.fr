import type {
    EducationalResource,
    LocalizedString,
    Language,
} from "core/ports/CatalogData";
import type { StringWithHighlights } from "core/tools/stringWithHighlights";

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
    items: View.Item[];
};

export namespace View {
    export type Item = Item.Resource | Item.Collection;

    export namespace Item {
        export type Common = {
            name: TextMaybeNotInAmbientLanguage<StringWithHighlights>;
            abstract: TextMaybeNotInAmbientLanguage<string>;
            imageUrl: string | undefined;
            authors: TextMaybeNotInAmbientLanguage<StringWithHighlights>[];
            lastUpdatedTime: number | undefined;
            tags: {
                id: EducationalResource.Tag;
                label: TextMaybeNotInAmbientLanguage<StringWithHighlights>;
                isSelected: boolean;
            }[];
            timeRequired: number | undefined;
            availableInLanguages: Language[];
        };

        export type Resource = Common & {
            isCollection: false;
            articleUrl: string | undefined;
            deploymentUrl: string | Record<string /*ideName*/, string> | undefined;
        };

        export type Collection = Common & {
            isCollection: true;
            // NOTE: The name of the collection in english
            pathSegment: string;
        };
    }
}

export type EducationalResources_selected = {
    path_names: LocalizedString[];
    collection: EducationalResource.Collection | undefined;
    parts: EducationalResource[];
};

export type TagState = TagState.NotSelected | TagState.Selected;

export namespace TagState {
    export type Common = {
        id: EducationalResource.Tag;
        label: TextMaybeNotInAmbientLanguage<string>;
    };

    export type NotSelected = Common & {
        isSelected: false;
        viewItemCountIfSelected: number;
    };

    export type Selected = Common & {
        isSelected: true;
    };
}
