import React from 'react';
import HomeButton from './HomeButton';
import LoginForm from 'components/LoginForm';

import classname from './LoginPage.module.css';

const LoginPage = () => {
	return (
		<div className={classname.loginPageContainer}>
			<HomeButton />
			<LoginForm />
		</div>
	);
};

export default LoginPage;
