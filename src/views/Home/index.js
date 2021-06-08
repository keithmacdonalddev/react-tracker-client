import React from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import classname from './classes_dashboard_home.module.css';

const DashBoardHome = () => {
	// const height = window.innerHeight;
	// const width = window.innerWidth;

	// console.log(`height: ${height}`);
	// console.log(`width: ${width}`);
	// alert(`height: ${height}`);
	// alert(`width: ${width}`);

	return (
		<div className={classname.layout}>
			<div className={classname.section_one}>
				<SectionOne />
			</div>
			<div className={classname.section_two}>
				<SectionTwo />
			</div>
			<div className={classname.section_three}>
				<SectionThree />
			</div>
		</div>
	);
};

export default DashBoardHome;
