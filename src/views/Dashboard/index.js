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

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';

import Modal from 'components/Modal';
import ToggleButton from 'components/ToggleButton';
import Sidebar from 'components/Sidebar';
import AppBarTop from 'components/AppBarTop';
import MainView from './MainView';

import classname from './dashboard.module.css';

const Dashboard = () => {
	const styles = useSpring({
		from: { y: -100, opacity: 0 },
		to: { x: 0, y: 0, opacity: 1 },
		config: config.slow,
	});
	const sideBarAnimation = useSpring({
		from: { x: -400, opacity: 0, delay: 5000 },
		to: { x: 0, opacity: 1 },
	});

	const history = useHistory();

	const [toggleSidebar, setToggleSidebar] = useState(false);

	const { userInfo } = useSelector((state) => state.userLogin);

	const closeSidebarOnAction = () => {
		if (toggleSidebar) {
			setToggleSidebar(!toggleSidebar);
		}
	};
	useEffect(() => {
		if (!userInfo) {
			history.push('/login');
		}
	}, [userInfo, history]);

	return (
		<>
			<Modal />
			{userInfo ? (
				<div className={classname.app_container}>
					<>
						{/* -------------------- TOP NAV BAR -------------------- */}
						<animated.div style={styles} className={classname.appbartop_container}>
							<div className={classname.appbartop_container}>
								<AppBarTop />

								<div div onClick={() => setToggleSidebar(!toggleSidebar)} className={classname.togglebutton_wrapper}>
									<ToggleButton toggleSidebar={toggleSidebar} />
								</div>
							</div>
						</animated.div>

						{/* -------------------- Sidebar -------------------- */}
						<animated.div
							onClick={() => closeSidebarOnAction()}
							style={sideBarAnimation}
							className={toggleSidebar ? classname.sidebar_open : classname.sidebar_closed}>
							<Sidebar toggleSidebar={toggleSidebar} />
						</animated.div>
					</>
					{/* -------------------- MAIN CONTENT AREA -------------------- */}
					<div className={classname.main_wrapper}>
						<MainView />
					</div>
				</div>
			) : (
				<div className={classname.not_logged_in_container}>You must be logged in to view this page</div>
			)}
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
