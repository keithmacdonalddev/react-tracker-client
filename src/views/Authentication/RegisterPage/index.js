import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import Loader from 'components/Loader';
import Message from '../../../components/Message';
import { register } from 'store/actions/userActions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

import style from './registerPage.module.css';
import Input from 'components/Input';

const RegisterPage = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [message, setMessage] = useState('');

	const history = useHistory();
	const dispatch = useDispatch();

	const userRegister = useSelector((state) => state.userRegister);
	const { loading, error, userInfo } = userRegister;

	useEffect(() => {
		if (userInfo) {
			history.push('/dashboard');
		}
	}, [history, userInfo]);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			setMessage('Passwords do not match');
		} else {
			dispatch(register(firstName, lastName, username, email, password));
		}
	};

	return (
		<div className={style.register_page_container}>
			<Link to='/'>
				<FontAwesomeIcon icon={faChevronCircleLeft} className={style.icon} />
			</Link>

			{message && <Message variant='danger'>{message}</Message>}
			{error && <Message variant='danger'>{error}</Message>}
			{loading && <Loader />}

			<div className={style.formContainer}>
				<form onSubmit={handleSubmit}>
					<div className={style.formHeader}>
						<h2 className={style.h2}>Sign Up</h2>
					</div>

					<div className={style.inputGroup}>
						<Input
							withLabel={true}
							label='First Name'
							type='text'
							value={firstName}
							placeholder='Enter First Name'
							onChangeFunction={setFirstName}
							required={true}
						/>

						<Input
							withLabel={true}
							label='Last Name'
							type='text'
							value={lastName}
							placeholder='Enter last name'
							onChangeFunction={setLastName}
							required={true}
						/>
						<Input
							withLabel={true}
							label='Username'
							type='text'
							value={username}
							placeholder='Choose a username'
							onChangeFunction={setUsername}
							required={true}
						/>
						<Input
							withLabel={true}
							label='Email'
							type='email'
							value={email}
							placeholder='Enter email'
							onChangeFunction={setEmail}
							required={true}
						/>
						<Input
							withLabel={true}
							label='Password'
							type='password'
							value={password}
							placeholder='Enter Password'
							onChangeFunction={setPassword}
							required={true}
						/>
						<Input
							withLabel={true}
							label='Confirm Password'
							type='password'
							value={confirmPassword}
							placeholder='Confirm Password'
							onChangeFunction={setConfirmPassword}
							required={true}
						/>
					</div>

					<div className={style.formFooter}>
						<button type='submit' className={style.inputSubmit}>
							Register
						</button>

						<Link to='/login'>
							Already registered? <span className={style.footerSpan}>Login</span>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterPage;
