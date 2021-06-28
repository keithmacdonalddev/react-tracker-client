// External Deps
import React from 'react';
import { useSelector } from 'react-redux';
// Internal Deps
import DataField from './DataField';

import classes from './classes_ticketData.module.css';

const TicketData = () => {
	const { singleTicket, loading, error } = useSelector((state) => state.singleTicket);

	return (
		<div className={classes.dataContainer}>
			{loading ? (
				<h6>Loading...</h6>
			) : error ? (
				<h6>{error}</h6>
			) : singleTicket ? (
				<>
					<DataField label={'Project'} data={singleTicket.project} />
					<DataField label={'Title'} data={singleTicket.title} />
					<DataField label={'Description'} data={singleTicket.description} />
					<DataField label={'Assigned To'} data={singleTicket.assignedTo} />
					<DataField label={'Priority'} data={singleTicket.priority} />
					<DataField label={'Status'} data={singleTicket.status} />
					<DataField label={'Submitted By'} data={singleTicket.submittedBy} />
					<DataField label={'Date Created'} data={singleTicket.createdAt} date={true} />
					<DataField label={'Ticket Id'} data={singleTicket._id} />
				</>
			) : (
				<h6>No data found</h6>
			)}
		</div>
	);
};

export default TicketData;
