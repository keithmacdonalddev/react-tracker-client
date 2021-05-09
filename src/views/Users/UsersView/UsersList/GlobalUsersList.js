import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendFriendRequest } from "store/actions/friendActions";
import { getUsers } from "store/actions/userActions";
import { SEND_FRIEND_REQUEST_RESET } from "store/types";

import classname from "./user_list_display.module.css";

const GlobalUsersList = () => {
	const dispatch = useDispatch();
	// const [loading, setLoading] = useState(false)
	const { users, error } = useSelector((state) => state.users);
	const { loading, success } = useSelector((state) => state.friendRequest);

	const addFriendClickHandler = (friendId) => {
		dispatch(sendFriendRequest(friendId));
	};

	useEffect(() => {
		if (success) {
			dispatch(getUsers());
			dispatch({ type: SEND_FRIEND_REQUEST_RESET });
		}
	}, [success, dispatch]);
	return (
		<div className={classname.users_box_list_container}>
			{" "}
			{loading ? (
				<h6>loading...</h6>
			) : error ? (
				<h6>{error}</h6>
			) : users ? (
				users.userListNotFriends.map((user) => (
					<div key={user._id} className={classname.usersBox}>
						{/* users avatar photo */}
						<img src={user.avatar} className={classname.avatar} alt="" />

						{/* users name */}
						<div className={classname.nameContainer}>
							<h5>{user.name}</h5>
						</div>

						<button
							onClick={() => addFriendClickHandler(user._id)}
							className={classname.add_button}
						>
							Add
						</button>
					</div>
				))
			) : (
				<h6>Data not found</h6>
			)}
		</div>
	);
};

export default GlobalUsersList;
