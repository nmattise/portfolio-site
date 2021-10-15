import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
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
			<h1>Coming Soon!</h1>
			Tools Nick uses: {tools ? `${tools.length} and counting.` : "Loading..."}
		</div>
	);
}
export default Tools;
