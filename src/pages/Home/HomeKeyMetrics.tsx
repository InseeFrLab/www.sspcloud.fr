

import { useTranslation } from "i18n/useTranslations";
import { GlCardSection } from "gitlanding";
import servicesSvgUrl from "assets/svg/Services.svg";
import trainingsSvgUrl from "assets/svg/Trainings2.svg";


export type Props = {
	className?: string;
	projectsSectionHref: string;
	id: string;
};

export function HomeKeyMetrics(props: Props) {

	const { className, projectsSectionHref, id } = props;

	const { t } = useTranslation("HomeKeyMetrics");

	return (
		<div id={id}>
			<GlCardSection
				className={className}
				cards={[
					{
						"type": "normal",
						"heading": {
							"title": "18",
							"iconUrls": [servicesSvgUrl]
						},
						"subHeading": t("card1 description"),
						"button": {
							"title": t("card1 button label"),
							"link": { "href": "https://datalab.sspcloud.fr/catalog" }
						}
					},
					{
						"type": "normal",
						"heading": {
							"title": "10",
							"iconUrls": [trainingsSvgUrl]
						},
						"subHeading": t("card2 description"),
						"button": {
							"title": t("card2 button label"),
							"link": { "href": projectsSectionHref }
						}
					},
					{
						"type": "normal",
						"heading": {
							"title": "23",
							"iconUrls": [trainingsSvgUrl]
						},
						"subHeading": t("card3 description"),
						"button": {
							"title": t("card3 button label"),
							"link": { "href": "https://datalab.sspcloud.fr/trainings" }
						}
					},
				]}
			/>
		</div>
	);

};

export declare namespace HomeKeyMetrics {
	export type I18nScheme = {
		'card1 description': undefined;
		'card1 button label': undefined;
		'card2 description': undefined;
		'card2 button label': undefined;
		'card3 description': undefined;
		'card3 button label': undefined;
	};
}

