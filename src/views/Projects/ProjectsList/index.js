import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';
import { Icon, faChevronRight } from 'components/Icon';

// Redux store ~ actions
import { showComponent } from 'store/actions/navigationActions';
import { fetchSingleProject, getProjects } from 'store/actions/projectActions';

import classname from './projects_list.module.css';
import { SELECTED_PROJECT } from 'store/types';

const ProjectsList = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);
	const { projects, loading, error } = useSelector((state) => state.projects);

	useEffect(() => {
		dispatch(getProjects());
	}, [dispatch]);

	const singleProjectClickHandler = (id) => {
		dispatch(fetchSingleProject(id));
		dispatch(showComponent('project'));
	};

	const newTicketClickHandler = (projectTitle) => {
		dispatch({ type: SELECTED_PROJECT, payload: projectTitle });
		dispatch(showComponent('createTicket'));
	};

	return (
		<>
			{loading ? (
				<div>loading...</div>
			) : error ? (
				<div>{error}</div>
			) : projects ? (
				<div className={classname.projects_container}>
					{projects.map((project, index) => {
						return project.administrator === userInfo._id ? (
							<div key={project._id} className={classname.card}>
								<div className={classname.project_title}>{project.title}</div>

								<div className={classname.project_description}>{project.description}</div>

								<Moment className={classname.date} format='MMM-DD'>
									{project.date}
								</Moment>
								<div onClick={() => newTicketClickHandler(project.title)} className={classname.icon_container}>
									<span className={classname.new_ticket_text}> New Ticket</span>
								</div>
								<div onClick={() => singleProjectClickHandler(project._id)} className={classname.go_icon}>
									<Icon type={faChevronRight} />
								</div>
							</div>
						) : null;
					})}
				</div>
			) : null}
		</>
	);
};

export default ProjectsList;
