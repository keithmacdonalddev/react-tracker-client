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
			<div className={classname.card_spacer}>
				<TicketsCard />
			</div>
			<div className={classname.card_spacer}>
				<ProjectsCard />
			</div>
			<div className={classname.card_spacer}>
				<UsersCard />
			</div>
		</div>
	);
};

export default SectionOne;
