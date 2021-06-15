

import { render } from "react-dom";
import { ThemeProvider, useTheme, createUseClassNames } from "./theme";
import { overwriteTheme } from "gitlanding/theme";
import { useWindowInnerSize } from "powerhooks";
import { breakpointsValues } from "onyxia-ui";
import { Home } from "pages/Home";

overwriteTheme({ ThemeProvider, useTheme });

const { useClassNames } = createUseClassNames()(
	() => ({
		"home": {
			"height": "100%"
		}
	})
);

function Root() {

	const { isLandscapeOrientation, windowInnerWidth } = useWindowInnerSize();

	const enableZoomProvider =
		(
			windowInnerWidth > breakpointsValues["Xl"] &&
			isLandscapeOrientation
		);

	const { classNames } = useClassNames({});

	return (
		<ThemeProvider zoomProviderReferenceWidth={enableZoomProvider ? breakpointsValues["lg"] : undefined}
		>
			<Home className={classNames.home} />

		</ThemeProvider>
	);

}

render(
	<Root />,
	document.getElementById("root")
);

