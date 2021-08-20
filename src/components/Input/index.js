import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { verifyExisitingEmail } from 'store/actions/userActions';
import classname from './Input.module.css';

const Input = ({ styles = {}, type = '', placeholder = '' }) => {
	const dispatch = useDispatch();

	const [spinner, setSpinner] = useState(false);

	console.log(`spinner: ${spinner}`);

	const [inputValue, setInputValue] = useState('');

	if (inputValue.length > 5) {
		setSpinner(true);
		setTimeout(() => {
			dispatch(verifyExisitingEmail(inputValue));
			setSpinner(false);
		}, 2000);
	}

	return (
		<input
			style={styles}
			className={classname.email_input}
			type={type}
			value={inputValue}
			placeholder={placeholder}
			onChange={(e) => setInputValue(e.target.value)}
		/>
	);
};

export default Input;

// import React from 'react';
// import classname from './Input.module.css';

// const Input = ({
// 	withLabel = false,
// 	label = '',
// 	type = '',
// 	value = '',
// 	placeholder = '',
// 	onChangeFunction = null,
// 	disabled = false,
// 	required = false,
// }) => {
// 	return (
// 		<div className={classname.input_box}>
// 			{withLabel && (
// 				<span className={classname.input_span}>
// 					<label className={classname.input_label}>{label}</label>
// 				</span>
// 			)}
// 			<input
// 				type={type}
// 				value={value}
// 				className={classname.input}
// 				placeholder={placeholder}
// 				onChange={(e) => onChangeFunction(e.target.value)}
// 				disabled={disabled}
// 				required={required}
// 			/>
// 		</div>
// 	);
// };

// export default Input;
