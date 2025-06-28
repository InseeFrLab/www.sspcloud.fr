import { createGroup } from "type-route";
import { routes } from "../router";
import { ExamplesCard } from "components/ExamplesCard";
import { tss } from "tss";
import { declareComponentKeys, useTranslation } from "i18n";
import { useHeaderHeight } from "../theme";
import type { HeaderOptions } from "gitlanding/GlTemplate";
import { id } from "tsafe/id";

Examples.routeGroup = createGroup([routes.examples]);

Examples.headerOptions = id<HeaderOptions>({
    position: "sticky",
    isRetracted: "smart",
});

export function Examples() {
    const { t } = useTranslation({ Examples });
    const { headerHeight } = useHeaderHeight();
    const { classes } = useStyles({ headerHeight });

    return (
        <div className={classes.root}>
            <div className={classes.hero}>
                <h1 className={classes.title}>{t("title")}</h1>
                <p className={classes.subtitle}>{t("subtitle")}</p>
            </div>

            <ExamplesCard className={classes.examplesCard} />
        </div>
    );
}

const useStyles = tss
    .withParams<{
        headerHeight: number | undefined;
    }>()
    .withName({ Examples })
    .create(({ theme, headerHeight }) => ({
        root: {
            paddingTop: headerHeight ?? 0,
            minHeight: "100vh",
        },
        hero: {
            textAlign: "center",
            ...theme.spacing.rightLeft("padding", `${theme.spacing(4)}px`),
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
            maxWidth: 800,
            margin: "0 auto",
        },
        title: {
            ...theme.typography.variants["page heading"].style,
            marginBottom: theme.spacing(3),
            color: theme.colors.useCases.typography.textPrimary,
        },
        subtitle: {
            ...theme.typography.variants.subtitle.style,
            color: theme.colors.useCases.typography.textSecondary,
            lineHeight: 1.6,
        },
        examplesCard: {
            marginTop: theme.spacing(4),
            marginBottom: theme.spacing(4),
        },
    }));

export const { i18n } = declareComponentKeys<"title" | "subtitle">()({ Examples });
