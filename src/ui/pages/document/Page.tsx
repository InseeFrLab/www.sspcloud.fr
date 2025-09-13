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

    return (
        <div>
            {view.header !== undefined && (
                <EducationalResourceHeader
                    viewHeader={view.header}
                    onNavigateUp={document.navigateUp}
                />
            )}
            {view.markdownText === undefined ? (
                <CircularProgress />
            ) : (
                <Markdown lang={view.markdownText.langAttrValue}>
                    {view.markdownText.text}
                </Markdown>
            )}
        </div>
    );
}
