import type { ReactNode } from "react";
import { render } from "react-dom";
//import { ThemeProvider, useTheme } from "./theme";
//import { overwriteTheme } from "gitlanding";
import { getThemeApi } from "gitlanding";
import { I18nProvider } from "./i18n/I18nProvider";
import { useWindowInnerSize } from "powerhooks/useWindowInnerSize";
import { breakpointsValues } from "onyxia-ui/lib";
import { App } from "./App";
import { RouteProvider } from "./router";

//overwriteTheme({ ThemeProvider, useTheme });

const { ThemeProviderOrId, useTheme } = getThemeApi();

function Providers(props: { children: ReactNode; }) {

	const { windowInnerWidth } = useWindowInnerSize();

	const { children } = props;

	return (
		<RouteProvider>
			<I18nProvider>
				<ThemeProviderOrId
					zoomProviderReferenceWidth={
						windowInnerWidth > breakpointsValues["lg"] ?
							breakpointsValues["xl"] : undefined
					}
				>
					{children}
				</ThemeProviderOrId>
			</I18nProvider>
		</RouteProvider>
	);

}

render(
	<Providers>
		<App />
	</Providers>,
	document.getElementById("root")
);

