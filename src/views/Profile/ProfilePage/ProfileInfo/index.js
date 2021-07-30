import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import Avatar from 'components/Avatar';
import { USER_UPDATE_PROFILE_RESET } from 'store/types';
import { getUserDetails } from 'store/actions/userActions';

import classname from './profileInfo.module.css';
import './profileInfo.module.css';

const ProfileInfo = ({ friendProfile }) => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);
	const { user } = useSelector((state) => state.userDetails);
	const { success } = useSelector((state) => state.userUpdateProfile);

	const [userData, setUserData] = useState({ loading: 'loading...' });

	useEffect(() => {
		dispatch(getUserDetails(userInfo._id));
	}, [dispatch, userInfo._id]);

	useEffect(() => {
		let timer1;

		if (success) {
			timer1 = setTimeout(() => {
				dispatch({ type: USER_UPDATE_PROFILE_RESET });
			}, 4000);
		}

		return () => clearTimeout(timer1);
	}, [dispatch, success]);

	useEffect(() => {
		if (friendProfile) {
			setUserData(friendProfile);
		} else if (user) {
			setUserData(user);
		} else {
			setUserData({ loading: 'loading' });
		}
	}, [friendProfile, user]);

	const handleNotificationClick = () => {
		dispatch({ type: USER_UPDATE_PROFILE_RESET });
	};

	return (
		<div className={classname.profile_info_container}>
			{userData.loading ? (
				<h6>loading...</h6>
			) : (
				<>
					<div className={classname.avatar}>
						<Avatar friendProfile={friendProfile} />
					</div>
					<div className={classname.title}>{userData.firstName}'s Profile </div>
					<div
						style={!success ? { display: 'none' } : null}
						onClick={() => handleNotificationClick()}
						className={classname.full_screen}>
						<div style={!success ? { opacity: 0, display: 'none' } : null} className={classname.edit_profile_success}>
							Updated!
						</div>
					</div>
					<div className={classname.user_info_section}>
						<div className={classname.profile_input}>
							{' '}
							<label className={classname.label}>Name:</label>
							<span className={classname.span}>{`${userData.firstName} ${userData.lastName}`}</span>
						</div>

						<div className={classname.profile_input}>
							<label className={classname.label}>Username:</label>
							<span className={classname.span}>{userData.username}</span>
						</div>

						<div className={classname.profile_input}>
							<label className={classname.label}>Role:</label> <span className={classname.span}>{userData.role}</span>
						</div>

						<div className={classname.profile_input}>
							<label className={classname.label}>Email:</label> <span className={classname.span}>{userData.email}</span>
						</div>

						<div className={classname.profile_input}>
							<label className={classname.label}>Joined:</label>
							<span className={classname.span}>
								<Moment format='MMMM YYYY'>{userData.joined}</Moment>
							</span>
						</div>
					</div>
				</>
			)}
			{!friendProfile ? (
				<Link to='/edit-profile' className={classname.editButtonContainer}>
					Edit Profile
				</Link>
			) : (
				<div className={classname.friend_options_container}>
					<div className={classname.friend_options_button}>MESSAGE</div>
					<div className={classname.friend_options_button}>UNFRIEND</div>
				</div>
			)}
		</div>
	);
};

export default ProfileInfo;
