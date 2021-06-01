// packages
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Redux Store
import { getUsers } from 'store/actions/userActions';
import { CANCEL_FRIEND_REQUEST_RESET } from 'store/types';
import { cancelFriendRequest } from 'store/actions/friendActions';

// CSS
import classname from './user_list_display.module.css';

const Box = ({ users, user, success }) => {
	const dispatch = useDispatch();
	const [cancelButton, setCancelButton] = useState(false);

	const cancelRequestClickHandler = (friendId) => {
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
		<div
			onMouseEnter={() => setCancelButton(true)}
			onMouseLeave={() => setCancelButton(false)}
			key={user._id}
			className={classname.usersBox}>
			{/* users avatar photo */}
			<img src={user.avatar} className={classname.avatar} alt='' />

			{/* users name */}
			<div className={classname.nameContainer}>
				<h5>{user.name}</h5>
			</div>
			<div className={classname.nameContainer}>
				<h5>pending...</h5>
			</div>

			<div
				onClick={() => cancelRequestClickHandler(user._id)}
				className={cancelButton ? classname.cancel_button_active : classname.cancel_button_hidden}>
				X
			</div>
		</div>
	);
};
export default Box;
