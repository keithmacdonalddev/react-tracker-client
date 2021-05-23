import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PROFILE_NAV_KEY, SET_EDITING_TRUE, SET_MODAL_STATUS } from 'store/types';

import style from './profileNavbar.module.css';

const ProfileNavbar = () => {
	const dispatch = useDispatch();
	const profileKey = useSelector((state) => state.profileKey);

	const { userInfo } = useSelector((state) => state.userLogin);

	const setActiveKey = (activeKey) => {
		dispatch({
			type: PROFILE_NAV_KEY,
			payload: activeKey,
		});
	};

	return (
		<div className={style.profileNavbarContainer}>
			<div className={style.navLeft}>
				<div
					onClick={() => setActiveKey('activity')}
					className={profileKey === 'activity' ? style.active : style.navTab}>
					Activity
				</div>
				<div onClick={() => setActiveKey('friends')} className={profileKey === 'friends' ? style.active : style.navTab}>
					Friends
				</div>
			</div>
		</div>
	);
};

export default ProfileNavbar;
