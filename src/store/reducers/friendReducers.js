import {
	SEND_FRIEND_REQUEST_FAIL,
	SEND_FRIEND_REQUEST_REQUEST,
	SEND_FRIEND_REQUEST_SUCCESS,
	SEND_FRIEND_REQUEST_RESET,
	CANCEL_FRIEND_REQUEST_FAIL,
	CANCEL_FRIEND_REQUEST_REQUEST,
	CANCEL_FRIEND_REQUEST_SUCCESS,
	CANCEL_FRIEND_REQUEST_RESET,
	GET_PENDING_FRIENDS_REQUEST,
	GET_PENDING_FRIENDS_SUCCESS,
	GET_PENDING_FRIENDS_FAIL,
} from 'store/types';

export const sendFriendRequestReducer = (state = {}, action) => {
	switch (action.type) {
		case SEND_FRIEND_REQUEST_REQUEST:
			return { loading: true, success: false };
		case SEND_FRIEND_REQUEST_SUCCESS:
			return { loading: false, success: true, data: action.payload };
		case SEND_FRIEND_REQUEST_FAIL:
			return { loading: false, success: false, error: action.payload };
		case SEND_FRIEND_REQUEST_RESET:
			return { loading: false, success: false };
		default:
			return state;
	}
};

export const cancelFriendRequestReducer = (state = {}, action) => {
	switch (action.type) {
		case CANCEL_FRIEND_REQUEST_REQUEST:
			return { loading: true, success: false };
		case CANCEL_FRIEND_REQUEST_SUCCESS:
			return { loading: false, success: true, data: action.payload };
		case CANCEL_FRIEND_REQUEST_FAIL:
			return { loading: false, success: false, error: action.payload };
		case CANCEL_FRIEND_REQUEST_RESET:
			return { loading: false, success: false, error: false };
		default:
			return state;
	}
};

export const pendingFriendRequestReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_PENDING_FRIENDS_REQUEST:
			return { loading: true, success: false };
		case GET_PENDING_FRIENDS_SUCCESS:
			return { loading: false, success: true, data: action.payload };
		case GET_PENDING_FRIENDS_FAIL:
			return { loading: false, success: false, error: action.payload };
		default:
			return state;
	}
};
