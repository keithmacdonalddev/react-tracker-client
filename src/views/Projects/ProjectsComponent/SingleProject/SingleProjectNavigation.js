import React from 'react';
import { Link } from 'react-router-dom';
import classname from './SingleProject.module.css';

const SingleProjectNavigation = ({ projectId }) => {
	return (
		<div className={classname.single_project_sidebar}>
			<Link to={`/project/${projectId}/edit`}>
				<div className={classname.button}>Edit</div>
			</Link>
			<Link to={`/project/${projectId}/delete`}>
				<div className={classname.button}>Delete</div>
			</Link>
			<Link to='/projects'>
				<div className={classname.button}>All Projects</div>
			</Link>
			<div className={classname.sidebar_filler}></div>
		</div>
	);
};

export default SingleProjectNavigation;
