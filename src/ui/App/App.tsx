import { useEffect, useState, useMemo, Suspense, type ReactNode } from "react";
import { tss } from "ui/tss";
import { RouteProvider, useRoute } from "ui/routes";
import { OnyxiaUi, useHeaderHeight } from "ui/theme";
import { createCoreProvider } from "core";
import { declareComponentKeys, useTranslation } from "ui/i18n";
import { GlTemplate, type HeaderOptions } from "gitlanding/GlTemplate";
import { useDomRect } from "powerhooks/useDomRect";
import { pages } from "ui/pages";
import { keyframes } from "tss-react";
import { useSplashScreen } from "onyxia-ui";
import { assert, type Equals } from "tsafe/assert";
import { Header } from "./Header";
import { GlFooter } from "gitlanding/GlFooter";
import { LoadThenRender } from "ui/tools/LoadThenRender";
import { GlobalStyles } from "tss-react";

const { CoreProvider } = createCoreProvider({});

export function App() {
    return (
        <RouteProvider>
            <OnyxiaUi>
                <CoreProvider>
                    <ContextualizedApp />
                </CoreProvider>
            </OnyxiaUi>
        </RouteProvider>
    );
}

function ContextualizedApp() {
    const route = useRoute();
    const [pageHeaderPlaceholderElement, setPageHeaderPlaceholderElement] =
        useState<HTMLDivElement | null>(null);
    const { setHeaderHeight } = useHeaderHeight();
    const { t } = useTranslation({ App });
    const {
        ref: headerRef,
        domRect: { height: headerHeight },
    } = useDomRect();
    useEffect(() => {
        if (headerHeight === 0) {
            return;
        }

        setHeaderHeight(headerHeight);
    }, [headerHeight]);
    const [isHeaderRetracted, setIsHeaderRetracted] = useState(false);
    const { classes } = useStyles();

    const [pageNode, headerOptions] = useMemo((): [ReactNode, HeaderOptions] => {
        const { home, catalog, renderMarkdown, page404, ...rest } = pages;

        assert<Equals<typeof rest, {}>>;

        {
            const page = home;

            if (page.routeGroup.has(route)) {
                return [<page.LazyComponent />, page.headerOptions] as const;
            }
        }

        {
            const page = catalog;

            if (page.routeGroup.has(route)) {
                return [
                    pageHeaderPlaceholderElement !== null && (
                        <LoadThenRender loader={() => page.loader({ route })}>
                            <page.LazyComponent
                                pageHeaderPlaceholderElement={
                                    pageHeaderPlaceholderElement
                                }
                                setIsHeaderRetracted={setIsHeaderRetracted}
                            />
                        </LoadThenRender>
                    ),
                    page.headerOptions,
                ] as const;
            }
        }

        {
            const page = renderMarkdown;

            if (page.routeGroup.has(route)) {
                return [<page.LazyComponent />, page.headerOptions] as const;
            }
        }

        {
            const page = page404;

            return [<page.LazyComponent />, page.headerOptions] as const;
        }
    }, [route, pageHeaderPlaceholderElement]);

    return (
        <>
            <GlobalStyles
                styles={{
                    html: {
                        overflowY: "scroll",
                    },
                }}
            />

            <GlTemplate
                classes={{
                    headerWrapper: classes.header,
                    bodyAndFooterWrapper: classes.bodyAndFooterWrapper,
                }}
                header={
                    <div ref={headerRef}>
                        <Header isRetracted={isHeaderRetracted} />
                        <div ref={setPageHeaderPlaceholderElement}></div>
                    </div>
                }
                headerOptions={{
                    ...headerOptions,
                }}
                footer={
                    <GlFooter
                        key={route.name || ""}
                        className={classes.footer}
                        bottomDivContent={`[${t(
                            "web site source",
                        )}](https://github.com/InseeFrLab/www.sspcloud.fr) - [${t(
                            "trainings database",
                        )}](https://github.com/InseeFrLab/www.sspcloud.fr/blob/main/src/lib/educationalResources/educationalResources.ts)`}
                    />
                }
                body={<Suspense fallback={<SuspenseFallback />}>{pageNode}</Suspense>}
            />
        </>
    );
}

const { i18n } = declareComponentKeys<"web site source" | "trainings database">()({
    App,
});
export type I18n = typeof i18n;

function SuspenseFallback() {
    const { hideRootSplashScreen } = useSplashScreen();

    useEffect(() => {
        return () => {
            hideRootSplashScreen();
        };
    }, []);

    return null;
}

const useStyles = tss.withName({ App }).create({
    header: {
        zIndex: 4000,
        position: "fixed",
        backgroundColor: "transparent",
    },
    bodyAndFooterWrapper: {
        minHeight: "100vh",
        animation: `${keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
            `} 400ms`,
    },
    footer: {
        animation: `${keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
            `} 400ms`,
    },
});
