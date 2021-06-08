import React from 'react';
import ProjectsComponent from 'views/Projects/ProjectsComponent';

import classname from './classes_sectionThree.module.css';

const SectionThree = () => {
	return (
		<div className={classname.section_three_container}>
			<div className={classname.section_three_content}>
				<div className={classname.column}>
					<ProjectsComponent />
				</div>
			</div>
		</div>
	);
};

export default SectionThree;
