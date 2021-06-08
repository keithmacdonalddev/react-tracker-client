import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FetchUsers from './FetchUsers';

import { sendFriendRequest } from 'store/actions/friendActions';
import { cancelFriendRequest } from 'store/actions/friendActions';

import classname from './UsersList.module.css';

import { getUsers } from 'store/actions/userActions';
import { CANCEL_FRIEND_REQUEST_RESET } from 'store/types';

const UsersListRender = () => {
	const dispatch = useDispatch();

	const { error, loading, users, myInfo } = FetchUsers();

	const friendRequest = useSelector((state) => state.friendRequest);
	const cancelRequest = useSelector((state) => state.cancelRequest);

	const loadingFriendRequest = friendRequest.loading;
	const errorFriendRequest = friendRequest.error;
	const successFriendRequest = friendRequest.success;

	const loadingCancelFriendRequest = cancelRequest.loading;
	const errorCancelFriendRequest = cancelRequest.error;
	const successCancelFriendRequest = cancelRequest.success;

	// Logic ------------------------------------------

	const addFriendClickHandler = (friendId) => {
		dispatch(sendFriendRequest(friendId));
	};

	useEffect(() => {
		dispatch(getUsers());
		dispatch({ type: CANCEL_FRIEND_REQUEST_RESET });
	}, [successFriendRequest, successCancelFriendRequest, dispatch]);

	if (loading || loadingFriendRequest || loadingCancelFriendRequest) {
		return <h6>Loading...</h6>;
	}

	if (error || errorFriendRequest || errorCancelFriendRequest) {
		return <h6>{error}</h6>;
	}

	if (users) {
		const { usersArray, loggedInUser } = users;
		return (
			// full users list wrapper
			<>
				<h6>- Top -</h6>
				{/* Create UI card for each user */}
				{usersArray.map((user) => (
					<>
						{/* if user is ME, then return null, else return JSX */}
						{user._id === myInfo._id ? null : (
							<div key={user._id} className={classname.usersBox}>
								{/* users avatar photo */}
								<img src={user.avatar} className={classname.avatar} alt='' />

								{/* users name */}
								<div className={classname.nameContainer}>
									{loggedInUser.friendRequests.map((req) => {
										if (user._id === req) {
											return <h6>already added</h6>;
										} else {
											return <h5>{user.name}</h5>;
										}
									})}
								</div>

								{/* if user does not have friend requests, show add friend button for every user */}
								{/* {addFriendButton(loggedInUser.friendRequests.length)} */}
								{(!user.friendRequests.length ||
									user.friendRequests.length === 0) && (
									<button
										onClick={() => addFriendClickHandler(user._id)}
										className={classname.addButton}>
										Add
									</button>
								)}
								{(user.friendRequests.length ||
									user.friendRequests.length >= 1) &&
									user.friendRequests.map((friend) => (
										<div key={friend}>
											{/* user has friend requests, check if myInfo has already requested this user */}
											{friend === loggedInUser._id ? (
												// user already requested, show diabled button with 'requested' text
												<button
													onClick={() =>
														dispatch(cancelFriendRequest(user, loggedInUser))
													}
													className={classname.cancel_button}>
													Cancel
												</button>
											) : // user not yet requested, show button with ability to add user
											null}
										</div>
									))}
							</div>
						)}
					</>
				))}
				<h6>- END -</h6>
			</>
		);
	}
};
export default UsersListRender;

// const checkFunction = (user) => {
// 	console.log(`checkFunction called... arg ${user}`);
// 	if (user.friendRequests.length >= 1) {
// 		user.friendRequests.map((friend) => {
// 			if (friend === myInfo._id) {
// 				return { background: 'grey' };
// 			} else {
// 				return null;
// 			}
// 		});
// 	}
// };
