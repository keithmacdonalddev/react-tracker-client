import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from 'components/Input';
import { login } from '../../store/actions/userActions';
import classname from './loginform.module.css';

const Form = () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(login(email, password));
	};

	return (
		<form className={classname.formContainer} onSubmit={handleSubmit}>
			<Input
				required
				withLabel
				label='Email'
				type='email'
				value={email}
				className={classname.input}
				placeholder='Enter Email'
				onChangeFunction={setEmail}
			/>
			<Input
				required
				withLabel
				label='Password'
				type='password'
				value={password}
				className={classname.input}
				placeholder='Enter Password'
				onChangeFunction={setPassword}
			/>
			<button className={classname.inputSubmit} type='submit'>
				Sign In
			</button>
		</form>
	);
};

export default Form;
