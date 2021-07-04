/**********************************************************************************

			Show a list of my tickets and an option to create a ticket*

***********************************************************************************/

import React, { useEffect } from 'react'; // node-module
import { useSelector, useDispatch } from 'react-redux'; // node-module
import { Link } from 'react-router-dom'; // node-module
import TicketsMapping from '../TicketsMapping'; // local component
import { getTicketsByOwnerId } from 'store/actions/ticketActions'; // redux
import { CREATE_TICKET_RESET, DELETE_TICKET_RESET } from 'store/types'; // redux
import classname from './classes_myTicketsPage.module.css'; // css

const MyTicketsPage = () => {
	const dispatch = useDispatch();

	const { userInfo } = useSelector((state) => state.userLogin);
	const { myTickets, loading, error } = useSelector((state) => state.myTickets);

	useEffect(() => {
		dispatch(getTicketsByOwnerId(userInfo._id));
		dispatch({ type: CREATE_TICKET_RESET });
		dispatch({ type: DELETE_TICKET_RESET });
	}, [dispatch, userInfo._id]);

	return (
		<div className={classname.tickets_page_container}>
			<div className={classname.ticketsContainer}>
				<div className={classname.wrapper}>
					<div className={classname.header_container}>
						<div className={classname.tickets_header_left}>My Tickets</div>
					</div>
					<div className={classname.tickets_header_right}>
						<div className={classname.header_title}></div>
						<Link to='/create-ticket' className={classname.create_ticket_button}>
							Create Ticket
						</Link>
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
