import { onyxiaUiEarlyInit } from "onyxia-ui/earlyInit";

onyxiaUiEarlyInit({
    isDarkModeEnabled_force: undefined,
    getPaletteOverride: ({ isDarkModeEnabled }) =>
        isDarkModeEnabled
            ? {
                  dark: { main: "#0A0F18" },
              }
            : {
                  light: { main: "#FAFAFA" },
              },
});

import("./main.lazy");
