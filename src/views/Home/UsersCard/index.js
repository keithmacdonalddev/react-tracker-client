import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Icon, faPlus } from 'components/Icon';
import { getUsers } from 'store/actions/userActions';

import classname from './usersCard.module.css';

const UsersCard = () => {
	const dispatch = useDispatch();

	const { users, loading, error } = useSelector((state) => state.users);
	console.log(`users: ${users}`);
	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<div className={classname.users_card_component_wrapper}>
			<div className={classname.floating_icon_container}>
				<div className={classname.floating_icon}>
					<Icon type={faPlus} />
				</div>
			</div>
			<div className={classname.users_card_title}>Friends</div>
			{loading ? (
				<h6>Loading...</h6>
			) : error ? (
				<h6 className={classname.no_data_returned}>No data returned</h6>
			) : (
				<div className={classname.number_of_users}>
					{users === null ? <div className={classname.no_data_returned}>No data returned</div> : users.length}
				</div>
			)}
		</div>
	);
};

export default UsersCard;
