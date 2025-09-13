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
import { getCoreSync } from "core";
import { CoreViewText } from "ui/shared/CoreViewText";
import { Tag } from "../Tag";
import { breakpointsValues } from "ui/theme";
import { routes } from "ui/routes";

export type Props = {
    className?: string;
    viewItem: View.Item;
};

export const CatalogCard = memo((props: Props) => {
    const { className, viewItem } = props;

    const {
        functions: { catalog },
    } = getCoreSync();

    const { cx, classes } = useStyles({
        hasTimeRequired: viewItem.timeRequired !== undefined,
        hasTagsRelevantMatch: viewItem.tags.some(
            tag => tag.isSelected || tag.label.text.highlightedIndexes.length !== 0,
        ),
        hasAuthorsRelevantMatch: viewItem.authors.some(
            author => author.text.highlightedIndexes.length !== 0,
        ),
    });

    const { t } = useTranslation({ CatalogCard });
    const { lang } = useLang();

    return (
        <OnyxiaUiCard
            className={cx(classes.root, className)}
            aboveDivider={
                <>
                    <div className={classes.topMetadata}>
                        <span className={classes.durationWrapper}>
                            <Icon
                                className={classes.timeRequiredIcon}
                                icon={AccessTimeIcon}
                                size="extra small"
                            />
                            <Text typo="body 2" className={classes.timeRequired}>
                                {formatDuration(viewItem.timeRequired ?? 10)}
                            </Text>
                        </span>
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
            <div className={classes.bottomWrapper}>
                <Flags
                    className={classes.flags}
                    availableInLanguages={viewItem.availableInLanguages}
                />
                <div style={{ flex: 1 }} />
                <span className={classes.buttonsWrapper}>
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
                            {viewItem.article !== undefined && (
                                <Button
                                    className={classes.articleButton}
                                    variant="secondary"
                                    startIcon={AutoStoriesIcon}
                                    {...(() => {
                                        if (viewItem.article.isInternal) {
                                            return routes.document({
                                                path: viewItem.article.path,
                                            }).link;
                                        } else {
                                            return {
                                                doOpenNewTabIfHref: true,
                                                href: viewItem.article.url,
                                            };
                                        }
                                    })()}
                                    doOpenNewTabIfHref={true}
                                >
                                    {t("read")}
                                </Button>
                            )}
                            {viewItem.deploymentUrl !== undefined && (
                                <DeploymentButton
                                    deploymentUrl={viewItem.deploymentUrl}
                                />
                            )}
                        </>
                    )}
                </span>
            </div>
        </OnyxiaUiCard>
    );
});

const useStyles = tss
    .withName({ CatalogCard })
    .withNestedSelectors<"topMetadata" | "tagsWrapper" | "flags" | "buttonsWrapper">()
    .withParams<{
        hasTimeRequired: boolean;
        hasTagsRelevantMatch: boolean;
        hasAuthorsRelevantMatch: boolean;
    }>()
    .create(
        ({
            theme,
            hasTimeRequired,
            hasTagsRelevantMatch,
            hasAuthorsRelevantMatch,
            classes,
        }) => {
            const areMetadataAlwaysDisplayed =
                theme.windowInnerWidth <= breakpointsValues.sm;

            return {
                root: {
                    boxShadow: "3px 3px 6px 4px rgba(0,0,0,0.07)",
                    "&:hover": {
                        boxShadow: "3px 3px 6px 7px rgba(0,0,0,0.07)",
                    },
                    ...(areMetadataAlwaysDisplayed
                        ? undefined
                        : {
                              [`&:hover .${classes.topMetadata}`]: {
                                  visibility: "unset",
                              },
                              [`&:hover .${classes.tagsWrapper}`]: {
                                  visibility: "unset",
                              },
                              [`&:hover .${classes.flags}`]: {
                                  visibility: "unset",
                              },
                              [`&:hover .${classes.buttonsWrapper}`]: {
                                  visibility: "unset",
                              },
                          }),
                },
                imageAndNameWrapper: {
                    display: "flex",
                    alignItems: "center",
                },
                topMetadata: {
                    display: "flex",
                    alignItems: "center",
                    marginBottom: theme.spacing(2),
                    visibility:
                        hasAuthorsRelevantMatch || areMetadataAlwaysDisplayed
                            ? undefined
                            : "hidden",
                },
                durationWrapper: {
                    display: "flex",
                    visibility: !hasTimeRequired ? "hidden" : undefined,
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
                bottomWrapper: {
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: theme.spacing(4),
                    alignItems: "end",
                },
                buttonsWrapper: {
                    visibility: areMetadataAlwaysDisplayed ? undefined : "hidden",
                    display: "inline-flex",
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
                    visibility:
                        hasTagsRelevantMatch || areMetadataAlwaysDisplayed
                            ? undefined
                            : "hidden",
                    marginTop: theme.spacing(3),
                    display: "inline-flex",
                    flexWrap: "wrap",
                    gap: theme.spacing(1),
                },
                flags: {
                    visibility: areMetadataAlwaysDisplayed ? undefined : "hidden",
                },
            };
        },
    );

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
