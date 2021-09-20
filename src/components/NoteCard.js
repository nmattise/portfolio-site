import React from "react";
import {
	Container,
	Typography,
	Card,
	CardHeader,
	CardContent,
	Table,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
	makeStyles,
	Grid,
} from "@material-ui/core";
import clsx from "clsx";

const useCardStyles = makeStyles((theme) => ({
	parent: { display: "grid" },
	card: {
		height: 300,
		width: 500,
		boxShadow: theme.shadows[4],
		gridColumn: 1,
		gridRow: 1,
	},
	background: {
		backgroundImage: `url:(data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"/></svg>)`,
		backgroundSize: "100% 24px",
		backgroundRepeat: "no-repeat",
	},
}));
const NoteCardStack = (props) => {
	const classes = useCardStyles();
	const { count = 3, children } = props;
	const offset = (index) => ({
		marginLeft: index * 10,
		marginTop: index * 10,
		zIndex: index * 100,
	});
	return (
		<div className={classes.parent}>
			{new Array(count).fill(null).map((v, i) => {
				return (
					<Card className={clsx(classes.card)} style={offset(i)}>
						{i === count - 1 && children}
					</Card>
				);
			})}
		</div>
	);
};
export default NoteCardStack;
