import React, { useState } from "react";
import {
	Card,
	CardHeader,
	CardContent,
	Container,
	Typography,
} from "@material-ui/core";
import ComingSoon from "../components/ComingSoon";
import NoteCardStack from "../components/NoteCard";
function Projects() {
	const [activeProject, setActiveProject] = useState(null);
	return (
		<Container>
			<Card>
				<CardHeader
					title={<Typography variant="h4">Projects</Typography>}
					subheader={
						<Typography variant="subtitle1" gutterBottom>
							Projects, Sites and Stuff I've worked on.
						</Typography>
					}
				></CardHeader>
				<ComingSoon />
			</Card>
			<NoteCardStack>
				<CardContent>help me</CardContent>
			</NoteCardStack>
		</Container>
	);
}

export default Projects;
