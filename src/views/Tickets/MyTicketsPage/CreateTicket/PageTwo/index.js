import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProjects } from 'store/actions/projectActions';
import { SELECTED_PROJECT_RESET } from 'store/types';

import PageThree from '../PageThree';

import style from './pageTwo.module.css';
import classname from '../PageOne/pageOne.module.css';

const PageTwo = ({ ticketType, projectId }) => {
	const dispatch = useDispatch();

	const [localProject, setLocalProject] = useState(null);

	const { userInfo } = useSelector((state) => state.userLogin);
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
			<div style={{ marginTop: 30 }} className={classname.stepOneContainer}>
				<h2 className={classname.step_one_heading}>For which project?</h2>
				<div className={style.projectsList}>
					{loading && <h6>loading...</h6>}
					{error && <h6>{error}</h6>}
					{projects &&
						projects.map((project) => {
							return (
								project.owner === userInfo._id && (
									<div
										key={project._id}
										className={localProject === project.title ? classname.active : classname.notActive}
										onClick={() => chooseProjectHandler(project.title)}>
										{project.title}
									</div>
								)
							);
						})}
				</div>
				{/* -------------------- STEP THREE --------------------*/}
				<PageThree ticketType={ticketType} localProject={localProject} />
			</div>
		</>
	);
};

export default PageTwo;
