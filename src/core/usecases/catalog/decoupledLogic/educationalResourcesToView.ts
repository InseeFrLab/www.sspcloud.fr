import type { EducationalResources_selected, View } from "./types";
import type { EducationalResource, Language } from "core/ports/CatalogData";
import { getMatchPositions } from "core/tools/highlightMatches";
import { createResolveLocalizedString, LocalizedString } from "i18nifty/LocalizedString";

export function educationalResourcesToView(params: {
    selected: EducationalResources_selected;
    language: Language;
    languageAssumedIfNoTranslation: Language;
    search: string;
}): View {
    const { selected, language, languageAssumedIfNoTranslation, search } = params;

    const { resolveLocalizedStringDetailed } = createResolveLocalizedString({
        currentLanguage: language,
        fallbackLanguage: "en",
        labelWhenMismatchingLanguage: {
            ifStringAssumeLanguage: languageAssumedIfNoTranslation,
        },
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
                          resolveLocalizedStringDetailed,
                          search,
                      }).authors,
                  },
        items: parts.map(part =>
            educationalResourceToViewItem({
                educationalResource: part,
                resolveLocalizedStringDetailed,
                search,
            }),
        ),
    };
}

type ResolveLocalizedStringDetailed = (localizedString: LocalizedString<Language>) => {
    langAttrValue: Language | undefined;
    str: string;
};

function educationalResourceToViewItem(params: {
    educationalResource: EducationalResource;
    resolveLocalizedStringDetailed: ResolveLocalizedStringDetailed;
    search: string;
}): View.Item {
    const { educationalResource, resolveLocalizedStringDetailed, search } = params;

    return "parts" in educationalResource
        ? educationalResourceToViewItem_collection({
              educationalResource,
              resolveLocalizedStringDetailed,
              search,
          })
        : educationalResourceToViewItem_resource({
              educationalResource,
              resolveLocalizedStringDetailed,
              search,
          });
}

function educationalResourceToViewItem_resource(params: {
    educationalResource: EducationalResource.Resource;
    resolveLocalizedStringDetailed: ResolveLocalizedStringDetailed;
    search: string;
}): View.Item.Resource {
    return null as any;
}

function educationalResourceToViewItem_collection(params: {
    educationalResource: EducationalResource.Collection;
    resolveLocalizedStringDetailed: ResolveLocalizedStringDetailed;
    search: string;
}): View.Item.Collection {
    return null as any;
}
