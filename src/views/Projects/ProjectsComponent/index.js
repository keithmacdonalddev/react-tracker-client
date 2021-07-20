import React from 'react';
import { Link } from 'react-router-dom';

import ProjectsList from 'views/Projects/ProjectsComponent/ProjectsList';

import classname from './projects_component.module.css';

const ProjectsComponent = () => {
	return (
		<div className={classname.projects_page_container}>
			<div className={classname.header_container}>
				<div className={classname.header_title}>My Projects</div>
				<div className={classname.create_project_button_container}>
					<Link to='/create-project' className={classname.create_project_button}>
						Create Project
					</Link>
				</div>
			</div>
			<ProjectsList />
		</div>
	);
};

export default ProjectsComponent;
