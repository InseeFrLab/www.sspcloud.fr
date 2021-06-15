import { memo } from "react";
import { createUseClassNames } from "theme";
import { cx } from "tss-react";
import { useTranslation } from "i18n/useTranslations";
import { Gitlanding } from "gitlanding/Gitlanding";
import { TopBar } from "gitlanding/components/TopBar";

export type Props = {
	className?: string;
};

const { useClassNames } = createUseClassNames()(
	() => ({
		"root": {
		}
	})
);

export const Home = memo((props: Props) => {

	const { className } = props;

	const { classNames } = useClassNames({});

	const { t } = useTranslation("Home");

	return (
		<div className={cx(classNames.root, className)}>
			<TopBar/>
			<Gitlanding />
		</div>
	);

});

export declare namespace Home {
	export type I18nScheme = {
		'hello person': { person: string },
		accept: undefined;
	};
}