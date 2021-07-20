import React from 'react';
import Dashboard from 'views/Dashboard';

import ProfileInfo from './ProfileInfo';

import classname from './profile_page.module.css';

const ProfilePage = () => {
	return (
		<Dashboard>
			<div className={classname.profilePageContainer}>
				<div className={classname.profile_info_card}>
					<ProfileInfo />
				</div>
			</div>
		</Dashboard>
	);
};

export default ProfilePage;
