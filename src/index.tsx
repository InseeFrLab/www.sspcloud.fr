import { createRoot } from "react-dom/client";
import { App } from "./App";
import { RouteProvider } from "./router";
import { ThemeProvider, splashScreen } from "./theme";

createRoot(document.getElementById("root")!).render(
    <RouteProvider>
        <ThemeProvider splashScreen={splashScreen}>
            <App />
        </ThemeProvider>
    </RouteProvider>,
);
