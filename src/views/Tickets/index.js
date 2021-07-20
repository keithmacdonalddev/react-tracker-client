import React from 'react';
import Dashboard from 'views/Dashboard';
import MyTicketsPage from './MyTicketsPage';
import classname from './tickets.module.css';

const Tickets = () => {
	return (
		<Dashboard>
			<div className={classname.tickets_view_container}>
				<MyTicketsPage />
			</div>
		</Dashboard>
	);
};

export default Tickets;
