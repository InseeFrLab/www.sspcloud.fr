import { onyxiaUiEarlyInit } from "onyxia-ui/earlyInit";
import { getSspcloudPalette } from "ui/theme/sspcloudPalette";

onyxiaUiEarlyInit({
    isDarkModeEnabled_force: undefined,
    getPaletteOverride: getSspcloudPalette,
});

import("./main.lazy");
