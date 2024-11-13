import { memo } from "react";
import { Text } from "onyxia-ui/Text";
import { tss } from "tss";
import { Button } from "onyxia-ui/Button";
import { Icon } from "onyxia-ui/Icon";
import { useTranslation, useResolveLocalizedString, useLang, type Language } from "i18n";
import { capitalize } from "tsafe/capitalize";
import Avatar from "@mui/material/Avatar";
import { LazySvg } from "onyxia-ui/tools/LazySvg";
//import { ReactComponent as FallbackSvg } from "assets/svg/singlePackage.svg";
import fallbackSvg from "assets/svg/singlePackage.svg";
import { DataCard } from "lib/educationalResources/useCase";
import { elementsToSentence } from "tools/elementsToSentence";
import { Card } from "onyxia-ui/Card";
import { Tooltip } from "onyxia-ui/Tooltip";
import type { EducationalResourceTag } from "lib/educationalResources/educationalResources";
import { Tag } from "onyxia-ui/Tag";
import { declareComponentKeys } from "i18nifty";
import { formatDuration } from "tools/prettyPrintDuration";
import { Markdown } from "onyxia-ui/Markdown";
import { Flags } from "./Flags";
import { id } from "tsafe/id";
import { DeploymentButton } from "./DeploymentButton";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FolderIcon from "@mui/icons-material/Folder";

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
    const { className, name, abstract, authors, imageUrl, timeRequired, tags, ...rest } =
        props;

    const { classes } = useStyles();

    const { t } = useTranslation({ DocumentationCard });
    const { lang, setLang } = useLang();
    const { resolveLocalizedString } = useResolveLocalizedString();

    return (
        <Card
            className={className}
            aboveDivider={
                <>
                    <div className={classes.topMetadata}>
                        {timeRequired && (
                            <>
                                <Icon
                                    className={classes.timeRequiredIcon}
                                    icon={AccessTimeIcon}
                                    size="extra small"
                                />
                                <Text typo="body 2" className={classes.timeRequired}>
                                    {formatDuration(timeRequired)}
                                </Text>
                            </>
                        )}
                        <div style={{ "flex": 1 }} />
                        <Text className={classes.authorsText} typo="body 2">
                            {authors.length <= 2 ? (
                                elementsToSentence({
                                    "elements": authors.map(author =>
                                        resolveLocalizedString(author),
                                    ),
                                    lang,
                                })
                            ) : (
                                <>
                                    {resolveLocalizedString(authors[0])}
                                    &nbsp;
                                    {t("and")}
                                    &nbsp;
                                    <Tooltip
                                        title={elementsToSentence({
                                            "elements": authors
                                                .slice(1)
                                                .map(author =>
                                                    resolveLocalizedString(author),
                                                ),
                                            lang,
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
                            {capitalize(resolveLocalizedString(name))}
                        </Text>
                    </div>
                </>
            }
        >
            <div className={classes.body}>
                <Text typo="body 1" className={classes.bodyTypo}>
                    <Markdown>{resolveLocalizedString(abstract)}</Markdown>
                </Text>
                <div className={classes.tagsWrapper}>
                    {tags.sort().map(tag => (
                        <CustomTag className={classes.tag} key={tag} tag={tag} />
                    ))}
                </div>
            </div>
            <div className={classes.buttonsWrapper}>
                {(() => {
                    const localizedString = (() => {
                        if (rest.isDirectory) {
                            return abstract;
                        }

                        if (rest.articleUrl) {
                            return rest.articleUrl;
                        }

                        if (rest.deploymentUrl) {
                            switch (rest.deploymentUrl.type) {
                                case "url":
                                    return rest.deploymentUrl.url;
                                case "url by ide name":
                                    return Object.values(rest.deploymentUrl.urlByIdeName)
                                        .map(localizedString =>
                                            typeof localizedString === "string"
                                                ? { "fr": localizedString }
                                                : localizedString,
                                        )
                                        .reduce(
                                            (acc, curr) => ({
                                                ...acc,
                                                ...curr,
                                            }),
                                            id<Partial<Record<Language, string>>>({}),
                                        );
                            }
                        }

                        return undefined;
                    })();

                    if (localizedString === undefined) {
                        return null;
                    }

                    return (
                        <Flags
                            lang={lang}
                            onChangeLanguage={lang => setLang(lang)}
                            localizedString={localizedString}
                        />
                    );
                })()}
                <div style={{ "flex": 1 }} />
                {rest.isDirectory ? (
                    <Button
                        onClick={rest.onOpen}
                        variant="secondary"
                        startIcon={FolderIcon}
                    >
                        {t("open")}
                    </Button>
                ) : (
                    <>
                        {rest.articleUrl !== undefined && (
                            <Button
                                className={classes.articleButton}
                                href={resolveLocalizedString(rest.articleUrl)}
                                variant="secondary"
                            >
                                {t("read")}
                            </Button>
                        )}
                        {rest.deploymentUrl !== undefined && (
                            <DeploymentButton deploymentUrl={rest.deploymentUrl} />
                        )}
                    </>
                )}
            </div>
        </Card>
    );
});

const useStyles = tss.create(({ theme }) => ({
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
        "alignItems": "end",
    },
    "othersAuthors": {
        "color": theme.colors.useCases.typography.textFocus,
    },
    "authorsText": {
        "color": theme.colors.useCases.typography.textSecondary,
    },
    "articleButton": {
        "marginRight": theme.spacing(2),
    },
    "tag": {
        "marginRight": theme.spacing(2),
    },
    "tagsWrapper": {
        "marginTop": theme.spacing(3),
    },
}));

const { RoundLogo } = (() => {
    type RoundLogoProps = {
        className?: string;
        url: string | undefined;
    };

    const useStyles = tss.create(({ theme }) => ({
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
                <LazySvg svgUrl={fallbackSvg} className={classes.fallback} />
            </Avatar>
        );
    });

    return { RoundLogo };
})();

const { CustomTag } = (() => {
    type Props = {
        className?: string;
        tag: EducationalResourceTag;
    };

    const useStyles = tss
        .withParams<{ tag: EducationalResourceTag }>()
        .create(({ theme, tag }) => ({
            "root": {
                "cursor": "default",
                "backgroundColor": theme.colors.useCases.tags[tag],
                "& > *": {
                    "color": theme.colors.palette.dark.main,
                },
            },
        }));

    const CustomTag = memo((props: Props) => {
        const { tag, className } = props;

        const { classes, cx } = useStyles({ tag });

        const { t } = useTranslation({ DocumentationCard });

        return <Tag className={cx(classes.root, className)} text={t(tag)} />;
    });

    return { CustomTag };
})();

export const { i18n } = declareComponentKeys<
    "read" | "open" | "run" | "and" | "others" | EducationalResourceTag
>()({
    DocumentationCard,
});
