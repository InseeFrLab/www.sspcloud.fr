import { evtTheme } from "ui/theme";
import { $lang } from "ui/i18n";

export const URLS = {
    insee: "https://insee.fr",
    slackUrl:
        "https://join.slack.com/t/3innovation/shared_invite/zt-1bo6y53oy-Y~zKzR2SRg37pq5oYgiPuA",
    getOnyxiaUrl: (params: { page: "home" | "catalog" }) => {
        const { page } = params;
        const isDark = evtTheme.state.isDarkModeEnabled;
        const lang = $lang.current;

        const path = (() => {
            switch (page) {
                case "home":
                    return "";
                case "catalog":
                    return "/catalog";
            }
        })();

        return `https://datalab.sspcloud.fr${path}?theme=${isDark ? "dark" : "light"}&lang=${lang}`;
    },
    aiChat: "https://llm.lab.sspcloud.fr/auth?redirect=%2F",
};
