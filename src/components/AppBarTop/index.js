import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showComponent } from 'store/actions/navigationActions';

import { Icon, faSortDown } from 'components/Icon';

import classname from './appBarTop.module.css';

const AppBarTop = () => {
	const dispatch = useDispatch();
	const [dropdownStatus, setDropdownStatus] = useState(false);
	console.log(`dropdownStatus: ${dropdownStatus}`);

	const { userInfo } = useSelector((state) => state.userLogin);

	return (
		<div className={classname.appBarContainer}>
			<div
				onMouseEnter={() => setDropdownStatus(true)}
				onMouseLeave={() => setDropdownStatus(false)}
				className={classname.container}>
				<div onMouseEnter={() => setDropdownStatus(true)} className={classname.welcome_text_icon_wrapper}>
					<span className={classname.welcome_name}> Welcome</span>
					<span className={classname.first_name}>{userInfo.firstName}</span>
					<div className={classname.icon_container}>
						<Icon type={faSortDown} onClick={() => dispatch(showComponent('My Profile'))} />
					</div>
				</div>
			</div>
			<div
				onMouseEnter={() => setDropdownStatus(true)}
				onMouseLeave={() => setDropdownStatus(false)}
				className={dropdownStatus ? classname.dropdown_container_active : classname.dropdown_container}>
				<ul className={classname.dropdown_ul}>
					<li className={classname.dropdown_li}>Profile</li>
					<li className={classname.dropdown_li}>Logout</li>
				</ul>
			</div>
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
