import axios from 'axios';
import { apiUrl } from './userActions';

import {
	SEND_FRIEND_REQUEST_REQUEST,
	SEND_FRIEND_REQUEST_SUCCESS,
	SEND_FRIEND_REQUEST_FAIL,
	CANCEL_FRIEND_REQUEST_REQUEST,
	CANCEL_FRIEND_REQUEST_SUCCESS,
	CANCEL_FRIEND_REQUEST_FAIL,
	APPROVE_FRIEND_REQUEST_REQUEST,
	APPROVE_FRIEND_REQUEST_SUCCESS,
	APPROVE_FRIEND_REQUEST_FAIL,
} from 'store/types';

export const sendFriendRequest = (friend) => async (dispatch, getState) => {
	try {
		dispatch({ type: SEND_FRIEND_REQUEST_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();
		const friendObj = { id: friend, method: 'receiver' };
		const loggedUserObj = { id: userInfo._id, method: 'sender' };
		const friendAndUser = { friendObj, loggedUserObj };
		const userAndFriend = { loggedUserObj, friendObj };
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};
		const { data } = await axios.put(`${apiUrl}/friends/request`, friendAndUser, config);

		const response = await axios.put(`${apiUrl}/friends/requestB`, userAndFriend, config);

		const sendToReducer = { data, data2: response.data };

		dispatch({
			type: SEND_FRIEND_REQUEST_SUCCESS,
			payload: sendToReducer,
		});
	} catch (error) {
		dispatch({
			type: SEND_FRIEND_REQUEST_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const cancelFriendRequest = (friend, loggedInUser) => async (dispatch, getState) => {
	try {
		dispatch({ type: CANCEL_FRIEND_REQUEST_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const friendAndUser = { friend, loggedInUser };
		const userAndFriend = { loggedInUser, friend };
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put(`${apiUrl}/friends/cancel`, friendAndUser, config);
		const response = await axios.put(`${apiUrl}/friends/cancelB`, userAndFriend, config);
		console.log(response);
		dispatch({
			type: CANCEL_FRIEND_REQUEST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CANCEL_FRIEND_REQUEST_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const approveFriendRequest = (friend) => async (dispatch, getState) => {
	try {
		dispatch({ type: APPROVE_FRIEND_REQUEST_REQUEST });
		const {
			userLogin: { userInfo },
		} = getState();

		const loggedInUser = userInfo._id;
		const friendAndUser = { friend, loggedInUser };
		const userAndFriend = { loggedInUser, friend };
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		await axios.put(`${apiUrl}/friends/approve`, friendAndUser, config);
		await axios.put(`${apiUrl}/friends/approveB`, userAndFriend, config);

		dispatch({ type: CANCEL_FRIEND_REQUEST_REQUEST });

		await axios.put(`${apiUrl}/friends/cancel`, friendAndUser, config);
		await axios.put(`${apiUrl}/friends/cancelB`, userAndFriend, config);

		dispatch({
			type: CANCEL_FRIEND_REQUEST_SUCCESS,
			payload: userInfo,
		});

		dispatch({
			type: APPROVE_FRIEND_REQUEST_SUCCESS,
			payload: userInfo,
		});
	} catch (error) {
		dispatch({
			type: APPROVE_FRIEND_REQUEST_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};
