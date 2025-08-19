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
        export type Common = {
            name: HighlightableString;
            abstract: HighlightableString;
            imageUrl: string | undefined;
            authors: HighlightableString[];
            lastUpdatedTime: number | undefined;
            tags: HighlightableString[];
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
                export type Deployment = Deployment.Single | Deployment.Multiple;

                export namespace Deployment {
                    export type Common = {
                        type: "deployment";
                    };

                    export type Single = Common & {
                        isMultiple: false;
                        url: string;
                    };

                    export type Multiple = Common & {
                        isMultiple: true;
                        urls: {
                            ideName: string;
                            url: string;
                        }[];
                    };
                }
            }
        }

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
