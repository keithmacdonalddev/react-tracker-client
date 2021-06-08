/** @format */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
	sendFriendRequestReducer,
	cancelFriendRequestReducer,
	pendingFriendRequestReducer,
} from 'store/reducers/friendReducers';
import {
	editTicketReducer,
	deleteTicketReducer,
	singleTicketIdReducer,
	createTicketReducer,
	getTicketsReducer,
	getTicketsByOwnerIdReducer,
	getTicketReducer,
	ticketCommentReducer,
	buildFormReducer,
	currentPageReducer,
	formDataReducer,
	selectedProjectReducer,
} from './reducers/ticketReducer';
import {
	modalStatusReducer,
	navigationShowComponentReducer,
	sidebarStatusReducer,
	setEditingStatusReducer,
	showWidgetItemReducer,
	createAlertReducer,
	profileNavKeyReducer,
	usersNavActiveReducer,
} from './reducers/navigationReducers';
import { sendLogReducer, getLogsReducer } from './reducers/logReducers';
import { deBuggerReducer } from './reducers/debugReducers';
import {
	fetchSingleProjectReducer,
	createProjectReducer,
	getProjectsReducer,
	deleteProjectReducer,
	editProjectReducer,
} from './reducers/projectReducers';
import {
	userListReducer,
	userLoginReducer,
	userRegisterReducer,
	userDetailsReducer,
	userUpdateProfileReducer,
	featuredUserReducer,
	userIsLoggedInReducer,
} from './reducers/userReducers';
import { getPresignedURLReducer, sendImageToS3Reducer } from './reducers/uploadReducers';

const reducer = combineReducers({
	logs: getLogsReducer,
	modalStatus: modalStatusReducer,
	logFeed: sendLogReducer,
	projectEdit: editProjectReducer,
	projectDelete: deleteProjectReducer,
	project: createProjectReducer,
	projects: getProjectsReducer,
	singleProject: fetchSingleProjectReducer,
	status: sidebarStatusReducer,
	isEditing: setEditingStatusReducer,
	widgetView: showWidgetItemReducer,
	createAlert: createAlertReducer,
	component: navigationShowComponentReducer,
	profileKey: profileNavKeyReducer,
	id: singleTicketIdReducer,
	ticketCommentCreate: ticketCommentReducer,
	ticketDeleted: deleteTicketReducer,
	ticketCreate: createTicketReducer,
	tickets: getTicketsReducer,
	myTickets: getTicketsByOwnerIdReducer,
	editedTicket: editTicketReducer,
	singleTicket: getTicketReducer,
	buildForm: buildFormReducer,
	formData: formDataReducer,
	currentPage: currentPageReducer,
	selectedProject: selectedProjectReducer,
	userLogin: userLoginReducer,
	users: userListReducer,
	featuredUser: featuredUserReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdateProfile: userUpdateProfileReducer,
	usersNavState: usersNavActiveReducer,
	loggedIn: userIsLoggedInReducer,
	uploadURL: getPresignedURLReducer,
	sendImageToS3: sendImageToS3Reducer,
	debugging: deBuggerReducer,
	friendRequest: sendFriendRequestReducer,
	cancelRequest: cancelFriendRequestReducer,
	pendingRequest: pendingFriendRequestReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
	userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
