/**
 * 	TODO - refactor
 *
 *  Component and useMakeBackground is working as expected however is producing *	 extea re-rerenders. Investigate when time permits.
 *
 */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	modalStatusAction,
	showComponent,
} from '../../store/actions/navigationActions';

import useMakeBackground from './useMakeBackground';

import classes from './classes_ListItem.module.css';
import { icon } from '@fortawesome/fontawesome-svg-core';

const debug_ListItem = ({ icon, title, componentProp }) => {
	const dispatch = useDispatch();
	dispatch(debugObject(ListItem_anaysis_1));

	const [active, setActive] = useState();
	const [hover, setHover] = useState(false);

	const handleClick = (clickedValue) => {
		dispatch(debugObject(ListItem_anaysis_2));
		dispatch(modalStatusAction(true, 'debug'));
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

export default debug_ListItem;

const ListItem_anaysis_1 = {
	file: 'components/ListItem.js',
	function: 'ListItem',
	expected:
		'ListItem is a functional component whos main purpose is to render a <li> "List item element" dynamically based on a variety of use cases.  It receives 3 props, icon: String, title: String, componentProp: String. This component utilizes 2 separate local state variables, setActive and setHover.  Both variables are used to increase UI capabilites beyond regular css.  This component is also the inspiration of a useMakeBackground hook which also used for UI capabilities. ',
	valuePassedToFunction: { icon, title, componentProp },
	conclusion: 'this analysis needs completion',
};

const ListItem_anaysis_2 = {
	file: 'components/ListItem.js',
	function: 'handleClick()',
	expected:
		'click registered from the sidebar component and passed the name of the component clicked to us via prop: componentProp. Our function calls setActive(clickedValue)... to set the components local state.  We then dispatch(showComponent(clickedValue)) which will render the componet the user is trying to access via sidebar click',

	valuePassedToFunction: clickedValue,

	conclusion:
		'the final check for this function pass if to see if the "component" piece of state does equal the clickedValue above. For a quick resolution, open redux dev tools now.  For a long solution, complete this anaysis!',
};
