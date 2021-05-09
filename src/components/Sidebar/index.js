/**
 *  ------------------------------------------------------------------------------
 *  			@TODO bring route file to this component folder
 *  ------------------------------------------------------------------------------
 */

import React from 'react';

import routes from '../../routes';
import ListItem from 'components/ListItem/ListItem';

import classname from './sidebar.module.css';

const Sidebar = ({ toggleSidebar }) => {
	return (
		<div className={getSidebarClassname(toggleSidebar)}>
			<ul className={classname.ul}>
				{routes.map((route) => (
					<ListItem
						key={route.title}
						icon={route.icon}
						link={route.path}
						title={route.title}
						componentProp={route.component}
					/>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;

function getSidebarClassname(state) {
	if (state) {
		return classname.sidebar_wrapper_open;
	} else {
		return classname.sidebar_wrapper_closed;
	}
}
