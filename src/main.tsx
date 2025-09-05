import { createRoot } from "react-dom/client";
import { App } from "ui";

createRoot(document.getElementById("root")!).render(
    // NOTE: We do not enable strict mode because of gitlanding...
    <App />
);
