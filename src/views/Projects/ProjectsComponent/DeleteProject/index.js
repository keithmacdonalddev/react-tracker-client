import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { DELETE_PROJECT_RESET } from 'store/types';
import { deleteProject, fetchSingleProject } from 'store/actions/projectActions';

import Dashboard from 'views/Dashboard';
import classname from './delete_project.module.css';

const DeleteProject = () => {
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();

	const { success } = useSelector((state) => state.projectDelete);
	const { project, loading, error } = useSelector((state) => state.singleProject);

	const deleteButtonClickHandler = () => {
		dispatch(deleteProject(project._id));
	};

	useEffect(() => {
		if (success) {
			dispatch({ type: DELETE_PROJECT_RESET });
			history.push('/dashboard');
		}
	}, [success, dispatch, history]);

	useEffect(() => {
		dispatch(fetchSingleProject(id));
	}, [dispatch, id]);

	return (
		<>
			<Dashboard>
				{loading ? (
					<div>loading...</div>
				) : error ? (
					<div>{Error}</div>
				) : project ? (
					<div className={classname.delete_project_confirmation}>
						<div className={classname.title}>
							Are you sure you want to delete project: <span style={{ fontWeight: 600 }}> {project.title} </span>?
						</div>
						<div className={classname.subtitle}>This cannot be undone.</div>
						<div className={classname.button_container}>
							<button className={classname.cancel_button} onClick={() => history.push('/projects')}>
								Cancel
							</button>
							<button onClick={() => deleteButtonClickHandler()} className={classname.delete_button}>
								Delete
							</button>
						</div>
					</div>
				) : (
					<div>No data found</div>
				)}
			</Dashboard>
		</>
	);
};

export default DeleteProject;
