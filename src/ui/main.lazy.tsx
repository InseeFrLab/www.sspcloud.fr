import { createRoot } from "react-dom/client";
import { useEffect, Suspense, lazy } from "react";
import { OnyxiaUi } from "ui/theme";
import { useSplashScreen } from "onyxia-ui";
import { SuspenseFallback } from "ui/shared/SuspenseFallback";

const App = lazy(() => import("./App"));

createRoot(document.getElementById("root")!).render(
    // NOTE: We do not enable strict mode because of gitlanding...
    // If we come back on a page the animations do not retrigger
    // for example the hero, so it stays blank
    <OnyxiaUi>
        <Root />
    </OnyxiaUi>,
);

function Root() {
    const { hideRootSplashScreen } = useSplashScreen();

    useEffect(() => {
        hideRootSplashScreen();
    }, []);

    return (
        <Suspense fallback={<SuspenseFallback />}>
            <App />
        </Suspense>
    );
}
