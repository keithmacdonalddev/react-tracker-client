import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUserDetails } from 'store/actions/userActions';

import classname from './approve_button.module.css';

const ApproveButton = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);
	const { loading, error, user } = useSelector((state) => state.userDetails);

	useEffect(() => {
		dispatch(getUserDetails(userInfo._id));
	}, [dispatch, userInfo._id]);

	if (loading) {
		return <h6>Loading...</h6>;
	}

	if (error) {
		return <h6>{error}</h6>;
	}

	if (user) {
		return (
			<div className={classname.usersBox}>
				<div className={classname.nameContainer}>
					<h5>request</h5>
				</div>
			</div>
		);
	}

	return <h6>No data found</h6>;
};

export default ApproveButton;
