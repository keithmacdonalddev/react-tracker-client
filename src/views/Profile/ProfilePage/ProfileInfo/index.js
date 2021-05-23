import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';
import { PROFILE_NAV_KEY, SET_EDITING_TRUE, SET_MODAL_STATUS } from 'store/types';
import classname from './profileInfo.module.css';
import { getUserDetails } from 'store/actions/userActions';
import Avatar from 'components/Avatar';

const ProfileInfo = () => {
	const dispatch = useDispatch();
	const { userInfo } = useSelector((state) => state.userLogin);
	const { user } = useSelector((state) => state.userDetails);

	const profileKey = useSelector((state) => state.profileKey);

	const editClickHandler = () => {
		// setActiveKey('edit');
		dispatch({
			type: SET_EDITING_TRUE,
			payload: { isEditing: true, id: userInfo._id },
		});

		dispatch({
			type: SET_MODAL_STATUS,
			payload: { open: true, component: 'editProfile' },
		});
	};
	useEffect(() => {
		dispatch(getUserDetails(userInfo._id));
	}, [dispatch, userInfo._id]);
	return (
		<div className={classname.profile_info_container}>
			{!user ? (
				<h6>loading...</h6>
			) : (
				<>
					<div className={classname.avatar}>
						<Avatar />
					</div>
					<div className={classname.title}>{userInfo.firstName}'s Profile </div>

					<div className={classname.user_info_section}>
						<div className={classname.profile_input}>
							{' '}
							<label className={classname.label}>Name:</label>
							<span className={classname.span}>{`${user.firstName} ${user.lastName}`}</span>
						</div>

						<div className={classname.profile_input}>
							<label className={classname.label}>Username:</label>
							<span className={classname.span}>{user.username}</span>
						</div>

						<div className={classname.profile_input}>
							<label className={classname.label}>Role:</label> <span className={classname.span}>{user.role}</span>
						</div>

						<div className={classname.profile_input}>
							<label className={classname.label}>Email:</label> <span className={classname.span}>{user.email}</span>
						</div>

						<div className={classname.profile_input}>
							<label className={classname.label}>Joined:</label>
							<span className={classname.span}>
								<Moment format='MMMM YYYY'>{user.joined}</Moment>
							</span>
						</div>
					</div>
				</>
			)}
			<div onClick={() => editClickHandler()} className={classname.editButtonContainer}>
				Edit Profile
			</div>
		</div>
	);
};

export default ProfileInfo;
