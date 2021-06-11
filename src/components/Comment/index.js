/** @format */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTicket, deleteComment } from 'store/actions/ticketActions';
import Moment from 'react-moment';
import { TICKET_COMMENT_RESET } from 'store/types';
import Input from './Input';

import classname from './comment.module.css';
import { faTrash, Icon } from 'components/Icon';

const Comment = () => {
	const dispatch = useDispatch();

	const { ticketId } = useSelector((state) => state.id);
	const { singleTicket, loading, error } = useSelector((state) => state.singleTicket);

	const { commentSuccess, commentError, commentLoading } = useSelector((state) => state.ticketCommentCreate);

	useEffect(() => {
		if (commentSuccess) {
			dispatch({ type: TICKET_COMMENT_RESET });
			dispatch(getTicket(ticketId));
		}
	}, [commentSuccess, ticketId, dispatch]);

	return (
		<div className={classname.commentSection}>
			<Input singleTicketId={ticketId} />

			<div className={classname.commentContainer}>
				{loading || commentLoading ? (
					<h6>loading...</h6>
				) : error || commentError ? (
					<h6>{error}</h6>
				) : (
					<>
						{singleTicket.comments.reverse().map((comment, idx) => {
							return (
								<div key={comment._id} className={classname.commentBox}>
									<p>
										{idx + 1} of {singleTicket.comments.length}
									</p>
									<p className={classname.comment}>{comment.comment}</p>
									<div className={classname.boxHeader}>
										<h6 className={classname.name}>{comment.name}</h6>
										<Moment className={classname.date} format='MMM-DD hh:mm'>
											{comment.createdAt}
										</Moment>
										<div
											onClick={() => dispatch(deleteComment(ticketId, comment._id))}
											className={classname.delete_comment}>
											<Icon
												type={faTrash}
												style={{ fontSize: '12px', marginTop: '5px', color: 'var(--color-primary-200)' }}
											/>
										</div>
									</div>
								</div>
							);
						})}
					</>
				)}
			</div>
		</div>
	);
};

export default Comment;
