import { createMarkdown } from "ui/tools/Markdown";
import { session } from "ui/routes";
import { getIsInternalUrl } from "core/tools/isInternalUrl";

export const { Markdown } = createMarkdown({
    getLinkProps: ({ href }) =>
        getIsInternalUrl(href)
            ? {
                  href,
                  onClick: e => {
                      e.preventDefault();
                      session.push(href);
                  },
              }
            : {
                  href,
                  target: "_blank",
                  onClick: () => {
                      /* nothing */
                  },
              },
});
