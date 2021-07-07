import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';
import { Icon, faChevronRight } from 'components/Icon';

// Redux store ~ actions
import { showComponent } from 'store/actions/navigationActions';
import { getProjects } from 'store/actions/projectActions';

import classname from './projects_list.module.css';
import { SELECTED_PROJECT } from 'store/types';
import SingleProject from '../SingleProject';

const hideElement = {
	position: 'absolute',
	top: 0,
	left: '-1000px',
};

const ProjectsList = () => {
	const dispatch = useDispatch();

	const [mainView, setMainView] = useState('all-projects');
	const [viewSingleProject, setViewSingleProject] = useState({ active: false, project: null });

	const { projects, loading, error } = useSelector((state) => state.projects);

	useEffect(() => {
		dispatch(getProjects());
	}, [dispatch]);

	// const singleProjectClickHandler = (id) => {
	// dispatch(fetchSingleProject(id));
	// dispatch(showComponent('project'));
	// };

	const openProject = (project) => {
		setViewSingleProject({ active: true, data: project });
		setMainView('single-project');
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
								<div className={classname.project_title}>{project.title}</div>

								<div className={classname.project_description}>{project.description}</div>

								<Moment className={classname.date} format='MMM-DD'>
									{project.date}
								</Moment>

								<div onClick={() => newTicketClickHandler(project.title)} className={classname.icon_container}>
									<span className={classname.new_ticket_text}> New Ticket</span>
								</div>

								<div onClick={() => openProject(project)} className={classname.go_icon}>
									<Icon type={faChevronRight} />
								</div>
							</div>
						);
					})}

					<SingleProject project={viewSingleProject.data} />
				</>
			) : (
				<h6>Loading...</h6>
			)}
		</div>
	);
};

export default ProjectsList;
