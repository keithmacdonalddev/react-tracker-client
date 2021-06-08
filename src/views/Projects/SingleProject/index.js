// Packages
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// Project Views
import SingleProjectJSX from "./SingleProjectJSX";
import EditProject from "../EditProject";
import DeleteProject from "../DeleteProject";

// Actions
import { showComponent } from "store/actions/navigationActions";

// CSS
import classname from "./SingleProject.module.css";

const SingleProject = () => {
	const dispatch = useDispatch();
	const [view, setView] = useState("current");

	const { project, loading } = useSelector((state) => state.singleProject);

	if (loading) {
		return <h6>Loading...</h6>;
	}

	if (project) {
		return (
			<div className={classname.page_layout}>
				{/* MINI NAVIGATION */}
				<div className={classname.button_container}>
					{/* CURRENT PROJECT BUTTON */}
					<div
						onClick={() => setView("current")}
						className={classname.button}
					>
						Current Project
					</div>

					{/* EDIT PROJECT BUTTON */}
					{/* set local state 'view' to edit. Will display the EditProject component */}
					<div
						onClick={() => setView("edit")}
						className={classname.button}
					>
						Edit
					</div>

					{/* DELETE PROJECT BUTTON */}
					<div
						onClick={() => setView("delete")}
						className={classname.button}
					>
						Delete
					</div>

					{/* BACK TO ALL PROJECTS BUTTON */}
					<div
						className={classname.button}
						onClick={() => dispatch(showComponent("My Projects"))}
					>
						All Projects
					</div>
				</div>
				{/* show a component depending on the current value of the "view" local state */}
				<div className={classname.project_container}>
					{view === "current" && (
						<SingleProjectJSX project={project} />
					)}
					{view === "edit" && <EditProject project={project} />}
					{view === "delete" && <DeleteProject project={project} />}
				</div>
			</div>
		);
	}

	return <h6>No data available</h6>;
};

export default SingleProject;
