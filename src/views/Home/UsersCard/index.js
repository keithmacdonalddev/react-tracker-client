import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsers } from 'store/actions/userActions';

import Card from 'components/Card';

const UsersCard = () => {
	const dispatch = useDispatch();

	const { users2, loading, error } = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<Card title={'Connections'}>
			{loading ? (
				<div>loading...</div>
			) : error ? (
				<div>{error}</div>
			) : users2 ? (
				<div>{users2.userListFriends.length}</div>
			) : (
				<div style={{ fontSize: 16 }}>disabled</div>
			)}
		</Card>
	);
};

export default UsersCard;

// <div className={classname.users_card_component_wrapper}>
// 	<div className={classname.floating_icon_container}>
// 		<div className={classname.floating_icon}>
// 			<Icon type={faPlus} />
// 		</div>
// 	</div>
// 	<div className={classname.title}>Users</div>
// 	{loading ? (
// 		<h6>Loading...</h6>
// 	) : error ? (
// 		<h6 className={classname.no_data_returned}>{error} No data returned</h6>
// 	) : (
// 		<div className={classname.content}>
// 			{users === null ? (
// 				<div className={classname.no_data_returned}>No data returned</div>
// 			) : (
// 				<>
// 					<div className={classname.content_item}>
// 						<div className={classname.sub_title}>Friends</div>
// 						<div className={classname.completed_quantity}>{users.length > 0 ? users.length : 0}</div>
// 					</div>
// 					<div className={classname.content_item}>
// 						<div className={classname.sub_title}>Pending</div>
// 						<div className={classname.completed_quantity}>{users.length > 0 ? users.length : 0}</div>
// 					</div>
// 				</>
// 			)}
// 		</div>
// 	)}
// </div>;
