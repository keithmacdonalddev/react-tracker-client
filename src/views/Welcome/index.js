import Input from 'components/Input';
import { Link } from 'react-router-dom';
import classname from './Welcome.module.css';

const HomePage = () => {
	return (
		<div className={classname.welcome_page_container}>
			<header className={classname.header_container}>
				<h1 className={classname.title_text}>React Tracker</h1>
				<h3 className={classname.subtitle_text}>
					Portfolio tools for software engineers
				</h3>
			</header>
			<div className={classname.email_input_container}>
				<Input type={'email'} placeholder={'Enter Email Address'} />
			</div>
			<div className={classname.button_container}>
				<Link to={'/login'}>
					<button className={`${classname.button} ${classname.login}`}>
						Login
					</button>
				</Link>
				<Link to={'/register'}>
					<button className={`${classname.button} ${classname.register}`}>
						Register
					</button>
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
