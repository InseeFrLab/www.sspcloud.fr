import { useState, useEffect, memo } from "react";
import { createGroup } from "type-route";
import { routes } from "app/router";
import { useTranslation } from "app/i18n/useTranslations";
import { PageHeader } from "app/theme";
import { SearchBar } from "onyxia-ui/SearchBar";
import { makeStyles, Text } from "app/theme";
import { ReactComponent as DocumentationNotFound } from "app/assets/svg/documentationNotFound.svg";
import Link from "@material-ui/core/Link";
import type { Route } from "type-route";
import { useConstCallback } from "powerhooks/useConstCallback";
import { Evt } from "evt";
import type { UnpackEvt } from "evt";
import type { SearchBarProps } from "onyxia-ui/SearchBar";
import { resources } from "./resources";
import { breakpointsValues } from "onyxia-ui";
import { DocumentationCard } from "./DocumentationCard";
import type { Props as DocumentationCardProps } from "./DocumentationCard";
import { useCallbackFactory } from "powerhooks/useCallbackFactory";

Documentation.routeGroup = createGroup([routes.documentation]);

type PageRoute = Route<typeof Documentation.routeGroup>;

export type Props = {
    route: PageRoute;
};

const useStyle = makeStyles<{ filteredCardCount: number }>()(
    (theme, { filteredCardCount }) => ({
        "root": {
            "height": "100%",
            "display": "flex",
            "flexDirection": "column"
        },
        "cardsWrapper": {
            "flex": 1,
            "overflow-y": "auto",
            "overflow-x": "visible",
            "marginTop": theme.spacing(4),
            //To accommodate the scrollbar
            "padding": theme.spacing(0,3)
        },
        "cards": {
            ...(filteredCardCount === 0
                ? {}
                : {
                    "display": "grid",
                    "gridTemplateColumns": `repeat(${(() => {
                        if (
                            theme.responsive.windowInnerWidth >=
                            breakpointsValues.xl
                        ) {
                            return 4;
                        }
                        if (
                            theme.responsive.windowInnerWidth >=
                            breakpointsValues.lg
                        ) {
                            return 3;
                        }
                        return 2;
                    })()},1fr)`,
                    "gap": theme.spacing(4),
                }),
        },
        "belowCards": {
            "height": theme.spacing(4)
        }
    }));

export function Documentation(props: Props) {

    const { route } = props;

    const { t } = useTranslation("Documentation");

    const setSearch = useConstCallback(
        (search: string) =>
            routes
                .documentation({ search })
                .replace(),
    );

    const [evtSearchBarAction] = useState(() =>
        Evt.create<UnpackEvt<NonNullable<SearchBarProps["evtAction"]>>>(),
    );

    const onGoBackClick = useConstCallback(() =>
        evtSearchBarAction.post("CLEAR SEARCH"),
    );

    const [filteredCards, setFilteredCards] = useState<
        (
            DocumentationCardProps.Common & 
            { url?: string; }
        )[]
    >(resources);

    useEffect(
        () => {

            const timer = setTimeout(() =>
                setFilteredCards(
                    resources
                        .filter(
                            resource => JSON.stringify(resource)
                                .toLocaleLowerCase()
                                .includes(route.params.search.toLowerCase())
                        )
                ),
                500
            );

            return () => clearTimeout(timer);

        },
        [route.params.search]
    );

    const { classes } = useStyle({ "filteredCardCount": filteredCards.length });

    const onOpenFactory = useCallbackFactory(
        (
            [name]: [string]
        ) => {
            console.log(`open ${name}`);
        }
    );

    return (
        <div className={classes.root}>
            <PageHeader
                title={t("pageTitle")}
                helpTitle={t("pageHelpTitle")}
                helpContent={t("pageHelpContent")}
            />
            <SearchBar
                search={route.params.search}
                onSearchChange={setSearch}
                placeholder={t("search")}
                evtAction={evtSearchBarAction}
            />
            <div className={classes.cardsWrapper}>
                <div className={classes.cards}>
                    {filteredCards.length === 0 ? (
                        <NoMatches
                            search={route.params.search}
                            onGoBackClick={onGoBackClick}
                        />
                    ) : (
                        filteredCards.map(({ url, ...props }) =>
                            <DocumentationCard
                                key={JSON.stringify(props)}
                                {...props}
                                {...(url !== undefined ?
                                    {
                                        "isDirectory": false,
                                        url,
                                    } : {
                                        "isDirectory": true,
                                        "onOpen": onOpenFactory(props.name)
                                    }
                                )}
                            />
                        )
                    )}
                </div>
                <div className={classes.belowCards}/>
            </div>
        </div>
    );

}



const { NoMatches } = (() => {

    type Props = {
        search: string;
        onGoBackClick(): void;
    };

    const useStyles = makeStyles()(theme => ({
        "root": {
            "display": "flex",
            "justifyContent": "center",
        },
        "innerDiv": {
            "textAlign": "center",
            "maxWidth": "20%",
        },
        "svg": {
            "fill": theme.colors.palette.dark.greyVariant2,
            "width": "10%",
            "margin": 0,
        },
        "h2": {
            "margin": theme.spacing(4, 0),
        },
        "typo": {
            "marginBottom": theme.spacing(1),
            "color": theme.colors.palette.light.greyVariant3,
        },
        "link": {
            "cursor": "pointer",
        },
    }));

    const NoMatches = memo((props: Props) => {
        const { search, onGoBackClick } = props;

        const { classes } = useStyles();

        const { t } = useTranslation("Documentation");

        return (
            <div className={classes.root}>
                <div className={classes.innerDiv}>
                    <DocumentationNotFound className={classes.svg} />
                    <Text typo="page heading" className={classes.h2}>
                        {t("no documentation found")}
                    </Text>
                    <Text className={classes.typo} typo="body 1">
                        {t("no result found", { "forWhat": search })}
                    </Text>
                    <Text className={classes.typo} typo="body 1">
                        {t("check spelling")}
                    </Text>
                    <Link className={classes.link} onClick={onGoBackClick}>
                        {t("go back")}
                    </Link>
                </div>
            </div>
        );
    });

    return { NoMatches };
})();



export declare namespace Documentation {

    export type I18nScheme = {
        search: undefined;
        pageTitle: undefined;
        pageHelpTitle: undefined;
        pageHelpContent: undefined;
        'no documentation found': undefined;
        'no result found': { forWhat: string; };
        'check spelling': undefined;
        'go back': undefined;
    };

}