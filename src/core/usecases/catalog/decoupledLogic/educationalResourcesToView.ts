import type {
    EducationalResources_selected,
    View,
    HighlightableString,
    TextMaybeNotInAmbientLanguage,
} from "./types";
import type { EducationalResource, Language } from "core/ports/CatalogData";
import { getMatchPositions } from "core/tools/highlightMatches";
import {
    createResolveLocalizedString,
    type LocalizedString as LocalizedString_base,
} from "i18nifty/LocalizedString";
import { removeDuplicates } from "evt/tools/reducers/removeDuplicates";
import { id } from "tsafe/id";
import { getLocalizedStringId } from "./getLocalizedStringId";
import { assert, type Equals } from "tsafe/assert";
import { objectKeys } from "tsafe/objectKeys";

type LocalizedString = LocalizedString_base<Language>;

export function educationalResourcesToView(params: {
    selected: EducationalResources_selected;
    language: Language;
    languageAssumedIfNoTranslation: Language;
    search: string;
    tagLabelByTagId: Record<EducationalResource.Tag, LocalizedString>;
    selectedTags: EducationalResource.Tag[];
}): View {
    const {
        selected,
        language,
        languageAssumedIfNoTranslation,
        search,
        tagLabelByTagId,
        selectedTags: selectedTags_arr
    } = params;

    const selectedTags = new Set(selectedTags_arr);

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
                      path: path_names.map(resolveLocalizedStringDetailed),
                      abstract: resolveLocalizedStringDetailed(collection.abstract),
                      imageUrl: collection.imageUrl,
                      authors: educationalResourceToViewItem({
                          educationalResource: collection,
                          resolveLocalizedStringDetailed,
                          search,
                          tagLabelByTagId,
                          selectedTags
                      }).authors.map(({ value }) => value),
                  },
        items: parts.map(part =>
            educationalResourceToViewItem({
                educationalResource: part,
                resolveLocalizedStringDetailed,
                search,
                tagLabelByTagId,
                selectedTags
            }),
        ),
    };
}

type ResolveLocalizedStringDetailed = (localizedString: LocalizedString) => TextMaybeNotInAmbientLanguage;

function educationalResourceToViewItem(params: {
    educationalResource: EducationalResource;
    resolveLocalizedStringDetailed: ResolveLocalizedStringDetailed;
    search: string;
    tagLabelByTagId: Record<EducationalResource.Tag, LocalizedString>;
    selectedTags: Set<EducationalResource.Tag>;
}): View.Item {
    const {
        educationalResource: er,
        resolveLocalizedStringDetailed,
        search,
        tagLabelByTagId,
        selectedTags
    } = params;

    const toHighlightableString = (
        localizedString: LocalizedString,
    ): HighlightableString => {
        const value = resolveLocalizedStringDetailed(localizedString);
        return {
            value,
            highlightedIndexes: getMatchPositions({ text: value.str, search }),
        };
    };

    const common: View.Item.Common = {
        name: toHighlightableString(er.name),
        abstract: toHighlightableString(er.abstract),
        imageUrl: er.imageUrl,
        authors: collectAuthors_noDuplicateRemoval(er)
            .map(toHighlightableString)
            .reduce(
                ...removeDuplicates<HighlightableString>(
                    (a, b) => a.value.str === b.value.str,
                ),
            ),
        lastUpdatedTime: computeLastUpdatedTime(er),
        tags: collectTags(er).map(tag => ({
            id: tag,
            label: toHighlightableString(tagLabelByTagId[tag]),
            isSelected: selectedTags.has(tag),
        })),
        timeRequiredInMinutes: computeTimeRequestedInMinutes(er),
    };

    return "parts" in er
        ? id<View.Item.Collection>({
              ...common,
              isCollection: true,
              pathSegment: getLocalizedStringId(er.name),
          })
        : id<View.Item.Resource>({
              ...common,
              isCollection: false,
              articleUrl: er.articleUrl === undefined ? undefined : resolveLocalizedStringDetailed(er.articleUrl).str,
              deploymentUrl: (()=>{

                const { deploymentUrl } = er;

                if( deploymentUrl === undefined ){
                    return undefined;
                }

                if( getIsLocalizedString(deploymentUrl) ){
                    return resolveLocalizedStringDetailed(deploymentUrl).str;
                }

                return objectKeys(deploymentUrl).map(ideName => ({
                    ideName,
                    url: resolveLocalizedStringDetailed(deploymentUrl[ideName]).str
                }));

              })()
          });
}

function collectAuthors_noDuplicateRemoval(er: EducationalResource): LocalizedString[] {
    if (!("parts" in er)) {
        return er.authors;
    }

    return er.parts.map(collectAuthors_noDuplicateRemoval).flat();
}

function collectTags(er: EducationalResource): EducationalResource.Tag[] {
    if (!("parts" in er)) {
        return er.tags;
    }

    return er.parts
        .map(collectTags)
        .flat()
        .reduce(...removeDuplicates<EducationalResource.Tag>());
}

function computeLastUpdatedTime(er: EducationalResource): number | undefined {
    if (!("parts" in er)) {
        return er.lastUpdated === undefined
            ? undefined
            : new Date(er.lastUpdated).getTime();
    }

    return (
        er.parts
            .map(computeLastUpdatedTime)
            .map(time => (time === undefined ? 0 : time))
            .reduce((prev, curr) => (curr > prev ? curr : prev), 0) || undefined
    );
}

function computeTimeRequestedInMinutes(er: EducationalResource): number | undefined {
    if (!("parts" in er)) {
        return er.timeRequiredInMinutes === undefined
            ? undefined
            : er.timeRequiredInMinutes;
    }

    return (
        er.parts
            .map(computeTimeRequestedInMinutes)
            .map(time => (time === undefined ? 0 : time))
            .reduce((prev, curr) => curr + prev, 0) || undefined
    );
}

export function getIsLocalizedString(arg: any): arg is LocalizedString {
    if (typeof arg === "string") {
        return true;
    }

    if (!(arg instanceof Object)) {
        return false;
    }

    for (const language of ["en", "fr"] as const) {
        assert<Equals<typeof language, Language>>;

        const value = arg[language];

        if (value === undefined) {
            continue;
        }

        if (typeof value !== "string") {
            return false;
        }

        return true;
    }

    return false;
}
