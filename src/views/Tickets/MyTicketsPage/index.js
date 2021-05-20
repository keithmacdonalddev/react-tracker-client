// Packages
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';

// Redux
import { getTicket } from 'store/actions/ticketActions';
import { getTickets } from 'store/actions/ticketActions';
import { singleTicketId } from 'store/actions/ticketActions';
import { showComponent } from 'store/actions/navigationActions';
import { CREATE_TICKET_RESET, DELETE_TICKET_RESET } from 'store/types';

// Icons
import { Icon, faBug, faRocket, faChevronRight } from 'components/Icon';

// Styles ~ css
import classname from './classes_myTicketsPage.module.css';

const MyTicketsPage = () => {
	const dispatch = useDispatch();

	const { tickets, loading, error } = useSelector((state) => state.tickets); //?

	const gotoTicketClickHandler = (id) => {
		// store a reference of the id of the clicked ticket in global state
		dispatch(singleTicketId(id));
		// get ticket data
		dispatch(getTicket(id));
		// display single ticket UI
		dispatch(showComponent('singleTicket'));
	};

	const createTicketButtonClickHandler = () => {
		dispatch(showComponent('createTicket'));
	};

	useEffect(() => {
		dispatch(getTickets());
		dispatch({ type: CREATE_TICKET_RESET });
		dispatch({ type: DELETE_TICKET_RESET });
	}, [dispatch]);

	/**
	 * ----------------------------------------
	 *  --------------- JSX ---------------
	 */

	if (loading) {
		return <h6>loading...</h6>;
	}

	if (error) {
		return <h6>{error}</h6>;
	}

	if (tickets) {
		return (
			<div className={classname.tickets_page}>
				{/* *************** HEADER *************** */}
				<div className={classname.header_container}>
					<div className={classname.header_title}>My Tickets</div>
					<button className={classname.create_ticket_button} onClick={() => createTicketButtonClickHandler()}>
						+
					</button>
				</div>

				{/* Ticket list wrapper */}
				<div className={classname.ticketsContainer}>
					{/* --------------- START TICKETS MAPPING -------------------- */}
					{tickets.map((ticket, index) => (
						<div key={ticket._id} onClick={() => gotoTicketClickHandler(ticket._id)} className={classname.card}>
							{/* ICON */}
							<div className={classname.ticketTypeIconContainer}>
								<div className={classname.ticketTypeIcon}>
									{ticket.ticketType === 'Bug Report' && <Icon type={faBug} />}
									{ticket.ticketType === 'Feature Request' && <Icon type={faRocket} />}
								</div>
							</div>

							{/* CORE PROJECT */}
							<div className={classname.ticketProject}>{ticket.project}</div>

							{/* TICKET TITLE */}
							<div className={classname.ticketTitle}>{ticket.title}</div>

							{/* TIME TICKET CREATED */}
							<Moment className={classname.ticketDate} format='MMM-DD'>
								{ticket.createdAt}
							</Moment>

							{/* GOTO TICKET LINK */}
							<div className={classname.editIcon}>
								<Icon type={faChevronRight} />
							</div>
						</div>
					))}
					{/* -------------------- END TICKETS MAPPING -------------------- */}
				</div>
			</div>
		);
	}

	return <h6>No data found</h6>;
};

export default MyTicketsPage;
