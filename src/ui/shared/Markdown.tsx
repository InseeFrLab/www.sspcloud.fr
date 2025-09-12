import { createMarkdown } from "onyxia-ui/Markdown";
import { session } from "ui/routes";
import { getIsInternalUrl } from "ui/tools/isInternalUrl";

export const { Markdown } = createMarkdown({
    getLinkProps: ({ href }) => {
        if (getIsInternalUrl(href)) {
            if (href.endsWith(".md")) {
                throw new Error("not implemented yet");
                /*
            return routes.document({
                source: href,
            }).link;
            */
            } else {
                return {
                    href,
                    onClick: e => {
                        e.preventDefault();
                        session.push(href);
                    },
                };
            }
        }

        return {
            href,
            target: "_blank",
            onClick: () => {
                /* nothing */
            },
        };
    },
});
