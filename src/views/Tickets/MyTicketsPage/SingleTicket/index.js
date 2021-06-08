import React from 'react';

import NavBar from './NavBar';
import TicketData from './TicketData';
import Comment from 'components/Comment';

import classname from './classes_SingleTicket.module.css';

const SingleTicket = () => {
	return (
		<div className={classname.singleTicketPageContainer}>
			<div className={classname.buttonContainer}>
				<NavBar />
			</div>
			<div className={classname.column}>
				<TicketData />
			</div>
			<div className={classname.column}>
				<Comment />
			</div>
		</div>
	);
};

export default SingleTicket;
