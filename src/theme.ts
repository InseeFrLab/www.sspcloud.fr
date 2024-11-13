import {
    defaultGetTypographyDesc,
    createDefaultColorUseCases,
    createOnyxiaUi,
} from "onyxia-ui";
import { breakpointsValues as glBreakpointValues } from "gitlanding/theme";
import { createUseGlobalState } from "powerhooks/useGlobalState";

export const { useHeaderHeight } = createUseGlobalState<
    number | undefined,
    "headerHeight"
>({
    "name": "headerHeight",
    "initialState": undefined,
    "doPersistAcrossReloads": false,
});

export const { OnyxiaUi, ofTypeTheme } = createOnyxiaUi({
    getTypographyDesc: params => {
        return {
            ...defaultGetTypographyDesc(params),
            "fontFamily": '"Work Sans", sans-serif',
        };
    },
    "createColorUseCases": params => ({
        ...createDefaultColorUseCases(params),
        "tags": {
            "discover": "#CCDFF2",
            "learn": "#C6F8D7",
            "consolidate": "#F5C264",
            "deepen": "#E99582",
        },
    }),
});

export type Theme = typeof ofTypeTheme;

export const breakpointsValues = {
    ...glBreakpointValues,
    "md+": 1075,
};
