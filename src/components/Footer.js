import React from "react";
import { socials, quotes } from "../data";
import { Grid, Link, Tooltip, Typography, makeStyles, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	icon: {
		margin: theme.spacing(2),
	},
	div: {
		margin: `4px 8px 8px 8px`,
		background: "rgba(255,255,255,0.4)",
	},
	footer: {
		flexShrink: 0,
		color: theme.palette.primary.contrastText,
		margin: theme.spacing(1),
	},
}));
// Write function to randomly shuffle an array  and then loop through it on a setInterval
function randomLooping() {}

function SocialLinks() {
	const classes = useStyles();
	return (
		<Grid container direction="row" spacing={0} justify="center">
			{socials.map((social) => {
				return (
					<Grid item key={social.id}>
						<Tooltip title={social.title}>
							<Link href={social.link} color="inherit" className={classes.icon}>
								{social.icon}
								{/* <Typography variant='subtitle1' align='center'>{social.title}</Typography> */}
							</Link>
						</Tooltip>
					</Grid>
				);
			})}
		</Grid>
	);
}

function Quotes() {
	let quote = quotes[Math.floor(Math.random() * quotes.length)];
	return (
		<Typography gutterBottom align="center" variant="caption">
			<span style={{ fontStyle: "italic" }}>"{quote?.quote}"</span> -
			{quote?.source}
		</Typography>
	);
}
function Footer() {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Grid container direction="column" spacing={1}>
				<Quotes />
				<Divider className={classes.div} />
				<SocialLinks />
			</Grid>
		</footer>
	);
}

export default Footer
