import type {
    EducationalResource,
    LocalizedString,
    Language,
} from "core/ports/CatalogData";

export type LabeledString = {
    str: string;
    langAttrValue: Language | undefined;
};

export type HighlightableString = {
    value: LabeledString;
    highlightedIndexes: number[] | undefined;
};

export type View = {
    header:
        | {
              path: LabeledString[];
              abstract: LabeledString;
              imageUrl: string | undefined;
              authors: LabeledString[];
          }
        | undefined;
    items: View.Item[];
};

export namespace View {
    export type Item = Item.Resource | Item.Collection;

    export namespace Item {
        type Common = {
            name: HighlightableString;
            abstract: HighlightableString;
            imageUrl: string | undefined;
            authors: string[];
            lastUpdatedTime: number | undefined;
            tags: string[];
            timeRequiredInMinutes: number | undefined;
        };

        export type Resource = Common & {
            isCollection: false;
            target: Resource.Target;
        };

        export namespace Resource {
            export type Target = Target.Article | Target.Deployment;

            export namespace Target {
                export type Article = {
                    type: "article";
                    url: string;
                };
                export type Deployment = {
                    type: "deployment";
                    url: string | Record<string /* ide name */, string>;
                };
            }
        }

        export type Collection = Common & {
            isDirectory: true;
            pathSegment: number;
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
        label: LabeledString;
    };

    export type NotSelected = Common & {
        isSelected: false;
        viewItemCountIfSelected: number;
    };

    export type Selected = Common & {
        isSelected: true;
    };

}