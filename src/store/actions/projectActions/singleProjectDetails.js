import {
	SINGLE_PROJECT_DETAILS_REQUEST,
	SINGLE_PROJECT_DETAILS_SUCCESS,
	SINGLE_PROJECT_DETAILS_FAIL,
} from '../../types';

export const singleProjectDetails = (project) => async (dispatch) => {
	try {
		dispatch({ type: SINGLE_PROJECT_DETAILS_REQUEST });

		dispatch({
			type: SINGLE_PROJECT_DETAILS_SUCCESS,
			payload: project,
		});
	} catch (error) {
		dispatch({
			type: SINGLE_PROJECT_DETAILS_FAIL,
			payload: 'something went wrong',
		});
	}
};
