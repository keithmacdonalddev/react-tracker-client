import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from 'views/Welcome';
import LoginPage from 'views/Authentication/LoginPage';
import RegisterPage from 'views/Authentication/RegisterPage';
import Dashboard from 'views/Dashboard';
import ProfilePage from 'views/Profile/ProfilePage';
import Tickets from 'views/Tickets';
import CreateTicketPage from 'views/Tickets/MyTicketsPage/CreateTicket';
import SingleTicketPage from 'views/Tickets/MyTicketsPage/SingleTicket';
import { Icon, faSun, faMoon } from 'components/Icon';

import classname from './app.module.css';

const App = () => {
	const [lightMode, setLightMode] = useState(false);
	return (
		<Router>
			<div className={lightMode ? classname.body_light : classname.body_dark}>
				{lightMode ? (
					<button onClick={() => setLightMode(false)} className={classname.dark_mode_button}>
						<Icon type={faMoon} style={{ color: 'var(--color-primary-800)' }} />
					</button>
				) : (
					<button onClick={() => setLightMode(true)} className={classname.light_mode_button}>
						<Icon type={faSun} style={{ color: '#f6e27a' }} />
					</button>
				)}

				<Switch>
					<Route path='/dashboard' component={Dashboard} />
					<Route path='/dashboard/tickets' component={Tickets} />
					<Route path='/create-ticket' component={CreateTicketPage} />
					<Route path='/dashboard/tickets/single-ticket' component={SingleTicketPage} />
					<Route path='/profile' component={ProfilePage} />
					<Route path='/register' component={RegisterPage} />
					<Route path='/login' component={LoginPage} />
					<Route path='/' component={HomePage} exact />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
