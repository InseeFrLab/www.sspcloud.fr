import { useEffect, Suspense, lazy } from "react";
import { OnyxiaUi } from "ui/theme";
import { useSplashScreen } from "onyxia-ui";
import { SplashScreen } from "ui/shared/SplashScreen";

const App = lazy(() => import("ui/App"));

export function Root() {
    return (
        <OnyxiaUi>
            <Suspense fallback={<SplashScreen />}>
                <AppWrapper />
            </Suspense>
        </OnyxiaUi>
    );
}

function AppWrapper() {
    const { hideRootSplashScreen } = useSplashScreen();

    useEffect(() => {
        hideRootSplashScreen();
    }, []);

    return <App />;
}
