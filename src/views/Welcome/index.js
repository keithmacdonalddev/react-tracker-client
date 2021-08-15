import { Link } from 'react-router-dom';
import classname from './Welcome.module.css';

export default function HomePage() {
	return (
		<div className={classname.welcome_page_container}>
			<div className={classname.site_name}>React Tracker</div>
			<h4 className={classname.hero_text}>Portfolio tools designed for aspiring software engineers</h4>
			<Link to={'/login'}>
				<button className={classname.button}>Start for Free</button>
			</Link>
		</div>
	);
}
