import React from "react";
import { Container } from "@mui/material";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Footer from "./components/Footer.js";

// Routes
import Home from "./containers/Home.js";
import Projects from "./containers/Projects.js";
import Resume from "./containers/Resume.js";
import Tools from "./containers/Tools.js";

const useStyles = makeStyles((theme) => ({
	root: {
		boxShadow: theme.shadows[5],
		display: "flex",
		minHeight: "100vh",
		flexDirection: "column",
		background: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
	},
	content: {
		flex: 1,
	},
	footer: {
		flexShrink: 0,
		color: theme.palette.primary.contrastText,
		margin: theme.spacing(1),
	},
}));

function App(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Router>
				<NavigationBar></NavigationBar>
				<main className={classes.content}>
					<Container>
						<Switch>
							<Route path="/projects">
								<Projects />
							</Route>
							<Route path="/resume">
								<Resume />
							</Route>
							<Route path="/tools">
								<Tools />
							</Route>
							<Route path="/" exact={true}>
								<Home />
							</Route>
						</Switch>
					</Container>
				</main>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
