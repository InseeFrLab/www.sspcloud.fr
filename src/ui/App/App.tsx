import { useEffect, useState, useMemo, Suspense, type ReactNode } from "react";
import { tss } from "ui/tss";
import { RouteProvider, useRoute } from "ui/routes";
import { OnyxiaUi, useHeaderHeight } from "ui/theme";
import { createCoreProvider } from "core";
import { declareComponentKeys, useTranslation } from "ui/i18n";
import { GlTemplate, type HeaderOptions } from "gitlanding/GlTemplate";
import { useStateRef } from "powerhooks/useStateRef";
import { useDomRect } from "powerhooks/useDomRect";
import { pages } from "ui/pages";
import { keyframes } from "tss-react";
import { useSplashScreen } from "onyxia-ui";
import { assert, type Equals } from "tsafe/assert";

const { CoreProvider } = createCoreProvider({});

export default function App() {
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
    const documentationStickyHeaderRef = useStateRef<HTMLDivElement>(null);
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

            if (home.routeGroup.has(route)) {
                return [< page.LazyComponent/>, Page.headerOptions] as const;
            }
        }

        {
            const Page = Documentation;

            if (Page.routeGroup.has(route)) {
                return [
                    documentationStickyHeaderRef.current !== null && (
                        <Page
                            stickyPageHeader={documentationStickyHeaderRef.current}
                            setIsHeaderRetracted={setIsHeaderRetracted}
                            route={route}
                        />
                    ),
                    Page.headerOptions,
                ] as const;
            }
        }

        return [
            <FourOhFour />,
            id<HeaderOptions>({
                position: "sticky",
                isRetracted: false,
            }),
        ] as const;
    }, [route, documentationStickyHeaderRef.current]);


    return (
        <GlTemplate
            classes={{
                headerWrapper: classes.header,
                bodyAndFooterWrapper: classes.bodyAndFooterWrapper
            }}
            header={
                <div ref={headerRef}>
                    <AppHeader isRetracted={isHeaderRetracted} />
                    <div ref={documentationStickyHeaderRef}></div>
                </div>
            }
            headerOptions={{
                ...headerOptions,
            }}
            footer={
                <GlFooter
                    bottomDivContent={`[${t(
                        "web site source",
                    )}](https://github.com/InseeFrLab/www.sspcloud.fr) - [${t(
                        "trainings database",
                    )}](https://github.com/InseeFrLab/www.sspcloud.fr/blob/main/src/lib/educationalResources/educationalResources.ts)`}
                />
            }
            body={
                <Suspense fallback={<SuspenseFallback />}>
                    {pageNode}
                </Suspense>
            }
        />
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
        animation: `${keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
            `} 400ms`
    }
});
