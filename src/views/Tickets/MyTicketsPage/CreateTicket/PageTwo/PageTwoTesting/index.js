// Packages
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProjects } from "store/actions/projectActions";
import { PAGE_ONE, PAGE_TWO, PAGE_THREE, SELECTED_PROJECT } from "store/types";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles ~ css
import style from "./pageTwo.module.css";

const PageTwo = ({ projectId }) => {
	console.log(`projectid: ${projectId}`);
	const dispatch = useDispatch();

	// when a user clicks on a project, save the chosen project to the selection variable state
	const [selection, setSelection] = useState(null);
	const [localProjects, setLocalProjects] = useState("loading...");

	// Modal status determines which version of createTicket to return
	const { open } = useSelector((state) => state.modalStatus);

	// Global state: temporary project selection while creating a new ticket
	const selectedProject = useSelector((state) => state.selectedProject);

	// Global state: list of project from API
	const { projects, loading, error } = useSelector((state) => state.projects);

	//	if no projects are selected, a click will update both local and global state to the clicked project
	// 	if a project is already selected and a value is in the selection state, our click handler will check if the selection state
	// equals the clickedProject.  If they are equal, then we de-select the selection by setting null to the local and global selected project states.
	const userClickedAProjectHandler = (clickedProjectTitle) => {
		if (selection === clickedProjectTitle) {
			setSelection(null);
			dispatch({ type: SELECTED_PROJECT, payload: null });
			return;
		} else {
			setSelection(clickedProjectTitle);
			dispatch({ type: SELECTED_PROJECT, payload: clickedProjectTitle });
			return;
		}
	};

	useEffect(() => {
		if (projects) {
			setLocalProjects(projects);
			return;
		} else if (loading) {
			return;
		} else if (error) {
			return;
		} else if (!projects && !loading && !error) {
			dispatch(getProjects());
			return;
		}
	}, []);

	useEffect(() => {
		if (selectedProject) {
			setSelection(selectedProject);
		}
	}, []);

	if (projectId) {
		return localProjects.map((project) => (
			<div key={project._id} className={style.container}>
				<div
					className={
						selection === project.title
							? style.active
							: style.chooseTicketColumn
					}
					onClick={() => userClickedAProjectHandler(project.title)}
				>
					{project.title}
					{selection === project.title ? (
						<FontAwesomeIcon
							className={style.icon}
							icon={faCheckCircle}
						></FontAwesomeIcon>
					) : null}
				</div>
			</div>
		));
	} else {
		return (
			<div
				className={
					open ? style.createTicketContainerModal : style.createTicketContainer
				}
			>
				<div className={style.headerContainer}>
					<h6 className={style.headerTitle}>Choose A Project</h6>
				</div>
				<div className={style.chooseTicketContainer}>
					{localProjects === "loading..." ? (
						<h6>loading...</h6>
					) : (
						localProjects.map((project) => (
							<div key={project._id} className={style.container}>
								<div
									className={
										selection === project.title
											? style.active
											: style.chooseTicketColumn
									}
									onClick={() => userClickedAProjectHandler(project.title)}
								>
									{project.title}
									{selection === project.title ? (
										<FontAwesomeIcon
											className={style.icon}
											icon={faCheckCircle}
										></FontAwesomeIcon>
									) : null}
								</div>
							</div>
						))
					)}
				</div>
			</div>
		);
	}
};

export default PageTwo;
