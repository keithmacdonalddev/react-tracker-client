import React from 'react';

import ProjectsComponent from './ProjectsComponent';

// CSS ~ styles
import classname from './MyProjectsPage.module.css';

// Default export
const MyProjectsPage = () => {
	return (
		<div className={classname.projects_main_layout}>
			<ProjectsComponent />
		</div>
	);
};

export default MyProjectsPage;
