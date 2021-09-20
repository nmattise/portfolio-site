import React, { useState, Fragment } from "react";
import {
	NavLink,
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import {
	Link,
	Grid,
	makeStyles,
	Typography,
	Divider,
	AppBar,
	Toolbar,
	IconButton,
	Card,
	CardHeader,
	Hidden,
	Drawer,
	Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import Footer from "./components/Footer";
import {
	Build,
	Close,
	Code,
	Description,
	EmojiPeople,
	Home,
} from "@material-ui/icons";

// Routes
import HomePage from "./containers/Home";
import Projects from "./containers/Projects";
// import AboutMe from "./containers/About";
import Resume from "./containers/Resume";
import Tools from "./containers/Tools";

const useStyles = makeStyles((theme) => ({
	barLogo: {
		height: 52,
		width: 52,
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(4),
	},
	div: {
		margin: `4px 8px 8px 8px`,
		background: "rgba(255,255,255,0.4)",
	},
	main: {
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
	navigation: {
		display: "flex",
		minHeight: "100vh",
		flexDirection: "column",
		background: theme.palette.primary.light,
		padding: theme.spacing(2),
	},
	navCard: {
		width: "100%",
		...theme.mixins.toolbar,
	},
	page: {
		color: "black",
	},
	activePage: {
		background: theme.palette.primary.light,
		color: theme.palette.primary.contrastText,
		boxShadow: theme.shadows[2],
		// borderBottom: "2px solid white",
		"&:hover": {
			textDecoration: "none",
			backgroundColor: "rgba(255, 255, 255, 0.4)",
		},
	},
	drawer: {
		minWidth: 350,
	},
	title: {
		[theme.breakpoints.down("sm")]: {
			flexGrow: 1,
		},
	},
	links: {
		"& > * + *": {
			marginLeft: theme.spacing(2),
		},
	},
}));
const links = [
	{ title: "Home", to: "/", icon: <Home />, root: true, disabled: false },
	// {
	// 	title: "About Me",
	// 	to: "/about",
	// 	icon: <EmojiPeople />,
	// 	root: false,
	// 	disabled: true,
	// },
	{
		title: "Projects",
		to: "/projects",
		icon: <Code />,
		root: false,
		disabled: true,
	},
	{
		title: "Resume",
		to: "/resume",
		icon: <Description />,
		root: false,
		disabled: true,
	},
	{
		title: "Tools",
		to: "/tools",
		icon: <Build />,
		root: false,
		disabled: true,
	},
];

function Navigation() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const toggleDrawer = () => setOpen(!open);
	return (
		<Fragment>
			{/* BUGS: Drawer has the Footer WRont */}
			<Drawer
				anchor="left"
				open={open}
				onClose={() => setOpen(false)}
				elevation={1}
			>
				<div className={classes.drawer}>
					<AppBar elevation={0} position="static" color="primary">
						<Toolbar>
							<span style={{ flexGrow: 1 }}></span>
							<IconButton color="inherit" onClick={() => setOpen(false)}>
								<Close />
							</IconButton>
						</Toolbar>
					</AppBar>
					<Grid container direction="column">
						{links.map((link, i) => (
							<Grid item xs key={i}>
								<Link
									color="inherit"
									component={NavLink}
									to={link.to}
									activeClassName={classes.activePage}
									exact={link.root}
									onClick={toggleDrawer}
								>
									{link.title}
								</Link>
							</Grid>
						))}
					</Grid>
				</div>
			</Drawer>

			<AppBar elevation={0} position="static" className={classes.appBar}>
				<Toolbar>
					<Hidden mdUp>
						<IconButton color="inherit" onClick={toggleDrawer}>
							<MenuIcon />
						</IconButton>
					</Hidden>
					<Hidden smDown>
						<img
							alt=""
							src={`${process.env.PUBLIC_URL}/logos/mtns_white_512.png`}
							className={classes.barLogo}
						/>
					</Hidden>
					<Typography variant="h4" align="center" className={classes.title}>
						Nick Mattise
					</Typography>
					<span style={{ flexGrow: 1 }}></span>
					<Hidden smDown>
						<div className={classes.links}>
							{links.map((link, i) => (
								<Button
									color="inherit"
									key={i}
									component={NavLink}
									to={link.to}
									activeClassName={classes.activePage}
									exact={link.root}
								>
									{link.title}
								</Button>
							))}
						</div>
					</Hidden>
				</Toolbar>
			</AppBar>
		</Fragment>
	);
}
export default function App() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Router>
				<Grid container direction={"row"}>
					<Grid item xs container className={classes.main}>
						<Navigation></Navigation>
						<Divider className={classes.div} />
						{/* Main Content Routes */}
						<div className={classes.content}>
							<Switch>
								<Route exact path="/">
									<HomePage />
								</Route>
								{/* <Route path="/about"> */}
								{/* 	<AboutMe /> */}
								{/* </Route> */}
								<Route path="/projects">
									<Projects />
								</Route>
								<Route path="/resume">
									<Resume />
								</Route>
								<Route path="/tools">
									<Tools />
								</Route>
								<Redirect to="/"></Redirect>
							</Switch>
						</div>
						<Footer />
					</Grid>
				</Grid>
			</Router>
		</div>
	);
}
