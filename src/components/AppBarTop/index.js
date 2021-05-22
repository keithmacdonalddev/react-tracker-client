import React from 'react';
import { useDispatch } from 'react-redux';

import { showComponent } from 'store/actions/navigationActions';

import { Icon, faUserCircle } from 'components/Icon';

import style from './appBarTop.module.css';

const AppBarTop = () => {
	const dispatch = useDispatch();

	return (
		<div className={style.appBarContainer}>
			<div className={style.iconWrapper}>
				<div className={style.profileIcon}>
					<Icon onClick={() => dispatch(showComponent('My Profile'))} type={faUserCircle} />
				</div>
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
// 	/* <div className={style.welcomeNameContainer}>
// 				Welcome
// 				{userInfo.name ? (
// 					<span className={style.welcomeName}>{userInfo.name}</span>
// 				) : null}
// 			</div> */
// }
// {
// 	/* <div className={style.middleSection}>
// 					<input className={style.input} type='text' />
// 					<label className={style.label}>
// 						<Icon type={faSearch} />
// 					</label>
// 				</div> */
// }
