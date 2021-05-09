import React from 'react';

import { useSelector } from 'react-redux';

import style from './ProfileHeader.module.css';

const ProfileHeader = () => {
	const { userInfo } = useSelector((state) => state.userLogin);

	return (
		<div className={style.profileHeaderContainer}>
			<h1>{userInfo.name}</h1>
			<div className={style.locationHeader}>
				<div className={style.location}>Ontario, Canada</div>
			</div>
		</div>
	);
};

export default ProfileHeader;
