import {
	NEW_ACTIVITY_REQUEST,
	NEW_ACTIVITY_SUCCESS,
	NEW_ACTIVITY_FAIL,
	NEW_ACTIVITY_RESET,
	GET_ALL_ACTIVITY_REQUEST,
	GET_ALL_ACTIVITY_SUCCESS,
	GET_ALL_ACTIVITY_FAIL,
} from '../types';

export const newActivityReducer = (state = { loading: false, newActivitySuccess: false, activity: [] }, action) => {
	switch (action.type) {
		case NEW_ACTIVITY_REQUEST:
			return { loading: true, newActivitySuccess: false };
		case NEW_ACTIVITY_SUCCESS:
			return { loading: false, newActivitySuccess: true, activity: action.payload };
		case NEW_ACTIVITY_FAIL:
			return { loading: false, newActivitySuccess: false, error: action.payload };
		case NEW_ACTIVITY_RESET:
			return { loading: false, newActivitySuccess: false };
		default:
			return state;
	}
};

export const getAllActivityReducer = (state = [], action) => {
	switch (action.type) {
		case GET_ALL_ACTIVITY_REQUEST:
			return { loading: true };
		case GET_ALL_ACTIVITY_SUCCESS:
			return { loading: false, activity: action.payload };
		case GET_ALL_ACTIVITY_FAIL:
			return { loading: false, error: action.payload };

		default:
			return state;
	}
};
