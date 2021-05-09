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

import classes from './classes_ListItem.module.css';

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
			className={hover ? classes.hoverLi : classes.li}
			onClick={() => handleClick(componentProp)}>
			<div className={classes.a}>
				<span className={classes.icon}>
					<div
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}
						style={{ background: background }}
						className={classes.container}>
						{icon ? (
							<FontAwesomeIcon
								style={{
									color: 'white',
									stroke: 'black',
									strokeWidth: '30',
									fontSize: '22px',
								}}
								className={classes.fa}
								icon={icon}
							/>
						) : (
							''
						)}
					</div>
				</span>
				<span className={classes.title}>{title}</span>
			</div>
		</li>
	);
};

export default ListItem;
