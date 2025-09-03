import { LocalizedMarkdown } from "ui/shared/Markdown";
import { tss } from "ui/tss";
import  { routeGroup } from "./route";
import { assert } from "tsafe/assert";
import { useRoute } from "ui/routes";


export default function RenderMarkdown() {
    const route = useRoute();
    assert(routeGroup.has(route));

    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <LocalizedMarkdown className={classes.markdown} urlSourceOnly>
                {route.params.source}
            </LocalizedMarkdown>
        </div>
    );
}

const useStyles = tss.withName({ RenderMarkdown }).create(({ theme }) => ({
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
