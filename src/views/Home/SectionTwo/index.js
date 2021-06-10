import React from 'react';
import MyTicketsPage from 'views/Tickets/MyTicketsPage';

import classname from './classes_sectionTwo.module.css';

const SectionTwo = () => {
	return (
		<div className={classname.column}>
			<MyTicketsPage />
		</div>
	);
};

export default SectionTwo;
