// Packages
import React from 'react';
import { useSelector } from 'react-redux';

// Components
import DataField from '../DataField';

// Styles
import classes from './classes_ticketData.module.css';

const TicketData = () => {
	// const { ticket } = useSelector((state) => state.id);

	const { singleTicket, loading, error } = useSelector((state) => state.singleTicket);

	if (loading) {
		return <h6>Loading...</h6>;
	}

	if (error) {
		return <h6>{error}</h6>;
	}

	if (singleTicket) {
		return (
			<div className={classes.dataContainer}>
				<DataField label={'Project'} data={singleTicket.project} />
				<DataField label={'Title'} data={singleTicket.title} />
				<DataField label={'Description'} data={singleTicket.description} />
				<DataField label={'Assigned To'} data={singleTicket.assignedTo} />
				<DataField label={'Priority'} data={singleTicket.priority} />
				<DataField label={'Status'} data={singleTicket.status} />
				<DataField label={'Submitted By'} data={singleTicket.submittedBy} />
				<DataField label={'Date Created'} data={singleTicket.createdAt} date={true} />
				<DataField label={'Ticket Id'} data={singleTicket._id} />
			</div>
		);
	}

	return <h6>No data found</h6>;
};
export default TicketData;
