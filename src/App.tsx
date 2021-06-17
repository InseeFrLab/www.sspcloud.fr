
import { createUseClassNames } from "./theme";
import { GlHeader } from "gitlanding";
import { memo } from "react";
import { useRoute } from "./router";
import { FourOhFour } from "./pages/FourOhFour";
import { Home } from "pages/Home";

const { useClassNames } = createUseClassNames()(
	() => ({
		"root": {
			"height": "100%",
			"display": "flex",
			"flexDirection": "column",
			"overflow": "hidden",
		},
		"scrollWrapper": {
			"flex": 1,
			"overflow": "auto",
			"scrollBehavior": "smooth",
		},
		"page": {
			"height": "100%"
		}
	}),
);

export const App = memo(() => {

	const { classNames } = useClassNames({});

	const route = useRoute();

	return (
		<div className={classNames.root}>
			<GlHeader />

			<div className={classNames.scrollWrapper}>
				{(() => {

					{

						const Page = Home;

						if (Page.routeGroup.has(route)) {

							return (
								<Page
									className={classNames.page}
									route={route}
								/>
							)

						}

					}

					return <FourOhFour />;

				})()}

			</div>
		</div>
	);

});



