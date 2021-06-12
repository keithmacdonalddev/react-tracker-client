// Packages
import React from 'react';

// Components
import TicketsCard from '../TicketsCard';
import ProjectsCard from '../ProjectsCard';
import UsersCard from '../UsersCard';

// CSS
import classname from './classes_sectionOne.module.css';

const SectionOne = () => {
	return (
		<div className={classname.section_one_container}>
			<TicketsCard />
			<ProjectsCard />
			<UsersCard />
		</div>
	);
};

export default SectionOne;
