import React from 'react';

const style = {
	errorTextContainer: {
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
	},
};

const Error = ({ error }) => {
	return (
		<div style={style.errorTextContainer}>
			<h6>{error}</h6>
		</div>
	);
};

export default Error;
