import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Dashboard from 'views/Dashboard';
import SingleProjectJSX from './SingleProjectJSX';
import SingleProjectNavigation from './SingleProjectNavigation';
import { fetchSingleProject } from 'store/actions/projectActions';

import classname from './SingleProject.module.css';

const SingleProject = () => {
	const { id } = useParams(); // project id
	const dispatch = useDispatch();

	const { projects, loading, error } = useSelector((state) => state.projects); //

	const project = projects.find((project) => {
		console.log(`project id: ${project._id}`);
		console.log(`id: ${id}`);

		return project._id === id;
	});

	console.log(`project: ${project}`);

	useEffect(() => {
		if (!project) {
			console.log(`no project found, requesting project: ${id} from API`);
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
