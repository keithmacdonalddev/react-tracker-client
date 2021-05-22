import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import { getTickets } from 'store/actions/ticketActions';

import {
	// createAlert,
	// modalStatusAction,
	showWidgetItem,
} from 'store/actions/navigationActions';

import { Icon, faPlus } from 'components/Icon';

import classname from './ticketsCard.module.css';

const TicketsCard = () => {
	const dispatch = useDispatch();

	const { tickets, loading, error } = useSelector((state) => state.tickets);

	useEffect(() => {
		dispatch(getTickets());
	}, [dispatch]);

	if (loading) {
		return <h6>loading...</h6>;
	}

	if (error) {
		return <h6>{error}</h6>;
	}

	if (tickets) {
		return (
			<Card
				title={'Tickets'}
				subTitle1={'open'}
				subQuantity1={tickets.length}
				subTitle2={'Completed'}
				subQuantity2={'0'}
			/>
		);
	}
	return <h6>Data not found</h6>;
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
