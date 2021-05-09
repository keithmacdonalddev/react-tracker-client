import React from "react";
import { useSelector } from "react-redux";

import Users from "views/Users";
import MyProjectsPage from "views/Projects";
import Home from "views/Home/";
import SignOut from "views/Authentication/SignOut";
import ProfilePage from "views/Profile/ProfilePage";
import ActivityMonitor from "views/ActivityMonitor";
import MyTicketsPage from "views/Tickets/MyTicketsPage";
import CreateProjectPage from "views/Projects/CreateProjectPage";
import SingleTicket from "views/Tickets/MyTicketsPage/SingleTicket";
import CreateTicketPage from "views/Tickets/MyTicketsPage/CreateTicket";
import DeleteTicket from "views/Tickets/MyTicketsPage/DeleteTicket";

import SingleProject from "views/Projects/SingleProject";
import EditProject from "views/Projects/EditProject";
import EditTicket from "views/Tickets/MyTicketsPage/EditTicketPage";

const MainView = () => {
	const { component } = useSelector((state) => state.component);

	return (
		<>
			{component === "home" ? (
				<Home />
			) : component === "Users" ? (
				<Users />
			) : component === "My Profile" ? (
				<ProfilePage />
			) : component === "My Tickets" ? (
				<MyTicketsPage />
			) : component === "Create Ticket" ? (
				<CreateTicketPage />
			) : component === "createTicket" ? (
				<CreateTicketPage />
			) : component === "singleTicket" ? (
				<SingleTicket />
			) : component === "deleteTicket" ? (
				<DeleteTicket />
			) : component === "editTicket" ? (
				<EditTicket />
			) : component === "My Projects" ? (
				<MyProjectsPage />
			) : component === "project" ? (
				<SingleProject />
			) : component === "editProject" ? (
				<EditProject />
			) : component === "Create Project" ? (
				<CreateProjectPage />
			) : component === "Signout" ? (
				<SignOut />
			) : component === "Activity Monitor" ? (
				<ActivityMonitor />
			) : null}
		</>
	);
};

export default MainView;
