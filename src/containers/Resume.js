import { Container, Typography } from "@material-ui/core";
import React from "react";
import ComingSoon from "../components/ComingSoon";
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
				src="https://docs.google.com/document/d/e/2PACX-1vQaYaH4zi__QhRBuvwF3UYdKzlWobZLfCfSA70-WjAPxq5Bfdl2wBrFR_PB4np4fohZlr3x_S7Npyhr/pub?embedded=true"
			></iframe>
		</Container>
	);
}
