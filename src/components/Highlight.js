import React from "react";
import PropTypes from "prop-types";

import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Avatar,
	Button,
	Link,
	Typography,
} from "@material-ui/core";

function Highlight(props) {
	const { title, subtitle, links = [], avatar, body } = props;
	return (
		<Card>
			<CardHeader
				title={<Typography variant="h4">{title}</Typography>}
				subheader={subtitle}
				avatar={
					avatar && <Avatar aria-label="highlight-avatar">{avatar}</Avatar>
				}
			/>
			<CardContent>
				<Typography variant="body2">{body}</Typography>
				{props.children}
			</CardContent>
			<CardActions
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-end",
				}}
			>
				{links.map(({ link, text, icon, disabled = false }) => (
					<Button
						component={Link}
						href={link}
						disabled={disabled}
						variant="contained"
						disableElevation
					>
						{icon && icon}
						{text}
					</Button>
				))}
			</CardActions>
		</Card>
	);
}

Highlight.propTypes = {
	title: PropTypes.string,
	links: PropTypes.array,
};
export default Highlight;
