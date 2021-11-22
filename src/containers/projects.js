import React, { useEffect, useState } from "react";

import { Typography } from "@mui/material";
import { graphqlClient, projectsQuery } from "../utils/data";
import { ProjectProfile } from "../components/ProjectProfile";
import Masonry from "@mui/lab/Masonry";

function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const { projects } = await graphqlClient.request(projectsQuery);
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
			<Typography variant="h4">Nick's Projects</Typography>

			<Typography variant="caption">
				**Note that some Code Repositories may not be available because
				they are set to private. If you are intersted in seeing them
				please contact me at nmattise[at]gmail[dot]com.**
			</Typography>

			<Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={1}>
				{projects
					.sort((a, b) => new Date(b.endDate) - new Date(a.endDate))
					.map((project, i) => (
						<ProjectProfile key={project.id ?? i} data={project} />
					))}
			</Masonry>
			<p>
				Nick's worked on{" "}
				{projects && projects.length > 0
					? projects.length
					: "Loading..."}{" "}
				{projects.length > 1 ? "projects" : "project"} since 2012.
			</p>
		</div>
	);
}
export default Projects;
