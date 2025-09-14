import { createMarkdown } from "onyxia-ui/Markdown";
import { session } from "ui/routes";
import { getIsInternalUrl } from "core/tools/isInternalUrl";

export const { Markdown } = createMarkdown({
    getLinkProps: ({ href }) => {
        if (getIsInternalUrl(href)) {
            return {
                href,
                onClick: e => {
                    e.preventDefault();
                    session.push(href);
                },
            };
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
