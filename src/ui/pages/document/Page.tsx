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

    const { classes } = useStyles({
        paddingRightLeft: useGitlandingTheme().paddingRightLeft,
    });

    return (
        <div className={classes.root}>
            {view.header !== undefined && (
                <EducationalResourceHeader
                    viewHeader={view.header}
                    onNavigateUp={document.navigateUp}
                />
            )}
            <div className={classes.contentWrapper}>
                {view.markdownText === undefined ? (
                    <CircularProgress />
                ) : (
                    <Markdown lang={view.markdownText.langAttrValue}>
                        {view.markdownText.text}
                    </Markdown>
                )}
            </div>
        </div>
    );
}

const useStyles = tss
    .withName({ Document })
    .withParams<{ paddingRightLeft: number }>()
    .create(({ theme, paddingRightLeft }) => ({
        root: {
            ...theme.spacing.rightLeft("padding", `${paddingRightLeft}px`),
        },
        contentWrapper: {
            marginTop: theme.spacing(6),
            maxWidth: "70ch",
            ...theme.spacing.rightLeft("padding", `${theme.typography.rootFontSizePx}px`),
            ...theme.spacing.rightLeft("margin", "auto"),
        },
    }));
