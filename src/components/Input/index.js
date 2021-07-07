import React from 'react';
import classname from './Input.module.css';

const Input = ({
	withLabel = false,
	label = '',
	type = '',
	value = '',
	placeholder = '',
	onChangeFunction = null,
	disabled = false,
	required = false,
}) => {
	return (
		<div className={classname.input_box}>
			{withLabel && (
				<span className={classname.input_span}>
					<label className={classname.input_label}>{label}</label>
				</span>
			)}
			<input
				type={type}
				value={value}
				className={classname.input}
				placeholder={placeholder}
				onChange={(e) => onChangeFunction(e.target.value)}
				disabled={disabled}
				required={required}
			/>
		</div>
	);
};

export default Input;
