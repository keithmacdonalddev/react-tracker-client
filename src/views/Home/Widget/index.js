// Packages
import React from "react";
import { useSelector } from "react-redux";

import MyTicketsPage from "views/Tickets/MyTicketsPage";
import MyProjectsPage from "views/Projects";

const Widget = () => {
	const { component } = useSelector((state) => state.widgetView);

	if (component === "tickets") {
		return <MyTicketsPage />;
	}
	if (component === "projects") {
		return <MyProjectsPage />;
	}
};

export default Widget;
