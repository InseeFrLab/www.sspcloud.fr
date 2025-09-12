import { createMarkdown } from "onyxia-ui/Markdown";
import { hrefToLink } from "ui/routes";

export const { Markdown } = createMarkdown({
    getLinkProps: ({ href }) => hrefToLink(href),
});
