/** @format */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from 'store/actions/userActions';

const SignOut = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	// const signoutHandler = () => {
	// 	dispatch(logout());
	// 	history.push('login');
	// };

	useEffect(() => {
		dispatch(logout());
		history.push('login');
	}, [dispatch, history]);

	return (
		<div>
			Are you sure you want to signout?
			{/* <button onClick={() => signoutHandler()}>Signout</button> */}
		</div>
	);
};

export default SignOut;
