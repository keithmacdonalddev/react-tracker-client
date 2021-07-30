import Moment from 'react-moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Icon, faChevronRight } from 'components/Icon';

// Redux store ~ actions
import { showComponent } from 'store/actions/navigationActions';
import { getProjects } from 'store/actions/projectActions';

import classname from './project_list.module.css';
import { SELECTED_PROJECT } from 'store/types';

const hideElement = {
	position: 'absolute',
	top: 0,
	left: '-1000px',
};

const ProjectList = () => {
	const dispatch = useDispatch();

	const [mainView, setMainView] = useState('all-projects');
	const [viewSingleProject, setViewSingleProject] = useState({ active: false, project: null });

	const { projects, loading, error } = useSelector((state) => state.projects);

	useEffect(() => {
		dispatch(getProjects());
	}, [dispatch]);

	const openProject = (project) => {
		// setViewSingleProject({ active: true, data: project });
		console.log('openProject');
	};

	const newTicketClickHandler = (projectTitle) => {
		dispatch({ type: SELECTED_PROJECT, payload: projectTitle });
		dispatch(showComponent('createTicket'));
	};

	return (
		<div className={classname.projects_container}>
			{loading ? (
				<div>loading...</div>
			) : error ? (
				<div>{error}</div>
			) : projects ? (
				<>
					{projects.map((project, index) => {
						return (
							<div
								key={project._id}
								style={mainView !== 'all-projects' ? hideElement : null}
								className={classname.card}>
								<div className={classname.project_title}>
									<label htmlFor=''>Title</label>
									<div className={classname.data_item}>{project.title}</div>
								</div>

								<div className={classname.project_description}>
									<label htmlFor=''>Description</label>
									<div className={classname.data_item}>{project.description}</div>
								</div>

								<div className={classname.project_status}>
									<label htmlFor=''>Status</label>
									<div className={classname.data_item}>{project.status}</div>
								</div>

								<div className={classname.date}>
									<label htmlFor=''>Date</label>
									<Moment style={{ display: 'block' }} className={classname.data_item} format='MMM-DD'>
										{project.date}
									</Moment>
								</div>

								<div onClick={() => openProject(project)} className={classname.right_arrow_icon}>
									<Icon type={faChevronRight} />
								</div>
							</div>
						);
					})}
				</>
			) : (
				<h6>Loading...</h6>
			)}
		</div>
	);
};

export default ProjectList;
