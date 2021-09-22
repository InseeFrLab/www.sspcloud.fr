import {
    createThemeProvider,
    defaultGetTypographyDesc,
    createDefaultColorUseCases,
    breakpointsValues,
} from "onyxia-ui";
import { createIcon } from "onyxia-ui/Icon";
import { createIconButton } from "onyxia-ui/IconButton";
import { createButton } from "onyxia-ui/Button";
import { createText } from "onyxia-ui/Text";
import { createMakeStyles } from "tss-react";
import { ReactComponent as OnyxiaLogoSvg } from "./assets/svg/OnyxiaLogo.svg";
import type { ThemeProviderProps } from "onyxia-ui";
import { ReactComponent as ServicesSvg } from "./assets/svg/Services.svg";
import { ReactComponent as TrainingsSvg } from "./assets/svg/Trainings2.svg";
import { createPageHeader } from "onyxia-ui/PageHeader";
import type { Param0 } from "tsafe/Param0";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import { createButtonBarButton } from "onyxia-ui/ButtonBarButton";

export const { ThemeProvider, useTheme } = createThemeProvider({
    "getTypographyDesc": ({ windowInnerWidth, ...rest }) => {
        const { rootFontSizePx, variants } = defaultGetTypographyDesc({
            windowInnerWidth,
            ...rest,
        });
        return {
            //"fontFamily": '"Work Sans", sans-serif',
            "fontFamily": 'Marianne, sans-serif',
            rootFontSizePx,
            "variants": {
                ...variants,
                "body 3": {
                    "htmlComponent": "p",
                    "fontWeight": "normal",
                    ...(() => {
                        if (windowInnerWidth >= breakpointsValues.xl) {
                            return {
                                "fontSizeRem": 0.875,
                                "lineHeightRem": 1.28,
                            };
                        }

                        if (windowInnerWidth >= breakpointsValues.lg) {
                            return {
                                "fontSizeRem": 0.75,
                                "lineHeightRem": 1,
                            };
                        }

                        return {
                            "fontSizeRem": 0.625,
                            "lineHeightRem": 0.69,
                        };
                    })(),
                },
            },
        };
    },
    "createColorUseCases": ({ isDarkModeEnabled, palette }) => ({
        ...createDefaultColorUseCases({ isDarkModeEnabled, palette }),
        "tags": {
            "discover": "#CCDFF2",
            "learn": "#C6F8D7",
            "consolidate": "#F5C264",
            "deepen": "#E99582",
        },
    }),
});

export const { makeStyles } = createMakeStyles({ useTheme });

/** @see: <https://material-ui.com/components/material-icons/> */
export const { Icon } = createIcon({
    "services": ServicesSvg,
    "trainings": TrainingsSvg,
    "accessTime": AccessTimeIcon,
    "sentimentSatisfied": SentimentSatisfiedIcon,
});

export type IconId = Param0<typeof Icon>["iconId"];

export const { IconButton } = createIconButton({ Icon });
export const { Button } = createButton({ Icon });
export const { Text } = createText({ useTheme });

export const splashScreen: ThemeProviderProps["splashScreen"] = {
    "Logo": OnyxiaLogoSvg,
    "minimumDisplayDuration": 0,
};

export const { PageHeader } = createPageHeader({ Icon });

export const { ButtonBarButton } = createButtonBarButton({ Icon });
