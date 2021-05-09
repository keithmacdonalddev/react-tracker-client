import React from 'react';

import classes from './classes_dashboard_home.module.css';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const DashBoardHome = () => {
	return (
		<div className={classes.dashboard_home_grid_layout}>
			<div className={classes.section_one}>
				<SectionOne />
			</div>
			<div className={classes.section_two}>
				<SectionTwo />
			</div>
		</div>
	);
};

export default DashBoardHome;
