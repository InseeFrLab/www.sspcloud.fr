import {
    defaultGetTypographyDesc,
    createDefaultColorUseCases,
    createOnyxiaUi,
    defaultPalette,
} from "onyxia-ui";
import { mergeDeep } from "ui/tools/mergeDeep";
import { breakpointsValues as glBreakpointValues } from "gitlanding/theme";
import logoSvgUrl from "ui/assets/svg/logo.svg";
import "./worksans-font/font.css";

import "./onyxia-ui-theme-sspcloud.css";

export const { OnyxiaUi, ofTypeTheme } = createOnyxiaUi({
    splashScreenParams: {
        assetUrl: logoSvgUrl,
        assetScaleFactor: 1,
        minimumDisplayDuration: 0,
    },
    getTypographyDesc: params => {
        return {
            ...defaultGetTypographyDesc(params),
            fontFamily: '"Work Sans", sans-serif',
        };
    },
    createColorUseCases: params => ({
        ...createDefaultColorUseCases(params),
    }),
    palette: ({ isDarkModeEnabled }) => {
        return mergeDeep(
            defaultPalette,
            isDarkModeEnabled
                ? {
                      focus: {
                          main: "#5695FB",
                          light: "#5695FB",
                      },
                      dark: {
                          main: "#0A152B",
                          light: "#040B17",
                          greyVariant1: "#1A2330",
                      },
                      light: {
                          main: "#EBEFF6",
                      },
                  }
                : {
                      focus: {
                          main: "#3B82F6",
                          light: "#3B82F6",
                      },
                      light: {
                          main: "#FAFAFA",
                          light: "#FFFFFF",
                          greyVariant1: "#EBEFF6",
                      },
                  },
        );
    },
});

export type Theme = typeof ofTypeTheme;

export const breakpointsValues = {
    ...glBreakpointValues,
    "md+": 1075,
};
