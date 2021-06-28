// Packages
import React from 'react';
import { useSelector } from 'react-redux';
// USER Components
import Friends from './UsersList/Friends';
import SentRequests from './UsersList/SentRequests';
import GlobalUsersList from './UsersList/GlobalUsersList';
import ReceivedRequests from './UsersList/ReceivedRequests';
// CSS
import classname from './users_view.module.css';

const UsersView = () => {
	// Global state
	const { usersNavState } = useSelector((state) => state.usersNavState);

	return (
		<div className={classname.users_page_container}>
			{/* ********** NAVIGATION ********** */}
			<div className={classname.header}>{usersNavState}</div>

			{/* ********** CONTENT ********** */}
			<div className={classname.list_container}>
				{usersNavState === 'Friends' ? (
					<Friends />
				) : usersNavState === 'Find Users' ? (
					<GlobalUsersList />
				) : usersNavState === 'Sent Requests' ? (
					<SentRequests />
				) : usersNavState === 'Received Requests' ? (
					<ReceivedRequests />
				) : (
					<h6>Data not found</h6>
				)}
			</div>
		</div>
	);
};

export default UsersView;
