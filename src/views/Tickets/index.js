import React from 'react';
import MyTicketsPage from './MyTicketsPage';
import classname from './tickets.module.css';

const Tickets = () => {
	return (
		<div className={classname.tickets_view_container}>
			<MyTicketsPage />
		</div>
	);
};

export default Tickets;
