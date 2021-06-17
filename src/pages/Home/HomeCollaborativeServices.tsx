
import { useTranslation } from "../../i18n/useTranslations";
import { GlCardSection } from "gitlanding";
import balloonImgUrl from "assets/collaborative_tools/balloon.png";
import drawioImgUrl from "assets/collaborative_tools/drawio.png";
import githubImgUrl from "assets/collaborative_tools/github.png";
import gitlabImgUrl from "assets/collaborative_tools/gitlab.png";
import plusImgUrl from "assets/collaborative_tools/plus.png";
import tchapImgUrl from "assets/collaborative_tools/tchap.png";
import rocketChatImgUrl from "assets/collaborative_tools/rocket-chat.png";

export type Props = {
	className?: string;
};

export function HomeCollaborativeServices(props: Props) {

	const { className } = props;

	const { t } = useTranslation("HomeCollaborativeServices");

	return (
		<GlCardSection
			className={className}
			cards={[
				{
					"type": "normal",
					"heading": {
						"iconUrls": [gitlabImgUrl, githubImgUrl]
					},
					"description": {
						"title": t("forge title"),
						"paragraph": t("forge description")
					},
					"href": "https://git.lab.sspcloud.fr"
				},
				{
					"type": "normal",
					"heading": {
						"iconUrls": [tchapImgUrl]
					},
					"description": {
						"title": t("social title"),
						"paragraph": t("social description")
					},
					"href": "https://tchap.gouv.fr/#/room/#SSPCloudXDpAw6v:agent.finances.tchap.gouv.fr"
				},
				{
					"type": "normal",
					"heading": {
						"iconUrls": [rocketChatImgUrl, drawioImgUrl, balloonImgUrl, plusImgUrl]
					},
					"description": {
						"title": t("forge title"),
						"paragraph": t("forge description")
					},
					"href": "https://www.mim-libre.fr/communaute-mim-libre/"
				},
			]}
		/>
	);

};

export declare namespace HomeCollaborativeServices {
	export type I18nScheme = {
		'forge title': undefined;
		'forge description': undefined;
		'social title': undefined;
		'social description': undefined;
		'collaborative tools title': undefined;
		'collaborative tools description': undefined;
	};
}

