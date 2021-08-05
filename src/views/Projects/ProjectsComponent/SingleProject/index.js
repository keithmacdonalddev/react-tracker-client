import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Dashboard from 'views/Dashboard';
import SingleProjectJSX from './SingleProjectJSX';
import SingleProjectNavigation from './SingleProjectNavigation';
import { fetchSingleProject } from 'store/actions/projectActions';

import classname from './SingleProject.module.css';

const SingleProject = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	const { project, loading, error } = useSelector((state) => state.singleProject);

	useEffect(() => {
		if (!project) {
			dispatch(fetchSingleProject(id));
		}
	}, [id, project, dispatch]);

	return (
		<Dashboard>
			<div className={classname.single_project_grid_layout}>
				{loading ? (
					<div>loading...</div>
				) : error ? (
					<div>{error}</div>
				) : project ? (
					<div className={classname.single_project_container}>
						<SingleProjectNavigation project={project} />
						<SingleProjectJSX project={project} />
					</div>
				) : (
					<div>No data found</div>
				)}
			</div>
		</Dashboard>
	);
};

export default SingleProject;
