import React from 'react';

import classname from './classes_dashboard_home.module.css';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const DashBoardHome = () => {
	return (
		<div className={classname.layout}>
			<div className={classname.section_one}>
				<SectionOne />
			</div>
			<div className={classname.section_two}>
				<SectionTwo />
			</div>
		</div>
	);
};

export default DashBoardHome;
