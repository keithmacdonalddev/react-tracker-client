// Show a list of my tickets and an option to create a ticket

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import TicketsMapping from '../TicketsMapping';

// Redux
import { getTicketsByOwnerId } from 'store/actions/ticketActions';
import { CREATE_TICKET_RESET, DELETE_TICKET_RESET } from 'store/types';

// CSS
import classname from './classes_myTicketsPage.module.css';
import { showComponent } from 'store/actions/navigationActions';

const MyTicketsPage = () => {
	const dispatch = useDispatch();

	const { userInfo } = useSelector((state) => state.userLogin);
	const { myTickets, loading, error } = useSelector((state) => state.myTickets);
	const { component } = useSelector((state) => state.component);

	useEffect(() => {
		dispatch(getTicketsByOwnerId(userInfo._id));
		dispatch({ type: CREATE_TICKET_RESET });
		dispatch({ type: DELETE_TICKET_RESET });
	}, [dispatch, userInfo._id]);

	return (
		<div className={classname.tickets_page_container}>
			{/* Display only when clicking tickets link from sidebar */}
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
			{/* Actual component */}
			<div className={classname.ticketsContainer}>
				<div className={classname.wrapper}>
					<div className={classname.header_container}>
						<div className={classname.tickets_header_left}>My Tickets</div>
					</div>
					<div className={classname.tickets_header_right}>
						<div className={classname.header_title}></div>
						<div onClick={() => dispatch(showComponent('createTicket'))} className={classname.create_ticket_button}>
							Create Ticket
						</div>
					</div>
				</div>

				{loading ? (
					<div>loading...</div>
				) : error ? (
					<div>{error}</div>
				) : myTickets ? (
					<TicketsMapping myTickets={myTickets} />
				) : (
					<div>No data found</div>
				)}
			</div>
		</div>
	);
};

export default MyTicketsPage;
