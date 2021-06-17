
import { useTranslation } from "../../i18n/useTranslations";
import { GlSection } from "gitlanding";

export type Props = {
	className?: string;
};

export function HomeIntroductionArticle(props: Props) {

	const { className } = props;

	const { t } = useTranslation("HomeIntroductionArticle");

	return (
		<GlSection
			className={className}
			article={{
				"title": t("title"),
				"paragraphMd": t("body"),
				"button": {
					"href": "https://datalab.sspcloud.fr",
					"title": t("button label")
				}
			}}
		/>
	);

};

export declare namespace HomeIntroductionArticle {
	export type I18nScheme = {
		title: undefined;
		body: undefined;
		'button label': undefined;
	};
}

