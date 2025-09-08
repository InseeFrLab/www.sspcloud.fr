import { memo } from "react";
import { Text } from "onyxia-ui/Text";
import { tss } from "ui/tss";
import { Button } from "onyxia-ui/Button";
import { Icon } from "onyxia-ui/Icon";
import { useTranslation, useLang } from "ui/i18n";
import Avatar from "@mui/material/Avatar";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { LazySvg } from "onyxia-ui/tools/LazySvg";
import fallbackSvg from "ui/assets/svg/singlePackage.svg";
import { elementsToSentence } from "ui/shared/elementsToSentence";
import { formatDuration } from "ui/tools/prettyPrintDuration";
import { Card as OnyxiaUiCard } from "onyxia-ui/Card";
import { Tooltip } from "onyxia-ui/Tooltip";
import { declareComponentKeys } from "i18nifty";
import { Markdown } from "ui/shared/Markdown";
import { Flags } from "./Flags";
import { DeploymentButton } from "./DeploymentButton";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FolderIcon from "@mui/icons-material/Folder";
import type { View } from "core/usecases/catalog";
import { useCore } from "core";
import { CoreViewText } from "ui/shared/CoreViewText";
import { Tag } from "../Tag";
import { useUrlToLink } from "ui/routes";

export type Props = {
    className?: string;
    viewItem: View.Item;
};

export const CatalogCard = memo((props: Props) => {
    const { className, viewItem } = props;

    const { catalog } = useCore().functions;

    const { cx, classes } = useStyles();

    const { t } = useTranslation({ CatalogCard });
    const { lang } = useLang();
    const { urlToLink } = useUrlToLink();

    return (
        <OnyxiaUiCard
            className={cx(classes.root, className)}
            aboveDivider={
                <>
                    <div className={classes.topMetadata}>
                        {viewItem.timeRequired !== undefined && (
                            <>
                                <Icon
                                    className={classes.timeRequiredIcon}
                                    icon={AccessTimeIcon}
                                    size="extra small"
                                />
                                <Text typo="body 2" className={classes.timeRequired}>
                                    {formatDuration(viewItem.timeRequired)}
                                </Text>
                            </>
                        )}
                        <div style={{ flex: 1 }} />
                        <Text className={classes.authorsText} typo="body 2">
                            {viewItem.authors.length <= 2 ? (
                                elementsToSentence({
                                    nodes: viewItem.authors.map(author => (
                                        <CoreViewText text={author} doCapitalize={true} />
                                    )),
                                    lang,
                                })
                            ) : (
                                <>
                                    <CoreViewText
                                        text={viewItem.authors[0]}
                                        doCapitalize={true}
                                    />
                                    &nbsp;
                                    {t("and")}
                                    &nbsp;
                                    <Tooltip
                                        title={elementsToSentence({
                                            nodes: viewItem.authors
                                                .slice(1)
                                                .map(author => (
                                                    <CoreViewText
                                                        text={author}
                                                        doCapitalize={true}
                                                    />
                                                )),
                                            lang,
                                        })}
                                    >
                                        <span className={classes.othersAuthors}>
                                            {viewItem.authors.length - 1} {t("others")}
                                        </span>
                                    </Tooltip>
                                </>
                            )}
                        </Text>
                    </div>
                    <div className={classes.imageAndNameWrapper}>
                        <RoundLogo url={viewItem.imageUrl} />
                        <Text className={classes.title} typo="object heading">
                            <CoreViewText text={viewItem.name} doCapitalize />
                        </Text>
                    </div>
                </>
            }
        >
            <div className={classes.body}>
                <Text typo="body 1" className={classes.bodyTypo}>
                    {viewItem.abstract.text.highlightedIndexes.length === 0 ? (
                        <Markdown lang={viewItem.abstract.langAttrValue} inline>
                            {viewItem.abstract.text.charArray.join("")}
                        </Markdown>
                    ) : (
                        <CoreViewText text={viewItem.abstract} doCapitalize={false} />
                    )}
                </Text>
                <div className={classes.tagsWrapper}>
                    {viewItem.tags.map(tag => (
                        <Tag
                            key={tag.id}
                            longerLabelLength={undefined}
                            tagId={tag.id}
                            label={tag.label}
                            isSelected={tag.isSelected}
                            count={undefined}
                            onClick={() =>
                                catalog.toggleTagSelection({
                                    tagId: tag.id,
                                })
                            }
                        />
                    ))}
                </div>
            </div>
            <div className={classes.buttonsWrapper}>
                <Flags availableInLanguages={viewItem.availableInLanguages} />
                <div style={{ flex: 1 }} />
                {viewItem.isCollection ? (
                    <Button
                        onClick={() =>
                            catalog.navigateInDirectory({
                                pathSegment: viewItem.pathSegment,
                            })
                        }
                        variant="secondary"
                        startIcon={FolderIcon}
                    >
                        {t("open")}
                    </Button>
                ) : (
                    <>
                        {viewItem.articleUrl !== undefined && (
                            <Button
                                className={classes.articleButton}
                                variant="secondary"
                                {...urlToLink(viewItem.articleUrl)}
                                startIcon={AutoStoriesIcon}
                            >
                                {t("read")}
                            </Button>
                        )}
                        {viewItem.deploymentUrl !== undefined && (
                            <DeploymentButton deploymentUrl={viewItem.deploymentUrl} />
                        )}
                    </>
                )}
            </div>
        </OnyxiaUiCard>
    );
});

const useStyles = tss.withName({ CatalogCard }).create(({ theme }) => ({
    root: {
        boxShadow: "0px 0px 10px 5px rgba(0,0,0,0.07)",
        "&:hover": {
            boxShadow: "5px 6px 10px 15px rgba(0,0,0,0.07)",
        },
    },
    imageAndNameWrapper: {
        display: "flex",
        alignItems: "center",
    },
    topMetadata: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(2),
    },
    timeRequiredIcon: {
        color: theme.colors.useCases.typography.textDisabled,
    },
    timeRequired: {
        color: theme.colors.useCases.typography.textDisabled,
        marginLeft: theme.spacing(1),
    },
    title: {
        marginLeft: theme.spacing(3),
    },
    body: {
        margin: 0,
        flex: 1,
    },
    bodyTypo: {
        color: theme.colors.useCases.typography.textSecondary,
    },
    buttonsWrapper: {
        display: "flex",
        justifyContent: "flex-end",
        marginTop: theme.spacing(4),
        alignItems: "end",
    },
    othersAuthors: {
        color: theme.colors.useCases.typography.textFocus,
    },
    authorsText: {
        color: theme.colors.useCases.typography.textSecondary,
    },
    articleButton: {
        marginRight: theme.spacing(2),
    },
    tagsWrapper: {
        marginTop: theme.spacing(3),
        display: "inline-flex",
        flexWrap: "wrap",
        gap: theme.spacing(1),
    },
}));

const { RoundLogo } = (() => {
    type RoundLogoProps = {
        className?: string;
        url: string | undefined;
    };

    const useStyles = tss.create(({ theme }) => ({
        fallback: {
            fill: theme.colors.useCases.typography.textPrimary,
        },
        root: {
            ...(() => {
                const size = theme.iconSizesInPxByName["large"];

                return {
                    width: size,
                    height: size,
                };
            })(),
        },
        avatarImg: {
            objectFit: "contain",
        },
    }));

    const RoundLogo = memo((props: RoundLogoProps) => {
        const { url, className } = props;

        const { classes, cx } = useStyles();

        return (
            <Avatar
                classes={{
                    img: classes.avatarImg,
                }}
                src={url}
                className={cx(classes.root, className)}
            >
                <LazySvg svgUrl={fallbackSvg} className={classes.fallback} />
            </Avatar>
        );
    });

    return { RoundLogo };
})();

const { i18n } = declareComponentKeys<"read" | "open" | "run" | "and" | "others">()({
    CatalogCard,
});

export type I18n = typeof i18n;
