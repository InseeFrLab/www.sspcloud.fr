import { memo } from "react";
import { ExamplesCard } from "components/ExamplesCard";
import { tss } from "tss";

/**
 * Demo page showcasing the ExamplesCard component
 * This demonstrates the component that displays cards linking to:
 * - https://codelingo.bradensbay.com/
 * - https://prompt.bradensbay.com
 */
export const ExamplesDemo = memo(() => {
    const { classes } = useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>Examples Card Component Demo</h1>
            <p className={classes.description}>
                This component displays cards that link to example projects and tools from
                bradensbay.com:
            </p>

            <ExamplesCard className={classes.examplesCard} />

            <div className={classes.info}>
                <h2>Component Features:</h2>
                <ul>
                    <li>Responsive card layout using GitLanding components</li>
                    <li>Internationalization support (English/French)</li>
                    <li>Consistent styling with the existing theme</li>
                    <li>External links that open in new tabs</li>
                    <li>Custom icons for each service</li>
                </ul>

                <h2>Links:</h2>
                <ul>
                    <li>
                        <strong>CodeLingo:</strong> Interactive coding platform with AI
                        assistance
                    </li>
                    <li>
                        <strong>Prompt Lab:</strong> Advanced prompt engineering and AI
                        experimentation platform
                    </li>
                </ul>
            </div>
        </div>
    );
});

const useStyles = tss.create(({ theme }) => ({
    root: {
        padding: theme.spacing(4),
        maxWidth: 1200,
        margin: "0 auto",
    },
    title: {
        ...theme.typography.variants["page heading"].style,
        marginBottom: theme.spacing(2),
        textAlign: "center",
    },
    description: {
        ...theme.typography.variants["body 1"].style,
        marginBottom: theme.spacing(4),
        textAlign: "center",
        color: theme.colors.useCases.typography.textSecondary,
    },
    examplesCard: {
        marginBottom: theme.spacing(4),
    },
    info: {
        ...theme.typography.variants["body 1"].style,
        "& h2": {
            ...theme.typography.variants["section heading"].style,
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(2),
        },
        "& ul": {
            paddingLeft: theme.spacing(3),
        },
        "& li": {
            marginBottom: theme.spacing(1),
        },
    },
}));
