import {
	SINGLE_PROJECT_DETAILS_FAIL,
	SINGLE_PROJECT_DETAILS_REQUEST,
	SINGLE_PROJECT_DETAILS_SUCCESS,
} from 'store/types';

export const singleProjectDetailsReducer = (state = {}, action) => {
	switch (action.type) {
		case SINGLE_PROJECT_DETAILS_REQUEST:
			return { loading: true };
		case SINGLE_PROJECT_DETAILS_SUCCESS:
			return { loading: false, project: action.payload };
		case SINGLE_PROJECT_DETAILS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
