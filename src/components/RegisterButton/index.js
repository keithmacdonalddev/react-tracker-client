import React from 'react';
import { Link } from 'react-router-dom';

import classname from './registerButton.module.css';

const RegisterButton = ({ withQuestion }) => {
	const question = "Don't have an account?";

	return (
		<div className={classname.registerContainer}>
			{withQuestion && question}
			<Link to='/register'>
				<button className={classname.registerButton}>Create an Account</button>
			</Link>
		</div>
	);
};

export default RegisterButton;
