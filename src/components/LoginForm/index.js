// node modules
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginFormTitle from './LoginFormTitle';
import Error from 'components/Error';

import RegisterButton from 'components/RegisterButton';

// CSS
import classname from './loginform.module.css';
import Form from './Form';

const LoginForm = () => {
	const history = useHistory();
	const { userInfo, loading, error } = useSelector((state) => state.userLogin);
	useEffect(() => userInfo && history.push('/dashboard'), [userInfo, history]);

	return (
		<div className={classname.loginFormContainer}>
			<LoginFormTitle />
			{error && <Error error={error} />}
			{loading && <h6>loading...</h6>}
			<Form />
			<RegisterButton withQuestion />
		</div>
	);
};

export default LoginForm;
