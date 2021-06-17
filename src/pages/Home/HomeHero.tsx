
import { useTranslation } from "../../i18n/useTranslations";
import { GlHero } from "gitlanding";

import heroHeaderImgUrl from "assets/illustrations/heroHeader.png";


export type Props = {
	className?: string;
	hrefToScrollTo: string;
};


export function HomeHero(props: Props) {

	const { className, hrefToScrollTo } = props;

	const { t } = useTranslation("HomeHero");

	return (
		<GlHero
			className={className}
			image={{ "url": heroHeaderImgUrl }}
			titleMd={t("title")}
			subTitleMd={t("subtitle")}
			scrollDownButton={{
				"title": t("what you need"),
				"href": hrefToScrollTo
			}}
		/>
	);

};

export declare namespace HomeHero {
	export type I18nScheme = {
		title: undefined;
		subtitle: undefined;
		'what you need': undefined;
	};
}

