import axios from 'axios';

import {
	NEW_ACTIVITY_REQUEST,
	NEW_ACTIVITY_SUCCESS,
	NEW_ACTIVITY_FAIL,
	GET_ALL_ACTIVITY_REQUEST,
	GET_ALL_ACTIVITY_SUCCESS,
	GET_ALL_ACTIVITY_FAIL,
} from '../types';

export const newActivity = ({ event, details }) => async (dispatch, getState) => {
	try {
		dispatch({ type: NEW_ACTIVITY_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const response = await axios.put(`activity/create/${userInfo._id}`, { event, details }, config);

		dispatch({
			type: NEW_ACTIVITY_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		dispatch({
			type: NEW_ACTIVITY_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const getAllActivity = () => async (dispatch, getState) => {
	try {
		dispatch({ type: GET_ALL_ACTIVITY_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`activity/${userInfo._id}`, config);

		dispatch({
			type: GET_ALL_ACTIVITY_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_ALL_ACTIVITY_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};
