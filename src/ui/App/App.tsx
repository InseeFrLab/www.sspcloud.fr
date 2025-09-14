import { Suspense } from "react";
import { SuspenseFallback } from "ui/shared/SuspenseFallback";
import { RouteProvider, useRoute } from "ui/routes";
import { triggerCoreBootstrap } from "core";
import { GlTemplate } from "gitlanding/GlTemplate";
import { pages } from "ui/pages";
import { AppHeader } from "./AppHeader";
import { GlobalStyles } from "tss-react";
import { objectKeys } from "tsafe/objectKeys";
import { AppFooter } from "./AppFooter";
import { routes } from "ui/routes";
import { URLS } from "ui/URLS";

triggerCoreBootstrap({
    getDocumentPageUrl: routeParams => routes.document(routeParams).link.href,
    gitHubUrl: URLS.github,
});

export function App() {
    return (
        <>
            <RouteProvider>
                <GlTemplate
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
