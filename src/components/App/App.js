import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from 'views/Welcome';
import LoginPage from 'views/Authentication/LoginPage';
import RegisterPage from 'views/Authentication/RegisterPage';
import Dashboard from 'views/Dashboard';
import ProfilePage from 'views/Profile/ProfilePage';
import Tickets from 'views/Tickets';
import Projects from 'views/Projects';
import CreateTicketPage from 'views/Tickets/MyTicketsPage/CreateTicket';
import SingleTicketPage from 'views/Tickets/MyTicketsPage/SingleTicket';
import Users from 'views/Users';
import { Icon, faSun, faMoon } from 'components/Icon';

import classname from './app.module.css';
import CreateProjectPage from 'views/Projects/ProjectsComponent/CreateProjectPage';
import SignOut from 'views/Authentication/SignOut';
import EditProject from 'views/Projects/ProjectsComponent/EditProject';
import EditProfile from 'views/Profile/ProfilePage/EditProfile';

const App = () => {
	const [lightMode, setLightMode] = useState(true);
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
					<Route path='/tickets' component={Tickets} />
					<Route path='/projects' component={Projects} />
					<Route path='/create-ticket' component={CreateTicketPage} />
					<Route path='/create-project' component={CreateProjectPage} />
					<Route path='/edit-project/:id' component={EditProject} />
					<Route path='/dashboard/tickets/single-ticket' component={SingleTicketPage} />
					<Route path='/my-profile' component={ProfilePage} />
					<Route path='/edit-profile' component={EditProfile} />
					<Route path='/users' component={Users} />
					<Route path='/register' component={RegisterPage} />
					<Route path='/login' component={LoginPage} />
					<Route path='/logout' component={SignOut} />
					<Route path='/' component={HomePage} exact />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
