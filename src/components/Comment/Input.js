import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ticketComment } from 'store/actions/ticketActions';
import classname from './comment.module.css';

const Input = ({ singleTicketId }) => {
	const dispatch = useDispatch();
	const [comment, setComment] = useState('');

	const submitHandler = (event) => {
		event.preventDefault();
		dispatch(ticketComment(comment, singleTicketId));
		setComment('');
	};

	return (
		<form onSubmit={(event) => submitHandler(event)}>
			<div className={classname.input_container}>
				<input
					className={classname.comment_input}
					type='text'
					value={comment}
					placeholder='write a comment'
					onChange={(e) => setComment(e.target.value)}
				/>
				<button className={classname.formButton} type='submit'>
					Submit
				</button>
			</div>
		</form>
	);
};

export default Input;
