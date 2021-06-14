import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { showComponent } from 'store/actions/navigationActions';

import { Icon, faSortDown } from 'components/Icon';

import classname from './appBarTop.module.css';

const AppBarTop = () => {
	const dispatch = useDispatch();
	const [dropdownStatus, setDropdownStatus] = useState(false);

	const { userInfo } = useSelector((state) => state.userLogin);

	return (
		<div className={classname.appBarContainer}>
			<div className={classname.container}>
				<div onClick={() => setDropdownStatus(!dropdownStatus)} className={classname.welcome_text_icon_wrapper}>
					<span className={classname.welcome_name}> Welcome</span>
					<span className={classname.first_name}>{userInfo.firstName}</span>
					<div style={dropdownStatus ? { transform: 'rotate(180deg)' } : null} className={classname.icon_container}>
						<Icon type={faSortDown} />
					</div>
				</div>
			</div>
			<div
				onClick={() => setDropdownStatus(!dropdownStatus)}
				className={dropdownStatus ? classname.dropdown_container_active : classname.dropdown_container}>
				<ul className={classname.dropdown_ul}>
					<Link to={'/profile'}>
						<li className={classname.dropdown_li}>Profile</li>
					</Link>
					<li onClick={() => dispatch(showComponent('Signout'))} className={classname.dropdown_li}>
						Logout
					</li>
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
