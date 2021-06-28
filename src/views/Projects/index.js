import React from 'react';
import ProjectsComponent from './ProjectsComponent';
import classname from './projects.module.css';

const MyProjectsPage = () => {
	return (
		<div className={classname.projects_main_layout}>
			<ProjectsComponent />
		</div>
	);
};

export default MyProjectsPage;
