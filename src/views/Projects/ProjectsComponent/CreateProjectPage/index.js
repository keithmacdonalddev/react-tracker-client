// Packages
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Actions
import { createProject, getProjects } from '../../../../store/actions/projectActions';
import { CREATE_PROJECT_RESET } from '../../../../store/types';

// Css
import classname from './create_project.module.css';
import Dashboard from 'views/Dashboard';

const CreateProjectPage = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const { userInfo } = useSelector((state) => state.userLogin);

	const project = useSelector((state) => state.project);
	const { loading: loadingCreate, success: successCreate, error: errorCreate } = project;
	const prodServer = false;

	const [projectNumber, setProjectNumber] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('personal');
	const [status, setStatus] = useState('active');
	const [priority, setPriority] = useState('normal');

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(createProject(projectNumber, title, description, category, status, priority, userInfo, prodServer));
	};

	useEffect(() => {
		if (successCreate) {
			dispatch({ type: CREATE_PROJECT_RESET });
			dispatch(getProjects());
			history.push('/projects');
		}
	}, [dispatch, history, successCreate]);

	return (
		<Dashboard>
			<div className={classname.project_container}>
				<div className={classname.dataFieldContainer}>
					<div className={classname.header}>Create New Project</div>

					{loadingCreate ? (
						<div>loading...</div>
					) : errorCreate ? (
						<div>{errorCreate}</div>
					) : (
						<form onSubmit={(event) => handleSubmit(event)}>
							<div className={classname.input_container}>
								<label className={classname.label}>Project Number:</label>
								<input
									value={projectNumber}
									className={classname.dataField}
									type='text'
									onChange={(event) => setProjectNumber(event.target.value)}
								/>
							</div>

							<div className={classname.input_container}>
								<label className={classname.label}>Title:</label>
								<input
									value={title}
									className={classname.dataField}
									type='text'
									onChange={(event) => setTitle(event.target.value)}
								/>
							</div>
							<div className={classname.input_container}>
								<label className={classname.label}>Description:</label>
								<textarea
									rows={5}
									cols={10}
									value={description}
									className={classname.textarea}
									onChange={(event) => setDescription(event.target.value)}
								/>
							</div>

							<div className={classname.input_container}>
								<label className={classname.label}>Category</label>
								<select value={category} onChange={(e) => setCategory(e.target.value)} className={classname.dataField}>
									<option value='personal'>Personal</option>
									<option value='work'>Work</option>
								</select>
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
								<label className={classname.label}>Priority</label>
								<select value={priority} onChange={(e) => setPriority(e.target.value)} className={classname.dataField}>
									<option value='high'>High</option>
									<option value='normal'>Normal</option>
									<option value='low'>Low</option>
								</select>
							</div>

							<button className={classname.submit_button} type='submit' value='submit'>
								Submit
							</button>
						</form>
					)}
				</div>
			</div>
		</Dashboard>
	);
};

export default CreateProjectPage;
