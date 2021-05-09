import {
	NAVIGATION_SHOW_COMPONENT_REQUEST,
	NAVIGATION_SHOW_COMPONENT_SUCCESS,
	NAVIGATION_SHOW_COMPONENT_FAIL,
	NAVIGATION_SIDEBAR_STATUS,
	SET_MODAL_STATUS,
	SHOW_WIDGET_VIEW,
	CREATE_ALERT,
	USERS_NAV_ACTIVE,
	// DELETE_ALERT,
} from '../types';

export const showComponent = (component) => async (dispatch) => {
	try {
		dispatch({
			type: NAVIGATION_SHOW_COMPONENT_REQUEST,
		});

		if (component === 'Signout') {
			localStorage.removeItem('userInfo');
		}

		dispatch({
			type: NAVIGATION_SHOW_COMPONENT_SUCCESS,
			payload: component,
		});
	} catch (error) {
		dispatch({
			type: NAVIGATION_SHOW_COMPONENT_FAIL,
			payload: error,
		});
	}
};

export const sidebarStatus = (navigation) => async (dispatch) => {
	try {
		const status = await navigation;

		dispatch({
			type: NAVIGATION_SIDEBAR_STATUS,
			payload: status,
		});
	} catch (error) {
		console.log(error);
	}
};

export const modalStatusAction = (bool, component) => (dispatch) => {
	try {
		const status = { isModalOpen: bool, showThisComponentInModal: component };

		dispatch({
			type: SET_MODAL_STATUS,
			payload: status,
		});
	} catch (error) {
		console.log(error);
	}
};

export const showWidgetItem = (component) => (dispatch) => {
	try {
		dispatch({
			type: SHOW_WIDGET_VIEW,
			payload: component,
		});
	} catch (error) {
		console.log(error);
	}
};

export const createAlert = (message, type) => (dispatch) => {
	const newAlert = { message, type };
	try {
		dispatch({ type: CREATE_ALERT, payload: newAlert });
	} catch (error) {
		console.log(error);
	}
};

export const usersNavActiveAction = (navItem) => (dispatch) => {
	try {
		dispatch({
			type: USERS_NAV_ACTIVE,
			payload: navItem,
		});
	} catch (error) {
		console.log(error);
	}
};
