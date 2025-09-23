import {
    defaultGetTypographyDesc,
    createDefaultColorUseCases,
    createOnyxiaUi,
} from "onyxia-ui";
import { breakpointsValues as glBreakpointValues } from "gitlanding/theme";
import { getSspcloudPalette } from "./sspcloudPalette";
import logoSvgUrl from "ui/assets/svg/logo.svg";
import "./geist-font/font.css";

import "./sspcloud-specific-styles.css";

export const { OnyxiaUi, ofTypeTheme, evtTheme } = createOnyxiaUi({
    splashScreenParams: {
        assetUrl: logoSvgUrl,
        assetScaleFactor: 1,
        minimumDisplayDuration: 0,
        fadeOutDuration: 250,
    },
    getTypographyDesc: params => {
        return {
            ...defaultGetTypographyDesc(params),
            // NOTE: If you want to change the font replace
            // by the desired font not only here but also replace
            // the `import "./geist-font/font.css";` above.
            fontFamily: "Geist, sans-serif",
        };
    },
    createColorUseCases: params => ({
        ...createDefaultColorUseCases(params),
    }),
    palette: ({ isDarkModeEnabled }) => getSspcloudPalette({ isDarkModeEnabled }),
});

export type Theme = typeof ofTypeTheme;

export const breakpointsValues = glBreakpointValues;
