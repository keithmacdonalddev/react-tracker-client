import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { DELETE_PROJECT_RESET } from 'store/types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from 'store/actions/projectActions';

import classname from './SingleProject.module.css';

const SingleProjectNavigation = ({ project }) => {
	const history = useHistory();
	const dispatch = useDispatch();

	const [confirmDelete, setConfirmDelete] = useState(false);

	const { success } = useSelector((state) => state.projectDelete);

	// ************************************************************
	// make the following code way better
	// ************************************************************
	let displayNone = {};
	if (confirmDelete) {
		displayNone = {
			display: 'none',
		};
	}
	if (!confirmDelete) {
		displayNone = {
			display: 'flex',
		};
	}
	// ************************************************************
	// End Todo: refactor
	// ************************************************************

	// when deleting a project completes successfully
	useEffect(() => {
		if (success) {
			dispatch({ type: DELETE_PROJECT_RESET }); // 1. Cleanup DELETE_PROJECT values
			history.push('/dashboard'); // 2. Redirect user to dashboard
		}
	}, [success, dispatch, history]);

	return (
		<div className={classname.single_project_sidebar}>
			{confirmDelete ? (
				<>
					<div
						className={classname.button}
						style={{
							background: 'var(--color-accent)',
							height: '100%',
						}}
						onClick={() => dispatch(deleteProject(project._id))}>
						Confirm Delete
					</div>
					<div
						className={classname.button}
						style={{
							background: 'var(--color-green',
							height: '100%',
						}}
						onClick={() => setConfirmDelete(false)}>
						Go back
					</div>
				</>
			) : (
				<>
					<div className={classname.button} style={displayNone} onClick={() => {}}>
						Edit
					</div>
					<div className={classname.button} style={displayNone} onClick={() => dispatch(deleteProject(project._id))}>
						Delete
					</div>

					<div className={classname.button} style={displayNone} onClick={() => history.push(`/my-projects`)}>
						All Projects
					</div>
					<div className={classname.sidebar_filler} style={displayNone}></div>
				</>
			)}
		</div>
	);
};

export default SingleProjectNavigation;
