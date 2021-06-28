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
		<div className={toggleSidebar ? classname.sidebar_wrapper_open : classname.sidebar_wrapper_closed}>
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
