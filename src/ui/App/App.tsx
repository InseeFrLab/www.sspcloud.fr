import { Suspense } from "react";
import { SuspenseFallback } from "ui/shared/SuspenseFallback";
import { tss } from "ui/tss";
import { RouteProvider, useRoute } from "ui/routes";
import { bootstrapCore } from "core";
import { GlTemplate } from "gitlanding/GlTemplate";
import { pages } from "ui/pages";
import { keyframes } from "tss-react";
import { AppHeader } from "./AppHeader";
import { GlobalStyles } from "tss-react";
import { objectKeys } from "tsafe/objectKeys";
import { AppFooter } from "./AppFooter";
import { routes } from "ui/routes";

bootstrapCore({
    getDocumentPageUrl: ({ path }) => routes.document({ path }).link.href,
});

export function App() {
    const { classes } = useStyles();

    return (
        <>
            <RouteProvider>
                <GlTemplate
                    classes={{
                        bodyAndFooterWrapper: classes.bodyAndFooterWrapper,
                    }}
                    header={<AppHeader />}
                    headerOptions={{
                        position: "sticky",
                        isRetracted: "smart",
                    }}
                    body={
                        <Suspense fallback={<SuspenseFallback />}>
                            <Page />
                        </Suspense>
                    }
                    footer={<AppFooter />}
                />
            </RouteProvider>
            <GlobalStyles
                styles={{
                    html: {
                        overflowY: "scroll",
                    },
                }}
            />
        </>
    );
}

function Page() {
    const route = useRoute();

    for (const pageName of objectKeys(pages)) {
        const page = pages[pageName];

        if (page.routeGroup.has(route)) {
            return <page.LazyComponent />;
        }
    }

    return <pages.page404.LazyComponent />;
}

const useStyles = tss.withName({ App }).create({
    bodyAndFooterWrapper: {
        // NOTE: In top of being cute, this animation is very important
        // because we dynamically measure the height of the header and place the content
        // bellow, this avoid visual layout shift.
        animation: `${keyframes`
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            `} 200ms`,
    },
});
