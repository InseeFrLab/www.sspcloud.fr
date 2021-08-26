import { splashScreen, ThemeProvider } from "../theme";
import { useEffect, memo } from "react";
import { useRoute } from "../router";
import { FourOhFour } from "../pages/FourOhFour";
import { GlTemplate } from "gitlanding/GlTemplate";
import { useSplashScreen } from "onyxia-ui";
import { Home } from "../pages/Home";
import { Documentation } from "../pages/Documentation";
import { AppHeader } from "./AppHeader";

/* spell-checker: disable */
export const App = memo(() => {
    const route = useRoute();

    {
        const { hideRootSplashScreen } = useSplashScreen();

        useEffect(
            () => {
                hideRootSplashScreen();
            },
            // eslint-disable-next-line react-hooks/exhaustive-deps
            [],
        );
    }

    return (
        <ThemeProvider splashScreen={splashScreen}>
            <GlTemplate
                header={<AppHeader />}
            >
                {(() => {
                    {
                        const Page = Home;

                        if (Page.routeGroup.has(route)) {
                            return <Page />;
                        }
                    }

                    {
                        const Page = Documentation;

                        if (Page.routeGroup.has(route)) {
                            return <Page route={route} />;
                        }
                    }

                    return <FourOhFour />;
                })()}
            </GlTemplate>
        </ThemeProvider>
    );
});

export declare namespace App {
    export type I18nScheme = {
        documentation: undefined;
        datalab: undefined;
        contributing: undefined;
        community: undefined;
    };
}
