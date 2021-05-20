import React from 'react';
import { Link } from 'react-router-dom';
import network from 'img/network.png';

import classname from './Welcome.module.css';

const HomePage = () => {
	return (
		<div className={classname.welcomeContainer}>
			<div className={classname.contentContainer}>
				<h1 className={classname.title}>React Tracker</h1>

				<h4 className={classname.subtitleContainer}>CAPTURE - PRIORITIZE - RESOLVE</h4>

				<p className={classname.text}>
					Software to organize website feedback, resolve issues and manage your projects.
				</p>

				<Link to={'/login'}>
					<button className={classname.heroButton}>Start for Free</button>
				</Link>
			</div>

			<div className={classname.imageContainer}>
				<img className={classname.image} src={network} alt='' />
			</div>
		</div>
	);
};

export default HomePage;
