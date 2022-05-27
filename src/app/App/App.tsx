import { useEffect, useMemo, useState, memo, useRef } from "react";
import { useRoute } from "../router";
import { FourOhFour } from "../pages/FourOhFour";
import { GlTemplate } from "gitlanding/GlTemplate";
import { useSplashScreen } from "onyxia-ui";
import { Home } from "../pages/Home";
import { Documentation } from "../pages/Documentation";
import { AppHeader } from "./AppHeader";
import type { HeaderOptions } from "gitlanding/GlTemplate";
import { id } from "tsafe/id";
import { makeStyles, useHeaderHeight } from "../theme";
import { useDomRect } from "powerhooks/useDomRect";


/* spell-checker: disable */
export const App = memo(() => {
    const route = useRoute();
    const documentationStickyHeaderRef = useRef<HTMLDivElement>(null);
    const { setHeaderHeight } = useHeaderHeight();

    const { ref: headerRef, domRect: { height: headerHeight } } = useDomRect();

    useEffect(() => {
        if (headerHeight === 0) {
            return;
        }

        setHeaderHeight(headerHeight);

    }, [headerHeight])

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
                "headerWrapper": classes.header
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
        >
            {pageNode}
        </GlTemplate>
    );
});

const useStyles = makeStyles()(
    () => ({
        "header": {
            "zIndex": 4000,
            "position": "fixed"
        }
    })
);

export declare namespace App {
    export type I18nScheme = {
        documentation: undefined;
        datalab: undefined;
        contributing: undefined;
        community: undefined;
    };
}
