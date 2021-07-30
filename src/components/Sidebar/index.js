/**
 *  ------------------------------------------------------------------------------
 *  			@TODO bring route file to this component folder
 *  ------------------------------------------------------------------------------
 */

import React, { useState } from 'react';

import routes from '../../routes';
import ListItem from 'components/ListItem/ListItem';
import ToggleButton from 'components/ToggleButton';
import { motion } from 'framer-motion';

import classname from './sidebar.module.css';

const Sidebar = () => {
	const [toggleSidebar, setToggleSidebar] = useState(false);
	return (
		<>
			<div onClick={() => setToggleSidebar(!toggleSidebar)} className={classname.togglebutton_wrapper}>
				<ToggleButton toggleSidebar={toggleSidebar} />
			</div>
			<motion.div
				onClick={() => setToggleSidebar(false)}
				className={toggleSidebar ? classname.sidebar_open : classname.sidebar_closed}>
				<div className={toggleSidebar ? classname.sidebar_wrapper_open : classname.sidebar_wrapper_closed}>
					<ul className={classname.ul}>
						{routes.map((route) => (
							<ListItem key={route.title} icon={route.icon} path={route.path} title={route.title} />
						))}
					</ul>
				</div>
			</motion.div>
		</>
	);
};

export default Sidebar;
