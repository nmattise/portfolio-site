import React from "react";
import {
	Toolbar,
	AppBar,
	Hidden,
	Typography,
	Button,
	// Link as RouterLink,
} from "@mui/material";
import { NavLink as RouterLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import { Build, Code, Description, Home } from "@mui/icons-material";
const useStyles = makeStyles((theme) => ({
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
	links: {
		"& > * + *": {
			marginLeft: theme.spacing(2),
		},
	},
	barLogo: {
		height: 52,
		width: 52,
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(4),
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

function NavigationBar() {
	const classes = useStyles();
	return (
		<AppBar elevation={0} position="static" className={classes.appBar}>
			<Toolbar>
				<img
					alt=""
					src={`${process.env.PUBLIC_URL}/logos/mtns_white_512.png`}
					className={classes.barLogo}
				/>
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
								component={RouterLink}
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
	);
}

export default NavigationBar;
