// Packages
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getUserDetails, login } from '../../store/actions/userActions';

// Actions
import { showComponent } from 'store/actions/navigationActions';

// 	Styles
import classname from './loginform.module.css';

const LoginForm = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	// Controlling user inputs via local state variables
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	//
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(login(email, password));
	};

	// const handleReLogin = (event) => {
	// 	event.preventDefault();
	// 	dispatch(login(userInfo.email, password));
	// };

	// const handleLogout = () => {
	// 	dispatch(logout());
	// };

	const { userInfo, loading, error } = useSelector((state) => state.userLogin);
	const loggedIn = useSelector((state) => state.loggedIn);

	useEffect(() => {
		if (userInfo && loggedIn) {
			dispatch(getUserDetails(userInfo._id));
			dispatch(showComponent('home'));
			history.push('/dashboard');
		}
	}, [history, userInfo, loggedIn, dispatch]);

	return (
		<div className={classname.loginFormContainer}>
			<div className={classname.loginHeaderContainer}>
				<h1 className={classname.loginTitle}>Sign In</h1>
			</div>
			{error && (
				<div
					style={{
						display: 'flex',
						margin: 'auto',
						position: 'relative',
						background: '#ff9595d2',
						width: 'auto',
						padding: '5px',
						marginTop: '20px',
						fontSize: '12px',
						marginBottom: '-60px',
						borderRadius: '10px',
					}}>
					<h6>{error}</h6>
				</div>
			)}
			{loading && <h6>loading...</h6>}

			{userInfo ? (
				<>
					<form className={classname.formContainer} onSubmit={handleSubmit}>
						<div className={classname.inputBox}>
							<span className={classname.inputSpan}>
								<label>Email</label>
							</span>

							<input
								type='email'
								value={email}
								className={classname.input}
								placeholder='Enter Email'
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
						<div className={classname.inputBox}>
							<span className={classname.inputSpan}>
								<label>Password</label>
							</span>
							<input
								type='password'
								value={password}
								className={classname.input}
								placeholder='Enter Password'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

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
				</>
			) : null}
		</div>
	);
};

export default LoginForm;
