import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Icon, faCamera } from 'components/Icon';

// Redux
import { modalStatusAction } from 'store/actions/navigationActions';

// CSS
import classname from './avatar.module.css';

const iconStyle = {
	fontSize: '18px',
};

const Avatar = ({ friendProfile }) => {
	const dispatch = useDispatch();
	const [userData, setUserData] = useState(null);

	const { user, loading, error } = useSelector((state) => state.userDetails);

	const editAvatarClickHandler = () => {
		dispatch(modalStatusAction(true, 'editAvatar'));
	};

	useEffect(() => {
		if (friendProfile) {
			setUserData(friendProfile);
		} else if (user) {
			setUserData(user);
		}
	}, [setUserData, friendProfile, user]);

	return (
		<>
			{loading ? (
				<div> loading...</div>
			) : error ? (
				<div>{error}</div>
			) : (
				<div className={classname.avatar_container}>
					<div className={classname.avatarBox}>
						<img
							src={
								userData
									? userData.avatar
									: 'https://png.pngtree.com/png-clipart/20210310/original/pngtree-graphic-default-avatar-png-image_5938131.jpg'
							}
							className={classname.largeAvatar}
							alt=''
						/>
						{!friendProfile ? (
							<div onClick={() => editAvatarClickHandler()} className={classname.iconContainer}>
								<Icon type={faCamera} style={iconStyle} className={classname.cameraIcon} />
							</div>
						) : null}
					</div>
				</div>
			)}
		</>
	);
};

export default Avatar;
