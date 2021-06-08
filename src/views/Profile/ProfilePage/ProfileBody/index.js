import React from 'react';
import { useSelector } from 'react-redux';
import Friends from 'views/Users/UsersView/UsersList/Friends';

import classname from './profileBody.module.css';

const ProfileBody = () => {
	const profileKey = useSelector((state) => state.profileKey);
	return (
		<div className={classname.profile_body_container}>
			{profileKey === 'friends' ? (
				<Friends />
			) : profileKey === 'activity' ? (
				<div className={classname.lorem}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. At deleniti placeat sapiente quibusdam corporis
					quidem earum a modi saepe ducimus porro sit optio impedit perspiciatis fuga nesciunt quas, totam, in, libero
					omnis enim illum rerum ratione tenetur. Praesentium blanditiis veritatis culpa dolor doloribus odio aut nobis
					nulla accusamus cumque rem molestias dolore eveniet nam ad nesciunt mollitia ullam, excepturi ab dignissimos
					placeat veniam tempore totam amet. Incidunt, maiores. Maiores quisquam consequatur quidem ipsum, minima id
					nulla ut, deleniti eius consequuntur soluta illo ad ipsam magnam dicta modi hic magni, doloremque delectus
					omnis error blanditiis. Praesentium voluptate et quibusdam rem perferendis!
				</div>
			) : (
				<div> Please make a selection</div>
			)}
		</div>
	);
};

export default ProfileBody;
