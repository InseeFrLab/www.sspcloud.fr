import { render } from "react-dom";
import { I18nProvider } from "./i18n/I18nProvider";
import { App } from "./App";
import { RouteProvider } from "./router";

render(
	<RouteProvider>
		<I18nProvider>
			<App />
		</I18nProvider>
	</RouteProvider>,
	document.getElementById("root")
);
