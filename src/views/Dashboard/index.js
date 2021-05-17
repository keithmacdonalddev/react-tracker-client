/** ---------------------------------------------------------------------------
 * 	Dashboard 
		- home for all logged in views

		* 	Components
		Modal 		 - default location for closed modal
		ToggleButton - ui and logic for handling sidebar views 
		Sidebar 	 - ui and logic with routing for all dashboard views
		AppBarTop 	 - convenience links for some features 
		MainView  	 - main content displayed to the use based on user selection
-------------------------------------------------------------------------------- */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Modal from 'components/Modal';
import ToggleButton from 'components/ToggleButton';
import Sidebar from 'components/Sidebar';
import AppBarTop from 'components/AppBarTop';
import MainView from './MainView';

import classname from './dashboard.module.css';

const Dashboard = () => {
	const history = useHistory();
	const [toggleSidebar, setToggleSidebar] = useState(false);

	const { userInfo } = useSelector((state) => state.userLogin);
	const loggedIn = useSelector((state) => state.loggedIn);

	const closeSidebarOnAction = () => {
		if (toggleSidebar) {
			setToggleSidebar(!toggleSidebar);
		}
	};

	if (!userInfo || !loggedIn) {
		history.push('/login');
	}

	return (
		<>
			{userInfo ? (
				<div className={classname.grid}>
					{/* -------------------- Modal -------------------- */}
					<Modal />
					{/* -------------------- ToggleButton -------------------- */}
					<div div onClick={() => setToggleSidebar(!toggleSidebar)} className={classname.togglebutton_wrapper}>
						<ToggleButton toggleSidebar={toggleSidebar} />
					</div>
					{/* -------------------- AppBarTop -------------------- */}
					<div className={classname.appbartop_wrapper}>
						<AppBarTop />
					</div>
					{/* -------------------- Sidebar -------------------- */}
					<div
						onClick={() => closeSidebarOnAction()}
						className={toggleSidebar ? classname.sidebar_open : classname.sidebar_closed}>
						<Sidebar toggleSidebar={toggleSidebar} />
					</div>
					{/* -------------------- MAIN CONTENT AREA -------------------- */}
					<div className={classname.main_wrapper}>
						<MainView />
					</div>
				</div>
			) : null}
		</>
	);
};

export default Dashboard;

// const dynamicSidebar = dynamicClasses(classes, toggleSidebar);

// dispatch(
// 	newLog(
// 		`clickHandler() function called and is updating local state - toggleSidebar: ${!toggleSidebar}`,
// 	),
// );

// // Debugger
// dispatch(
// 	newLog(
// 		`checking local state value "	const [toggleSidebar --> ${toggleSidebar} <---, setToggleSidebar] = useState(false);"`,
// 	),
// );

// // Debugger
// dispatch(newLog('views/Dashboard starting...'));
