import { memo } from "react";
import { makeStyles, Text } from "app/theme";
import { Button, Icon } from "app/theme";
import { useTranslation, localizedStringToString, useLanguage, getFormattedDate } from "app/i18n";
import { capitalize } from "tsafe/capitalize";
import Avatar from "@material-ui/core/Avatar";
import { ReactComponent as FallbackSvg } from "app/assets/svg/singlePackage.svg";
import type { LocalizedString } from "app/i18n";

const useStyles = makeStyles()(theme => ({
    "root": {
        "borderRadius": 8,
        "boxShadow": theme.shadows[1],
        "backgroundColor": theme.colors.useCases.surfaces.surface1,
        "&:hover": {
            "boxShadow": theme.shadows[6],
        },
        "display": "flex",
        "flexDirection": "column",
    },
    "aboveDivider": {
        "padding": theme.spacing(3, 4),
        "borderBottom": `1px solid ${theme.colors.useCases.typography.textTertiary}`,
        "boxSizing": "border-box",
    },
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
    "belowDivider": {
        "padding": theme.spacing(4),
        "paddingTop": theme.spacing(3),
        "flex": 1,
        "display": "flex",
        "flexDirection": "column",
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
}));

/** Url undefined if is folder */

export type Props = Props.File | Props.Directory;

export declare namespace Props {
    export type Common = {
        className?: string;
        name: LocalizedString;
        abstract: LocalizedString;
        author: LocalizedString;
        imageUrl: string | undefined;
        timeRequired: number | undefined;
    };

    export type File = Common & {
        isDirectory: false;
        deploymentUrl?: string;
        articleUrl?: string;
    };

    export type Directory = Common & {
        isDirectory: true;
        onOpen(): void;
    };
}

export const DocumentationCard = memo((props: Props) => {
    const {
        className,
        name,
        abstract,
        author,
        imageUrl,
        timeRequired,
        ...rest
    } = props;

    const { classes, cx } = useStyles();

    const { t } = useTranslation("DocumentationCard");
    const { language } = useLanguage();

    return (
        <div className={cx(classes.root, className)}>
            <div className={classes.aboveDivider}>
                <div className={classes.topMetadata}>
                    {timeRequired && (
                        <>
                            <Icon
                                className={classes.timeRequiredIcon}
                                iconId="accessTime"
                                size="extra small"
                            />
                            <Text
                                typo="body 2"
                                className={classes.timeRequired}
                            >
                                {getFormattedDate(timeRequired, language)}
                            </Text>
                        </>
                    )}
                    <div style={{ "flex": 1 }} />
                    <Text typo="body 2">{localizedStringToString(author, language)}</Text>
                </div>
                <div className={classes.imageAndNameWrapper}>
                    <RoundLogo url={imageUrl} />
                    <Text className={classes.title} typo="object heading">
                        {capitalize(localizedStringToString(name, language))}
                    </Text>
                </div>
            </div>
            <div className={classes.belowDivider}>
                <div className={classes.body}>
                    <Text typo="body 1" className={classes.bodyTypo}>
                        {abstract}
                    </Text>
                </div>
                <div className={classes.buttonsWrapper}>
                    {
                        rest.isDirectory ?
                            <Button onClick={rest.onOpen} >
                                {t("open")}
                            </Button> :
                            <>
                                {rest.articleUrl !== undefined &&
                                    <Button href={rest.articleUrl} >
                                        {t("read")}
                                    </Button>}
                                {rest.deploymentUrl !== undefined &&
                                    <Button href={rest.deploymentUrl} >
                                        {t("run")}
                                    </Button>}
                            </>
                    }
                </div>
            </div>
        </div>
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
    };
}
