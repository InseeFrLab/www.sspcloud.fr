import { memo } from "react";
import { declareComponentKeys, useTranslation } from "ui/i18n";
import { useSplashScreen } from "onyxia-ui";
import { useRoute } from "ui/routes";
import { tss } from "ui/tss";
import { keyframes } from "tss-react";
import Link from "@mui/material/Link";
import { URLS } from "ui/URLS";
import { alpha } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";

export const AppFooter = memo(() => {
    const route = useRoute();
    const { isSplashScreenShown } = useSplashScreen();
    const { t } = useTranslation({ AppFooter });

    const { classes } = useStyles();

    if (isSplashScreenShown) {
        return null;
    }

    return (
        <div
            // NOTE: The key and the animation is to fix the classic problem of the footer
            // appearing when the content of the page is loading.
            key={route.name || ""}
            className={classes.root}
        >
            <Link className={classes.link} href={URLS.github} target="_blank">
                <GitHubIcon />
                {t("web site source")}
            </Link>
        </div>
    );
});

const useStyles = tss.withName({ AppFooter }).create(({ theme }) => ({
    root: {
        backgroundColor: alpha(theme.colors.useCases.surfaces.background, 0.5),
        borderTop: `1px solid ${theme.colors.useCases.surfaces.surface2}`,
        ...theme.spacing.topBottom("padding", 3),
        textAlign: "center",
        marginTop: theme.spacing(5),
        animation: `${keyframes`
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
            `} 500ms`,
    },
    link: {
        display: "inline-flex",
        alignItems: "center",
        gap: theme.spacing(2),
    },
}));

const { i18n } = declareComponentKeys<"web site source">()({
    AppFooter,
});

export type I18n = typeof i18n;
