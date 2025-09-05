import { useEffect, useState, useMemo, Suspense } from "react";
import { tss } from "ui/tss";
import { RouteProvider, useRoute } from "ui/routes";
import { OnyxiaUi } from "ui/theme";
import { createCoreProvider } from "core";
import { declareComponentKeys, useTranslation } from "ui/i18n";
import { GlTemplate } from "gitlanding/GlTemplate";
import { useDomRect } from "powerhooks/useDomRect";
import { pages } from "ui/pages";
import { keyframes } from "tss-react";
import { useSplashScreen } from "onyxia-ui";
import { assert, type Equals } from "tsafe/assert";
import { AppHeader } from "./AppHeader";
import { GlFooter } from "gitlanding/GlFooter";
import { GlobalStyles } from "tss-react";
import { LayoutUtilsProvider } from "./layoutUtils";
import { Evt } from "evt";
import { useConst } from "powerhooks/useConst";

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

    const evtHeaderPortalContainerElement = useConst(()=> Evt.create<HTMLDivElement | null>(null));

    const {
        ref: ghHeaderRef,
        domRect: { height: glHeaderHeight },
    } = useDomRect();
    const [isAppHeaderRetracted, setIsAppHeaderRetracted] = useState(false);

    const route = useRoute();

    const { t } = useTranslation({ App });
    const { classes } = useStyles();

    const pageNode = useMemo(() => {
        const { home, catalog, renderMarkdown, page404, ...rest } = pages;

        assert<Equals<typeof rest, {}>>;

        {
            const page = home;

            if (page.routeGroup.has(route)) {
                return <page.LazyComponent />;
            }
        }

        {
            const page = catalog;

            if (page.routeGroup.has(route)) {
                return <page.LazyComponent />;
            }
        }

        {
            const page = renderMarkdown;

            if (page.routeGroup.has(route)) {
                return <page.LazyComponent />;
            }
        }

        {
            const page = page404;

            return <page.LazyComponent />;
        }
    }, [route]);

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
                    <div ref={ghHeaderRef}>
                        <AppHeader isRetracted={isAppHeaderRetracted} />
                        <div
                            ref={element => {
                                evtHeaderPortalContainerElement.state = element;
                            }}
                        />
                    </div>
                }
                headerOptions={{
                    position: "sticky",
                    isRetracted: route.name === "catalog" ? false : "smart",
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
                body={
                    <Suspense fallback={<SuspenseFallback />}>
                        <LayoutUtilsProvider
                            glHeaderHeight={glHeaderHeight}
                            setIsAppHeaderRetracted={setIsAppHeaderRetracted}
                            evtHeaderPortalContainerElement={evtHeaderPortalContainerElement}
                        >
                            {pageNode}
                        </LayoutUtilsProvider>
                    </Suspense>
                }
            />
        </>
    );
}

const { i18n } = declareComponentKeys<"web site source" | "trainings database">()({
    App,
});
export type I18n = typeof i18n;

function SuspenseFallback() {
    const { hideRootSplashScreen, showSplashScreen, hideSplashScreen } =
        useSplashScreen();

    useEffect(() => {
        showSplashScreen({ enableTransparency: true });
        return () => {
            hideRootSplashScreen();
            hideSplashScreen();
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
