import HomeButton from './HomeButton';
import LoginForm from 'components/LoginForm';
import classname from './LoginPage.module.css';

const LoginPage = () => {
	return (
		<div className={classname.login_page_container}>
			<HomeButton />
			<LoginForm />
		</div>
	);
};

export default LoginPage;
