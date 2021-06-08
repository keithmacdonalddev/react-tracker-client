import {
	CREATE_PROJECT_REQUEST,
	CREATE_PROJECT_SUCCESS,
	CREATE_PROJECT_FAIL,
	CREATE_PROJECT_RESET,
	GET_PROJECTS_REQUEST,
	GET_PROJECTS_SUCCESS,
	GET_PROJECTS_FAIL,
	GET_SINGLE_PROJECT_REQUEST,
	GET_SINGLE_PROJECT_SUCCESS,
	DELETE_PROJECT_REQUEST,
	DELETE_PROJECT_SUCCESS,
	DELETE_PROJECT_FAIL,
	DELETE_PROJECT_RESET,
	EDIT_PROJECT_REQUEST,
	EDIT_PROJECT_SUCCESS,
	EDIT_PROJECT_FAIL,
	EDIT_PROJECT_RESET,
} from '../types';

export const createProjectReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_PROJECT_REQUEST:
			return { loading: true };
		case CREATE_PROJECT_SUCCESS:
			return { loading: false, success: true, project: action.payload };
		case CREATE_PROJECT_FAIL:
			return { loading: false, error: action.payload };
		case CREATE_PROJECT_RESET:
			return {};
		default:
			return state;
	}
};

export const getProjectsReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_PROJECTS_REQUEST:
			return { loading: true };
		case GET_PROJECTS_SUCCESS:
			return { loading: false, projects: action.payload };
		case GET_PROJECTS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export const fetchSingleProjectReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_SINGLE_PROJECT_REQUEST:
			return { loading: true };
		case GET_SINGLE_PROJECT_SUCCESS:
			return { loading: false, project: action.payload };
		default:
			return state;
	}
};

export const deleteProjectReducer = (state = { success: false }, action) => {
	switch (action.type) {
		case DELETE_PROJECT_REQUEST:
			return { loading: true };
		case DELETE_PROJECT_SUCCESS:
			return { loading: false, success: true };
		case DELETE_PROJECT_FAIL:
			return { loading: false, error: action.payload };
		case DELETE_PROJECT_RESET:
			return { loading: false, success: false };
		default:
			return state;
	}
};

export const editProjectReducer = (state = { success: false }, action) => {
	switch (action.type) {
		case EDIT_PROJECT_REQUEST:
			return { loading: true };
		case EDIT_PROJECT_SUCCESS:
			return { loading: false, success: true };
		case EDIT_PROJECT_FAIL:
			return { loading: false, error: action.payload };
		case EDIT_PROJECT_RESET:
			return { loading: false, success: false };
		default:
			return state;
	}
};
