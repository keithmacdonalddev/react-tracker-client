import React from 'react';

import ActivityMonitor from 'views/ActivityMonitor';
import MyTicketsPage from 'views/Tickets/MyTicketsPage';
import classname from './classes_sectionThree.module.css';

const SectionThree = () => {
	return (
		<div className={classname.section_three_container}>
			<div className={classname.ticket_list_container}>
				<MyTicketsPage />
			</div>
		</div>
	);
};

export default SectionThree;
