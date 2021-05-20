import React from 'react';

import TicketsCard from '../TicketsCard';
import ProjectsCard from '../ProjectsCard';
import UsersCard from '../UsersCard';
import Avatar from 'components/Avatar';

import classname from './classes_sectionOne.module.css';
import { useSelector } from 'react-redux';

const SectionOne = () => {
	const { userInfo } = useSelector((state) => state.userLogin);

	return (
		<div className={classname.section_one_grid_container}>
			<Avatar />
			<div className={classname.welcome_text_container}>
				<div className={classname.section_one_welcome_text}>
					Welcome <span className={classname.first_name}> {userInfo.firstName}</span>
				</div>
				<div className={classname.totals_container}>
					<TicketsCard />
					<ProjectsCard />
					<UsersCard />
				</div>
			</div>
		</div>
	);
};

export default SectionOne;
