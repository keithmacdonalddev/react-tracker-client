import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import network from 'img/network.png';

import style from './Welcome.module.css';
import { useSelector } from 'react-redux';

const HomePage = () => {
	const history = useHistory();
	const { userInfo } = useSelector((state) => state.userLogin);

	useEffect(() => {
		if (userInfo) {
			history.push('/login');
		}
	});

	return (
		<div className={style.welcomeContainer}>
			<div className={style.contentContainer}>
				<h1 className={style.title}>React Tracker</h1>

				<h4 className={style.subtitleContainer}>CAPTURE - PRIORITIZE - RESOLVE</h4>

				<p className={style.text}>Software to organize website feedback, resolve issues and manage your projects.</p>

				<Link to={'/login'}>
					<button className={style.heroButton}>Start for Free</button>
				</Link>
			</div>

			<div className={style.imageContainer}>
				<img className={style.image} src={network} alt='' />
			</div>
		</div>
	);
};

export default HomePage;
