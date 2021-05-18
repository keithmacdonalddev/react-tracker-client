// Packages
import React from 'react';

// Components
import Avatar from 'components/Avatar';
import ProfileHeader from './ProfileHeader';
import ProfileNavbar from './ProfileNavbar';
import ProfileBody from './ProfileBody';

// Styles
import style from './profile_page.module.css';

const ProfilePage = () => {
	return (
		<div className={style.profilePageContainer}>
			<Avatar />
			<ProfileHeader />
			<ProfileNavbar />
			<ProfileBody />
		</div>
	);
};

export default ProfilePage;
