import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Dashboard from 'views/Dashboard';
import { useParams, useHistory } from 'react-router-dom';
import { EDIT_PROJECT_RESET } from 'store/types';
import { editProject, fetchSingleProject } from 'store/actions/projectActions';
import classname from './edit_project.module.css';
import SingleProjectNavigation from '../SingleProject/SingleProjectNavigation';

const EditProject = () => {
	const { id } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();

	const { project } = useSelector((state) => state.singleProjectDetails);

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
		}
	}, [success, dispatch]);

	useEffect(() => {
		if (!project) {
			dispatch(fetchSingleProject(id));
		}
	}, [project, id, dispatch]);

	return (
		<Dashboard>
			<div className={classname.project_container}>
				<div className={classname.dataFieldContainer}>
					<SingleProjectNavigation />

					<div className={classname.header}>EDITING...</div>
					<form className={classname.form} onSubmit={(e) => handleSubmit(e)}>
						<div className={classname.input_container}>
							<label className={classname.label}>Title</label>
							<input onChange={(e) => setTitle(e.target.value)} value={title} className={classname.dataField} />
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
						</div>
						<div className={classname.input_container}>
							<label className={classname.label}>Owner</label>
							<div className={classname.dataField}>{`${project.owner.firstName}  ${project.owner.lastName}`} </div>
						</div>
						<div className={classname.input_container}>
							<label className={classname.label}>Project Id</label>
							<div className={classname.dataField}>{project._id}</div>
						</div>
						<div style={{ width: '100%' }} className={classname.input_container}>
							<label className={classname.label}>Description</label>
							<textarea
								rows={5}
								cols={10}
								onChange={(e) => setDescription(e.target.value)}
								value={description}
								className={classname.textarea}
							/>
						</div>
						<button type='submit' value='submit'>
							Submit
						</button>
					</form>
					<button type='text' onClick={() => history.push('/projects')}>
						Cancel
					</button>
				</div>
			</div>
		</Dashboard>
	);
};

export default EditProject;
