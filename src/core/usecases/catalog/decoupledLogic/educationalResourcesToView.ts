import type { EducationalResources_selected, View } from "./types";
import type { EducationalResource, Language } from "core/ports/CatalogData";
import { getMatchPositions } from "core/tools/highlightMatches";
import { createResolveLocalizedString } from "i18nifty/LocalizedString";

export function educationalResourcesToView(params: {
    selected: EducationalResources_selected;
    language: Language;
    search: string;
}): View {
    const { selected, language, search } = params;

    const { resolveLocalizedString } = createResolveLocalizedString<Language>({
        currentLanguage: language,
        fallbackLanguage: "en",
        labelWhenMismatchingLanguage: false,
    });

    const { path_names, collection, parts } = selected;

    return {
        header:
            collection === undefined
                ? undefined
                : {
                      path: path_names.map(resolveLocalizedString),
                      abstract: resolveLocalizedString(collection.abstract),
                      imageUrl: collection.imageUrl,
                      authors: educationalResourceToViewItem_collection({
                          educationalResource: collection,
                          language,
                          search,
                      }).authors,
                  },
        items: parts.map(part =>
            educationalResourceToViewItem({
                educationalResource: part,
                language,
                search,
            }),
        ),
    };
}

function educationalResourceToViewItem(params: {
    educationalResource: EducationalResource;
    language: Language;
    search: string;
}): View.Item {
    const { educationalResource, language, search } = params;

    return "parts" in educationalResource
        ? educationalResourceToViewItem_collection({
              educationalResource,
              language,
              search,
          })
        : educationalResourceToViewItem_resource({
              educationalResource,
              language,
              search,
          });
}

function educationalResourceToViewItem_resource(params: {
    educationalResource: EducationalResource.Resource;
    language: Language;
    search: string;
}): View.Item.Resource {
    return null as any;
}

function educationalResourceToViewItem_collection(params: {
    educationalResource: EducationalResource.Collection;

    language: Language;
    search: string;
}): View.Item.Collection {
    return null as any;
}
