import { memo } from "react";
import { makeStyles, Text } from "app/theme";
import { Button, Icon } from "app/theme";
import {
    useTranslation,
    localizedStringToString,
    useLanguage,
    getFormattedDate,
} from "app/i18n";
import { capitalize } from "tsafe/capitalize";
import Avatar from "@material-ui/core/Avatar";
import { ReactComponent as FallbackSvg } from "app/assets/svg/singlePackage.svg";
import { DataCard } from "lib/educationalResources/useCase";
import { elementsToSentence } from "app/tools/elementsToSentence";
import { Card } from "onyxia-ui/Card";
import { Tooltip } from "onyxia-ui/Tooltip";
import { createInjectLinks } from "app/tools/injectLinks";
import Link from "@material-ui/core/Link";

const { injectLinks } =createInjectLinks({
    "Link": ({ href, children }) => <Link href={href} target="_blank">{children}</Link>
});

const useStyles = makeStyles()(theme => ({
    "imageAndNameWrapper": {
        "display": "flex",
        "alignItems": "center",
    },
    "topMetadata": {
        "display": "flex",
        "alignItems": "center",
        "marginBottom": theme.spacing(3),
    },
    "timeRequiredIcon": {
        "color": theme.colors.useCases.typography.textDisabled,
    },
    "timeRequired": {
        "color": theme.colors.useCases.typography.textDisabled,
        "marginLeft": theme.spacing(1),
    },
    "title": {
        "marginLeft": theme.spacing(3),
    },
    "body": {
        "margin": 0,
        "flex": 1,
    },
    "bodyTypo": {
        "color": theme.colors.useCases.typography.textSecondary,
    },
    "buttonsWrapper": {
        "display": "flex",
        "justifyContent": "flex-end",
        "marginTop": theme.spacing(4),
    },
    "launchButton": {
        "marginLeft": theme.spacing(2),
    },
    "othersAuthors": {
        "color": theme.colors.useCases.typography.textFocus,
    },
    "authorsText": {
        "color": theme.colors.useCases.typography.textSecondary,
    }
}));

export type Props = Props.File | Props.Directory;

export declare namespace Props {
    export type Common = {
        className?: string;
    };

    export type File = Common & DataCard.File;

    export type Directory = Common &
        DataCard.Directory & {
            onOpen(): void;
        };
}

export const DocumentationCard = memo((props: Props) => {
    const { className, name, abstract, authors, imageUrl, timeRequired, ...rest } = props;

    const { classes } = useStyles();

    const { t } = useTranslation("DocumentationCard");
    const { language } = useLanguage();

    return (
        <Card
            aboveDivider={
                <>
                    <div className={classes.topMetadata}>
                        {timeRequired && (
                            <>
                                <Icon
                                    className={classes.timeRequiredIcon}
                                    iconId="accessTime"
                                    size="extra small"
                                />
                                <Text typo="body 2" className={classes.timeRequired}>
                                    {getFormattedDate(timeRequired, language)}
                                </Text>
                            </>
                        )}
                        <div style={{ "flex": 1 }} />
                        <Text className={classes.authorsText} typo="body 2">
                            {authors.length <= 2 ? (
                                elementsToSentence({
                                    "elements": authors.map(author =>
                                        localizedStringToString(author, language),
                                    ),
                                    language,
                                })
                            ) : (
                                <>
                                    {localizedStringToString(authors[0], language)}
                                    &nbsp;
                                    {t("and")}
                                    &nbsp;
                                    <Tooltip
                                        title={elementsToSentence({
                                            "elements": authors
                                                .slice(1)
                                                .map(author =>
                                                    localizedStringToString(
                                                        author,
                                                        language,
                                                    ),
                                                ),
                                            language,
                                        })}
                                    >
                                        <span className={classes.othersAuthors}>
                                            {authors.length - 1} {t("others")}
                                        </span>
                                    </Tooltip>
                                </>
                            )}
                        </Text>
                    </div>
                    <div className={classes.imageAndNameWrapper}>
                        <RoundLogo url={imageUrl} />
                        <Text className={classes.title} typo="object heading">
                            {capitalize(localizedStringToString(name, language))}
                        </Text>
                    </div>
                </>
            }
        >
            <div className={classes.body}>
                <Text typo="body 1" className={classes.bodyTypo}>
                    {injectLinks(localizedStringToString(abstract, language))}
                </Text>
            </div>
            <div className={classes.buttonsWrapper}>
                {rest.isDirectory ? (
                    <Button onClick={rest.onOpen} variant="secondary">
                        {t("open")}
                    </Button>
                ) : (
                    <>
                        {rest.articleUrl !== undefined && (
                            <Button
                                href={localizedStringToString(rest.articleUrl, language)}
                                variant="secondary"
                            >
                                {t("read")}
                            </Button>
                        )}
                        {rest.deploymentUrl !== undefined && (
                            <Button
                                href={localizedStringToString(
                                    rest.deploymentUrl,
                                    language,
                                )}
                                variant="secondary"
                            >
                                {t("run")}
                            </Button>
                        )}
                    </>
                )}
            </div>
        </Card>
    );
});

const { RoundLogo } = (() => {
    type RoundLogoProps = {
        className?: string;
        url: string | undefined;
    };

    const useStyles = makeStyles()(theme => ({
        "fallback": {
            "fill": theme.colors.useCases.typography.textPrimary,
        },
        "root": {
            ...(() => {
                const size = theme.iconSizesInPxByName["large"];

                return {
                    "width": size,
                    "height": size,
                };
            })(),
        },
    }));

    const RoundLogo = memo((props: RoundLogoProps) => {
        const { url, className } = props;

        const { classes, cx } = useStyles();

        return (
            <Avatar src={url} className={cx(classes.root, className)}>
                <FallbackSvg className={classes.fallback} />
            </Avatar>
        );
    });

    return { RoundLogo };
})();

export declare namespace DocumentationCard {
    export type I18nScheme = {
        read: undefined;
        open: undefined;
        run: undefined;
        and: undefined;
        others: undefined;
    };
}
