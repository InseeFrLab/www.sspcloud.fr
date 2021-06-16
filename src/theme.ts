import { createThemeProvider, defaultGetTypography } from "onyxia-ui/lib";
import { createIcon } from "onyxia-ui/Icon";
import { createIconButton } from "onyxia-ui/IconButton";
import { createButton } from "onyxia-ui/Button";
import { createUseClassNamesFactory } from "tss-react";
import "onyxia-ui/assets/fonts/work-sans.css";

import { ReactComponent as ServicesSvg } from "assets/svg/Services.svg";
import { ReactComponent as TrainingsSvg } from "assets/svg/Trainings2.svg";
import type { Param0 } from "tsafe/Param0";

export const { ThemeProvider, useTheme } = createThemeProvider({
    //We keep the default color palette but we add a custom color: a shiny pink.
    "getTypography": ({ windowInnerWidth }) => ({
        ...defaultGetTypography({ windowInnerWidth }),
        "fontFamily": '"Work Sans", sans-serif',
    })
});

export const { createUseClassNames } = createUseClassNamesFactory({ useTheme });

/** @see: <https://material-ui.com/components/material-icons/> */
export const { Icon } = createIcon({
    "services": ServicesSvg,
    "trainings": TrainingsSvg
});

export type IconId = Param0<typeof Icon>["id"];

export const { IconButton } = createIconButton({ Icon });
export const { Button } = createButton({ Icon });