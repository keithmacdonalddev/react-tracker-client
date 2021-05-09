import React from 'react';
import classes from './classes_logo.module.css';

const Logo = () => {
	return (
		<>
			<div className={classes.logoIconContainer}>
				<span className={classes.logoIcon}>RT</span>
			</div>
			<span className={classes.logoText}>React Tracker</span>{' '}
		</>
	);
};

export default Logo;
