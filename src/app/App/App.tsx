import { splashScreen, ThemeProvider } from "../theme";
import { useEffect, useMemo, useState, memo } from "react";
import { useRoute } from "../router";
import { FourOhFour } from "../pages/FourOhFour";
import { GlTemplate } from "gitlanding/GlTemplate";
import { useSplashScreen } from "onyxia-ui";
import { Home } from "../pages/Home";
import { Documentation } from "../pages/Documentation";
import { AppHeader } from "./AppHeader";
import type { HeaderOptions } from "gitlanding/GlTemplate";
import { id } from "tsafe/id";

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

    const [isHeaderRetracted, setIsHeaderRetracted] = useState(false);

    const [pageNode, headerOptions] = useMemo(
        () => {

            {
                const Page = Home;

                if (Page.routeGroup.has(route)) {
                    return [<Page />, Page.headerOptions] as const;
                }
            }

            {
                const Page = Documentation;

                if (Page.routeGroup.has(route)) {
                    return [
                        <Page
                            onIsHeaderRetractedValueChange={setIsHeaderRetracted}
                            route={route}
                        />, Page.headerOptions] as const;
                }
            }

            return [<FourOhFour />,
            id<HeaderOptions>({
                "position": "fixed",
                "isRetracted": false
            })
            ] as const;

        },
        [route]
    );

    return (
        <ThemeProvider splashScreen={splashScreen}>
            <GlTemplate
                header={<AppHeader />}
                headerOptions={
                    headerOptions.position === "top of page" ?
                        { ...headerOptions, "isRetracted": isHeaderRetracted } :
                        headerOptions
                }
            >
                {pageNode}
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
