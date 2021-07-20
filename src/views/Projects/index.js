import React from 'react';
import ProjectsComponent from './ProjectsComponent';
import Dashboard from 'views/Dashboard';
import classname from './projects.module.css';

const MyProjectsPage = () => {
	return (
		<Dashboard>
			<div className={classname.projects_main_layout}>
				<ProjectsComponent />
			</div>
		</Dashboard>
	);
};

export default MyProjectsPage;
