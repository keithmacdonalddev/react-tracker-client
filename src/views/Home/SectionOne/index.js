// Packages
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import TicketsCard from '../TicketsCard';
import ProjectsCard from '../ProjectsCard';
import UsersCard from '../UsersCard';

// CSS
import classname from './classes_sectionOne.module.css';

const SectionOne = () => {
	const { activity } = useSelector((state) => state.allActivity);
	return (
		<div className={classname.section_one_container}>
			<TicketsCard />
			<ProjectsCard />
			<UsersCard />
			<UsersCard title={'activity'} data={activity} />
		</div>
	);
};

export default SectionOne;
