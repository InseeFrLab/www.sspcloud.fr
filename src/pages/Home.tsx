import { GlHero } from "gitlanding/GlHero";
import { GlCards } from "gitlanding/GlCards";
import { GlLogoCard } from "gitlanding/GlCards/GlLogoCard";
import { createGroup } from "type-route";
import { routes } from "router";
import { useTranslation } from "i18n/useTranslations";

Home.routeGroup = createGroup([routes.home]);

export function Home() {

	const { t } = useTranslation("Home");

	return (
		<>
			<GlHero
				title={t("title")}
				subTitle={t("subtitle")}
			/>
			<GlCards >
				<GlLogoCard
					title="Hello"
				/>
			</GlCards>
		</>
	);

}

export declare namespace Home {

	export type I18nScheme = {
		title: undefined;
		subtitle: undefined;
	};

}





