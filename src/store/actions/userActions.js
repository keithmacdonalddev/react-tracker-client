/** @format */

/* eslint-disable array-callback-return */

import axios from 'axios';

import {
	SET_FEATURED_PROFILE_REQUEST,
	SET_FEATURED_PROFILE_SUCCESS,
	SET_FEATURED_PROFILE_FAIL,
	USER_LOGIN_FAIL,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_REQUEST,
	USER_LIST_FAIL,
	USER_LIST_SUCCESS,
	USER_LIST_REQUEST,
	USER_LOGOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_REQUEST,
	USER_DETAILS_FAIL,
	USER_DETAILS_SUCCESS,
	USER_DETAILS_REQUEST,
	USER_DETAILS_RESET,
	USER_UPDATE_PROFILE_FAIL,
	USER_UPDATE_PROFILE_SUCCESS,
	USER_UPDATE_PROFILE_REQUEST,
	USER_IS_LOGGED_IN,
} from '../types';

export const apiUrl = 'https://react-tracker-server.herokuapp.com';

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });
		const config = { headers: { 'Content-Type': 'application/json' } };
		const { data } = await axios.post(`${apiUrl}/login`, { email, password }, config);
		dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
		dispatch({ type: USER_IS_LOGGED_IN, payload: true });
		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

// remove userInfo from localStorage & dispatch userAction type: USER_LOGOUT
export const logout = () => (dispatch) => {
	localStorage.removeItem('userInfo');
	dispatch({ type: USER_LOGOUT });
	dispatch({ type: USER_DETAILS_RESET });
};

export const register = (firstName, lastName, username, email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_REGISTER_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const { data } = await axios.post(`${apiUrl}/register`, { firstName, lastName, username, email, password }, config);

		dispatch({
			type: USER_REGISTER_SUCCESS,
			payload: data,
		});

		localStorage.setItem('userInfo', JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const getUserDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: USER_DETAILS_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`${apiUrl}/profile/${id}`, config);

		dispatch({
			type: USER_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_DETAILS_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
	try {
		dispatch({ type: USER_UPDATE_PROFILE_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put(`${apiUrl}/profile`, user, config);

		dispatch({
			type: USER_UPDATE_PROFILE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: USER_UPDATE_PROFILE_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

/** **********************************************************************
 * 						Get Users
 ************************************************************************** */
export const getUsers = () => async (dispatch, getState) => {
	/**
	 * Fetch users
	 */
	try {
		/**
		 * set loading state
		 */
		dispatch({ type: USER_LIST_REQUEST });
		/**
		 * get logged in user
		 */
		const { userLogin } = getState();
		const { userInfo } = userLogin;
		/**
		 * set http configurations
		 */ const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};
		/**
		 * send request for data to API
		 */
		const { data } = await axios.get(`${apiUrl}/users`, config);

		const loggedInUser = me(data, userInfo);
		const usersWithoutLoggedInUser = removeUser(data, userInfo);
		const userListNotFriends = nonFriendUsers(data, loggedInUser);
		const userListFriends = friendsList(data, loggedInUser);
		const userListSentRequest = sentRequest(data, loggedInUser);
		const userListReceivedRequest = receivedRequest(data, loggedInUser);

		// const loggedInUser = [];
		// const usersWithoutLoggedInUser = [];
		// const userListNotFriends = [];
		// const userListFriends = [];
		// const userListSentRequest = [];

		const allLists = {
			loggedInUser,
			usersWithoutLoggedInUser,
			userListNotFriends,
			userListFriends,
			userListSentRequest,
			userListReceivedRequest,
		};

		dispatch({ type: USER_LIST_SUCCESS, payload: allLists });

		/**
		 * Catch Error
		 */
	} catch (error) {
		dispatch({
			type: USER_LIST_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

/** **********************************************************************
 * 						Set Featured Profile
 ************************************************************************** */
export const setFeaturedProfile = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: SET_FEATURED_PROFILE_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`${apiUrl}/profile/${id}`, config);

		dispatch({
			type: SET_FEATURED_PROFILE_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: SET_FEATURED_PROFILE_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

function me(data, userInfo) {
	const myInfo = data.find((user) => {
		if (user._id === userInfo._id) {
			return user;
		}
	});
	return myInfo;
}

function removeUser(data, userInfo) {
	const newList = data.filter((user) => {
		if (user._id !== userInfo._id) {
			return user;
		}
	});
	return newList;
}

function nonFriendUsers(data, loggedInUser) {
	const useList = removeUser(data, loggedInUser);
	const friends = loggedInUser.friends;
	const pendingSent = loggedInUser.sent;
	// const pendingReceived = loggedInUser.received;
	const nonFriends = useList.filter((user) => {
		let count = 0;
		friends.map((friend) => {
			if (user._id === friend) {
				return (count = count + 1);
			}
		});
		pendingSent.map((sent) => {
			if (user._id === sent) {
				return (count = count + 1);
			}
		});

		if (count === 0) {
			return user;
		}
	});

	return nonFriends;
}

function friendsList(data, loggedInUser) {
	const useList = removeUser(data, loggedInUser);
	const friends = loggedInUser.friends;
	const isPending = useList.filter((user) => {
		const checkPend = friends.find((friend) => {
			if (user._id === friend) {
				return true;
			}
		});
		if (checkPend) {
			return user;
		}
	});

	return isPending;
}

function sentRequest(data, loggedInUser) {
	const useList = removeUser(data, loggedInUser);
	const pending = loggedInUser.sent;
	const isPending = useList.filter((user) => {
		const checkPend = pending.find((pend) => {
			if (user._id === pend) {
				return true;
			}
		});
		if (checkPend) {
			return user;
		}
	});
	return isPending;
}
function receivedRequest(data, loggedInUser) {
	const useList = removeUser(data, loggedInUser);
	const pending = loggedInUser.received;
	const isPending = useList.filter((user) => {
		const checkPend = pending.find((pend) => {
			if (user._id === pend) {
				return true;
			}
		});
		if (checkPend) {
			return user;
		}
	});
	return isPending;
}
