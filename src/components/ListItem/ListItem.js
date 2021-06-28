/**
 * 	TODO - refactor
 *
 *  Component and useMakeBackground is working as expected however is producing *	 extea re-rerenders. Investigate when time permits.
 *
 */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { showComponent } from '../../store/actions/navigationActions';

import useMakeBackground from './useMakeBackground';

import classname from './ListItem.module.css';

const ListItem = ({ icon, title, componentProp }) => {
	const dispatch = useDispatch();

	const [active, setActive] = useState();
	const [hover, setHover] = useState(false);

	const handleClick = (clickedValue) => {
		setActive(clickedValue);
		dispatch(showComponent(clickedValue));
	};

	const background = useMakeBackground(active, hover);

	return (
		<li
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			className={hover ? classname.hoverLi : classname.li}
			onClick={() => handleClick(componentProp)}>
			<div className={classname.a}>
				<span className={classname.icon}>
					<div style={{ background: background }} className={classname.container}>
						{icon ? (
							<FontAwesomeIcon
								style={{
									color: 'var(--color-primary-100)',
									stroke: 'var(--color-primary-100)',
									strokeWidth: '30',
									fontSize: '22px',
								}}
								className={classname.fa}
								icon={icon}
							/>
						) : (
							''
						)}
					</div>
				</span>
				<span className={classname.title}>{title}</span>
			</div>
		</li>
	);
};

export default ListItem;
