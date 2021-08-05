// Modules
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Components

import Sidebar from 'components/Sidebar';
import AppBarTop from 'components/AppBarTop';

// CSS
import classname from './dashboard.module.css';

const Dashboard = ({ children }) => {
	const history = useHistory();

	const { userInfo } = useSelector((state) => state.userLogin);

	useEffect(() => {
		if (!userInfo) history.push('/login');
	}, [userInfo, history]);

	return (
		<>
			{userInfo ? (
				<div className={classname.app_container}>
					<div className={classname.appbartop_container}>
						<AppBarTop />
					</div>
					<div className={classname.sidebar_wrapper_closed}>
						<Sidebar />
					</div>

					{/* -------------------- MAIN CONTENT AREA -------------------- */}
					<div className={classname.main_wrapper}>{children}</div>
				</div>
			) : (
				''
			)}
		</>
	);
};

export default Dashboard;

// import { useSpring, animated, config } from 'react-spring';

// const styles = useSpring({
// 	from: { y: -100, opacity: 0 },
// 	to: { x: 0, y: 0, opacity: 1 },
// 	config: config.slow,
// });

// const sideBarAnimation = useSpring({
// 	from: { x: -400, opacity: 0, delay: 5000 },
// 	to: { x: 0, opacity: 1 },
// });

// useEffect(() => {
// 	id.current = window.setInterval(() => {
// 		setPreloadTimer((preloadTimer) => preloadTimer - 1);
// 	}, 100);
// }, []);

// useEffect(() => {
// 	if (preloadTimer === 0) {
// 		clear();
// 	}
// }, [preloadTimer]);

// const [preloader, setPreloader] = useState(true);
// const [preloadTimer, setPreloadTimer] = useState(3);

// const clear = () => {
// 	window.clearInterval(id.current);
// 	setPreloader(false);
// };

// const id = useRef(null);
// {preloader ? (
// 			<div className={classname.preloader_container}>
// 				{/* <div className={classname.preloader_text}></div> */}
// 				<div className={classname.preloader}>
// 					<div className={classname.preloader_visual_slider}></div>
// 				</div>
// 			</div>
// 		) : (
