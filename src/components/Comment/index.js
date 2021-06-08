/** @format */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTicket, ticketComment } from 'store/actions/ticketActions';
import Moment from 'react-moment';

import classname from './comment.module.css';
import { TICKET_COMMENT_RESET } from 'store/types';

const Comment = () => {
	const dispatch = useDispatch();
	const [comment, setComment] = useState('');

	const { ticketId } = useSelector((state) => state.id);
	const { singleTicket, loading, error } = useSelector((state) => state.singleTicket);

	const { commentSuccess, commentError, commentLoading } = useSelector((state) => state.ticketCommentCreate);

	const submitHandler = (event) => {
		event.preventDefault();
		dispatch(ticketComment(comment, singleTicket._id));
		setComment('');
	};

	useEffect(() => {
		if (commentSuccess) {
			dispatch({ type: TICKET_COMMENT_RESET });
			dispatch(getTicket(ticketId));
		}
	}, [commentSuccess, ticketId, dispatch]);

	return (
		<div className={classname.commentSection}>
			<div className={classname.commentContainer}>
				{loading || commentLoading ? (
					<h6>loading...</h6>
				) : error || commentError ? (
					<h6>{error}</h6>
				) : (
					<>
						{singleTicket.comments.map((item) => {
							return (
								<div key={item._id} className={classname.commentBox}>
									<p className={classname.comment}>{item.comment}</p>
									<div className={classname.boxHeader}>
										<h6 className={classname.name}>{item.name}</h6>
										<Moment className={classname.date} format='MMM-DD hh:mm'>
											{item.createdAt}
										</Moment>
									</div>
								</div>
							);
						})}
					</>
				)}
			</div>
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
		</div>
	);
};

export default Comment;
