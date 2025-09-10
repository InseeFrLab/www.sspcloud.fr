import { useState, useEffect, memo } from "react";
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
import { useEvt } from "evt/hooks/useEvt";
import { Evt } from "evt";
import { getScrollableParent } from "powerhooks/getScrollableParent";
import { useTheme as useGitlandingTheme } from "gitlanding/theme";
import { declareComponentKeys } from "i18nifty";
import { useTranslation, $lang } from "ui/i18n";
import { routeGroup } from "./route";
import { useCore, useCoreState, getCore } from "core";
import { TagSelector } from "./TagSelector";
import { renderStringMaybeNotInAmbientLanguage } from "ui/shared/renderStringMaybeNotInAmbientLanguage";
import { useStateRef } from "powerhooks/useStateRef";
import { CatalogCard } from "./CatalogCard";
import { routes, getRoute, session } from "ui/routes";
import { assert } from "tsafe/assert";
import { keyframes } from "tss-react";
import { withLoader } from "ui/tools/withLoader";
import { startViewTransition } from "ui/tools/startViewTransition";
import { GlobalStyles } from "tss-react";
import { simpleHash } from "ui/tools/simpleHash";
import { flushSync } from "react-dom";

const Page = withLoader({
    loader,
    Component: Catalog,
});

export default Page;

async function loader() {
    const route = getRoute();
    assert(routeGroup.has(route));

    const core = await getCore();

    await core.functions.catalog.load({
        routeParams: route.params,
        language: $lang.current,
    });
}

function Catalog() {
    const { search, view, tagStates } = useCoreState("catalog", "main");
    const { catalog } = useCore().functions;
    const { evtCatalog } = useCore().evts;

    useEvt(ctx => {
        evtCatalog.$attach(
            action => (action.actionName !== "updateRoute" ? null : [action]),
            ctx,
            ({ routeParams, method }) => routes["catalog"](routeParams)[method](),
        );

        evtCatalog.$attach(
            action => (action.actionName !== "startViewTransition" ? null : [action]),
            ctx,
            ({ viewTransitionUpdateCallback }) =>
                startViewTransition(() => {
                    flushSync(() => {
                        viewTransitionUpdateCallback();
                    });
                }),
        );
    }, []);

    useEffect(() => {
        const unsubscribe_session = session.listen(route => {
            if (route.action === "pop" && routeGroup.has(route)) {
                catalog.notifyBackForwardNavigation({ routeParams: route.params });
            }
        });

        const { unsubscribe: unsubscribe_lang } = $lang.subscribe(lang =>
            catalog.updateLanguage({ language: lang }),
        );

        return () => {
            unsubscribe_session();
            unsubscribe_lang();
        };
    }, []);

    const onSearchChange: SearchBarProps["onSearchChange"] = useConstCallback(search =>
        catalog.updateSearch({ search }),
    );

    const navigateUpOne = useConstCallback(() => catalog.navigateUp({ upCount: 1 }));

    const rootElementRef = useStateRef<HTMLDivElement>(null);

    const { t } = useTranslation("Catalog");

    const [evtSearchBarAction] = useState(() =>
        Evt.create<UnpackEvt<NonNullable<SearchBarProps["evtAction"]>>>(),
    );

    const onNoMatchGoBack = useConstCallback(() =>
        evtSearchBarAction.post("CLEAR SEARCH"),
    );

    const { classes, css } = useStyle({
        paddingRightLeft: useGitlandingTheme().paddingRightLeft,
    });

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

    return (
        <div ref={rootElementRef} className={classes.root}>
            <GlobalStyles
                styles={{
                    /* kill the page-wide cross-fade */
                    ":root::view-transition-old(root), :root::view-transition-new(root)":
                        {
                            animation: "none",
                        },
                    /* keep your timing for named elements (cards) */
                    ":root::view-transition-group(*)": {
                        animationDuration: "220ms",
                        animationTimingFunction: "ease",
                    },
                    "@media (prefers-reduced-motion: reduce)": {
                        ":root::view-transition-group(*)": { animationDuration: "0ms" },
                        ":root::view-transition-old(root), :root::view-transition-new(root)":
                            {
                                animation: "none",
                            },
                    },
                }}
            />
            <div key={view.header?.path.join("") ?? ""} className={classes.scrollableDiv}>
                <div className={classes.pageHeader}>
                    <SearchBar
                        className={classes.searchBar}
                        search={search}
                        onSearchChange={onSearchChange}
                        placeholder={t("search")}
                        evtAction={evtSearchBarAction}
                    />
                    {tagStates.length !== 0 && (
                        <TagSelector
                            className={classes.tagSelector}
                            tagStates={tagStates}
                            onToggleTagSelection={catalog.toggleTagSelection}
                        />
                    )}
                    {view.header !== undefined && (
                        <>
                            <DirectoryHeader
                                image={
                                    <Avatar
                                        src={view.header.imageUrl}
                                        alt=""
                                        className={classes.directoryHeaderImage}
                                        classes={{
                                            img: css({ objectFit: "contain" }),
                                        }}
                                    />
                                }
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
                        </>
                    )}
                </div>

                {(() => {
                    if (view.items.length === 0) {
                        return (
                            <NoMatches search={search} onGoBackClick={onNoMatchGoBack} />
                        );
                    }

                    return (
                        <>
                            <div className={classes.manyCardsWrapper}>
                                {view.items.map(viewItem => {
                                    const slug = simpleHash(
                                        viewItem.name.text.charArray.join(""),
                                    );

                                    return (
                                        <CatalogCard
                                            key={slug}
                                            className={css({
                                                viewTransitionName: `card-${slug}`,
                                            })}
                                            viewItem={viewItem}
                                        />
                                    );
                                })}
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
    }>()
    .create(({ theme, paddingRightLeft }) => ({
        root: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            ...theme.spacing.rightLeft("padding", `${paddingRightLeft}px`),
        },
        searchBar: {
            marginBottom: theme.spacing(1),
            boxShadow: "-5px 0px 10px 5px rgba(0,0,0,0.07)",
            "&:hover": {
                boxShadow: "5px 6px 10px 10px rgba(0,0,0,0.07)",
            },
        },
        tagSelector: {
            marginTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
            display: theme.windowInnerWidth < breakpointsValues.sm ? "none" : undefined,
        },
        pageHeader: {
            marginTop: theme.spacing(3),
        },
        directoryHeaderImage: {
            height: "100%",
            width: "100%",
        },
        manyCardsWrapper: {
            //viewTransitionName: "root",
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
            gap: theme.spacing(3),
            paddingBottom: theme.spacing(4),
            marginTop: theme.spacing(4),
        },
        breadcrumb: {
            marginTop: theme.spacing(4),
        },
        scrollableDiv: {
            flex: 1,
            overflow: "visible",
            animation: `${keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
            `} 300ms`,
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
    | "trainings"
    | "contributors"
    | "no documentation found"
    | { K: "no result found"; P: { forWhat: string } }
    | "check spelling"
    | "go back"
    | "show all"
>()({ Catalog });

export type I18n = typeof i18n;
