import axios from 'axios';

import {
	GET_LOGS_REQUEST,
	GET_LOGS_SUCCESS,
	GET_LOGS_FAIL,
	ADD_LOG,
} from '../types';

export const newLog = (log) => async (dispatch, getState) => {
	try {
		dispatch({
			type: ADD_LOG,
			payload: log,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getLogs = () => async (dispatch, getState) => {
	try {
		dispatch({ type: GET_LOGS_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const response = await axios.get('logs', config);

		dispatch({
			type: GET_LOGS_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: GET_LOGS_FAIL,
			payload:
				error.message && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
