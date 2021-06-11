/** @format */

import axios from 'axios';
import {
	GET_TICKETS_FAIL,
	GET_TICKETS_SUCCESS,
	GET_TICKETS_REQUEST,
	GET_TICKETS_BY_OWNER_ID_FAIL,
	GET_TICKETS_BY_OWNER_ID_SUCCESS,
	GET_TICKETS_BY_OWNER_ID_REQUEST,
	CREATE_TICKET_REQUEST,
	CREATE_TICKET_SUCCESS,
	CREATE_TICKET_FAIL,
	EDIT_TICKET_REQUEST,
	EDIT_TICKET_SUCCESS,
	EDIT_TICKET_FAIL,
	DELETE_TICKET_REQUEST,
	DELETE_TICKET_SUCCESS,
	DELETE_TICKET_FAIL,
	SINGLE_TICKET_ID_REQUEST,
	SINGLE_TICKET_ID_SUCCESS,
	SINGLE_TICKET_ID_FAIL,
	TICKET_COMMENT_REQUEST,
	TICKET_COMMENT_SUCCESS,
	TICKET_COMMENT_FAIL,
	DELETE_COMMENT_REQUEST,
	DELETE_COMMENT_SUCCESS,
	DELETE_COMMENT_FAIL,
	GET_TICKET_REQUEST,
	GET_TICKET_SUCCESS,
	GET_TICKET_FAIL,
} from '../types';

import { apiUrl } from './userActions';

// **********************************************************************
//    						GET ALL TICKETS
// **********************************************************************

export const getTickets = () => async (dispatch) => {
	try {
		dispatch({ type: GET_TICKETS_REQUEST });

		const { data } = await axios.get(`${apiUrl}/tickets`);

		dispatch({
			type: GET_TICKETS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_TICKETS_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const getTicketsByOwnerId = (id) => async (dispatch) => {
	try {
		dispatch({ type: GET_TICKETS_BY_OWNER_ID_REQUEST });

		const { data } = await axios.get(`${apiUrl}/tickets/owner/${id}`);
		// const { data } = await axios.get(`tickets/owner/${id}`);

		dispatch({
			type: GET_TICKETS_BY_OWNER_ID_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_TICKETS_BY_OWNER_ID_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

/** *********************************************************************
 * @desc CREATE TICKET
 * @todo finish additional ticket fields
 * @param: ticket id
 * @returns
 * ********************************************************************* */

export const createTicket = (newTicket) => async (dispatch, getState) => {
	try {
		dispatch({ type: CREATE_TICKET_REQUEST });
		console.log(newTicket);
		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const response = await axios.post(
			`${apiUrl}/tickets`,
			{
				newTicket,
			},
			config,
		);

		const createTicketResponse = {
			data: response.data,
			status: response.status,
			statusText: response.statusText,
		};
		dispatch({
			type: CREATE_TICKET_SUCCESS,
			payload: createTicketResponse,
		});
	} catch (error) {
		console.log(`error: ${error.response.data}`);
		dispatch({
			type: CREATE_TICKET_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

/**
 * *********************************************************************
 * @desc save a single ticked id to global state
 * @todo RETHINK USE CASE
 * @param: ticket id
 *
 * @returns
 *
 * *********************************************************************
 *
 */

export const singleTicketId = (id) => async (dispatch) => {
	try {
		dispatch({ type: SINGLE_TICKET_ID_REQUEST });

		const data = await id;

		dispatch({
			type: SINGLE_TICKET_ID_SUCCESS,
			payload: data,
		});

		//
	} catch (error) {
		console.log(error);
		dispatch({
			type: SINGLE_TICKET_ID_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const deleteTicket = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: DELETE_TICKET_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };

		const { data } = await axios.delete(`${apiUrl}/${id}`, config);

		dispatch({
			type: DELETE_TICKET_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: DELETE_TICKET_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const ticketComment = (comment, id) => async (dispatch, getState) => {
	console.log(`comment: ${comment}, id: ${id}`);
	try {
		dispatch({ type: TICKET_COMMENT_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const newComment = { comment, userInfo };
		const { data } = await axios.put(`${apiUrl}/comment/create/${id}`, { newComment }, config);

		dispatch({ type: TICKET_COMMENT_SUCCESS, payload: data });
	} catch (error) {
		if (error.message) {
			console.log('error.messsage');
			dispatch({
				type: TICKET_COMMENT_FAIL,
				payload: error.message && error.response.data.message ? error.response.data.message : error.message,
			});
		}
	}
};

export const deleteComment = (ticketId, commentId) => async (dispatch, getState) => {
	console.log(`from delete comment: ticketId: ${ticketId} commentId: ${commentId}`);
	try {
		dispatch({ type: DELETE_COMMENT_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };

		const { data } = await axios.put(`${apiUrl}/comment/delete`, { ticketId, commentId }, config);
		// const { data } = await axios.put('/comment/delete', { ticketId, commentId }, config);

		dispatch({
			type: DELETE_COMMENT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: DELETE_COMMENT_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const getTicket = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: GET_TICKET_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`${apiUrl}/tickets/${id}`, config);

		dispatch({
			type: GET_TICKET_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_TICKET_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const editTicket = (title, description, developer, project, priority, status, id) => async (
	dispatch,
	getState,
) => {
	try {
		dispatch({ type: EDIT_TICKET_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put(
			`${apiUrl}/${id}`,
			{
				title,
				description,
				developer,
				project,
				priority,
				status,
				id,
			},
			config,
		);

		dispatch({
			type: EDIT_TICKET_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: EDIT_TICKET_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};
