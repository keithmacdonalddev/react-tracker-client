import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/Card';

import { getTicketsByOwnerId } from 'store/actions/ticketActions';

const TicketsCard = () => {
	const dispatch = useDispatch();

	const { userInfo } = useSelector((state) => state.userLogin);
	const { myTickets, loading, error } = useSelector((state) => state.myTickets);

	useEffect(() => {
		dispatch(getTicketsByOwnerId(userInfo._id));
	}, [dispatch, userInfo._id]);

	return (
		<Card title={'Tickets'} subTitle1={'Open'} subTitle2={'Completed'}>
			{loading ? (
				<div>loading...</div>
			) : error ? (
				<div>{error}</div>
			) : myTickets ? (
				<div>{myTickets.length}</div>
			) : (
				<div>No data found</div>
			)}
		</Card>
	);
};

export default TicketsCard;

// 	return (
// 		<div onClick={() => dispatch(showWidgetItem('tickets'))} className={classname.tickets_card_container}>
// 			<CardFooter>
// 				<div className={classname.footerButton} onClick={() => dispatch(showWidgetItem('createTicket'))}>
// 					<Icon type={faPlus} />
// 				</div>
// 			</CardFooter>
// 			<div className={classname.title}>Tickets</div>
// 			<div className={classname.content}>
// 				<div className={classname.content_item}>
// 					<div className={classname.sub_title}>Open</div>
// 					<div className={classname.open_quantity}>{tickets && <div>{tickets.length}</div>}</div>
// 				</div>
// 				<div className={classname.content_item}>
// 					<div className={classname.sub_title}>Completed</div>
// 					<div className={classname.completed_quantity}>{tickets && <div>{tickets.length}</div>}</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
