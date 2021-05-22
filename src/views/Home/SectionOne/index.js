// Packages
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import TicketsCard from '../TicketsCard';
import ProjectsCard from '../ProjectsCard';
import UsersCard from '../UsersCard';
import Avatar from 'components/Avatar';

// CSS
import classname from './classes_sectionOne.module.css';

const SectionOne = () => {
	const { userInfo } = useSelector((state) => state.userLogin);

	return (
		<div className={classname.section_one_container}>
			<TicketsCard />
			<ProjectsCard />
			<UsersCard />

		</div>
	);
};

export default SectionOne;
