import { useState, Suspense } from "react";
import { tss } from "ui/tss";
import { RouteProvider, useRoute } from "ui/routes";
import { createCoreProvider } from "core";
import { declareComponentKeys, useTranslation } from "ui/i18n";
import { GlTemplate } from "gitlanding/GlTemplate";
import { useDomRect } from "powerhooks/useDomRect";
import { pages } from "ui/pages";
import { keyframes } from "tss-react";
import { AppHeader } from "./AppHeader";
import { GlFooter } from "gitlanding/GlFooter";
import { GlobalStyles } from "tss-react";
import { LayoutUtilsProvider } from "./layoutUtils";
import { Evt } from "evt";
import { useConst } from "powerhooks/useConst";
import { objectKeys } from "tsafe/objectKeys";
import { SuspenseFallback } from "./SuspenseFallback";

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
    const evtHeaderPortalContainerElement = useConst(() =>
        Evt.create<HTMLDivElement | null>(null),
    );

    const {
        ref: ghHeaderRef,
        domRect: { height: glHeaderHeight },
    } = useDomRect();
    const [isAppHeaderRetracted, setIsAppHeaderRetracted] = useState(false);

    const route = useRoute();

    const { t } = useTranslation({ App });
    const { classes } = useStyles();

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
                body={
                    <Suspense fallback={<SuspenseFallback />}>
                        <LayoutUtilsProvider
                            glHeaderHeight={glHeaderHeight}
                            setIsAppHeaderRetracted={setIsAppHeaderRetracted}
                            evtHeaderPortalContainerElement={
                                evtHeaderPortalContainerElement
                            }
                        >
                            {(() => {
                                for (const pageName of objectKeys(pages)) {
                                    const page = pages[pageName];

                                    if (page.routeGroup.has(route)) {
                                        return <page.LazyComponent />;
                                    }
                                }

                                return <pages.page404.LazyComponent />;
                            })()}
                        </LayoutUtilsProvider>
                    </Suspense>
                }
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
            />
        </>
    );
}

const { i18n } = declareComponentKeys<"web site source" | "trainings database">()({
    App,
});
export type I18n = typeof i18n;

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
