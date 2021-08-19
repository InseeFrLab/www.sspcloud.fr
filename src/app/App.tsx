import { splashScreen, Text, ThemeProvider } from "./theme";
import { useEffect, memo } from "react";
import { useRoute } from "./router";
import { FourOhFour } from "./pages/FourOhFour";
import { GlTemplate } from "gitlanding/GlTemplate";
import { GlHeader } from "gitlanding/GlHeader";
import { useSplashScreen } from "onyxia-ui";
import { useTranslation } from "./i18n/useTranslations";
import { Home } from "./pages/Home";
import { Documentation } from "./pages/Documentation";
import { routes } from "./router";
import { css } from "tss-react";
import { evtLanguage } from "./i18n/useLanguage";

evtLanguage.state = "fr";


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

    const { t } = useTranslation("App");


    return (
        <ThemeProvider splashScreen={splashScreen}>
            <GlTemplate
                header={
                    <GlHeader
                        links={[
                            {
                                "label": t("documentation"),
                                "link": routes.documentation().link,
                            },
                            {
                                "label": t("datalab"),
                                "link": { "href": "https://datalab.sspcloud.fr" }
                            },
                            {
                                "label": t("contributing"),
                                "link": {
                                    "href": "https://docs.sspcloud.fr/comment-contribuer-1/comment-contribuer"
                                }
                            }
                        ]}
                        title={
                            <a {...routes.home().link} style={{ "display": "block", "textDecoration": "none" }}>
                                <Text typo="subtitle">
                                    {t("community")} <span
                                        className={css({
                                            "color": "#ff562c"
                                        })}
                                    >
                                        SSP Cloud
                                    </span>
                                </Text>
                            </a>
                        }
                        enableDarkModeSwitch={true}
                    />
                }
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
