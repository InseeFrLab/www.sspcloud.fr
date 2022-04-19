import { memo } from "react";
import { useTranslation } from "../i18n/useTranslations";
import { makeStyles, Text } from "../theme";


export const FourOhFour = memo(() => {
    const { t } = useTranslation("FourOhFour");

    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <Text typo="page heading">{t("not found")} 😥</Text>
        </div>
    );
});

export declare namespace FourOhFour {
    export type I18nScheme = {
        "not found": undefined;
    };
}

const useStyles = makeStyles({ "name": { FourOhFour } })(theme => ({
    "root": {
        "height": "100vh",
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "backgroundColor": theme.colors.useCases.surfaces.background,
    },
}));
