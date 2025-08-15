import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Catalog } from "./Catalog";
import { createCoreProvider } from "core";

const { CoreProvider } = createCoreProvider({});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CoreProvider>
            <Catalog />
        </CoreProvider>
    </StrictMode>,
);
