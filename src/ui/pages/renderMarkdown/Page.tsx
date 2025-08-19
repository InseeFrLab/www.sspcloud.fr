import { LocalizedMarkdown } from "ui/shared/Markdown";
import { tss } from "ui/tss";
import type { PageRoute } from "./route";

export type Props = {
    route: PageRoute;
};

export default function RenderMarkdown(props: Props) {
    const { route } = props;

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
