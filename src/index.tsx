

import { memo } from "react";
import { render } from "react-dom";
import { ThemeProvider, useTheme, createUseClassNames } from "./theme";
import { overwriteTheme } from "gitlanding/theme";
import { breakpointsValues } from "onyxia-ui";
//import { useWindowInnerSize } from "powerhooks";
//import { breakpointsValues } from "onyxia-ui";

overwriteTheme({ ThemeProvider, useTheme });

const { Square } = (() => {

	const { useClassNames } = createUseClassNames()(theme => ({
		"root": {
			"width": 200,
			"height": 200,
			"backgroundColor": (() => {
				if (theme.responsive.up("xl")) {
					return "red";
				}

				if (theme.responsive.up("lg")) {
					return "green";
				}

				if (theme.responsive.up("md")) {
					return "blue";
				}

				if (theme.responsive.up("sm")) {
					return "yellow";
				}

				return "pink";
			})(),
		},
	}));


	const Square = memo(() => {

		const { classNames } = useClassNames({});

		return <div className={classNames.root} />;
	});

	return { Square };
})();


function Root() {

	/*
	const { isLandscapeOrientation, windowInnerWidth } = useWindowInnerSize();

	const enableZoomProvider =
		(
			windowInnerWidth > breakpointsValues["Xl"] &&
			isLandscapeOrientation
		);
const zoomProviderReferenceWidth = enableZoomProvider ? breakpointsValues["lg"] : undefined;
	
	*/

	return (
		<ThemeProvider zoomProviderReferenceWidth={breakpointsValues["md"] + 20}>
			<Square />
		</ThemeProvider>
	);

}

render(
	<Root />,
	document.getElementById("root")
);

