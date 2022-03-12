import { render } from "react-dom";
import { I18nProvider } from "./i18n/I18nProvider";
import { App } from "./App/App";
import { RouteProvider } from "./router";
import { ThemeProvider, splashScreen } from "./theme";

render(
    <RouteProvider>
        <I18nProvider>
            <ThemeProvider splashScreen={splashScreen}>
                <App />
            </ThemeProvider>
        </I18nProvider>
    </RouteProvider>,
    document.getElementById("root"),
);
