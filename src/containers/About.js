import React, { useState } from "react";
import {
	Divider,
	Container,
	Typography,
	Grid,
	makeStyles,
	Card,
	CardHeader,
	CardContent,
} from "@material-ui/core";
import { info } from "../content";
const useStyles = makeStyles((theme) => ({
	profilePic: {
		// height: 250,
		width: "100%",
		boxShadow: theme.shadows[2],
		borderRadius: theme.shape.borderRadius,
	},
}));
let images = [
	{ id: "biking", path: "images/biking.jpeg" },
	{ id: "skiing", path: "images/skiing.jpeg" },
	{ id: "standing", path: "images/standing.jpeg" },
	{ id: "sitting", path: "images/sitting.jpeg" },
];
const getRandom = () => Math.floor(Math.random() * images.length);

export default function About() {
	const classes = useStyles();
	const [index, setIndex] = useState(getRandom());
	const setRandom = () => {
		let i = index;
		while (i === index) {
			i = getRandom();
		}
		setIndex(i);
	};

	return (
		<Container>
			<Grid container direction="row" spacing={2}>
				<Grid item xs>
					<Card>
						<CardHeader
							title={<Typography variant="h4">About Me</Typography>}
						></CardHeader>
						<CardContent>
							<Typography>{info.summary}</Typography>
							<Divider style={{ margin: 8 }}></Divider>
							<Typography>{info.bio}</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={3}>
					<img
						alt=""
						src={`${process.env.PUBLIC_URL}/${images[index].path}`}
						className={classes.profilePic}
						onClick={setRandom}
					/>
				</Grid>
			</Grid>
		</Container>
	);
}
