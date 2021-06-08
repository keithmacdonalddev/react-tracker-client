import React from 'react';

import ProfileInfo from './ProfileInfo';

import classname from './profile_page.module.css';

const ProfilePage = () => {
	return (
		<div className={classname.profilePageContainer}>
			<div className={classname.profile_info_card}>
				<ProfileInfo />
			</div>
		</div>
	);
};

export default ProfilePage;
