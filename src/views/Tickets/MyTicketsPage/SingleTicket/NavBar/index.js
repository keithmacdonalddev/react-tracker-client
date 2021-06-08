import React from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { showComponent } from 'store/actions/navigationActions';
import style from './navbar.module.css';

const NavBar = () => {
	const dispatch = useDispatch();

	return (
		<>
			<div
				onClick={() => dispatch(showComponent('editTicket'))}
				className={style.button}>
				Edit Ticket
			</div>
			<div
				onClick={() => dispatch(showComponent('comment'))}
				className={style.button}>
				Comments
			</div>
			<div
				onClick={() => dispatch(showComponent('deleteTicket'))}
				className={style.button}>
				Delete
			</div>
			<div
				className={style.button}
				onClick={() => dispatch(showComponent('My Tickets'))}>
				All Tickets
			</div>
		</>
	);
};

export default NavBar;
