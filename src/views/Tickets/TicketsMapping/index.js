import React from 'react';
import { useDispatch } from 'react-redux';

import Moment from 'react-moment';
import { getTicket } from 'store/actions/ticketActions';
import { singleTicketId } from 'store/actions/ticketActions';
import { showComponent } from 'store/actions/navigationActions';

import { Icon, faBug, faRocket, faChevronRight } from 'components/Icon';

import classname from './tickets_mapping.module.css';
const TicketsMapping = ({ tickets }) => {
	const dispatch = useDispatch();

	const gotoTicketClickHandler = (id) => {
		// store a reference of the id of the clicked ticket in global state
		dispatch(singleTicketId(id));
		dispatch(getTicket(id));
		dispatch(showComponent('singleTicket'));
	};

	return (
		<div className={classname.ticketsContainer}>
			{tickets.map((ticket, index) => (
				<div key={ticket._id} onClick={() => gotoTicketClickHandler(ticket._id)} className={classname.card}>
					<div className={classname.ticketTypeIconContainer}>
						<div className={classname.ticketTypeIcon}>
							{ticket.ticketType === 'Bug Report' && <Icon type={faBug} />}
							{ticket.ticketType === 'Feature Request' && <Icon type={faRocket} />}
						</div>
					</div>
					<div className={classname.ticketProject}>{ticket.project}</div>
					<div className={classname.ticketTitle}>{ticket.title}</div>
					<Moment className={classname.ticketDate} format='MMM-DD'>
						{ticket.createdAt}
					</Moment>
					<div className={classname.editIcon}>
						<Icon type={faChevronRight} />
					</div>
				</div>
			))}
		</div>
	);
};

export default TicketsMapping;