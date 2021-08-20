import axios from 'axios';
import { GET_PROJECTS_SUCCESS, GET_PROJECTS_REQUEST, GET_PROJECTS_FAIL } from '../../types';

const apiUrl = 'https://react-tracker-server.herokuapp.com';
export const getProjects = ({ devServer } = false) => async (dispatch, getState) => {
	try {
		//  tell reducer of incoming get projects request
		dispatch({ type: GET_PROJECTS_REQUEST });

		// get logged in user information from local storage
		const {
			userLogin: { userInfo },
		} = getState();

		// headers
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${userInfo.token}`,
			},
		};

		// choose dev or prod server to handle request
		// returns array of projects created by the logged in user
		if (devServer) {
			// use dev server
			const { data } = await axios.get(`projects/${userInfo._id}`, config);
			dispatch({ type: GET_PROJECTS_SUCCESS, payload: data });
		} else {
			// use production server
			const { data } = await axios.get(`${apiUrl}/projects/${userInfo._id}`, config);
			dispatch({ type: GET_PROJECTS_SUCCESS, payload: data });
		}
	} catch (error) {
		dispatch({
			type: GET_PROJECTS_FAIL,
			payload: error.message && error.response.data.message ? error.response.data.message : error.message,
		});
	}
};
