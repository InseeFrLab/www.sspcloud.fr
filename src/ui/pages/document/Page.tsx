import { useEffect } from "react";
import { useEvt } from "evt/hooks/useEvt";
import { $lang } from "ui/i18n";
import { routeGroup } from "./route";
import { getCoreSync, useCoreState, getCore } from "core";
import { routes, getRoute, session } from "ui/routes";
import { assert } from "tsafe/assert";
import { withLoader } from "ui/tools/withLoader";
import { EducationalResourceHeader } from "ui/shared/EducationalResourceHeader";
import { Markdown } from "ui/shared/Markdown";
import CircularProgress from "@mui/material/CircularProgress";
import { tss } from "ui/tss";
import { useTheme as useGitlandingTheme } from "gitlanding";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import { useDomRect } from "powerhooks/useDomRect";
import { breakpointsValues } from "ui/theme";
import { Button } from "onyxia-ui/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ReplyIcon from "@mui/icons-material/Reply";
import { CoreViewText } from "ui/shared/CoreViewText";
import { declareComponentKeys, useTranslation } from "ui/i18n";

const Page = withLoader({
    loader,
    Component: Document,
    FallbackComponent: () => null,
});

export default Page;

async function loader() {
    const route = getRoute();
    assert(routeGroup.has(route));

    const core = await getCore();

    await core.functions.document.load({
        routeParams: route.params,
        language: $lang.current,
    });
}

function Document() {
    const view = useCoreState("document", "view");
    const {
        functions: { document },
        evts: { evtDocument },
    } = getCoreSync();

    useEvt(ctx => {
        evtDocument.$attach(
            action => (action.actionName !== "navigateToCatalogPage" ? null : [action]),
            ctx,
            ({ routeParams }) => routes.catalog(routeParams).push(),
        );
    }, []);

    useEffect(() => {
        const unsubscribe_session = session.listen(route => {
            if (routeGroup.has(route)) {
                document.notifyRouteParamUpdated({ routeParams: route.params });
            }
        });

        const { unsubscribe: unsubscribe_lang } = $lang.subscribe(lang =>
            document.updateLanguage({ language: lang }),
        );

        return () => {
            unsubscribe_session();
            unsubscribe_lang();
        };
    }, []);

    const { paddingRightLeft } = useGitlandingTheme();

    const {
        ref: ref_contentWrapper,
        domRect: { right: right_contentWrapper },
    } = useDomRect();

    const { classes, theme } = useStyles({
        paddingRightLeft,
        isLoading: view.markdownText === undefined,
        right_contentWrapper,
        hasHeader: view.header !== undefined,
    });

    const { t } = useTranslation({ Document });

    return (
        <div className={classes.root}>
            {view.header !== undefined && (
                <EducationalResourceHeader
                    viewHeader={view.header}
                    onNavigateUp={document.navigateUp}
                />
            )}
            <aside className={classes.aside}>
                <div className={classes.asideInner}>
                    <Link
                        className={classes.editOnGitHubLink}
                        href={view.editOnGitHubUrl}
                        target="_blank"
                    >
                        <GitHubIcon />
                        {t("edit on github")}
                    </Link>
                </div>
            </aside>
            <div className={classes.contentWrapper} ref={ref_contentWrapper}>
                {view.markdownText === undefined ? (
                    <CircularProgress />
                ) : (
                    <Markdown lang={view.markdownText.langAttrValue}>
                        {view.markdownText.text}
                    </Markdown>
                )}
                {view.relativeNavigation !== undefined && (
                    <nav
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: theme.spacing(5),
                        }}
                    >
                        {view.relativeNavigation.previous !== undefined ? (
                            <Button
                                startIcon={ArrowBackIosIcon}
                                variant="ternary"
                                {...routes.document({
                                    path: view.relativeNavigation.previous.path,
                                }).link}
                            >
                                <CoreViewText
                                    doCapitalize={true}
                                    text={view.relativeNavigation.previous.name}
                                />
                            </Button>
                        ) : (
                            <div />
                        )}
                        {view.relativeNavigation.next !== undefined && (
                            <Button
                                endIcon={ArrowForwardIosIcon}
                                variant="ternary"
                                {...routes.document({
                                    path: view.relativeNavigation.next.path,
                                }).link}
                            >
                                <CoreViewText
                                    doCapitalize={true}
                                    text={view.relativeNavigation.next.name}
                                />
                            </Button>
                        )}
                        {view.relativeNavigation.back !== undefined && (
                            <Button
                                startIcon={ReplyIcon}
                                variant="ternary"
                                {...routes.catalog({
                                    path: view.relativeNavigation.back.path,
                                }).link}
                            >
                                <CoreViewText
                                    doCapitalize={true}
                                    text={view.relativeNavigation.back.name}
                                />
                            </Button>
                        )}
                    </nav>
                )}
            </div>
        </div>
    );
}

const useStyles = tss
    .withName({ Document })
    .withParams<{
        paddingRightLeft: number;
        isLoading: boolean;
        right_contentWrapper: number;
        hasHeader: boolean;
    }>()
    .create(
        ({ theme, paddingRightLeft, isLoading, right_contentWrapper, hasHeader }) => ({
            root: {
                ...theme.spacing.rightLeft("padding", `${paddingRightLeft}px`),
                paddingTop: hasHeader ? undefined : theme.spacing(5),
            },
            contentWrapper: {
                textAlign: isLoading ? "center" : undefined,
                maxWidth: "82ch",
                ...theme.spacing.rightLeft(
                    "padding",
                    `${theme.typography.rootFontSizePx}px`,
                ),
                ...theme.spacing.topBottom("padding", 5),
                ...theme.spacing.rightLeft("margin", "auto"),
            },
            editOnGitHubLink: {
                display: "inline-flex",
                alignItems: "center",
                gap: theme.spacing(2),
                position: "sticky",
                top: theme.spacing(6),
            },
            aside: {
                display:
                    theme.windowInnerWidth < breakpointsValues.md ? "none" : undefined,
                position: "sticky",
                top: theme.spacing(6),
                textWrap: "nowrap",
                height: 0,
                width: 0,
                overflow: "visible",
                marginLeft: right_contentWrapper - paddingRightLeft + theme.spacing(5),
            },
            asideInner: {
                overflow: "visible",
                display: "inline-flex",
            },
        }),
    );

const { i18n } = declareComponentKeys<"edit on github">()({ Document });

export type I18n = typeof i18n;
