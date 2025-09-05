import { useEffect, Suspense, lazy } from "react";
import { OnyxiaUi } from "ui/theme";
import { useSplashScreen } from "onyxia-ui";
import { SuspenseFallback } from "./SuspenseFallback";

const AppLazy = lazy(() => import("./App.lazy"));

export function App() {
    const { hideRootSplashScreen } = useSplashScreen();

    useEffect(() => {
        hideRootSplashScreen();
    }, []);

    return (
        <OnyxiaUi>
            <Suspense fallback={<SuspenseFallback />}>
                <AppLazy />
            </Suspense>
        </OnyxiaUi>
    );
}
