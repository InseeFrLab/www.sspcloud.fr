import { memo } from "react";
import { makeStyles, Text } from "theme";
import { routes } from "router";
import { GlHeader } from "gitlanding/GlHeader";
import { useDomRect } from "powerhooks/useDomRect";
import { declareComponentKeys } from "i18nifty";
import { useTranslation, useLang } from "i18n";
import { LanguageSelect } from "../theme";
import { GlobalStyles } from "tss-react";


export type Props = {
    className?: string;
    isRetracted?: boolean;
};

export const AppHeader = memo((props: Props) => {
    const { className, isRetracted } = props;

    const { t } = useTranslation({ AppHeader });
    const { lang, setLang } = useLang();
    

    const {
        ref,
        domRect: { height: headerHeight },
    } = useDomRect();

    const { classes, theme } = useStyles({
        "isRetracted": isRetracted ?? false,
        headerHeight,
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

                            if (lang === "en") {
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
                customItemEnd={{
                    "behaviorOnSmallDevice": "normal",
                    "item": (
                        <>
                        <GlobalStyles
                            styles={{
                                "#language-menu": {
                                    "zIndex": 4001
                                }
                            }}
                        />
                    <LanguageSelect
                        language={lang}
                        onLanguageChange={setLang}
                        variant="big"
                    />
                        </>
                    )
                }}
                enableDarkModeSwitch={true}
            />
        </div>
    );
});

const useStyles = makeStyles<{ isRetracted: boolean; headerHeight: number }>()(
    (...[, { isRetracted, headerHeight }]) => ({
        "root": {
            "transition": "margin-top 250ms",
            "margin-top": isRetracted ? -headerHeight : 0,
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
        }
    }),
);

export const { i18n } = declareComponentKeys<
    | "trainings and tutorials"
    | "the onyxia datalab"
    | "our GitLab forge"
    | "contribute"
    | "community"
>()({ AppHeader });

