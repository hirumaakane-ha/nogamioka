import { React, useState } from "react";
import clsx from "clsx";

// ui
import { Typography } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { useTheme } from "@material-ui/core/styles";
import customTheme from "../styles/theme";

// icons
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import WorkIcon from "@material-ui/icons/Work";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import BeenhereIcon from "@material-ui/icons/Beenhere";

// modals
import Contact from "./contact";
import Experience from "./experience";

const useStyles = makeStyles((theme) => ({
	navBarWrapper: {
		position: "absolute",
		bottom: "0",
		borderTop: "solid 1px grey",
		display: "flex",
		"& ul": {
			"& li": {
				margin: "1rem",
			},
		},
		height: "80px",
		width: "100%",
	},
	navBar: {
		padding: "0.5rem",
		margin: "auto",
		"& > *": {
			margin: "1rem",
		},
	},
	customButtonHome: {
		color: "#1691f0",
		borderColor: "#1691f0",
		"&:hover": {
			background: "#1691f0",
			color: customTheme.palette.background.main,
		},
	},
	customButtonContact: {
		color: customTheme.palette.primary.main,
		borderColor: customTheme.palette.primary.main,
		"&:hover": {
			background: customTheme.palette.primary.main,
			color: customTheme.palette.background.main,
		},
	},
	customButtonExperience: {
		color: "#facc00",
		borderColor: "#facc00",
		"&:hover": {
			background: "#facc00",
			color: customTheme.palette.background.main,
		},
	},
	customButtonProjects: {
		color: "#00ddff",
		borderColor: "#00ddff",
		"&:hover": {
			background: "#00ddff",
			color: customTheme.palette.background.main,
		},
	},
	customButtonAwards: {
		color: customTheme.palette.navButton,
		borderColor: customTheme.palette.navButton,
		"&:hover": {
			background: customTheme.palette.navButton,
			color: customTheme.palette.background.main,
		},
	},
	customButtonGitHub: {
		color: "#fff",
		borderColor: "#fff",
		"&:hover": {
			background: "#fff",
			color: customTheme.palette.background.main,
		},
	},
}));

export default function NavBar({ setCommand }) {
	const [values, setValues] = useState({
		showContact: false,
		showExperience: false,
		showAwards: false,
		showProjects: false,
	});

	// button handlers
	const toHome = () => {
		setCommand("cd ~/home/aaanh");
	};
	const handleContact = () => {
		setCommand("contact");
		setValues({ ...values, showContact: !values.showContact });
	};
	const handleExperience = () => {
		setCommand("experience");
		setValues({ ...values, showExperience: !values.showExperience });
	};
	const handleProjects = () => {
		setCommand("projects");
		setValues({ ...values, showProjects: true });
	};
	const handleGitHub = (e) => {
		e.preventDefault();
		setCommand("github");
		window.open("https://github.com/aaanh");
	};
	const handleAwards = () => {
		setCommand("awards");
		setValues({ ...values, showAwards: true });
	};

	const classes = useStyles();

	return (
		<div className={classes.navBarWrapper}>
			<Contact showContact={values.showContact} handleClose={handleContact}></Contact>
			<Experience
				showExperience={values.showExperience}
				handleClose={handleExperience}
			></Experience>
			<div className={classes.navBar}>
				<Button onClick={toHome} variant="outlined" className={classes.customButtonHome}>
					<span style={{ textTransform: "lowercase" }}>$ cd /home/aaanh</span>
				</Button>
				<Button
					onClick={handleContact}
					variant="outlined"
					className={classes.customButtonContact}
				>
					<MailIcon></MailIcon>&nbsp; Contact
				</Button>
				<Button
					onClick={handleExperience}
					variant="outlined"
					className={classes.customButtonExperience}
				>
					<WorkIcon></WorkIcon>&nbsp; Experience
				</Button>
				<Button
					onClick={handleProjects}
					variant="outlined"
					className={classes.customButtonProjects}
				>
					<AccountTreeIcon></AccountTreeIcon>&nbsp; Projects
				</Button>
				<Button
					onClick={handleAwards}
					variant="outlined"
					className={classes.customButtonAwards}
				>
					<BeenhereIcon></BeenhereIcon>&nbsp; Awards and Honors
				</Button>
				<Button
					onClick={handleGitHub}
					variant="outlined"
					className={classes.customButtonGitHub}
				>
					<GitHubIcon></GitHubIcon>
					&nbsp; @aaanh
				</Button>
			</div>
		</div>
	);
}
