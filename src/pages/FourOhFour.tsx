
import { memo } from "react";
import { useTranslation } from "../i18n/useTranslations";
import { makeStyles, Text } from "../theme";

export type Props = {
    className?: string;
};

const useStyles = makeStyles()(
    theme => ({
        "root": {
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "backgroundColor": theme.colors.useCases.surfaces.background,
        }
    })
);

export const FourOhFour = memo((props: Props) => {

    const { className } = props;

    const { t } = useTranslation("FourOhFour");

    const { classes, cx } = useStyles();

    return (
        <div className={cx(classes.root, className)}>
            <Text typo="page heading">
                {t("not found")} 😥
            </Text>
        </div>
    );

});

export declare namespace FourOhFour {

    export type I18nScheme = {
        'not found': undefined;
    };

}

