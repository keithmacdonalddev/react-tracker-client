import React from 'react'; // node module
import MyTicketsPage from 'views/Tickets/MyTicketsPage'; // list of user tickets + create ticket option
import classname from './classes_sectionThree.module.css'; // css

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
