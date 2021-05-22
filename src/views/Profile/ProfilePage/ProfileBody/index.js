import React from 'react';

import EditProfile from '../EditProfile';

import classname from './profileBody.module.css';

const ProfileBody = () => {
	return (
		<div className={classname.profile_body_container}>
			<EditProfile />
		</div>
	);
};

export default ProfileBody;
