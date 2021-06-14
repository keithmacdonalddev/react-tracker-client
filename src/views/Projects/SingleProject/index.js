// Packages
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Project Views
import SingleProjectJSX from './SingleProjectJSX';
import EditProject from '../EditProject';
import DeleteProject from '../DeleteProject';

// Actions
import { showComponent } from 'store/actions/navigationActions';
import { addAssignee } from 'store/actions/projectActions';

// CSS
import classname from './SingleProject.module.css';
import { faPlus, Icon } from 'components/Icon';

const SingleProject = () => {
	const dispatch = useDispatch();
	const [view, setView] = useState('current');

	const { project, loading } = useSelector((state) => state.singleProject);
	const { userListFriends } = useSelector((state) => state.users.users2);

	if (loading) {
		return <h6>Loading...</h6>;
	}

	if (project) {
		return (
			<div className={classname.page_layout}>
				{/* MINI NAVIGATION */}
				<div className={classname.button_container}>
					{/* CURRENT PROJECT BUTTON */}
					<div onClick={() => setView('current')} className={classname.button}>
						Current Project
					</div>

					{/* EDIT PROJECT BUTTON */}
					{/* set local state 'view' to edit. Will display the EditProject component */}
					<div onClick={() => setView('edit')} className={classname.button}>
						Edit
					</div>

					{/* DELETE PROJECT BUTTON */}
					<div onClick={() => setView('delete')} className={classname.button}>
						Delete
					</div>

					{/* BACK TO ALL PROJECTS BUTTON */}
					<div className={classname.button} onClick={() => dispatch(showComponent('My Projects'))}>
						All Projects
					</div>
				</div>

				{/* show a component depending on the current value of the "view" local state */}
				<div className={classname.project_container}>
					{view === 'current' && <SingleProjectJSX project={project} />}
					{view === 'edit' && <EditProject project={project} />}
					{view === 'delete' && <DeleteProject project={project} />}

					{/* Manage project personnel */}
					<div className={classname.assignee_container}>
						<div className={classname.assignee_container_title}>Unassigned Personnel</div>
						{userListFriends
							? userListFriends.map((friend) => (
									<>
										{!project.assignee.includes(friend._id) ? (
											<div
												onClick={() => dispatch(addAssignee(friend._id, project._id))}
												className={classname.friends_list}>
												<div className={classname.first_last_name_container}>
													{friend.firstName + ' ' + friend.lastName}
												</div>

												<div className={classname.email_container}>{friend.email}</div>
												<div className={classname.role_container}>{friend.role}</div>
												<Icon style={{ marginRight: '10px' }} type={faPlus} />
											</div>
										) : null}
									</>
							  ))
							: null}
					</div>
				</div>
			</div>
		);
	}

	return <h6>No data available</h6>;
};

export default SingleProject;
