import { createUseClassNames } from "theme";
import { cx } from "tss-react";
import { HomeHero } from "./HomeHero";
import { createGroup } from "type-route";
import { routes } from "router";
import { Route } from "type-route";
import { HomeKeyMetrics } from "./HomeKeyMetrics";
import { HomeIntroductionArticle } from "./HomeIntroductionArticle";
import { HomeCallToContributeArticle } from "./HomeCallToContributeArticle";

const { useClassNames } = createUseClassNames()(
	() => ({
		"root": {
		}
	})
);

Home.routeGroup = createGroup([routes.home]);

type PageRoute = Route<typeof Home.routeGroup>;

export type Props = {
	className?: string;
	route: PageRoute;
};

const keyMetrics = "key-metrics";

export function Home(props: Props) {

	const { className } = props;

	const { classNames } = useClassNames({});

	return (
		<div className={cx(classNames.root, className)}>
			<HomeHero hrefToScrollTo={`#${keyMetrics}`}/>
			<HomeKeyMetrics id={keyMetrics} projectsSectionHref={"#"}/>
			<HomeIntroductionArticle />
			<HomeCallToContributeArticle />
		</div>
	);

};


