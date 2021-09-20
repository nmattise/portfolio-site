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
	List,
	ListItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export default function Tools() {
	const classes = useStyles();
	return (
		<Container>
			<Card>
				<CardHeader
					title={<Typography variant="h4">Tools of the Trades</Typography>}
					subheader={
						<Typography variant="subtitle1" gutterBottom>
							Usable code snippents, everyday hardware, helpful information and
							more.
						</Typography>
					}
				/>
			</Card>
			<Card>
				<CardHeader title={"Software Tools"}></CardHeader>
				<CardContent>
					<List>
						<ListItem>Help Me</ListItem>
					</List>
				</CardContent>
			</Card>
			<Card>
				<CardHeader title={"Hardware Tools"}></CardHeader>
				<CardContent></CardContent>
			</Card>
		</Container>
	);
}
