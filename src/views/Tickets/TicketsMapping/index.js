import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Moment from 'react-moment';
import { getTicket } from 'store/actions/ticketActions';
import { singleTicketId } from 'store/actions/ticketActions';
import { showComponent } from 'store/actions/navigationActions';

import { Icon, faBug, faRocket, faChevronRight } from 'components/Icon';

import classname from './tickets_mapping.module.css';
const TicketsMapping = ({ myTickets }) => {
	const dispatch = useDispatch();

	const [fancy, setFancy] = useState(false);

	const gotoTicketClickHandler = (id) => {
		// store a reference of the id of the clicked ticket in global state
		dispatch(singleTicketId(id));
		dispatch(getTicket(id));
		dispatch(showComponent('singleTicket'));
	};

	return (
		<div className={classname.ticketsContainer}>
			<div className={classname.header_wrapper}>
				<div style={{ background: 'var(--color-primary-600)' }} className={classname.card_simple}>
					<div className={classname.ticket_idx}>#</div>
					<div className={classname.ticketProject}>Project</div>
					<div className={classname.ticketTitle}>Ticket Title</div>
					<div className={classname.ticketDate}>Date</div>
					<div style={{ background: 'none' }} className={classname.ticketTypeIconContainer}>
						Status
					</div>
					<div className={classname.editIcon}>Go</div>
				</div>
			</div>
			{myTickets.reverse().map((ticket, idx) => (
				<div className={classname.ticket_data_map}>
					<div key={ticket._id} className={fancy ? classname.card_fancy : classname.card_simple}>
						<div className={classname.ticket_idx}> {idx + 1}</div>
						<div className={classname.ticketProject}>{ticket.project}</div>
						<div className={classname.ticketTitle}>{ticket.title}</div>
						<Moment className={classname.ticketDate} format='MMM-DD'>
							{ticket.createdAt}
						</Moment>
						<div
							style={
								ticket.status === 'open'
									? {
											background: 'var(--color-green)',
											boxShadow: '0 0 5px #0f0,  0 0 20px #0f0',
									  }
									: ticket.status === 'closed'
									? { background: 'var(--color-primary-600)' }
									: null
							}
							className={classname.ticketTypeIconContainer}>
							<div className={classname.ticketTypeIcon}>
								{ticket.ticketType === 'Bug Report' && <Icon type={faBug} />}
								{ticket.ticketType === 'Feature Request' && <Icon type={faRocket} />}
							</div>
						</div>
						<div onClick={() => gotoTicketClickHandler(ticket._id)} className={classname.editIcon}>
							<Icon type={faChevronRight} />
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default TicketsMapping;
