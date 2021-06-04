import React from 'react';
import { useSelector } from 'react-redux';

import Box from './Box';

import classname from './user_list_display.module.css';

const SentRequests = () => {
	const { users, loading, error } = useSelector((state) => state.users);
	const { success } = useSelector((state) => state.cancelRequest);

	return (
		<div className={classname.users_box_list_container}>
			{loading ? (
				<h6>loading...</h6>
			) : error ? (
				<h6>{error}</h6>
			) : users ? (
				users.userListSentRequest.length === 0 ? (
					<div className={classname.getting_started_text}>Sent Requests All Clear!</div>
				) : (
					users.userListSentRequest.map((user) => <Box user={user} users={users} success={success} />)
				)
			) : (
				<h2 className={classname.no_data}>Data not found.</h2>
			)}
		</div>
	);
};

export default SentRequests;
