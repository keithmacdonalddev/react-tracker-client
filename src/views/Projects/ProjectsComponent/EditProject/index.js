import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { EDIT_PROJECT_RESET } from 'store/types';
import { editProject } from 'store/actions/projectActions';
import { showComponent } from 'store/actions/navigationActions';

import classname from './edit_project.module.css';

const EditProject = ({ project }) => {
	const dispatch = useDispatch();

	const [title, setTitle] = useState(project.title);
	const [status, setStatus] = useState(project.status);
	const [description, setDescription] = useState(project.description);

	const { success } = useSelector((state) => state.projectEdit);

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(editProject(title, description, status, project._id)); // API CALL
	};

	useEffect(() => {
		if (success) {
			dispatch({ type: EDIT_PROJECT_RESET }); // Client state
			dispatch(showComponent('My Projects')); // Client state
		}
	}, [success, dispatch]);

	return (
		<div className={classname.project_container}>
			<div className={classname.dataFieldContainer}>
				<div className={classname.header}>EDITING...</div>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className={classname.input_container}>
						<label className={classname.label}>Title</label>
						<input onChange={(e) => setTitle(e.target.value)} value={title} className={classname.dataField} />
					</div>
					<div className={classname.input_container}>
						<label className={classname.label}>Description</label>
						<textarea
							rows={5}
							cols={10}
							onChange={(e) => setDescription(e.target.value)}
							value={description}
							className={classname.textarea}
						/>
					</div>
					<div className={classname.input_container}>
						<label className={classname.label}>Status</label>
						<select value={status} onChange={(e) => setStatus(e.target.value)} className={classname.dataField}>
							<option value='active'>Active</option>
							<option value='delayed'>Delayed</option>
							<option value='onhold'>On Hold</option>
							<option value='cancelled'>Cancelled</option>
							<option value='completed'>Completed</option>
						</select>
					</div>{' '}
					<div className={classname.input_container}>
						<label className={classname.label}>Assignees</label>
					</div>
					<div className={classname.input_container}>
						<label className={classname.label}>Administrator</label>
						<div className={classname.dataField}>{project.owner} </div>
					</div>
					<div className={classname.input_container}>
						<label className={classname.label}>Project Id</label>
						<div className={classname.dataField}>{project._id}</div>
					</div>
					<button type='submit' value='submit'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditProject;
