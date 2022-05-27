import { useState, useEffect, useMemo, memo, useRef } from "react";
import { createPortal } from "react-dom";
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
import { objectKeys } from "tsafe/objectKeys";
import { resourceHref } from "lib/educationalResources/resourcesHref";
import type { HeaderOptions } from "gitlanding/GlTemplate";
import { id } from "tsafe/id";
import { CollapsibleWrapper } from "onyxia-ui/CollapsibleWrapper";
import type { CollapseParams } from "onyxia-ui/CollapsibleWrapper";
import { useElementEvt } from "evt/hooks/useElementEvt";
import { Evt } from "evt";
import { getScrollableParent } from "powerhooks/getScrollableParent";
import { useTheme } from "gitlanding/theme";
import { useStateAsEvt } from "evt/hooks/useStateAsEvt";
import { declareComponentKeys } from "i18nifty";
import { useResolveLocalizedString, useTranslation } from "i18n";
import type { LocalizedString } from "i18n";
import { useHeaderHeight } from "../../theme";

Documentation.routeGroup = createGroup([routes.documentation]);

Documentation.headerOptions = id<HeaderOptions>({
    "position": "sticky",
    "isRetracted": false,
});

type PageRoute = Route<typeof Documentation.routeGroup>;

export type Props = {
    route: PageRoute;
    setIsHeaderRetracted: Dispatch<SetStateAction<boolean>>;
    stickyPageHeader: HTMLDivElement;
};

export function Documentation(props: Props) {
    const { route, setIsHeaderRetracted, stickyPageHeader } = props;

    const ref = useRef<HTMLDivElement>(null);

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
                    routes.documentation(setRouteParamsAction(route.params)).push(),
            }),
        [route],
    );

    const { headerHeight } = useHeaderHeight();

    const navigateUpOne = useConstCallback(() => navigateUp({ "upCount": 1 }));

    const { t } = useTranslation({ Documentation });
    const { resolveLocalizedString } = useResolveLocalizedString();

    const [evtSearchBarAction] = useState(() =>
        Evt.create<UnpackEvt<NonNullable<SearchBarProps["evtAction"]>>>(),
    );

    const onNoMatchGoBack = useConstCallback(() =>
        evtSearchBarAction.post("CLEAR SEARCH"),
    );

    const { paddingRightLeft } = useTheme();

    const { classes, cx, css } = useStyle({ paddingRightLeft, headerHeight });



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


    const titleCollapseParams = useMemo(
        (): CollapseParams => ({
            "behavior": "collapses on scroll",
            "scrollTopThreshold": 200,
        }),
        [],
    );

    const helpCollapseParams = useMemo(
        (): CollapseParams => ({
            "behavior": "collapses on scroll",
            "scrollTopThreshold": 100,
        }),
        [],
    );

    const { evtState } = useStateAsEvt({ state })

    useElementEvt(
        ({ ctx, element }) => {

            const scrollableParent = getScrollableParent({
                element,
                "doReturnElementIfScrollable": true
            })

            evtState
                .toStateless(ctx)
                .attach(() => scrollableParent?.scrollTo(0, 0));

            Evt.from(ctx, scrollableParent, "scroll").attach(() => {

                const { scrollTop } = scrollableParent;

                const scrollTopThreshold = 150;
                const approxHeaderHeight = 60;

                setIsHeaderRetracted(isRetracted =>
                    isRetracted
                        ? scrollTop + approxHeaderHeight * 1.05 > scrollTopThreshold
                        : scrollTop > scrollTopThreshold,
                );
            });
        },
        ref,
        []
    );

    /*useEffect(() => {
        scrollableParent?.scrollTo(0, 0);
    }, [state, scrollableParent]);*/

    const PageHeaderSticky = (
        <div className={classes.pageHeader}>
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
                classes={{
                    "closeButton": classes.pageHeaderCloseButton
                }}
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
                        title={resolveLocalizedString(state.path.slice(-1)[0])}
                        subtitle={
                            state.directory.authors.length === 1 ? (
                                resolveLocalizedString(
                                    state.directory.authors[0]
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
                    >
                        <Breadcrump
                            className={classes.breadcrumb}
                            path={[
                                t("trainings"),
                                ...state.path.map(localizedName =>
                                    //localizedStringToString(localizedName, lang),
                                    resolveLocalizedString(localizedName)
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
        </div>
    );

    return (
        <div ref={ref} className={classes.root}>
            {createPortal(PageHeaderSticky, stickyPageHeader)}
            <div className={classes.scrollableDiv}>
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
                                                            key={resolveLocalizedString(
                                                                dataCard.name
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
                                                key={resolveLocalizedString(
                                                    dataCard.name
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

const useStyle = makeStyles<{ paddingRightLeft: number; headerHeight: number | undefined }>()((theme, { paddingRightLeft, headerHeight }) => ({
    "root": {
        "height": "100%",
        "display": "flex",
        "flexDirection": "column",
        ...theme.spacing.rightLeft(
            "padding",
            `${paddingRightLeft}px`
        )
    },
    "searchBar": {
        "marginBottom": theme.spacing(3),
    },
    "pageHeader": {
        "marginTop": theme.spacing(3),
        ...theme.spacing.rightLeft("padding", `${paddingRightLeft}px`)
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
    "pageHeaderCloseButton": {
        "position": "unset"
    },
    "breadcrumb": {
        ...theme.spacing.topBottom("padding", 3),
    },
    "directoryHeader": {
        "paddingBottom": theme.spacing(3),
    },
    "scrollableDiv": {
        "flex": 1,
        "overflow": "auto",
        "scrollBehavior": "smooth",
        "marginTop": headerHeight === undefined ? undefined : headerHeight + theme.spacing(3)
    },
}));

const { NoMatches } = (() => {
    type Props = {
        search: string;
        onGoBackClick(): void;
    };

    const NoMatches = memo((props: Props) => {
        const { search, onGoBackClick } = props;

        const { classes } = useStyles();

        const { t } = useTranslation({ Documentation });

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
    return { NoMatches };
})();

export const { i18n } = declareComponentKeys<
    | "search"
    | "pageTitle"
    | "pageHelpTitle"
    | "pageHelpContentP1"
    | "pageHelpContentP2"
    | "trainings"
    | "contributors"
    | "no documentation found"
    | ["no result found", { forWhat: string }]
    | "check spelling"
    | "go back"
    | "show all"
    | EducationalResourceCategory
>()({
    Documentation
})