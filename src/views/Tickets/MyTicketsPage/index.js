/**
 * 	Show a list of my tickets and an option to create a ticket
 *
 */

// Packages
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TicketsMapping from '../TicketsMapping';
import CreateTicketButton from '../CreateTicketButton';

// Redux
import { getTickets } from 'store/actions/ticketActions';
import { CREATE_TICKET_RESET, DELETE_TICKET_RESET } from 'store/types';

// Styles ~ css
import classname from './classes_myTicketsPage.module.css';

const MyTicketsPage = () => {
	const dispatch = useDispatch();

	const { tickets, loading, error } = useSelector((state) => state.tickets);
	const { component } = useSelector((state) => state.component);

	useEffect(() => {
		dispatch(getTickets());
		dispatch({ type: CREATE_TICKET_RESET });
		dispatch({ type: DELETE_TICKET_RESET });
	}, [dispatch]);

	return (
		<div className={classname.tickets_page_container}>
			{component === 'My Tickets' && (
				<div className={classname.tickets_facts_container}>
					<div className={classname.tickets_facts_item}>
						<div className={classname.facts_item_title}>Open Tickets</div>
					</div>
					<div className={classname.tickets_facts_item}>
						<div className={classname.facts_item_title}>Open Tickets</div>
					</div>{' '}
					<div className={classname.tickets_facts_item}>
						<div className={classname.facts_item_title}>Open Tickets</div>
					</div>
				</div>
			)}

			<div className={classname.ticketsContainer}>
				<div className={classname.wrapper}>
					<div className={classname.header_container}>
						<div className={classname.header_title}>My Tickets</div>
					</div>
					<div className={classname.footer_container}>
						<div className={classname.header_title}></div>
						<CreateTicketButton />
					</div>
				</div>

				{loading ? (
					<div>loading...</div>
				) : error ? (
					<div>{error}</div>
				) : tickets ? (
					<TicketsMapping tickets={tickets} />
				) : (
					<div>No data found</div>
				)}
			</div>
		</div>
	);
};

export default MyTicketsPage;
