import React from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { showComponent } from 'store/actions/navigationActions';
import style from './navbar.module.css';

const NavBar = () => {
	const dispatch = useDispatch();

	return (
		<>
			<div className={style.button} onClick={() => dispatch(showComponent('My Tickets'))}>
				Back to All Tickets
			</div>
			<div onClick={() => dispatch(showComponent('editTicket'))} className={style.button}>
				Edit Ticket
			</div>

			<div onClick={() => dispatch(showComponent('deleteTicket'))} className={style.button}>
				Delete
			</div>
		</>
	);
};

export default NavBar;
