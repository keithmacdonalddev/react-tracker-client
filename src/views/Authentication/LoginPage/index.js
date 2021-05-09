// Packages
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { Icon, faChevronCircleLeft } from 'components/Icon';
import LoginForm from 'components/LoginForm/LoginForm';

// CSS
import style from './LoginPage.module.css';

const LoginPage = () => {
	return (
		<div className={style.loginPageContainer}>
			<Link className={style.link} to='/'>
				<div className={style.backButton}>
					<Icon
						type={faChevronCircleLeft}
						style={{ color: 'white', fontSize: '20px' }}
					/>
					<span className={style.homeLinkText}>BACK</span>
				</div>
			</Link>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
