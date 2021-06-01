import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showComponent } from 'store/actions/navigationActions';

import { Icon, faUserCircle } from 'components/Icon';

import classname from './appBarTop.module.css';

const AppBarTop = () => {
	const dispatch = useDispatch();

	const { userInfo } = useSelector((state) => state.userLogin);

	return (
		<div className={classname.appBarContainer}>
			<div className={classname.iconWrapper}>
				<div className={classname.profileIcon}>
					<Icon onClick={() => dispatch(showComponent('My Profile'))} type={faUserCircle} />
				</div>
			</div>
			<div className={classname.welcome_name}>Welcome {userInfo.firstName}</div>
		</div>
	);
};

export default AppBarTop;

// const { component } = useSelector((state) => state.component);

// format state data
// const currentPage = JSON.stringify(component)
// 	.replace(/"/, '')
// 	.replace(/"/, '');

// {
// 	/* <div className={classname.welcomeNameContainer}>
// 				Welcome
// 				{userInfo.name ? (
// 					<span className={classname.welcomeName}>{userInfo.name}</span>
// 				) : null}
// 			</div> */
// }
// {
// 	/* <div className={classname.middleSection}>
// 					<input className={classname.input} type='text' />
// 					<label className={classname.label}>
// 						<Icon type={faSearch} />
// 					</label>
// 				</div> */
// }
