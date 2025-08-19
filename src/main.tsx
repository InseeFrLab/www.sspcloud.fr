import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { App } from "ui";

createRoot(document.getElementById("root")!).render(
    <Suspense>
        <App />
    </Suspense>,
);
