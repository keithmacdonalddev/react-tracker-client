import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addAssignee } from 'store/actions/projectActions';

import { Icon, faPlus } from 'components/Icon';

import classname from './SingleProject.module.css';

const SingleProjectAssignees = ({ project, loading }) => {
	const dispatch = useDispatch();

	const { userListFriends } = useSelector((state) => state.users.users2);

	return (
		<div className={classname.assignee_container}>
			{loading ? (
				<div>loading...</div>
			) : project ? (
				<>
					<div className={classname.assignee_container_title}>Unassigned Personnel</div>
					{userListFriends
						? userListFriends.map((friend) => (
								<div key={friend._id}>
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
								</div>
						  ))
						: null}{' '}
				</>
			) : (
				<div>no data found</div>
			)}
		</div>
	);
};

export default SingleProjectAssignees;
