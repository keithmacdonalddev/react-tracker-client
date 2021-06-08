import React from 'react';
import { useDispatch } from 'react-redux';
import { showComponent } from 'store/actions/navigationActions';

import classname from './create_ticket_button.module.css';

const CreateTicketButton = () => {
	const dispatch = useDispatch();

	const createTicketButtonClickHandler = () => {
		dispatch(showComponent('createTicket'));
	};

	return (
		<div className={classname.button_background}>
			<div className={classname.create_ticket_button} onClick={() => createTicketButtonClickHandler()}>
				+
			</div>
		</div>
	);
};

export default CreateTicketButton;
