import type {
    EducationalResources_selected,
    View,
    TextMaybeNotInAmbientLanguage,
} from "./types";
import { type StringWithHighlights } from "core/tools/stringWithHighlights";
import { highlightString } from "core/tools/stringWithHighlights/highlightString";
import type { EducationalResource, Language } from "core/ports/CatalogData";
import {
    createResolveLocalizedString,
    type LocalizedString as LocalizedString_base,
} from "i18nifty/LocalizedString";
import { removeDuplicates } from "evt/tools/reducers/removeDuplicates";
import { id } from "tsafe/id";
import { getLocalizedStringId } from "./getLocalizedStringId";
import { assert, type Equals } from "tsafe/assert";
import { objectKeys } from "tsafe/objectKeys";
import { same } from "evt/tools/inDepth/same";

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
        selectedTags: selectedTags_arr,
    } = params;

    const selectedTags = new Set(selectedTags_arr);

    const { resolveLocalizedStringDetailed } = (() => {
        const { resolveLocalizedStringDetailed: base } = createResolveLocalizedString({
            currentLanguage: language,
            fallbackLanguage: "en",
            labelWhenMismatchingLanguage: {
                ifStringAssumeLanguage: languageAssumedIfNoTranslation,
            },
        });

        const resolveLocalizedStringDetailed: ResolveLocalizedStringDetailed =
            localizedString => {
                const { str, langAttrValue } = base(localizedString);

                return {
                    langAttrValue,
                    text: str,
                };
            };

        return { resolveLocalizedStringDetailed };
    })();

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
                          selectedTags,
                          languageAssumedIfNoTranslation,
                      }).authors.map(({ text, langAttrValue }) => ({
                          langAttrValue,
                          text: text.charArray.join(""),
                      })),
                  },
        items: parts.map(part =>
            educationalResourceToViewItem({
                educationalResource: part,
                resolveLocalizedStringDetailed,
                search,
                tagLabelByTagId,
                selectedTags,
                languageAssumedIfNoTranslation,
            }),
        ),
    };
}

type ResolveLocalizedStringDetailed = (
    localizedString: LocalizedString,
) => TextMaybeNotInAmbientLanguage<string>;

function educationalResourceToViewItem(params: {
    educationalResource: EducationalResource;
    resolveLocalizedStringDetailed: ResolveLocalizedStringDetailed;
    search: string;
    tagLabelByTagId: Record<EducationalResource.Tag, LocalizedString>;
    selectedTags: Set<EducationalResource.Tag>;
    languageAssumedIfNoTranslation: Language;
}): View.Item {
    const {
        educationalResource: er,
        resolveLocalizedStringDetailed,
        search,
        tagLabelByTagId,
        selectedTags,
        languageAssumedIfNoTranslation,
    } = params;

    const toHighlightableString = (
        localizedString: LocalizedString,
    ): TextMaybeNotInAmbientLanguage<StringWithHighlights> => {
        const { langAttrValue, text } = resolveLocalizedStringDetailed(localizedString);
        return {
            langAttrValue: langAttrValue,
            text: highlightString({ str: text, search }),
        };
    };

    const common: View.Item.Common = {
        name: toHighlightableString(er.name),
        abstract: resolveLocalizedStringDetailed(er.abstract),
        imageUrl: er.imageUrl,
        authors: collectAuthors_noDuplicateRemoval(er)
            .map(toHighlightableString)
            .reduce(
                ...removeDuplicates<TextMaybeNotInAmbientLanguage<StringWithHighlights>>(
                    (a, b) => same(a.text.charArray, b.text.charArray),
                ),
            ),
        lastUpdatedTime: computeLastUpdatedTime(er),
        tags: collectTags(er).map(tag => ({
            id: tag,
            label: toHighlightableString(tagLabelByTagId[tag]),
            isSelected: selectedTags.has(tag),
        })),
        timeRequired: (() => {
            const inMinute = computeTimeRequestedInMinutes(er);

            return inMinute === undefined ? undefined : inMinute * 60 * 1_000;
        })(),
        availableInLanguages: getAvailableInLanguages({
            educationalResource: er,
            languageAssumedIfNoTranslation,
        }),
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
              articleUrl:
                  er.articleUrl === undefined
                      ? undefined
                      : resolveLocalizedStringDetailed(er.articleUrl).text,
              deploymentUrl: (() => {
                  const { deploymentUrl } = er;

                  if (deploymentUrl === undefined) {
                      return undefined;
                  }

                  if (getIsLocalizedString(deploymentUrl)) {
                      return resolveLocalizedStringDetailed(deploymentUrl).text;
                  }

                  return Object.fromEntries(
                      objectKeys(deploymentUrl).map(ideName => [
                          ideName,
                          resolveLocalizedStringDetailed(deploymentUrl[ideName]).text,
                      ]),
                  );
              })(),
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

function getAvailableInLanguages(params: {
    educationalResource: EducationalResource;
    languageAssumedIfNoTranslation: Language;
}): Language[] {
    const { educationalResource: er, languageAssumedIfNoTranslation } = params;

    if (!("parts" in er)) {
        const toLanguages = (ls: LocalizedString): Language[] => {
            if (typeof ls === "string") {
                return [];
            }
            return objectKeys(ls);
        };

        const candidates = [
            ...(er.articleUrl === undefined ? [] : toLanguages(er.articleUrl)),
            ...(er.deploymentUrl === undefined
                ? []
                : getIsLocalizedString(er.deploymentUrl)
                  ? toLanguages(er.deploymentUrl)
                  : Object.values(er.deploymentUrl).map(toLanguages).flat()),
        ].reduce(...removeDuplicates<Language>());

        if (candidates.length === 0) {
            return [languageAssumedIfNoTranslation];
        }

        return candidates;
    }

    return er.parts
        .map(er =>
            getAvailableInLanguages({
                educationalResource: er,
                languageAssumedIfNoTranslation,
            }),
        )
        .flat()
        .reduce(...removeDuplicates<Language>());
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
