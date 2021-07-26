
import { memo } from "react";
import { makeStyles } from "app/theme";


const useStyles = makeStyles()(
	theme => ({
		"root": {
			"borderRadius": theme.spacing(3),
			"backgroundColor": theme.colors.useCases.surfaces.surface1,
			"boxShadow": theme.shadows[3],
			"width": 300,
			"height": 300
		}
	})
);

export type Props = {
	className?: string;
};

export const Card = memo((props: Props) => {

	const { className } = props;

	const { classes, cx} = useStyles();

	return (
		<div className={cx(classes.root, className)}>
			
		</div>
	);

});

