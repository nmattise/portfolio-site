import { Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

export default function ComingSoon() {
	return (
		<div>
			<Typography variant="h2" align="center">
				Error!
			</Typography>
			<Typography variant="p" align="center">
				<NavLink to="/">Please go home</NavLink>. Do not collect $200.
			</Typography>
		</div>
	);
}
