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
import { useEvt } from "evt/hooks/useEvt";
import { Evt } from "evt";
import { useTheme as useGitlandingTheme } from "gitlanding/theme";
import { declareComponentKeys } from "i18nifty";
import { useTranslation, $lang } from "ui/i18n";
import { routeGroup } from "./route";
import { getCoreSync, useCoreState, getCore } from "core";
import { TagSelector } from "./TagSelector";
import { CatalogCard } from "./CatalogCard";
import { routes, getRoute, session } from "ui/routes";
import { assert } from "tsafe/assert";
import { withLoader } from "ui/tools/withLoader";
import { startViewTransition } from "ui/tools/startViewTransition";
import { GlobalStyles } from "tss-react";
import { simpleHash } from "ui/tools/simpleHash";
import { flushSync } from "react-dom";
import { CoreViewText } from "ui/shared/CoreViewText";
import { elementsToSentence } from "ui/shared/elementsToSentence";
import { useLang } from "ui/i18n";
import { EducationalResourceHeader } from "ui/shared/EducationalResourceHeader";

const Page = withLoader({
    loader,
    Component: Catalog,
    FallbackComponent: () => null,
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
    const { search, search_urgent, view, tagStates } = useCoreState("catalog", "main");
    const {
        functions: { catalog },
        evts: { evtCatalog },
    } = getCoreSync();

    useEvt(ctx => {
        evtCatalog.$attach(
            action => (action.actionName !== "updateRoute" ? null : [action]),
            ctx,
            ({ routeParams, method }) => routes.catalog(routeParams)[method](),
        );

        evtCatalog.attach(
            action => action.actionName === "startViewTransition",
            ctx,
            ({ viewTransitionUpdateCallback }) => {
                startViewTransition(() => {
                    flushSync(() => {
                        viewTransitionUpdateCallback();
                    });
                });
            },
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

    const { t } = useTranslation("Catalog");

    const [evtSearchBarAction] = useState(() =>
        Evt.create<UnpackEvt<NonNullable<SearchBarProps["evtAction"]>>>(),
    );

    const onNoMatchGoBack = useConstCallback(() =>
        evtSearchBarAction.post("CLEAR SEARCH"),
    );

    const { classes, css, theme } = useStyle({
        paddingRightLeft: useGitlandingTheme().paddingRightLeft,
    });

    const { lang } = useLang();

    return (
        <div key={view.header?.path.join("") ?? ""} className={classes.root}>
            <div className={classes.pageHeader}>
                <SearchBar
                    className={classes.searchBar}
                    search={search_urgent}
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
                {(tagStates.some(({ isSelected }) => isSelected) || search !== "") && (
                    <Text
                        className={css({
                            marginTop: theme.spacing(2),
                        })}
                        typo="object heading"
                    >
                        <span
                            className={css({
                                color: theme.colors.useCases.typography.textFocus,
                            })}
                        >
                            {view.items.length}
                        </span>{" "}
                        {t("result for", { isPlural: view.items.length > 1 })}&nbsp;
                        {elementsToSentence({
                            nodes: [
                                ...(search === "" ? [] : [search]),
                                ...tagStates
                                    .filter(({ isSelected }) => isSelected)
                                    .map(tag => (
                                        <CoreViewText
                                            text={tag.label}
                                            doCapitalize={false}
                                        />
                                    )),
                            ].map(element => (
                                <span
                                    className={css({
                                        color: theme.colors.useCases.typography.textFocus,
                                    })}
                                >
                                    {element}
                                </span>
                            )),
                            lang,
                        })}
                    </Text>
                )}
                {view.header !== undefined && (
                    <EducationalResourceHeader
                        viewHeader={view.header}
                        onNavigateUp={catalog.navigateUp}
                    />
                )}
            </div>

            {(() => {
                if (view.items.length === 0) {
                    return <NoMatches search={search} onGoBackClick={onNoMatchGoBack} />;
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
            ...theme.spacing.rightLeft("padding", `${paddingRightLeft}px`),
        },
        searchBar: {
            marginBottom: theme.spacing(1),
            boxShadow: "3px 3px 6px 4px rgba(0,0,0,0.07)",
            "&:hover": {
                boxShadow: "3px 3px 6px 4px rgba(0,0,0,0.07)",
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
    | "no documentation found"
    | { K: "no result found"; P: { forWhat: string } }
    | "check spelling"
    | "go back"
    | "show all"
    | "and"
    | { K: "result for"; P: { isPlural: boolean } }
>()({ Catalog });

export type I18n = typeof i18n;
