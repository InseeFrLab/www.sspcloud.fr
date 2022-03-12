import { memo } from "react";
import { makeStyles, Text } from "app/theme";
import { useTranslation } from "app/i18n/useTranslations";
import { useLanguage } from "app/i18n/useLanguage";
import { routes } from "app/router";
import { GlHeader } from "gitlanding/GlHeader";
import { useDomRect } from "powerhooks/useDomRect";

export type Props = {
    className?: string;
    isRetracted?: boolean;
};


export const AppHeader = memo((props: Props) => {
    const { className, isRetracted } = props;

    const { t } = useTranslation("AppHeader");
    const { language } = useLanguage();
    const { ref, domRect: { height: headerHeight } } = useDomRect();

    const { classes, theme } = useStyles({
        "isRetracted": isRetracted ?? false,
        headerHeight
    });

    return (
        <div className={classes.root} ref={ref}>
            <GlHeader
                className={className}
                title={
                    <a className={classes.titleWrapper} {...routes.home().link}>
                        {(() => {
                            const out = [
                                <Text
                                    key={0}
                                    typo="section heading"
                                    className={classes.communityText}
                                >
                                    {t("community")}
                                </Text>,
                                <div key={1} style={{ "width": theme.spacing(3) }} />,
                                <Text
                                    key={2}
                                    typo="section heading"
                                    className={classes.sspCloudText}
                                    color="focus"
                                >
                                    SSP Cloud
                                </Text>,
                            ];

                            if (language === "en") {
                                return out.reverse();
                            }

                            return out;
                        })()}
                    </a>
                }
                links={[
                    {
                        "label": t("trainings and tutorials"),
                        ...routes.documentation().link,
                    },
                    {
                        "label": t("the onyxia datalab"),
                        "href": "https://datalab.sspcloud.fr",
                    },
                    {
                        "label": t("our GitLab forge"),
                        "href": "https://git.lab.sspcloud.fr/",
                    },
                    {
                        "label": t("contribute"),
                        "href": "https://docs.sspcloud.fr/comment-contribuer-1/comment-contribuer",
                    },
                ]}
            />

        </div>
    );
});

const useStyles = makeStyles<{ isRetracted: boolean; headerHeight: number }>()(
    (theme, { isRetracted, headerHeight }) => ({
        "root": {
            "transition": "margin-top 250ms",
            "margin-top": isRetracted ? -(headerHeight + theme.spacing(3)) : 0
        },
        "titleWrapper": {
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "textDecoration": "none",
        },
        "sspCloudText": {
            "fontWeight": 500,
        },
        "communityText": {
            "fontWeight": 600,
        },
    }));

const links = [
    "trainings and tutorials",
    "the onyxia datalab",
    "our GitLab forge",
    "contribute",
] as const;

export declare namespace AppHeader {
    export type I18nScheme = {
        "community": undefined;
    } & Record<typeof links[number], undefined>;
}
