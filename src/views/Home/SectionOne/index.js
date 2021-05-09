import React from "react";
import UsersCard from "../UsersCard";
import TicketsCard from "../TicketsCard";
import ProjectsCard from "../ProjectsCard";

import classes from "./classes_sectionOne.module.css";

const SectionOne = () => {
	return (
		<div className={classes.section_one_grid_container}>
			<TicketsCard />
			<ProjectsCard />
			<UsersCard />
		</div>
	);
};

export default SectionOne;
