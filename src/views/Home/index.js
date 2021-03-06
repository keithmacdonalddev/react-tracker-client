import React from 'react';
import SectionOne from './SectionOne';
import ProjectsComponent from 'views/Projects/ProjectsComponent';
import SectionThree from './SectionThree';
import classname from './classes_dashboard_home.module.css';
import Dashboard from 'views/Dashboard';

const DashBoardHome = () => {
	return (
		<Dashboard>
			<div className={classname.layout}>
				<div className={classname.section_one}>
					<SectionOne />
				</div>
				<div className={classname.section_two}>
					<ProjectsComponent />
				</div>
				<div className={classname.section_three}>
					<SectionThree />
				</div>
			</div>
		</Dashboard>
	);
};

export default DashBoardHome;

// const height = window.innerHeight;
// const width = window.innerWidth;

// console.log(`height: ${height}`);
// console.log(`width: ${width}`);
// alert(`height: ${height}`);
// alert(`width: ${width}`);
