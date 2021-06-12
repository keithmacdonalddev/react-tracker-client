// Packages
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Icons
import { Icon, faChevronRight } from 'components/Icon';

// Redux
import { getUsers } from 'store/actions/userActions';
import { CANCEL_FRIEND_REQUEST_RESET } from 'store/types';

// CSS
import classname from './user_list_display.module.css';
import { usersNavActiveAction } from 'store/actions/navigationActions';
import ProfileInfo from 'views/Profile/ProfilePage/ProfileInfo';

// ********* Default exported component ***********
const Friends = () => {
	// Global state
	const { success } = useSelector((state) => state.cancelRequest);
	const { users2, loading, error } = useSelector((state) => state.users);

	// Local state
	const [friendProfile, setFriendProfile] = useState(null);
	// const [pendingRequestsList, setPendingRequestsList] = useState(success);
	console.log(`friendProfile: ${friendProfile}`);

	// Initialize dispatch
	const dispatch = useDispatch();

	/**
	 	* Everytime the component mounts/renders and when success changes, check 
	 	 	if success is true. If true, dispatch the getUsers function. 
		* The getUsers function will update the global state with the most up to 
			date list of users. 
		* CANCEL_FRIEND_REQUEST_RESET will reset the cancelRequest objects 
			global properties (loading, success, error) to false.
	 */
	useEffect(() => {
		if (success) {
			dispatch(getUsers());
			dispatch({ type: CANCEL_FRIEND_REQUEST_RESET });
		}
	}, [success, dispatch]);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	const showFriendsProfileOnClick = (user) => {
		setFriendProfile(user);
	};

	return (
		<div className={classname.users_box_list_container}>
			{loading ? (
				<h6>loading...</h6>
			) : error ? (
				<h6>{error}</h6>
			) : users2 ? (
				users2.userListFriends.length === 0 ? (
					<div className={classname.getting_started_text}>
						Get started by sending friend requests!
						<div onClick={() => dispatch(usersNavActiveAction('Find Users'))} className={classname.find_users_button}>
							Find Users
						</div>
					</div>
				) : (
					<div className={classname.users_friends_container}>
						<div className={friendProfile ? classname.minimize_list_container : classname.list_container}>
							{users2.userListFriends.map((user) => (
								<div key={user._id} onClick={() => showFriendsProfileOnClick(user)} className={classname.usersBox}>
									{/* users avatar photo */}
									<img src={user.avatar} className={classname.avatar} alt='' />

									{/* users name */}
									<div className={classname.nameContainer}>
										<h5 style={{ marginRight: '0.5em' }}>{user.firstName}</h5>
										<h5>{user.lastName}</h5>
									</div>

									<button className={classname.right_arrow_icon}>
										<Icon type={faChevronRight} />
									</button>
								</div>
							))}
						</div>
						<div className={friendProfile ? classname.friend_profile : classname.minimize_friend_profile}>
							<div onClick={() => setFriendProfile(!friendProfile)} className={classname.toggle_friend_profile}>
								<Icon type={faChevronRight} />
							</div>
							<ProfileInfo friendProfile={friendProfile} />
						</div>
					</div>
				)
			) : (
				<h6 className={classname.no_data}>Data not found.</h6>
			)}
		</div>
	);
};

export default Friends;
