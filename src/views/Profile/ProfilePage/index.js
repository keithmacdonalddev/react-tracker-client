// Packages
import React from 'react';

// Components
import ProfileInfo from './ProfileInfo';
import ProfileNavbar from './ProfileNavbar';
import ProfileBody from './ProfileBody';

// classnames
import classname from './profile_page.module.css';

const ProfilePage = () => {
	return (
		<div className={classname.profilePageContainer}>
			<div className={classname.profile_info_card}>
				<ProfileInfo />
			</div>
			<div className={classname.profile_content}>
				<ProfileNavbar />
				<ProfileBody />
			</div>
		</div>
	);
};

export default ProfilePage;
