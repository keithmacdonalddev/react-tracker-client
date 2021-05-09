import React from "react";

import NavBar from "./NavBar";
import TicketData from "./TicketData";
import Comment from "components/Comment";

import classes from "./classes_SingleTicket.module.css";

const SingleTicket = () => {
	return (
		<div className={classes.singleTicketPageContainer}>
			<div className={classes.buttonContainer}>
				<NavBar />
			</div>
			<div className={classes.ticketDataContainer}>
				<TicketData />
				<Comment />
			</div>
		</div>
	);
};

export default SingleTicket;
