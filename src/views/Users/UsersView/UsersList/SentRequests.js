import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from 'store/actions/userActions';
import { CANCEL_FRIEND_REQUEST_RESET } from 'store/types';
import { cancelFriendRequest } from 'store/actions/friendActions';
import classname from './user_list_display.module.css';

const SentRequests = () => {
	const dispatch = useDispatch();
	const { users, loading, error } = useSelector((state) => state.users);
	const { success } = useSelector((state) => state.cancelRequest);

	const cancelRequestClickHandler = (friendId) => {
		console.log('clicked');
		const loggedInUser = users.loggedInUser;
		dispatch(cancelFriendRequest(friendId, loggedInUser._id));
	};

	useEffect(() => {
		if (success) {
			dispatch(getUsers());
			dispatch({ type: CANCEL_FRIEND_REQUEST_RESET });
		}
	}, [dispatch, success]);

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
					users.userListSentRequest.map((user) => (
						<div key={user._id} className={classname.usersBox}>
							{/* users avatar photo */}
							<img src={user.avatar} className={classname.avatar} alt='' />

							{/* users name */}
							<div className={classname.nameContainer}>
								<h5>{user.name}</h5>
							</div>
							<div className={classname.nameContainer}>
								<h5>pending...</h5>
							</div>

							<button onClick={() => cancelRequestClickHandler(user._id)} className={classname.cancel_button}>
								X
							</button>
						</div>
					))
				)
			) : (
				<h6>Data not found</h6>
			)}
		</div>
	);
};

export default SentRequests;
