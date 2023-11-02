import {
    createThemeProvider,
    defaultGetTypographyDesc,
    createDefaultColorUseCases,
} from "onyxia-ui";
import { createIcon } from "onyxia-ui/Icon";
import { createIconButton } from "onyxia-ui/IconButton";
import { createButton } from "onyxia-ui/Button";
import { createText } from "onyxia-ui/Text";
import { createTss } from "tss-react";
import type { ThemeProviderProps } from "onyxia-ui";
import { ReactComponent as ServicesSvg } from "./assets/svg/Services.svg";
import { ReactComponent as TrainingsSvg } from "./assets/svg/trainings.svg";
import { createPageHeader } from "onyxia-ui/PageHeader";
import type { Param0 } from "tsafe/Param0";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import { createButtonBarButton } from "onyxia-ui/ButtonBarButton";
import { breakpointsValues as glBreakpointValues } from "gitlanding/theme";
import { createOnyxiaSplashScreenLogo } from "onyxia-ui/lib/SplashScreen";
import { createUseGlobalState } from "powerhooks/useGlobalState";
import { createLanguageSelect } from "onyxia-ui/LanguageSelect";
import type { Language } from "./i18n";

export const { useHeaderHeight } = createUseGlobalState<
    number | undefined,
    "headerHeight"
>({
    "name": "headerHeight",
    "initialState": undefined,
    "doPersistAcrossReloads": false,
});

export const { ThemeProvider, useTheme } = createThemeProvider({
    "getTypographyDesc": params => ({
        ...defaultGetTypographyDesc(params),
        "fontFamily": '"Work Sans", sans-serif',
        //"fontFamily": 'Marianne, sans-serif',
    }),
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

export const { tss } = createTss({
    "useContext": function useContext() {
        const theme = useTheme();

        return { theme };
    }
});

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

const { OnyxiaSplashScreenLogo } = createOnyxiaSplashScreenLogo({ useTheme });

export const splashScreen: ThemeProviderProps["splashScreen"] = {
    "Logo": OnyxiaSplashScreenLogo,
    "minimumDisplayDuration": 0,
};

export const { PageHeader } = createPageHeader({ Icon });

export const { ButtonBarButton } = createButtonBarButton({ Icon });

export const breakpointsValues = {
    ...glBreakpointValues,
    "md+": 1075,
};


export const { LanguageSelect } = createLanguageSelect<Language>({
    "languagesPrettyPrint": {
        "en": "English",
        "fr": "Français",
        "it": "Italiano",
    },
});