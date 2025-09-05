
import { useEffect } from "react";
import { useSplashScreen } from "onyxia-ui";

export function SuspenseFallback() {
    const { showSplashScreen, hideSplashScreen } = useSplashScreen();

    useEffect(() => {
        showSplashScreen({ enableTransparency: true });
        return () => {
            hideSplashScreen();
        };
    }, []);

    return null;
}