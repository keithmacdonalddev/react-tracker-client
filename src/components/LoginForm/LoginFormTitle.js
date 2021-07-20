import React from 'react';

const style = {
	loginTitle: {
		color: 'var(--color-primary-100)',
		width: 'fit-content',
		letterSpacing: '2px',
		paddingBottom: '3px',
		marginBlockEnd: 'auto',
		borderBottom: '5px solid var(--color-accent)',
	},
};

const LoginFormTitle = () => {
	return (
		<div style={{ padding: '2px' }}>
			<h1 style={style.loginTitle}>Sign In</h1>
		</div>
	);
};

export default LoginFormTitle;
