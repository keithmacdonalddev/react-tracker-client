// Modules
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { useSpring, animated, config } from 'react-spring';
// Components
import Modal from 'components/Modal';
import ToggleButton from 'components/ToggleButton';
import Sidebar from 'components/Sidebar';
import AppBarTop from 'components/AppBarTop';
import MainView from './MainView';
// CSS
import classname from './dashboard.module.css';

const Dashboard = ({ children }) => {
	const history = useHistory();

	// const styles = useSpring({
	// 	from: { y: -100, opacity: 0 },
	// 	to: { x: 0, y: 0, opacity: 1 },
	// 	config: config.slow,
	// });

	// const sideBarAnimation = useSpring({
	// 	from: { x: -400, opacity: 0, delay: 5000 },
	// 	to: { x: 0, opacity: 1 },
	// });

	const [preloader, setPreloader] = useState(true);
	const [preloadTimer, setPreloadTimer] = useState(3);
	const [toggleSidebar, setToggleSidebar] = useState(false);

	const { userInfo } = useSelector((state) => state.userLogin);

	const id = useRef(null);

	const clear = () => {
		window.clearInterval(id.current);
		setPreloader(false);
	};

	useEffect(() => {
		if (!userInfo) history.push('/login');
	}, [userInfo, history]);

	useEffect(() => {
		id.current = window.setInterval(() => {
			setPreloadTimer((preloadTimer) => preloadTimer - 1);
		}, 100);
	}, []);

	useEffect(() => {
		if (preloadTimer === 0) {
			clear();
		}
	}, [preloadTimer]);

	return (
		<>
			{preloader ? (
				<div className={classname.preloader_container}>
					{/* <div className={classname.preloader_text}></div> */}
					<div className={classname.preloader}>
						<div className={classname.preloader_visual_slider}></div>
					</div>
				</div>
			) : (
				<>
					<Modal />
					{userInfo ? (
						<div className={classname.app_container}>
							{/* -------------------- TOP NAV BAR -------------------- */}
							<motion.div className={classname.appbartop_container}>
								<div className={classname.appbartop_container}>
									<AppBarTop />

									<div onClick={() => setToggleSidebar(!toggleSidebar)} className={classname.togglebutton_wrapper}>
										<ToggleButton toggleSidebar={toggleSidebar} />
									</div>
								</div>
							</motion.div>

							{/* -------------------- Sidebar -------------------- */}
							<motion.div
								onClick={() => setToggleSidebar(false)}
								className={toggleSidebar ? classname.sidebar_open : classname.sidebar_closed}>
								<Sidebar toggleSidebar={toggleSidebar} />
							</motion.div>

							{/* -------------------- MAIN CONTENT AREA -------------------- */}
							<div className={classname.main_wrapper}>{children ? children : <MainView />}</div>
						</div>
					) : (
						<div className={classname.not_logged_in_container}>You must be logged in to view this page</div>
					)}
				</>
			)}
		</>
	);
};

export default Dashboard;
