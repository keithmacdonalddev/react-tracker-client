import React from 'react';
import { useDispatch } from 'react-redux';

import { showComponent } from 'store/actions/navigationActions';

import ProjectsList from 'views/Projects/ProjectsComponent/ProjectsList';

import classname from './projects_component.module.css';

const ProjectsComponent = () => {
	const dispatch = useDispatch();

	const clickHandler = () => {
		dispatch(showComponent('Create Project'));
	};

	return (
		<div className={classname.projects_page_container}>
			<div className={classname.header_container}>
				<div className={classname.header_title}>My Projects</div>
				<div className={classname.create_project_button_container}>
					<div className={classname.create_project_button} onClick={() => clickHandler()}>
						+
					</div>
				</div>
			</div>
			<ProjectsList />
		</div>
	);
};

export default ProjectsComponent;
