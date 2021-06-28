// Packages
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { usersNavActiveAction } from 'store/actions/navigationActions';
import { navItems, usersNavActiveStyle } from './helpers';

import classname from './usersNav.module.css';

const UsersNav = () => {
	const dispatch = useDispatch();

	const { usersNavState } = useSelector((state) => state.usersNavState);

	return (
		<div className={classname.users_list}>
			{navItems.map((item) => {
				return (
					<div
						key={item}
						onClick={() => dispatch(usersNavActiveAction(item))}
						/** 
							 	if current navItem iteration is selected, style accordingly
							  else null (null will ensure default className below will 
							 	handle style) 
							*/
						style={usersNavState === item ? usersNavActiveStyle : null}
						className={classname.header}>
						{/* Title of the current navItem iteration */}
						<div className={classname.headerTitle}>{item}</div>
					</div>
				);
			})}
		</div>
	);
};

export default UsersNav;
