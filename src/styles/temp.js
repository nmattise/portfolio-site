const useStyles = makeStyles((theme) => {
	return {
		about: {
			padding: theme.spacing(2),
			background: theme.palette.primary.main,
			color: theme.palette.primary.contrastText,
			height: "100%",
			overflowY: "auto",
			boxShadow: theme.shadows[2],
			display: "flex",
			flexDirection: "column",
			flex: 1,
		},
		panel: {
			height: "100%",
			overflowY: "auto",
			padding: theme.spacing(2),
		},
		spacer: {
			flexGrow: 1,
		},
		logo: {
			width: 256,
			height: 256,
			margin: "auto",
		},
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
		altDiv: {
			margin: `8px 8px 8px 8px`,
			background: theme.palette.primary.light,
		},
		highlights: {
			margin: theme.spacing(3),
		},
	};
});

{
	/* <div className={classes.highlights}>
						<Typography variant="h4" gutterBottom>
							Projects Currently in Development:
						</Typography>
						<Highlight
							title="Empire"
							subtitle={
								"The Strava companion app to view and build your KOM/QOM Empire"
							}
							links={[
								{
									disabled: true,
									link: "https://mountain-empire.vercel.app",
									text: "Empire Online",
								},
								{
									disabled: true,
									link: "https://mountain-empire.vercel.app",
									text: "Empire iOS App",
								},
								{
									disabled: true,
									link: "https://mountain-empire.vercel.app",
									text: "Empire Android App",
								},
							]}
							avatar={
								<img
									src={`${process.env.PUBLIC_URL}/logos/empire_512.webp`}
									style={{ height: 40, width: 40 }}
								/>
							}
						>
							<Typography variant="body2" gutterBottom>
								Using thecycling performance data and KOM/QOMs in{" "}
								<a href="https://strava.com">Strava</a>, Empire aims to
								visualize your existing kingdom/queendom and provid segemnts and
								power targets to expand your boarders.
							</Typography>
							<Typography variant="body2" gutterBottom>
								Empire will be available online at{" "}
								<a href={"https://mountain-empire.vercel.app"} target="_blank">
									mountain-empire.vercel.app
								</a>{" "}
								in April 2021, followed by iOS/Android Apps and a desktop
								implementation in May 2021.
							</Typography>

							<Typography variant="subtitle1">
								Get outside and start building your empire today!🚴
							</Typography>
						</Highlight>
					</div> */
}
{
	/* <span style={{ flexGrow: 1 }}> </span>
						<Typography variant="h6" align="center">
							developer | researcher | cyclist
						</Typography> */
}
