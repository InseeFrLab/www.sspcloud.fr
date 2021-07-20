
import { splashScreen } from "./theme";
import { useCallback, useEffect, memo } from "react";
import { useRoute } from "./router";
import { FourOhFour } from "./pages/FourOhFour";
import { Home } from "pages/Home";
import { GlTemplate } from "gitlanding/GlTemplate";
import { GlHeader } from "gitlanding/GlHeader";
import { ThemeProvider } from "./theme";
import type { ThemeProviderProps } from "onyxia-ui";
import { getIsPortraitOrientation, ViewPortOutOfRangeError } from "onyxia-ui";
import { Text } from "./theme";
import { useSplashScreen } from "onyxia-ui";

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


	return (
		<ThemeProvider
			getViewPortConfig={getViewPortConfig}
			splashScreen={splashScreen}
		>
			<GlTemplate
				header={
					<GlHeader
						links={[]}
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

					return <FourOhFour />;

				})()}

			</GlTemplate>
		</ThemeProvider>

	);

});



