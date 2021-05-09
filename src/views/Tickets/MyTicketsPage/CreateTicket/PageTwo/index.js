import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProjects } from "store/actions/projectActions";
import { SELECTED_PROJECT_RESET } from "store/types";

import PageThree from "../PageThree";

import style from "./pageTwo.module.css";

const PageTwo = ({ ticketType, projectId }) => {
	const dispatch = useDispatch();

	const [localProject, setLocalProject] = useState(null);

	const { projects, loading, error } = useSelector((state) => state.projects);
	const selectedProject = useSelector((state) => state.selectedProject);

	const chooseProjectHandler = (project) => {
		if (project === localProject) {
			setLocalProject(null);
		} else {
			setLocalProject(project);
		}
		return;
	};
	if (selectedProject) {
		setLocalProject(selectedProject);
		dispatch({ type: SELECTED_PROJECT_RESET });
	}

	useEffect(() => {
		dispatch(getProjects);
	}, [dispatch]);

	return (
		<>
			<div className={style.chooseProjectContainer}>
				For which project?
				<div className={style.projectsList}>
					{loading && <h6>loading...</h6>}
					{error && <h6>{error}</h6>}
					{projects &&
						projects.map((project) => (
							<div
								key={project._id}
								className={
									localProject === project.title
										? style.active
										: style.notActive
								}
								onClick={() => chooseProjectHandler(project.title)}
							>
								{project.title}
							</div>
						))}
				</div>
				{/* -------------------- STEP THREE --------------------*/}
				<PageThree ticketType={ticketType} localProject={localProject} />
			</div>
		</>
	);
};

export default PageTwo;
