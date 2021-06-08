import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';

import Avatar from 'components/Avatar';
// import { SET_EDITING_TRUE } from 'store/types';

import { updateUserProfile } from 'store/actions/userActions';
import { showComponent } from 'store/actions/navigationActions';

import classname from './edit_profile.module.css';

const EditProfile = () => {
	const dispatch = useDispatch();

	const { userInfo } = useSelector((state) => state.userLogin);
	const { user } = useSelector((state) => state.userDetails);
	const { success, loading, error } = useSelector((state) => state.userUpdateProfile);

	const [firstName, setFirstName] = useState(user.firstName);
	const [lastName, setLastName] = useState(user.lastName);
	const [role, setRole] = useState(user.role);
	const [email, setEmail] = useState(user.email);
	const [requestPending, setRequestPending] = useState(false);
	console.log(requestPending);

	const handleSubmit = (event) => {
		event.preventDefault();
		const userData = { firstName, lastName, role, email };
		dispatch(updateUserProfile(userData));
	};

	const handleSubmitClick = () => {
		setRequestPending(true);
	};

	useEffect(() => {
		if (success) {
			dispatch(showComponent('My Profile'));
		}
	});

	return (
		<div className={classname.profilePageContainer}>
			<div className={classname.profile_info_container}>
				{!user || loading ? (
					<h6>loading...</h6>
				) : error ? (
					<h6>{error}</h6>
				) : (
					<>
						<div className={classname.avatar}>
							<Avatar />
						</div>
						<div className={classname.title}>{userInfo.firstName}'s Profile </div>
						<form onSubmit={(e) => handleSubmit(e)}>
							<div className={classname.user_info_section}>
								<div className={classname.profile_input_item}>
									<label className={classname.label}>First Name:</label>
									<input
										type='text'
										value={firstName}
										className={classname.profile_input}
										onChange={(e) => setFirstName(e.target.value)}
									/>
								</div>

								<div className={classname.profile_input_item}>
									<label className={classname.label}>Last Name:</label>
									<input
										type='text'
										value={lastName}
										className={classname.profile_input}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</div>

								<div className={classname.profile_input_item}>
									<label className={classname.label}>Role:</label>
									<input
										type='text'
										value={role}
										className={classname.profile_input}
										onChange={(e) => setRole(e.target.value)}
									/>
								</div>

								<div className={classname.profile_input_item}>
									<label className={classname.label}>Email:</label>
									<input
										type='text'
										value={email}
										className={classname.profile_input}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className={classname.profile_input_item}>
									<label className={classname.label}>Username:</label>
									<span type='text' value={user.username} className={classname.span}>
										{user.username}
									</span>
								</div>
								<div className={classname.profile_input_item}>
									<label className={classname.label}>Joined:</label>
									<span className={classname.span}>
										<Moment format='MMMM YYYY'>{user.joined}</Moment>
									</span>
								</div>
							</div>
							<button type='submit' onClick={() => handleSubmitClick()} className={classname.submit_button}>
								SUBMIT
							</button>
						</form>
					</>
				)}
				<div onClick={() => dispatch(showComponent('My Profile'))} className={classname.cancel_edit_button}>
					CANCEL
				</div>
			</div>
		</div>
	);
};

export default EditProfile;
