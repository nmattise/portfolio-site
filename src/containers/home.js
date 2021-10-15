import React, { useState } from "react";
import { Grid, Container, Typography, Card, CardContent } from "@mui/material";
import clsx from "clsx";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	backgroundCard: {
		height: theme.shadows[0],
		boxShadow: theme.shadows[0],
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
	},
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},

	links: {
		color: theme.palette.primary.contrastText,
	},
	media: {
		height: 0,
		paddingTop: "75%", // 16:9
	},
	profile: {
		width: "100%",
		maxWidth: 200,
		display: "flex",
		marginRight: "auto",
		// marginLeft: theme.spacing(2),
		borderRadius: theme.shape.borderRadius,
	},
	actions: {
		display: "flex",
		justifyContent: "flex-start",
	},
}));
let images = [
	{ id: "biking", path: "images/biking.jpeg" },
	{ id: "skiing", path: "images/skiing.jpeg" },
	{ id: "standing", path: "images/standing.jpeg" },
	{ id: "sitting", path: "images/sitting.jpeg" },
];
const getRandom = (max) => {
	return Math.floor(Math.random() * max);
};

export default function Home() {
	const classes = useStyles();
	const [index, setIndex] = useState(getRandom(images.length, -1));
	const goToNext = () => {
		let i = index;
		if (i === images.length - 1) {
			setIndex(0);
		} else {
			setIndex(i + 1);
		}
	};
	return (
		<Container maxWidth="md">
			<Grid container direction="column" spacing={2} justifyContent="left">
				<Grid item xs>
					<Card className={clsx(classes.card, classes.backgroundCard)}>
						<CardContent>
							<Typography align="left" variant="h4">
								Hi.
							</Typography>
							<Typography align="left" variant="h4">
								I'm Nick.{" "}
							</Typography>
							<Typography align="left" variant="h4">
								I write code.
							</Typography>
							<Typography align="left" variant="h4">
								I ride bikes.
							</Typography>
							<Typography align="left" variant="h4">
								I read books.
							</Typography>
							<br></br>
							<Typography>
								Yes I am working towards being able to do all three at once.
							</Typography>
							<Typography align="left">
								Learn more about{" "}
								<a href="https://github.com/nmattise" className={classes.links}>
									what I've built
								</a>{" "}
								and{" "}
								<a
									href="https://www.strava.com/athletes/33281430"
									className={classes.links}
								>
									where I've ridden
								</a>
								.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs>
					<Card className={clsx(classes.card, classes.backgroundCard)}>
						<CardContent>
							<Typography align="left" variant="h4">
								{" "}
								This is me.
							</Typography>

							<img
								alt=""
								src={`${process.env.PUBLIC_URL}/${images[index].path}`}
								className={classes.profile}
								onClick={goToNext}
							/>
							<div style={{ maxWidth: 320 }}>
								<Typography variant="caption">
									Note that I post these photos not because I am proud of my own
									visage, but because most people like to see the man with whom
									they are doing business.
								</Typography>
							</div>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}
