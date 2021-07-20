import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, faChevronCircleLeft } from 'components/Icon';
import classname from './LoginPage.module.css';

const HomeButton = () => {
	return (
		<Link className={classname.link} to='/'>
			<div className={classname.buttonContainer}>
				<Icon type={faChevronCircleLeft} style={{ color: 'white', fontSize: '20px' }} />
				<span className={classname.buttonText}>BACK</span>
			</div>
		</Link>
	);
};

export default HomeButton;
