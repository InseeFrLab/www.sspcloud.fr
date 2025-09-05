import { createRoot } from "react-dom/client";
import { App } from "ui";

createRoot(document.getElementById("root")!).render(
    // NOTE: We do not enable strict mode because of gitlanding...
    // If we come back on a page the animations do not retrigger
    // for example the hero, so it stays blank
    <App />
);
