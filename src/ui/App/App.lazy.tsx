import { Suspense } from "react";
import { SuspenseFallback } from "./SuspenseFallback";
import { tss } from "ui/tss";
import { RouteProvider, useRoute } from "ui/routes";
import { createCoreProvider } from "core";
import { declareComponentKeys, useTranslation } from "ui/i18n";
import { GlTemplate } from "gitlanding/GlTemplate";
import { pages } from "ui/pages";
import { keyframes } from "tss-react";
import { AppHeader } from "./AppHeader";
import { GlFooter } from "gitlanding/GlFooter";
import { GlobalStyles } from "tss-react";
import { objectKeys } from "tsafe/objectKeys";
import { useSplashScreen } from "onyxia-ui";
import { useDomRect } from "powerhooks/useDomRect";

const { CoreProvider } = createCoreProvider({});

export default function App() {
    return (
        <RouteProvider>
            <CoreProvider>
                <ContextualizedApp />
            </CoreProvider>
        </RouteProvider>
    );
}

function ContextualizedApp() {
    const { isSplashScreenShown } = useSplashScreen();

    const route = useRoute();

    const {
        ref: headerRef,
        domRect: { height: headerHeight },
    } = useDomRect();

    const { t } = useTranslation({ App });
    const { classes } = useStyles({ headerHeight });

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
                        <AppHeader />
                    </div>
                }
                headerOptions={{
                    position: "sticky",
                    isRetracted: "smart",
                }}
                body={
                    <Suspense fallback={<SuspenseFallback />}>
                        {(() => {
                            for (const pageName of objectKeys(pages)) {
                                const page = pages[pageName];

                                if (page.routeGroup.has(route)) {
                                    return <page.LazyComponent />;
                                }
                            }

                            return <pages.page404.LazyComponent />;
                        })()}
                    </Suspense>
                }
                footer={
                    !isSplashScreenShown && (
                        <GlFooter
                            key={route.name || ""}
                            bottomDivContent={`[${t("web site source")}](https://github.com/InseeFrLab/www.sspcloud.fr/tree/main/catalogData)`}
                        />
                    )
                }
            />
        </>
    );
}

const { i18n } = declareComponentKeys<"web site source">()({
    App,
});
export type I18n = typeof i18n;

const useStyles = tss
    .withName({ App })
    .withParams<{ headerHeight: number }>()
    .create(({ headerHeight }) => ({
        header: {
            zIndex: 4000,
            position: "fixed",
            backgroundColor: "transparent",
        },
        bodyAndFooterWrapper: {
            paddingTop: headerHeight,
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
    }));
