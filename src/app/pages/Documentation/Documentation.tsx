import { useState, useEffect, useMemo, useRef, memo } from "react";
import type { Dispatch, SetStateAction } from "react";
import { createGroup } from "type-route";
import { routes } from "app/router";
import { PageHeader } from "app/theme";
import { SearchBar } from "onyxia-ui/SearchBar";
import { makeStyles, Text } from "app/theme";
import { ReactComponent as DocumentationNotFound } from "app/assets/svg/documentationNotFound.svg";
import Link from "@mui/material/Link";
import type { Route } from "type-route";
import { useConstCallback } from "powerhooks/useConstCallback";
import { Evt } from "evt";
import type { UnpackEvt } from "evt";
import type { SearchBarProps } from "onyxia-ui/SearchBar";
import { breakpointsValues } from "onyxia-ui";
import { DocumentationCard } from "./DocumentationCard";
import { useCallbackFactory } from "powerhooks/useCallbackFactory";
import { createReducers, getState } from "lib/educationalResources/useCase";
import type { State } from "lib/educationalResources/useCase";
import type { EducationalResourceCategory } from "lib/educationalResources/educationalResources";
import { DirectoryHeader } from "onyxia-ui/DirectoryHeader";
import { Breadcrump } from "onyxia-ui/Breadcrump";
import { CollapsibleSectionHeader } from "onyxia-ui/CollapsibleSectionHeader";
import Avatar from "@mui/material/Avatar";
import { localizedStringToString, useLanguage, useTranslation } from "app/i18n";
import type { LocalizedString } from "app/i18n";
import { objectKeys } from "tsafe/objectKeys";
import { resourceHref } from "lib/educationalResources/resourcesHref";
import type { HeaderOptions } from "gitlanding/GlTemplate";
import { id } from "tsafe/id";
import { CollapsibleWrapper } from "onyxia-ui/tools/CollapsibleWrapper";
import type { CollapseParams } from "onyxia-ui/tools/CollapsibleWrapper";
import { useElementEvt } from "evt/hooks/useElementEvt";

Documentation.routeGroup = createGroup([routes.documentation]);

Documentation.headerOptions = id<HeaderOptions>({
    "position": "top of page",
    "isRetracted": false,
    "doDelegateScroll": true,
});

type PageRoute = Route<typeof Documentation.routeGroup>;

export type Props = {
    route: PageRoute;
    setIsHeaderRetracted: Dispatch<SetStateAction<boolean>>;
};

const useStyle = makeStyles()(theme => ({
    "root": {
        "height": "100%",
        "display": "flex",
        "flexDirection": "column",
    },
    "searchBar": {
        "marginBottom": theme.spacing(3),
    },
    "directoryHeaderImage": {
        "height": "100%",
        "width": "100%",
    },
    "fewCardsWrapper": {
        "display": "grid",
        "gridTemplateColumns": `repeat(${(() => {
            if (theme.windowInnerWidth >= breakpointsValues.lg) {
                return 3;
            }
            return 1;
        })()},1fr)`,
        "gap": theme.spacing(4),
    },
    "manyCardsWrapper": {
        "display": "grid",
        "gridTemplateColumns": `repeat(${(() => {
            if (theme.windowInnerWidth >= breakpointsValues.md) {
                return 3;
            }

            if (theme.windowInnerWidth >= breakpointsValues.sm) {
                return 2;
            }

            return 1;
        })()},1fr)`,
        "gap": theme.spacing(4),
        "paddingBottom": theme.spacing(4),
    },
    "verticalSpacing": {
        "height": theme.spacing(4),
    },
    "collapsibleSection": {
        ...theme.spacing.topBottom("margin", 3),
    },
    "breadcrumb": {
        //...theme.spacing.topBottom("margin", 3)
        ...theme.spacing.topBottom("padding", 3),
    },
    "directoryHeader": {
        "paddingBottom": theme.spacing(3),
    },
    "scrollableDiv": {
        "flex": 1,
        "overflow": "auto",
        "scrollBehavior": "smooth",
    },
}));

export function Documentation(props: Props) {
    const { route, setIsHeaderRetracted } = props;

    const {
        navigateToDirectory,
        navigateUp,
        setSearch,
        showAllCategories,
        showAllInCategory,
    } = useMemo(
        () =>
            createReducers({
                "setRouteParams": setRouteParamsAction =>
                    routes.documentation(setRouteParamsAction(route.params)).replace(),
            }),
        [route],
    );

    const navigateUpOne = useConstCallback(() => navigateUp({ "upCount": 1 }));

    const { t } = useTranslation("Documentation");
    const { language } = useLanguage();

    const [evtSearchBarAction] = useState(() =>
        Evt.create<UnpackEvt<NonNullable<SearchBarProps["evtAction"]>>>(),
    );

    const onNoMatchGoBack = useConstCallback(() =>
        evtSearchBarAction.post("CLEAR SEARCH"),
    );

    const { classes, cx, css } = useStyle();

    const onOpenDirectoryFactory = useCallbackFactory(([name]: [LocalizedString]) =>
        navigateToDirectory({ name }),
    );

    const showAllInCategoryFactory = useCallbackFactory(
        ([category]: [EducationalResourceCategory]) => showAllInCategory({ category }),
    );

    const { state } = (function useClosure() {
        const getStateForCurrentRoute = useMemo(
            () => () => getState({ "routeParams": route.params }),
            [route],
        );

        const [state, setState] = useState<State>(getStateForCurrentRoute);

        useEffect(() => {
            const timer = setTimeout(() => {
                setState(getStateForCurrentRoute());
            }, 150);

            return () => clearTimeout(timer);
        }, [getStateForCurrentRoute]);

        return { state };
    })();

    const scrollableDivRef = useRef<HTMLDivElement>(null);

    const titleCollapseParams = useMemo(
        (): CollapseParams => ({
            "behavior": "collapses on scroll",
            "scrollTopThreshold": 200,
            "scrollableElementRef": scrollableDivRef,
        }),
        [],
    );

    const helpCollapseParams = useMemo(
        (): CollapseParams => ({
            "behavior": "collapses on scroll",
            "scrollTopThreshold": 100,
            "scrollableElementRef": scrollableDivRef,
        }),
        [],
    );

    //TODO: GlTemplate should be refactored, this is not acceptable.
    useElementEvt<HTMLDivElement>(
        ({ ctx, element }) =>
            Evt.from(ctx, element, "scroll").attach(e => {
                const scrollTop = (e as any).target.scrollTop;

                const scrollTopThreshold = 150;
                const approxHeaderHeight = 60;

                setIsHeaderRetracted(isRetracted =>
                    isRetracted
                        ? scrollTop + approxHeaderHeight * 1.05 > scrollTopThreshold
                        : scrollTop > scrollTopThreshold,
                );
            }),
        scrollableDivRef,
        [setIsHeaderRetracted],
    );

    useEffect(() => {
        scrollableDivRef.current?.scrollTo(0, 0);
    }, [state]);

    return (
        <div className={classes.root}>
            <PageHeader
                title={t("pageTitle")}
                helpTitle={t("pageHelpTitle")}
                helpContent={
                    <>
                        {t("pageHelpContentP1")}&nbsp;
                        <Link href={resourceHref} target="_blank" underline="hover">
                            {t("pageHelpContentP2")}
                        </Link>
                    </>
                }
                helpIcon="sentimentSatisfied"
                titleCollapseParams={titleCollapseParams}
                helpCollapseParams={helpCollapseParams}
            />
            <SearchBar
                className={classes.searchBar}
                search={route.params.search}
                onSearchChange={setSearch}
                placeholder={t("search")}
                evtAction={evtSearchBarAction}
            />
            {state.directory !== undefined && (
                <>
                    <DirectoryHeader
                        className={classes.directoryHeader}
                        image={
                            <Avatar
                                src={state.directory.imageUrl}
                                alt=""
                                className={classes.directoryHeaderImage}
                            />
                        }
                        title={localizedStringToString(state.path.slice(-1)[0], language)}
                        subtitle={
                            state.directory.authors.length === 1 ? (
                                localizedStringToString(
                                    state.directory.authors[0],
                                    language,
                                )
                            ) : (
                                <span>
                                    {state.directory.authors.length} {t("contributors")}
                                </span>
                            )
                        }
                        onGoBack={navigateUpOne}
                    />
                    <CollapsibleWrapper
                        behavior="collapses on scroll"
                        scrollTopThreshold={200}
                        scrollableElementRef={scrollableDivRef}
                    >
                        <Breadcrump
                            className={classes.breadcrumb}
                            path={[
                                t("trainings"),
                                ...state.path.map(localizedName =>
                                    localizedStringToString(localizedName, language),
                                ),
                            ]}
                            onNavigate={navigateUp}
                        />
                    </CollapsibleWrapper>
                </>
            )}

            {state.stateDescription === "show all in category" && (
                <CollapsibleSectionHeader
                    className={classes.collapsibleSection}
                    title={t(state.category)}
                    isCollapsed={false}
                    onToggleIsCollapsed={showAllCategories}
                />
            )}
            <div ref={scrollableDivRef} className={classes.scrollableDiv}>
                {(() => {
                    switch (state.stateDescription) {
                        case "grouped by category":
                            return (
                                <>
                                    {objectKeys(state.dataCardsByCategory)
                                        .map(category => ({
                                            category,
                                            ...state.dataCardsByCategory[category]!,
                                        }))
                                        .map(({ category, dataCards, total }, i) => (
                                            <section key={category}>
                                                <CollapsibleSectionHeader
                                                    className={cx(
                                                        classes.collapsibleSection,
                                                        i === 0 &&
                                                            css({ "marginTop": 0 }),
                                                    )}
                                                    title={t(category)}
                                                    isCollapsed={true}
                                                    onToggleIsCollapsed={showAllInCategoryFactory(
                                                        category,
                                                    )}
                                                    {...(dataCards.length === total
                                                        ? { "showAllStr": "" }
                                                        : {
                                                              "showAllStr": t("show all"),
                                                              total,
                                                          })}
                                                />
                                                <div className={classes.fewCardsWrapper}>
                                                    {dataCards.map(dataCard => (
                                                        <DocumentationCard
                                                            key={localizedStringToString(
                                                                dataCard.name,
                                                                language,
                                                            )}
                                                            {...(!dataCard.isDirectory
                                                                ? {
                                                                      ...dataCard,
                                                                  }
                                                                : {
                                                                      ...dataCard,
                                                                      "onOpen":
                                                                          onOpenDirectoryFactory(
                                                                              dataCard.name,
                                                                          ),
                                                                  })}
                                                        />
                                                    ))}
                                                </div>
                                            </section>
                                        ))}
                                    <div className={classes.verticalSpacing} />
                                </>
                            );
                        case "not categorized":
                        case "show all in category":
                            if (state.dataCards.length === 0) {
                                return (
                                    <NoMatches
                                        search={route.params.search}
                                        onGoBackClick={onNoMatchGoBack}
                                    />
                                );
                            }

                            return (
                                <>
                                    {state.directory === undefined &&
                                        state.stateDescription === "not categorized" && (
                                            <div className={classes.verticalSpacing} />
                                        )}
                                    <div className={classes.manyCardsWrapper}>
                                        {state.dataCards.map(dataCard => (
                                            <DocumentationCard
                                                key={localizedStringToString(
                                                    dataCard.name,
                                                    language,
                                                )}
                                                {...(!dataCard.isDirectory
                                                    ? {
                                                          ...dataCard,
                                                      }
                                                    : {
                                                          ...dataCard,
                                                          "onOpen":
                                                              onOpenDirectoryFactory(
                                                                  dataCard.name,
                                                              ),
                                                      })}
                                            />
                                        ))}
                                    </div>
                                </>
                            );
                    }
                })()}
            </div>
        </div>
    );
}

const { NoMatches } = (() => {
    type Props = {
        search: string;
        onGoBackClick(): void;
    };

    const useStyles = makeStyles()(theme => ({
        "root": {
            "display": "flex",
            "justifyContent": "center",
            "paddingTop": theme.spacing(3),
        },
        "innerDiv": {
            "textAlign": "center",
            "maxWidth": "20%",
        },
        "svg": {
            "fill": theme.colors.palette.dark.greyVariant2,
            "margin": 0,
        },
        "h2": {
            ...theme.spacing.topBottom("margin", 4),
        },
        "typo": {
            "marginBottom": theme.spacing(1),
            "color": theme.colors.palette.light.greyVariant3,
        },
        "link": {
            "cursor": "pointer",
        },
    }));

    const NoMatches = memo((props: Props) => {
        const { search, onGoBackClick } = props;

        const { classes } = useStyles();

        const { t } = useTranslation("Documentation");

        return (
            <div className={classes.root}>
                <div className={classes.innerDiv}>
                    <DocumentationNotFound className={classes.svg} />
                    <Text typo="page heading" className={classes.h2}>
                        {t("no documentation found")}
                    </Text>
                    <Text className={classes.typo} typo="body 1">
                        {t("no result found", { "forWhat": search })}
                    </Text>
                    <Text className={classes.typo} typo="body 1">
                        {t("check spelling")}
                    </Text>
                    <Link className={classes.link} onClick={onGoBackClick}>
                        {t("go back")}
                    </Link>
                </div>
            </div>
        );
    });

    return { NoMatches };
})();

export declare namespace Documentation {
    export type I18nScheme = {
        search: undefined;
        pageTitle: undefined;
        pageHelpTitle: undefined;
        pageHelpContentP1: undefined;
        pageHelpContentP2: undefined;
        trainings: undefined;
        contributors: undefined;
        "no documentation found": undefined;
        "no result found": { forWhat: string };
        "check spelling": undefined;
        "go back": undefined;
        "show all": undefined;
    } & Record<EducationalResourceCategory, undefined>;
}
