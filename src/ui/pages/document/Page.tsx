import { tss } from "ui/tss";
import { routeGroup } from "./route";
import { assert } from "tsafe";
import { Markdown } from "ui/shared/Markdown";
import { useRoute, getRoute } from "ui/routes";
import { withLoader } from "ui/tools/withLoader";
import { getCore, useCoreState } from "core";

const Page = withLoader({
    loader,
    Component: Document,
});

export default Page;

async function loader() {
    const route = getRoute();
    assert(routeGroup.has(route));

    const core = await getCore();

    await core.functions.document.load({ markdownUrl: route.params.source });
}

function Document() {
    const route = useRoute();
    assert(routeGroup.has(route));

    const { classes } = useStyles();

    const markdownText = useCoreState("document", "markdownText");

    return (
        <div className={classes.root}>
            <Markdown className={classes.markdown}>{markdownText}</Markdown>
        </div>
    );
}

const useStyles = tss.withName({ Document }).create(({ theme }) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        height: "100%",
    },
    markdown: {
        borderRadius: theme.spacing(2),
        backgroundColor: theme.colors.useCases.surfaces.surface1,
        maxWidth: 900,
        padding: theme.spacing(4),
        "&:hover": {
            boxShadow: theme.shadows[1],
        },
        marginBottom: theme.spacing(2),
        overflow: "auto",
    },
}));
