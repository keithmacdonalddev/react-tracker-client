import React from 'react';
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

const Avatar = () => {
	const dispatch = useDispatch();

	const { user, loading, error } = useSelector((state) => state.userDetails);

	const editAvatarClickHandler = () => {
		dispatch(modalStatusAction(true, 'editAvatar'));
	};

	return (
		<>
			{loading ? (
				<div> loading...</div>
			) : error ? (
				<div>{error}</div>
			) : (
				<div className={classname.avatarContainer}>
					<div className={classname.avatarBox}>
						<img
							src={
								user
									? user.avatar
									: 'https://png.pngtree.com/png-clipart/20210310/original/pngtree-graphic-default-avatar-png-image_5938131.jpg'
							}
							className={classname.largeAvatar}
							alt=''></img>
						<div onClick={() => editAvatarClickHandler()} className={classname.iconContainer}>
							<Icon type={faCamera} style={iconStyle} className={classname.cameraIcon} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Avatar;
