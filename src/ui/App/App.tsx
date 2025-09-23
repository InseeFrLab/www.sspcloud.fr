import { Suspense } from "react";
import { SplashScreen } from "ui/shared/SplashScreen";
import { useRoute } from "ui/routes";
import { triggerCoreBootstrap } from "core";
import { GlTemplate } from "gitlanding/GlTemplate";
import { pages } from "ui/pages";
import { AppHeader } from "./AppHeader";
import { GlobalStyles } from "tss-react";
import { objectKeys } from "tsafe/objectKeys";
import { AppFooter } from "./AppFooter";
import { routes } from "ui/routes";
import { URLS } from "ui/URLS";
import { useLang } from "ui/i18n";

triggerCoreBootstrap({
    getDocumentPageUrl: routeParams => routes.document(routeParams).link.href,
    gitHubUrl: URLS.github,
});

export function App() {
    const { lang } = useLang();

    return (
        <>
            <GlTemplate
                key={lang}
                header={<AppHeader />}
                headerOptions={{
                    position: "sticky",
                    isRetracted: "smart",
                }}
                body={
                    <Suspense fallback={<SplashScreen />}>
                        <Page />
                    </Suspense>
                }
                footer={<AppFooter />}
            />
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
