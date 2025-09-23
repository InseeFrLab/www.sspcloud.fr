import { defaultPalette } from "onyxia-ui/lib/color.urgent";
import { mergeDeep } from "ui/tools/mergeDeep";

export function getSspcloudPalette(params: { isDarkModeEnabled: boolean }) {
    const { isDarkModeEnabled } = params;
    return mergeDeep(
        defaultPalette,
        isDarkModeEnabled
            ? {
                  focus: {
                      main: "#5695FB",
                      light: "#5695FB",
                  },
                  dark: {
                      main: "#0A0F18",
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
}
