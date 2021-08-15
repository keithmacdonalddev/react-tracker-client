import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard from 'views/Dashboard';
import SingleProjectJSX from './SingleProjectJSX';
import SingleProjectNavigation from './SingleProjectNavigation';

import classname from './SingleProject.module.css';

const SingleProject = () => {
	// get project id from url
	const { id } = useParams();
	const history = useHistory();

	// fetch projects from api and access from global store
	const { project } = useSelector((state) => state.singleProjectDetails);

	const redirectToAllProjects = () => {
		setTimeout(function () {
			history.push('/projects');
		}, 2000);
	};

	if (!project) {
		return (
			<Dashboard>
				<div className={classname.not_found_container}>
					Project not found,
					<span className={classname.return_link}>
						returning to all projects...
						{redirectToAllProjects()}
					</span>
				</div>
			</Dashboard>
		);
	}

	return (
		<Dashboard>
			<div className={classname.single_project_grid_layout}>
				<div className={classname.single_project_container}>
					<SingleProjectNavigation projectId={project._id} />
					<SingleProjectJSX project={project} />
				</div>
			</div>
		</Dashboard>
	);
};

export default SingleProject;
