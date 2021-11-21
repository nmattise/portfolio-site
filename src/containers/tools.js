import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { graphqlClient, toolsQuery } from "../utils/data";

const useStyles = makeStyles((theme) => ({}));
function Tools() {
	const classes = useStyles();
	const [tools, setTools] = useState(null);

	useEffect(() => {
		const fetchTools = async () => {
			try {
				const { tools } = await graphqlClient.request(toolsQuery);
				console.log(tools);
				setTools(tools);
			} catch (error) {
				console.error(error);
				setTools([]);
			}
		};

		fetchTools();
	}, []);
	return (
		<div>
			<Typography variant="h4">Tools and Tips</Typography>
			<Typography variant="subtitle">
				Hardware and software I use be it coding, riding, reading, or shredding.
			</Typography>
			<br></br>
			<Typography variant="subtitle">
				Listing here does equal endorsement
			</Typography>
			<Typography variant="h3">Coming Soon!</Typography>
			Tools Nick uses:{" "}
			{tools ? `${tools.length} and counting.` : "Loading..."}
		</div>
	);
}
export default Tools;
