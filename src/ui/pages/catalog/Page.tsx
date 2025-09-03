/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, memo } from "react";
import { createPortal } from "react-dom";
import type { Dispatch, SetStateAction } from "react";
import { PageHeader } from "onyxia-ui/PageHeader";
import { SearchBar } from "onyxia-ui/SearchBar";
import { Text } from "onyxia-ui/Text";
import { tss } from "ui/tss";
import docNotFoundSvg from "ui/assets/svg/documentationNotFound.svg";
import { LazySvg } from "onyxia-ui/tools/LazySvg";
import Link from "@mui/material/Link";
import { useConstCallback } from "powerhooks/useConstCallback";
import type { UnpackEvt } from "evt";
import type { SearchBarProps } from "onyxia-ui/SearchBar";
import { breakpointsValues } from "onyxia-ui";
import { DirectoryHeader } from "onyxia-ui/DirectoryHeader";
import { Breadcrumb } from "onyxia-ui/Breadcrumb";
import Avatar from "@mui/material/Avatar";
import { CollapsibleWrapper } from "onyxia-ui/CollapsibleWrapper";
import { useEvt } from "evt/hooks/useEvt";
import { Evt } from "evt";
import { getScrollableParent } from "powerhooks/getScrollableParent";
import { useTheme } from "gitlanding/theme";
import { declareComponentKeys } from "i18nifty";
import { useTranslation, $lang } from "ui/i18n";
import { useHeaderHeight } from "../../theme";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import { PageRoute, routeGroup } from "./route";
import { useCore, useCoreState, getCore } from "core";
import { TagSelector } from "./TagSelector";
import { renderStringMaybeNotInAmbientLanguage } from "ui/shared/renderStringMaybeNotInAmbientLanguage";
import { useStateRef } from "powerhooks/useStateRef";
import { CatalogCard } from "./CatalogCard";
import { routes, useRoute } from "ui/routes";
import { assert } from "tsafe/assert";
import { keyframes } from "tss-react";

export type Props = {
    setIsHeaderRetracted: Dispatch<SetStateAction<boolean>>;
    pageHeaderPlaceholderElement: HTMLDivElement;
};

export async function loader(params: { route: PageRoute }) {
    const { route } = params;

    const core = await getCore();

    const { routeParams_previous } = await core.functions.catalog.load({
        routeParams: route.params,
        language: $lang.current,
    });

    if( routeParams_previous !== undefined ){
        routes[route.name](routeParams_previous).replace();
    }

}

export default function Catalog(props: Props) {

    const route = useRoute();
    assert(routeGroup.has(route));

    const { setIsHeaderRetracted, pageHeaderPlaceholderElement } = props;

    const { search, view, tagStates } = useCoreState("catalog", "main");
    const { catalog } = useCore().functions;
    const { evtCatalog } = useCore().evts;

    useEvt(
        ctx =>
            evtCatalog.$attach(
                action => (action.actionName !== "updateRoute" ? null : [action]),
                ctx,
                ({ routeParams, method }) => routes[route.name](routeParams)[method](),
            ),
        [evtCatalog],
    );

    useEffect(()=> {
        catalog.updateRouteParams({
            routeParams: route.params,
        });
    }, [route.params]);

    useEffect(() => {
        const { unsubscribe } = $lang.subscribe(lang =>
            catalog.updateLanguage({ language: lang }),
        );


        return unsubscribe;
    }, []);

    const onSearchChange: SearchBarProps["onSearchChange"] = useConstCallback(search =>
        catalog.updateSearch({ search }),
    );
    const navigateUpOne = useConstCallback(() => catalog.navigateUp({ upCount: 1 }));

    const rootElementRef = useStateRef<HTMLDivElement>(null);

    const { headerHeight } = useHeaderHeight();

    const { t } = useTranslation("Catalog");

    const [evtSearchBarAction] = useState(() =>
        Evt.create<UnpackEvt<NonNullable<SearchBarProps["evtAction"]>>>(),
    );

    const onNoMatchGoBack = useConstCallback(() =>
        evtSearchBarAction.post("CLEAR SEARCH"),
    );

    const { paddingRightLeft } = useTheme();

    const { classes } = useStyle({ paddingRightLeft, headerHeight });

    useEffect(() => {
        if (rootElementRef.current === null) {
            return;
        }

        const scrollableParent = getScrollableParent({
            element: rootElementRef.current,
            doReturnElementIfScrollable: true,
        });

        scrollableParent?.scrollTo(0, 0);
    }, [view, rootElementRef.current]);

    useEvt(
        ctx => {
            if (rootElementRef.current === null) {
                return;
            }

            const scrollableParent = getScrollableParent({
                element: rootElementRef.current,
                doReturnElementIfScrollable: true,
            });

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
        [rootElementRef.current],
    );

    return (
        <div ref={rootElementRef} className={classes.root}>
            {createPortal(
                <div className={classes.pageHeader}>
                    <PageHeader
                        title={t("pageTitle")}
                        helpTitle={t("pageHelpTitle")}
                        helpContent={
                            <>
                                {t("pageHelpContentP1")}&nbsp;
                                <Link
                                    href={
                                        "https://github.com/InseeFrLab/www.sspcloud.fr/tree/main/catalogData"
                                    }
                                    target="_blank"
                                    underline="hover"
                                >
                                    {t("pageHelpContentP2")}
                                </Link>
                            </>
                        }
                        helpIcon={SentimentSatisfiedIcon}
                        titleCollapseParams={{
                            behavior: "collapses on scroll",
                            scrollTopThreshold: 200,
                        }}
                        helpCollapseParams={{
                            behavior: "collapses on scroll",
                            scrollTopThreshold: 100,
                        }}
                        classes={{
                            closeButton: classes.pageHeaderCloseButton,
                        }}
                    />
                    <SearchBar
                        className={classes.searchBar}
                        search={search}
                        onSearchChange={onSearchChange}
                        placeholder={t("search")}
                        evtAction={evtSearchBarAction}
                    />
                    <TagSelector
                        tagStates={tagStates}
                        onToggleTagSelection={catalog.toggleTagSelection}
                    />
                    {view.header !== undefined && (
                        <>
                            <DirectoryHeader
                                className={classes.directoryHeader}
                                image={
                                    <Avatar
                                        src={view.header.imageUrl}
                                        alt=""
                                        className={classes.directoryHeaderImage}
                                    />
                                }
                                //title={resolveLocalizedString(state.path.slice(-1)[0])}
                                title={renderStringMaybeNotInAmbientLanguage({
                                    textMaybeNotInAmbientLanguage: view.header.name,
                                    renderText: str => str,
                                })}
                                subtitle={
                                    view.header.authors.length === 1 ? (
                                        renderStringMaybeNotInAmbientLanguage({
                                            textMaybeNotInAmbientLanguage:
                                                view.header.authors[0],
                                            renderText: str => str,
                                        })
                                    ) : (
                                        <span>
                                            {view.header.authors.length}{" "}
                                            {t("contributors")}
                                        </span>
                                    )
                                }
                                onGoBack={navigateUpOne}
                            />
                            <CollapsibleWrapper
                                behavior="collapses on scroll"
                                scrollTopThreshold={200}
                                scrollableElementRef={(() => {
                                    if (rootElementRef.current === null) {
                                        return rootElementRef;
                                    }
                                    const scrollableParent = getScrollableParent({
                                        doReturnElementIfScrollable: true,
                                        element: rootElementRef.current,
                                    });
                                    return {
                                        current: scrollableParent,
                                    };
                                })()}
                            >
                                <Breadcrumb
                                    className={classes.breadcrumb}
                                    path={[
                                        t("trainings"),
                                        ...view.header.path.map(segment => segment.text),
                                    ]}
                                    onNavigate={({ upCount }) =>
                                        catalog.navigateUp({ upCount })
                                    }
                                />
                            </CollapsibleWrapper>
                        </>
                    )}
                </div>,
                pageHeaderPlaceholderElement,
            )}
            <div key={view.header?.path.join("") ?? ""} className={classes.scrollableDiv}>
                {(() => {
                    if (view.items.length === 0) {
                        return (
                            <NoMatches
                                search={route.params.search}
                                onGoBackClick={onNoMatchGoBack}
                            />
                        );
                    }

                    return (
                        <>
                            {view.header === undefined && (
                                <div className={classes.verticalSpacing} />
                            )}
                            <div className={classes.manyCardsWrapper}>
                                {view.items.map(viewItem => (
                                    <CatalogCard
                                        key={viewItem.name.text.charArray.join("")}
                                        viewItem={viewItem}
                                    />
                                ))}
                            </div>
                        </>
                    );
                })()}
            </div>
        </div>
    );
}

const useStyle = tss
    .withName({ Catalog })
    .withParams<{
        paddingRightLeft: number;
        headerHeight: number | undefined;
    }>()
    .create(({ theme, paddingRightLeft, headerHeight }) => ({
        root: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            ...theme.spacing.rightLeft("padding", `${paddingRightLeft}px`),
        },
        searchBar: {
            marginBottom: theme.spacing(3),
        },
        pageHeader: {
            marginTop: theme.spacing(3),
            ...theme.spacing.rightLeft("padding", `${paddingRightLeft}px`),
        },
        directoryHeaderImage: {
            height: "100%",
            width: "100%",
        },
        manyCardsWrapper: {
            display: "grid",
            gridTemplateColumns: `repeat(${(() => {
                if (theme.windowInnerWidth >= breakpointsValues.md) {
                    return 3;
                }

                if (theme.windowInnerWidth >= breakpointsValues.sm) {
                    return 2;
                }

                return 1;
            })()},1fr)`,
            gap: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
        verticalSpacing: {
            height: theme.spacing(4),
        },
        pageHeaderCloseButton: {
            position: "unset",
        },
        breadcrumb: {
            ...theme.spacing.topBottom("padding", 3),
        },
        directoryHeader: {
            paddingBottom: theme.spacing(3),
        },
        scrollableDiv: {
            flex: 1,
            overflow: "auto",
            scrollBehavior: "smooth",
            marginTop:
                headerHeight === undefined ? undefined : headerHeight + theme.spacing(3),
            animation: `${keyframes`
            0% {
                opacity: 0;
            }
            30% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
            `} 400ms`,
        },
    }));

const { NoMatches } = (() => {
    type Props = {
        search: string | undefined;
        onGoBackClick(): void;
    };

    const NoMatches = memo((props: Props) => {
        const { search = "", onGoBackClick } = props;

        const { classes } = useStyles();

        const { t } = useTranslation({ Catalog });

        return (
            <div className={classes.root}>
                <div className={classes.innerDiv}>
                    <LazySvg svgUrl={docNotFoundSvg} className={classes.svg} />
                    <Text typo="page heading" className={classes.h2}>
                        {t("no documentation found")}
                    </Text>
                    <Text className={classes.typo} typo="body 1">
                        {t("no result found", { forWhat: search })}
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

    const useStyles = tss.create(({ theme }) => ({
        root: {
            display: "flex",
            justifyContent: "center",
            paddingTop: theme.spacing(3),
        },
        innerDiv: {
            textAlign: "center",
            maxWidth: "20%",
        },
        svg: {
            fill: theme.colors.palette.dark.greyVariant2,
            margin: 0,
        },
        h2: {
            ...theme.spacing.topBottom("margin", 4),
        },
        typo: {
            marginBottom: theme.spacing(1),
            color: theme.colors.palette.light.greyVariant3,
        },
        link: {
            cursor: "pointer",
        },
    }));
    return { NoMatches };
})();

const { i18n } = declareComponentKeys<
    | "search"
    | "pageTitle"
    | "pageHelpTitle"
    | "pageHelpContentP1"
    | "pageHelpContentP2"
    | "trainings"
    | "contributors"
    | "no documentation found"
    | { K: "no result found"; P: { forWhat: string } }
    | "check spelling"
    | "go back"
    | "show all"
>()({ Catalog });

export type I18n = typeof i18n;
