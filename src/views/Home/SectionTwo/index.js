import React from 'react';
import ProjectsComponent from 'views/Projects/ProjectsComponent';
import MyTicketsPage from 'views/Tickets/MyTicketsPage';

import classname from './classes_sectionTwo.module.css';

const SectionTwo = () => {
	return (
		<div className={classname.section_two_container}>
			<div className={classname.section_two_content}>
				<div className={classname.column}>
					<MyTicketsPage />
				</div>
				<div className={classname.column}>
					<ProjectsComponent />
				</div>
			</div>
		</div>
	);
};

export default SectionTwo;
