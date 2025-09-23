import { createRoot } from "react-dom/client";
import { OnyxiaUi } from "ui/theme";
import { Root } from "./Root";

createRoot(document.getElementById("root")!).render(
    // NOTE: We do not enable strict mode because of gitlanding...
    // If we come back on a page the animations do not retrigger
    // for example the hero, so it stays blank
    <OnyxiaUi>
        <Root />
    </OnyxiaUi>,
);
