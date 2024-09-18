import { useEffect, useMemo, useState, memo } from "react";
import { useStateRef } from "powerhooks/useStateRef";
import { useRoute } from "../router";
import { FourOhFour } from "../pages/FourOhFour";
import { GlTemplate } from "gitlanding/GlTemplate";
import { GlFooter } from "gitlanding/GlFooter";
import { useSplashScreen } from "onyxia-ui";
import { Home } from "../pages/Home";
import { Documentation } from "../pages/Documentation";
import { AppHeader } from "./AppHeader";
import type { HeaderOptions } from "gitlanding/GlTemplate";
import { id } from "tsafe/id";
import { useHeaderHeight } from "../theme";
import { tss } from "tss";
import { useDomRect } from "powerhooks/useDomRect";
import { useTranslation } from "i18n";
import { declareComponentKeys } from "i18nifty";

/* spell-checker: disable */
export const App = memo(() => {
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

    const [pageNode, headerOptions] = useMemo(() => {
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
                "position": "sticky",
                "isRetracted": false,
            }),
        ] as const;
    }, [route, documentationStickyHeaderRef.current]);

    const { classes } = useStyles();

    return (
        <GlTemplate
            classes={{
                "headerWrapper": classes.header,
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
            body={pageNode}
        />
    );
});

const useStyles = tss.create({
    "header": {
        "zIndex": 4000,
        "position": "fixed",
    },
});

export const { i18n } = declareComponentKeys<"web site source" | "trainings database">()({
    App,
});
