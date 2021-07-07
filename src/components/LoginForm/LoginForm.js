// node modules
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getUserDetails, login } from '../../store/actions/userActions';
// Redux Store
import { showComponent } from 'store/actions/navigationActions';
// CSS
import classname from './loginform.module.css';
import Input from 'components/Input';

const LoginForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	// Controlled inputs
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// global state
	const { userInfo, loading, error } = useSelector((state) => state.userLogin);

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(login(email, password));
	};

	useEffect(() => {
		if (userInfo) {
			dispatch(getUserDetails(userInfo._id));
			dispatch(showComponent('home'));
			history.push('/dashboard');
		}
	}, [history, userInfo, dispatch]);

	return (
		<div className={classname.loginFormContainer}>
			<div className={classname.loginHeaderContainer}>
				<h1 className={classname.loginTitle}>Sign In</h1>
			</div>
			{error && (
				<div className={classname.error_text}>
					<h6>{error}</h6>
				</div>
			)}
			{loading && <h6>loading...</h6>}

			<form className={classname.formContainer} onSubmit={handleSubmit}>
				<Input
					withLabel={true}
					label='Email'
					type='email'
					value={email}
					className={classname.input}
					placeholder='Enter Email'
					onChangeFunction={setEmail}
					required={true}
				/>
				<Input
					withLabel={true}
					label='Password'
					type='password'
					value={password}
					className={classname.input}
					placeholder='Enter Password'
					onChangeFunction={setPassword}
					required={true}
				/>
				<button className={classname.inputSubmit} type='submit'>
					Sign In
				</button>
			</form>
			<div className={classname.registerContainer}>
				Don't have an account?
				<Link to='/register' className={classname.a}>
					<button className={classname.registerButton}>Create an Account</button>
				</Link>
			</div>
		</div>
	);
};

export default LoginForm;
