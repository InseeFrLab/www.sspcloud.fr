import { useEffect } from "react";
import { useSplashScreen } from "onyxia-ui";

export function SplashScreen() {
    const { hideRootSplashScreen, showSplashScreen, hideSplashScreen } =
        useSplashScreen();

    useEffect(() => {
        hideRootSplashScreen();
        showSplashScreen({ enableTransparency: true });
        return () => {
            hideSplashScreen();
        };
    }, []);

    return null;
}
