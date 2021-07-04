import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showComponent } from 'store/actions/navigationActions';

import classname from './SingleProject.module.css';

const SingleProjectNavigation = () => {
	const dispatch = useDispatch();

	const [view, setView] = useState('current');
	console.log('view: ', view);
	return (
		<div className={classname.button_container}>
			<div onClick={() => setView('current')} className={classname.button}>
				Current Project
			</div>

			{/* set local state 'view' to edit. Will display the EditProject component */}
			<div onClick={() => setView('edit')} className={classname.button}>
				Edit
			</div>

			{/* DELETE PROJECT BUTTON */}
			<div onClick={() => setView('delete')} className={classname.button}>
				Delete
			</div>

			{/* BACK TO ALL PROJECTS BUTTON */}
			<div className={classname.button} onClick={() => dispatch(showComponent('My Projects'))}>
				All Projects
			</div>
		</div>
	);
};

export default SingleProjectNavigation;
