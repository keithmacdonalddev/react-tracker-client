/**
 *  FILE CONTENTS
 *  1. @function createProject
 *  2. @function fetchSingleProject
 *  3. @function getProjects
 *  4. @function deleteProjectAction
 */

import axios from 'axios';
import {
	CREATE_PROJECT_FAIL,
	CREATE_PROJECT_REQUEST,
	CREATE_PROJECT_SUCCESS,
	GET_PROJECTS_SUCCESS,
	GET_PROJECTS_REQUEST,
	GET_PROJECTS_FAIL,
	GET_SINGLE_PROJECT_REQUEST,
	GET_SINGLE_PROJECT_SUCCESS,
	DELETE_PROJECT_FAIL,
	DELETE_PROJECT_REQUEST,
	DELETE_PROJECT_SUCCESS,
	EDIT_PROJECT_REQUEST,
	EDIT_PROJECT_SUCCESS,
	EDIT_PROJECT_FAIL,
} from '../types';

import { apiUrl } from './userActions';

export const createProject = (projectNumber, title, description, category, status, priority, userInfo) => async (
	dispatch,
) => {
	try {
		dispatch({ type: CREATE_PROJECT_REQUEST });

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		// const { data } = await axios.post(
		// 	`${apiUrl}/projects`,
		// 	{ projectNumber, title, description, category, status, priority, userInfo },
		// 	config,
		// );
		// console.log(data);

		const { data } = await axios.post(
			'projects',
			{ projectNumber, title, description, category, status, priority, userInfo },
			config,
		);

		await dispatch({
			type: CREATE_PROJECT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: CREATE_PROJECT_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
		console.log(error);
	}
};

export const fetchSingleProject = (projectId) => async (dispatch, getState) => {
	try {
		dispatch({ type: GET_SINGLE_PROJECT_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		// const { data } = await axios.get(`${apiUrl}/project/${projectId}`, config);
		const { data } = await axios.get(`/project/${projectId}`, config);

		dispatch({
			type: GET_SINGLE_PROJECT_SUCCESS,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getProjects = () => async (dispatch, getState) => {
	try {
		dispatch({ type: GET_PROJECTS_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.get(`projects/${userInfo._id}`, config);

		// const { data } = await axios.get(`${apiUrl}/projects/${userInfo._id}`, config);

		dispatch({
			type: GET_PROJECTS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_PROJECTS_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const deleteProject = (id) => async (dispatch, getState) => {
	try {
		dispatch({ type: DELETE_PROJECT_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		await axios.delete(`${apiUrl}/project/${id}`, config);

		dispatch({ type: DELETE_PROJECT_SUCCESS });
	} catch (error) {
		dispatch({
			type: DELETE_PROJECT_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const editProject = (title, description, status, id) => async (dispatch, getState) => {
	try {
		dispatch({ type: EDIT_PROJECT_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};
		console.log(id);

		await axios.put(`${apiUrl}/project/${id}`, { title, description, status, id }, config);

		dispatch({ type: EDIT_PROJECT_SUCCESS });
	} catch (error) {
		dispatch({
			type: EDIT_PROJECT_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};

export const addAssignee = (assigneeId, projectId) => async (dispatch, getState) => {
	try {
		dispatch({ type: EDIT_PROJECT_REQUEST });

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			headers: {
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		const { data } = await axios.put(`${apiUrl}/project/${projectId}`, { assigneeId }, config);
		// const { data } = await axios.put(`project/${projectId}`, { assigneeId }, config);
		console.log(`data: ${data}`);
		dispatch({ type: EDIT_PROJECT_SUCCESS });
	} catch (error) {
		dispatch({
			type: EDIT_PROJECT_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};
