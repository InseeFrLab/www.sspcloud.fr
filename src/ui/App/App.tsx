import { useEffect, Suspense, lazy } from "react";
import { OnyxiaUi } from "ui/theme";
import { useSplashScreen, breakpointsValues } from "onyxia-ui";
import { SuspenseFallback } from "./SuspenseFallback";
import { enableScreenScaler } from "screen-scaler";

enableScreenScaler({
    targetWindowInnerWidth: ({ zoomFactor, actualWindowInnerWidth }) => {
        if (actualWindowInnerWidth < breakpointsValues.xl) {
            return actualWindowInnerWidth;
        }

        return (breakpointsValues.xl + 100) * zoomFactor;
    },
    rootDivId: "root",
});

const AppLazy = lazy(() => import("./App.lazy"));

export function App() {
    return (
        <OnyxiaUi>
            <AppContextualized />
        </OnyxiaUi>
    );
}

function AppContextualized() {
    const { hideRootSplashScreen } = useSplashScreen();

    useEffect(() => {
        hideRootSplashScreen();
    }, []);

    return (
        <Suspense fallback={<SuspenseFallback />}>
            <AppLazy />
        </Suspense>
    );
}
