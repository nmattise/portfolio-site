import React from "react";
import { Container, Typography } from "@mui/material";

export default function Resume() {
	return (
		<Container>
			<Typography variant="h4">Resume</Typography>
			<iframe
				style={{
					height: "100%",
					width: "100%",
					minHeight: "1000px",
				}}
				src={process.env.REACT_APP_RESUME_URL}
			/>
		</Container>
	);
}
