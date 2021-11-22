import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import {
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
		maxHeight: 85,
		overflowY: "auto",
	},
	techChip: {
		marginBottom: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	projectImage: {
		display: "flex",
		margin: "auto",
		maxWidth: "100%",
		maxHeight: 100,
	},
}));

function isOverflown(element) {
	return (
		element.scrollHeight > element.clientHeight ||
		element.scrollWidth > element.clientWidth
	);
}
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
						alt={images[0].fileName}
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
								className={classes.techChip}
							></Chip>
						))}
					</div>
					<Typography variant="h6">Project Timeline</Typography>
					<Typography>
						{`${
							new Date(project.startDate).getMonth() + 1
						}/${new Date(project.startDate).getFullYear()}`}{" "}
						to{" "}
						{`${
							new Date(project.endDate).getMonth() + 1
						}/${new Date(project.endDate).getFullYear()}`}
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
						<img loading="lazy" src={image.url} alt={image.fileName} />
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

	const handleClose = () => {
		onClose();
	};
	return (
		<Dialog onClose={handleClose} open={open}>
			<img
				loading="lazy"
				src={image.url}
				alt={image.fileName}
				style={{ maxHeight: 600, width: "100%" }}
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
