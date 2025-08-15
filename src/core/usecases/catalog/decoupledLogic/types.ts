
import type { EducationalResource, LocalizedString } from "core/ports/CatalogData";

export type View = {
    header:
        | {
              path: string[];
              abstract: string;
              imageUrl: string | undefined;
              authors: string[];
          }
        | undefined;
    items: View.Item[];
};

export namespace View {
    export type HighlightableString = {
        value: string;
        highlightedIndexes: number[] | undefined;
    };

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