import React, { useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@mui/styles";
import {
	Grid,
	Container,
	Typography,
	Card,
	CardContent,
	CardMedia,
	CardHeader,
	CardActions,
	Chip,
	Button,
	Dialog,
	DialogTitle,
	ImageList,
	ImageListItem,
} from "@mui/material";
import { sampleProject } from "../data/schemas.js";

const useStyles = makeStyles((theme) => ({
	root: {},
	tech: {
		maxHeight: 80,
		overflowY: "auto",
	},
	techChip: {
		marginLeft: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	projectImage: {
		display: "flex",
		margin: "auto",
		maxWidth: "100%",
		maxHeight: 100,
	},
}));

function ProjectProfile(props) {
	const classes = useStyles();
	const project = props.data;
	const images = project.image;
	const [showImages, setShowImages] = useState(false);
	const [showImage, setShowImage] = useState(null);
	return (
		<div>
			<Card>
				<CardHeader title={project.title}></CardHeader>
				<CardContent>
					<Typography style={{ whiteSpace: "pre-wrap" }}>
						{project.description}
					</Typography>
				</CardContent>
				{images[0] && (
					<CardMedia
						component="img"
						alt="green iguana"
						height="140"
						image={images[0].url}
						onClick={() => setShowImage(images[0])}
					/>
				)}
				{images.length > 1 && (
					<Button size="small" onClick={() => setShowImages(true)}>
						View All Project Images
					</Button>
				)}
				<CardContent>
					<Typography variant="h6">Project Tech</Typography>
					<div className={classes.tech}>
						{(project.tech ?? []).map((tech, i) => (
							<Chip
								label={tech}
								className={i !== 0 && classes.techChip}
							></Chip>
						))}
					</div>
					<Typography variant="h6">Project Timeline</Typography>
					<Typography>
						{project.startDate} - {project.endDate}
					</Typography>
				</CardContent>

				<CardActions>
					{project.url && (
						<Button href={project.url}>View {project.title}</Button>
					)}
					{project.codeRepositoryUrl && (
						<Button href={project.codeRepositoryUrl}>
							Code Review
						</Button>
					)}
				</CardActions>
			</Card>
			<ProjectImages
				images={images}
				title={project.title}
				open={showImages}
				onClose={() => setShowImages(false)}
			/>
			{showImage && (
				<ImageDialog
					open={showImage && showImage !== null}
					onClose={() => setShowImage(null)}
					image={showImage}
				/>
			)}
		</div>
	);
}

function ProjectImages(props) {
	const { onClose, images = [], title, open } = props;
	const classes = useStyles();
	const handleClose = () => {
		onClose();
	};
	const [showImage, setShowImage] = useState(null);
	return (
		<Dialog onClose={handleClose} open={open}>
			<DialogTitle>Project {title} Images</DialogTitle>
			<ImageList
				sx={{ width: 500, height: 450 }}
				cols={2}
				rowHeight={200}
			>
				{images.map((image) => (
					<ImageListItem
						key={image.id}
						onClick={() => setShowImage(image)}
					>
						<img loading="lazy" src={image.url}></img>
					</ImageListItem>
				))}
			</ImageList>
			{showImage && (
				<ImageDialog
					open={showImage && showImage !== null}
					onClose={() => setShowImage(null)}
					image={showImage}
				/>
			)}
		</Dialog>
	);
}

function ImageDialog(props) {
	const { onClose, image, open } = props;
	const classes = useStyles();
	const handleClose = () => {
		onClose();
	};
	return (
		<Dialog onClose={handleClose} open={open}>
			<img
				loading="lazy"
				src={image.url}
				alt={image.fileName}
				style={{ maxHeight: 600 }}
			></img>
		</Dialog>
	);
}

export { ProjectProfile };

ProjectProfile.defaultProps = {
	data: sampleProject,
};
ProjectProfile.propTypes = {
	data: {
		title: PropTypes.string,
	},
};
