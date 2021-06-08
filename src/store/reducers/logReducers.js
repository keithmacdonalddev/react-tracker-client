import {
	ADD_LOG,
	GET_LOGS_REQUEST,
	GET_LOGS_SUCCESS,
	GET_LOGS_FAIL,
} from '../types';

export const sendLogReducer = (state = { logs: [] }, action) => {
	switch (action.type) {
		case ADD_LOG:
			return { ...state, logs: [...state.logs, action.payload] };
		default:
			return state;
	}
};

export const getLogsReducer = (state = { logs: [] }, action) => {
	switch (action.type) {
		case GET_LOGS_REQUEST:
			return { loading: true };
		case GET_LOGS_SUCCESS:
			return { loading: false, logs: action.payload };
		case GET_LOGS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
