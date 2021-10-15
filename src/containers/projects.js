import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { graphqlClient, projectsQuery } from "../utils/data";
const useStyles = makeStyles((theme) => ({}));
function Projects() {
	const classes = useStyles();
	const [projects, setProjects] = useState(null);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const { projects } = await graphqlClient.request(projectsQuery);
				console.log(projects);
				setProjects(projects);
			} catch (error) {
				console.error(error);
				setProjects([]);
			}
		};

		fetchProjects();
	}, []);
	return (
		<div>
			<h1>Coming Soon!</h1>
			<p>
				Projects Nick's worked on: {projects ? projects.length : "Loading..."}
			</p>
		</div>
	);
}
export default Projects;
