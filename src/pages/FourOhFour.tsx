import { memo } from "react";
import { Text } from "onyxia-ui/Text";
import { tss } from "tss";
import { declareComponentKeys } from "i18nifty";
import { useTranslation } from "i18n";

export const FourOhFour = memo(() => {
    const { classes } = useStyles();
    const { t } = useTranslation({ FourOhFour });

    return (
        <div className={classes.root}>
            <Text typo="page heading">{t("not found")} 😥</Text>
        </div>
    );
});

const useStyles = tss.withName({ FourOhFour }).create(({ theme }) => ({
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.colors.useCases.surfaces.background,
    },
}));

const { i18n } = declareComponentKeys<"not found">()({
    FourOhFour,
});

export type I18n = typeof i18n;
