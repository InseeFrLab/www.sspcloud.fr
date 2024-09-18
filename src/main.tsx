import { createRoot } from "react-dom/client";
import { RouteProvider } from "./router";
import { OnyxiaUi } from "./theme";
import { App } from "App";

createRoot(document.getElementById("root")!).render(
    <RouteProvider>
        <OnyxiaUi>
            <App />
        </OnyxiaUi>
    </RouteProvider>,
);
