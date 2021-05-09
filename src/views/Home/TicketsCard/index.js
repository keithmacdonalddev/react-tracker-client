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

import classes from './ticketsCard.module.css';

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
			<div onClick={() => dispatch(showWidgetItem('tickets'))} className=''>
				<Card>
					<CardFooter>
						<div
							className={classes.footerButton}
							onClick={() => dispatch(showWidgetItem('createTicket'))}>
							<Icon type={faPlus} />
						</div>
					</CardFooter>
					<CardHeader>Tickets</CardHeader>
					<CardBody>{tickets && <div>{tickets.length}</div>}</CardBody>
				</Card>
			</div>
		);
	}
	return <h6>Data not found</h6>;
};

export default TicketsCard;
