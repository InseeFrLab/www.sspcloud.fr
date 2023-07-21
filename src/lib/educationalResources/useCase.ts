import type { LocalizedString, Language } from "i18n";
import type {
    EducationalResourceCategory,
    EducationalResource,
    EducationalResourceDirectory,
    EducationalResourceTag,
} from "./educationalResources";
import { educationalResources } from "./educationalResources";
import { id } from "tsafe/id";
import { objectKeys } from "tsafe/objectKeys";
import { matchEducationalResourceDirectory } from "./matchEducationalResourceDirectory";
import { assert } from "tsafe/assert";
import { removeDuplicates } from "evt/tools/reducers/removeDuplicates";
import { allEquals } from "evt/tools/reducers/allEquals";
import { createResolveLocalizedString } from "i18nifty/LocalizedString";
import { fallbackLanguage } from "i18n";

const { resolveLocalizedString } = createResolveLocalizedString<Language>({
    "currentLanguage": "en",
    fallbackLanguage,
});

export type State =
    | State.GroupedByCategory
    | State.ShowAllInCategory
    | State.NotCategorized;

export declare namespace State {
    type Common = {
        path: LocalizedString[];
        /** Undefined if root */
        directory:
            | {
                  authors: LocalizedString[];
                  imageUrl: string | undefined;
              }
            | undefined;
    };

    export type GroupedByCategory = Common & {
        stateDescription: "grouped by category";
        dataCardsByCategory: Record<
            EducationalResourceCategory,
            | {
                  total: number;
                  dataCards: DataCard[];
              }
            | undefined
        >;
    };

    export type ShowAllInCategory = Common & {
        stateDescription: "show all in category";
        category: EducationalResourceCategory;
        dataCards: DataCard[];
    };

    export type NotCategorized = Common & {
        stateDescription: "not categorized";
        dataCards: DataCard[];
    };
}

export type DataCard = DataCard.File | DataCard.Directory;

export declare namespace DataCard {
    export type Common = {
        name: LocalizedString;
        authors: LocalizedString[];
        abstract: LocalizedString;
        imageUrl: string | undefined;
        timeRequired: number | undefined;
        tags: EducationalResourceTag[];
    };

    export type File = Common & {
        isDirectory: false;
        deploymentUrl?: LocalizedString;
        articleUrl?: LocalizedString;
    };

    export type Directory = Common & {
        isDirectory: true;
    };
}

function directoryToDataCard(directory: EducationalResourceDirectory): {
    dataCard: DataCard.Directory;
    categories: EducationalResourceCategory[];
} {
    const { dataCards: resolvedParts, categories } = directory.parts
        .map(nodeOrDir =>
            matchEducationalResourceDirectory(nodeOrDir)
                ? directoryToDataCard(nodeOrDir)
                : {
                      "dataCard": resourceToDataCard(nodeOrDir),
                      "categories": [nodeOrDir.category],
                  },
        )
        .reduce(
            (out, el) => ({
                "dataCards": [...out.dataCards, el.dataCard],
                "categories": [...out.categories, ...el.categories].reduce(
                    ...removeDuplicates<EducationalResourceCategory>(),
                ),
            }),
            {
                "dataCards": id<DataCard[]>([]),
                "categories": id<EducationalResourceCategory[]>([]),
            },
        );

    const dataCard: DataCard.Directory = {
        "name": directory.name,
        "authors": resolvedParts
            .map(({ authors }) => authors)
            .reduce((prev, curr) => [...prev, ...curr], [])
            .reduce((out, author) => {
                //We sort by author with the most course a his name.

                const wrap = out.find(wrap =>
                    [wrap.author, author]
                        .map(author => resolveLocalizedString(author).toLowerCase())
                        .reduce(...allEquals()),
                );

                if (wrap !== undefined) {
                    wrap.count++;
                } else {
                    out.push({ author, "count": 1 });
                }

                return out;
            }, id<{ author: LocalizedString; count: number }[]>([]))
            .sort((a, b) => b.count - a.count)
            .map(({ author }) => author),
        "abstract": directory.abstract,
        "imageUrl":
            resolvedParts.find(({ imageUrl }) => imageUrl !== undefined)?.imageUrl ??
            undefined,
        "timeRequired":
            resolvedParts
                .map(({ timeRequired }) => timeRequired ?? 0)
                .reduce((prev, curr) => prev + curr, 0) || undefined,
        "isDirectory": true,
        "tags": resolvedParts
            .map(({ tags }) => tags)
            .reduce((out, el) => [...out, ...el], [])
            .reduce(...removeDuplicates<EducationalResourceTag>()),
    };

    return { dataCard, categories };
}

function resourceToDataCard(educationalResource: EducationalResource): DataCard.File {
    const {
        name,
        authors,
        abstract,
        imageUrl,
        timeRequired,
        deploymentUrl,
        articleUrl,
        tags,
    } = educationalResource;

    return {
        name,
        authors,
        abstract,
        imageUrl,
        timeRequired,
        "isDirectory": false,
        deploymentUrl,
        articleUrl,
        tags,
    };
}

export type RouteParams = {
    path: string[];
    category?: EducationalResourceCategory;
    search: string;
};

const { resolvePath } = (() => {
    function resolvePathRec(params: {
        path: string[];
        reLocalizedPath: LocalizedString[];
        parts: (EducationalResource | EducationalResourceDirectory)[];
        parentDirectory: State["directory"];
    }): {
        parts: (EducationalResource | EducationalResourceDirectory)[];
        directory: State["directory"];
        reLocalizedPath: LocalizedString[];
    } {
        const { path, parts, parentDirectory, reLocalizedPath } = params;

        if (path.length === 0) {
            return {
                parts,
                "directory": parentDirectory,
                reLocalizedPath,
            };
        }

        const [next, ...rest] = path;

        const directory = parts.find(({ name }) => resolveLocalizedString(name) === next);

        assert(matchEducationalResourceDirectory(directory));

        return resolvePathRec({
            "parentDirectory": directoryToDataCard(directory).dataCard,
            "parts": directory.parts,
            "path": rest,
            "reLocalizedPath": [...reLocalizedPath, directory.name],
        });
    }

    function resolvePath(params: { path: string[] }) {
        const { path } = params;

        return resolvePathRec({
            path,
            "parentDirectory": undefined,
            "parts": educationalResources,
            "reLocalizedPath": [],
        });
    }

    return { resolvePath };
})();

export function getState(params: { routeParams: RouteParams }): State {
    const { routeParams } = params;

    const { path, category, search } = routeParams;

    const { directory, parts, reLocalizedPath } = resolvePath({ path });

    const dataCardsByCategory: Record<EducationalResourceCategory, DataCard[]> = {
        "discover the datalab": [],
        "training courses with R": [],
        "training courses with python": [],
        "training courses in data science": [],
        "best practices": [],
    };

    parts
        .filter(educationalResourceOrDirectory =>
            JSON.stringify(educationalResourceOrDirectory)
                .toLowerCase()
                .includes(search.toLowerCase()),
        )
        .forEach(educationalResourceOrDirectory => {
            if (matchEducationalResourceDirectory(educationalResourceOrDirectory)) {
                const { dataCard, categories } = directoryToDataCard(
                    educationalResourceOrDirectory,
                );

                categories.forEach(category =>
                    dataCardsByCategory[category].push(dataCard),
                );
            } else {
                dataCardsByCategory[educationalResourceOrDirectory.category].push(
                    resourceToDataCard(educationalResourceOrDirectory),
                );
            }
        });

    if (category !== undefined) {
        return id<State.ShowAllInCategory>({
            "stateDescription": "show all in category",
            "path": reLocalizedPath,
            category,
            directory,
            "dataCards": dataCardsByCategory[category],
        });
    }

    if (
        search !== "" ||
        objectKeys(dataCardsByCategory).filter(
            category => dataCardsByCategory[category].length > 0,
        ).length <= 1
    ) {
        return id<State.NotCategorized>({
            "stateDescription": "not categorized",
            "path": reLocalizedPath,
            directory,
            "dataCards": objectKeys(dataCardsByCategory)
                .map(category => dataCardsByCategory[category])
                .reduce((prev, curr) => [...curr, ...prev], []),
        });
    }

    return id<State.GroupedByCategory>({
        "stateDescription": "grouped by category",
        "path": reLocalizedPath,
        directory,
        "dataCardsByCategory": (() => {
            const out: State.GroupedByCategory["dataCardsByCategory"] = {} as any;

            objectKeys(dataCardsByCategory).forEach(category => {
                const dataCards = dataCardsByCategory[category];

                if (dataCards.length === 0) {
                    return;
                }

                out[category] = {
                    "total": dataCards.length,
                    "dataCards": dataCards.slice(0, 50),
                };
            });

            return out;
        })(),
    });
}

export function createReducers(params: {
    setRouteParams(
        setRouteParamsAction: (previousRouteParams: RouteParams) => RouteParams,
    ): void;
}): {
    navigateUp(params: { upCount: number }): void;
    navigateToDirectory(params: { name: LocalizedString }): void;
    showAllInCategory(params: { category: EducationalResourceCategory }): void;
    showAllCategories(): void;
    setSearch(search: string): void;
} {
    const { setRouteParams } = params;

    return {
        "navigateUp": ({ upCount }) =>
            setRouteParams(previousRouteParams => ({
                "path": previousRouteParams.path.slice(0, -1 * upCount),
                "category": undefined,
                "search": "",
            })),
        "navigateToDirectory": ({ name }) =>
            setRouteParams(previousRouteParams => ({
                "path": [...previousRouteParams.path, resolveLocalizedString(name)],
                "category": undefined,
                "search": previousRouteParams.search,
            })),
        "showAllInCategory": ({ category }) =>
            setRouteParams(previousRouteParams => ({
                "path": previousRouteParams.path,
                category,
                "search": "",
            })),
        "showAllCategories": () =>
            setRouteParams(previousRouteParams => ({
                "path": previousRouteParams.path,
                "category": undefined,
                "search": "",
            })),
        "setSearch": search =>
            setRouteParams(previousRouteParams => ({
                ...previousRouteParams,
                search,
            })),
    };
}
