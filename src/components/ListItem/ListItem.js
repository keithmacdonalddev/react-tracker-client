/**
 * 	TODO - refactor
 *
 *  Component and useMakeBackground is working as expected however is producing *	 extea re-rerenders. Investigate when time permits.
 *
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classname from './ListItem.module.css';
import ListItemIcon from './ListItemIcon';

const ListItem = ({ icon, title, componentProp, path }) => {
	const [active, setActive] = useState();
	const [hover, setHover] = useState(false);

	return (
		<li
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className={hover ? classname.hoverLi : classname.li}
			onClick={() => setActive(componentProp)}>
			<Link to={path} className={classname.a}>
				<ListItemIcon active={active} icon={icon} hover={hover} />
				<span className={classname.title}>{title}</span>
			</Link>
		</li>
	);
};

export default ListItem;
