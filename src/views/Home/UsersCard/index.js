import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Icon, faPlus } from "components/Icon";
import { getUsers } from "store/actions/userActions";

import classname from "./usersCard.module.css";

const UsersCard = () => {
	const dispatch = useDispatch();

	const { users, loading, error } = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	if (loading) return <h6>Loading...</h6>;
	if (error) return <h6>{error}</h6>;
	if (users) {
		return (
			<div className={classname.users_card_component_wrapper}>
				<div className={classname.floating_icon_container}>
					<div className={classname.floating_icon}>
						<Icon type={faPlus} />
					</div>
				</div>
				<div className={classname.users_card_title}>Friends</div>
				<div className={classname.number_of_users}>
					{users.userListFriends.length}
				</div>
			</div>
		);
	}

	return <h6>No data found</h6>;
};

export default UsersCard;
