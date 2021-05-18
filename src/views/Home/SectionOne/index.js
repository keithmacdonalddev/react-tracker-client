import React from 'react';

import TicketsCard from '../TicketsCard';
import ProjectsCard from '../ProjectsCard';
import Avatar from 'components/Avatar';

import classname from './classes_sectionOne.module.css';
import { useSelector } from 'react-redux';

const SectionOne = () => {
	const { userInfo } = useSelector((state) => state.userLogin);
	return (
		<div className={classname.section_one_grid_container}>
			<Avatar />
			<div className={classname.section_one_welcome_text}>Welcome {}</div>
			<TicketsCard />
			<ProjectsCard />
		</div>
	);
};

export default SectionOne;
