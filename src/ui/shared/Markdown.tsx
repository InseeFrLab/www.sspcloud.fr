import { createMarkdown } from "onyxia-ui/Markdown";
import { urlToLink } from "ui/routes";

export const { Markdown } = createMarkdown({
    getLinkProps: ({ href }) => urlToLink(href),
});
