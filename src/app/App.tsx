
import { splashScreen, Text, ThemeProvider } from "./theme";
import { useCallback, useEffect, memo } from "react";
import { useRoute } from "./router";
import { FourOhFour } from "./pages/FourOhFour";
import { GlTemplate } from "gitlanding/GlTemplate";
import { GlHeader } from "gitlanding/GlHeader";
import type { ThemeProviderProps } from "onyxia-ui";
import { getIsPortraitOrientation, ViewPortOutOfRangeError } from "onyxia-ui";
import { useSplashScreen } from "onyxia-ui";
import { useTranslation } from "app/i18n/useTranslations";

import { Home } from "app/pages/Home";
import { Documentation } from "app/pages/Documentation";

import { routes } from "app/router";

export const App = memo(() => {

	const route = useRoute();

	const getViewPortConfig = useCallback<NonNullable<ThemeProviderProps["getViewPortConfig"]>>(
		({ windowInnerWidth, windowInnerHeight, browserFontSizeFactor }) => {

			if (Home.routeGroup.has(route)) {
				return {
					"targetWindowInnerWidth": windowInnerWidth,
					"targetBrowserFontSizeFactor": browserFontSizeFactor
				};
			}

			if (getIsPortraitOrientation({ windowInnerWidth, windowInnerHeight })) {
				throw new ViewPortOutOfRangeError(<h1>Rotate your screen</h1>);
			}

			return {
				"targetWindowInnerWidth": 1920,
				"targetBrowserFontSizeFactor": 1
			};

		},
		[route]
	);

	{

		const { hideRootSplashScreen } = useSplashScreen();

		useEffect(
			() => { hideRootSplashScreen(); },
			// eslint-disable-next-line react-hooks/exhaustive-deps
			[]
		);

	}

	const { t } = useTranslation("App");


	return (
		<ThemeProvider
			getViewPortConfig={getViewPortConfig}
			splashScreen={splashScreen}
		>
			<GlTemplate
				header={
					<GlHeader
						links={[{ "label": t("documentation"), "link": routes.documentation().link }]}
						title={<Text typo="page heading">SSPCloud</Text>}
					/>
				}
			>
				{(() => {

					{

						const Page = Home;

						if (Page.routeGroup.has(route)) {

							return <Page />;

						}

					}

					{

						const Page = Documentation;

						if (Page.routeGroup.has(route)) {

							return <Page route={route} />;

						}

					}

					return <FourOhFour />;

				})()}
			</GlTemplate>
		</ThemeProvider>

	);

});

export declare namespace App {

    export type I18nScheme = {
		documentation: undefined;
    };

}



