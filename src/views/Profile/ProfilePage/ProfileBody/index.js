import React from 'react';

import ProfileInfo from 'views/Profile/ProfilePage/ProfileInfo';
import EditProfile from '../EditProfile';

import classname from './profileBody.module.css';

const ProfileBody = () => {
	return (
		<div className={classname.profile_body_container}>
			<div className={classname.column}>
				<ProfileInfo />
			</div>

			<div className={classname.column}>
				<EditProfile />
			</div>
		</div>
	);
};

export default ProfileBody;
