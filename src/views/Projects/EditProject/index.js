// Packages
import { faPlus, Icon } from 'components/Icon';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showComponent } from 'store/actions/navigationActions';

import { editProject } from 'store/actions/projectActions';
import { EDIT_PROJECT_RESET } from 'store/types';

import classname from './edit_project.module.css';

const EditProject = ({ project }) => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState(project.title);
	const [description, setDescription] = useState(project.description);
	const [status, setStatus] = useState(project.status);

	// const [assignees, setAssignees] = useState(project.assignees);

	const { success } = useSelector((state) => state.projectEdit);
	const { userListFriends } = useSelector((state) => state.users.users2);
	// const { userInfo } = useSelector((state) => state.userLogin);
	console.log(`userListFriends: ${userListFriends}`);
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(editProject(title, description, status, project._id));
	};

	useEffect(() => {
		if (success) {
			dispatch({ type: EDIT_PROJECT_RESET });
			dispatch(showComponent('My Projects'));
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
						{userListFriends
							? userListFriends.map((friend) => (
									<>
										<div className={classname.friends_list}>
											<Icon style={{ marginRight: '10px' }} type={faPlus} />
											{friend.firstName + ' ' + friend.lastName}
										</div>
									</>
							  ))
							: null}
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
