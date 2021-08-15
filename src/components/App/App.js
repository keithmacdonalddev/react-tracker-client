import Users from 'views/Users';
import Tickets from 'views/Tickets';
import HomePage from 'views/Welcome';
import Projects from 'views/Projects';
import DashBoardHome from 'views/Home';
import React, { useState } from 'react';
import classname from './app.module.css';
import SignOut from 'views/Authentication/SignOut';
import ProfilePage from 'views/Profile/ProfilePage';
import { Icon, faSun, faMoon } from 'components/Icon';
import LoginPage from 'views/Authentication/LoginPage';
import RegisterPage from 'views/Authentication/RegisterPage';
import EditProfile from 'views/Profile/ProfilePage/EditProfile';
import EditProject from 'views/Projects/ProjectsComponent/EditProject';
import CreateTicketPage from 'views/Tickets/MyTicketsPage/CreateTicket';
import SingleTicketPage from 'views/Tickets/MyTicketsPage/SingleTicket';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SingleProject from 'views/Projects/ProjectsComponent/SingleProject';
import CreateProjectPage from 'views/Projects/ProjectsComponent/CreateProjectPage';
import DeleteProject from 'views/Projects/ProjectsComponent/DeleteProject';

const App = () => {
	const [isLightMode, setIsLightMode] = useState(true);

	return (
		<Router>
			{/* apply light or dark styles as indicated in local state */}
			<div className={isLightMode ? classname.body_light : classname.body_dark}>
				{/* show dark mode button (moon) or light (sun) depending on current state */}
				{isLightMode ? (
					// moon icon, change to dark on click
					<button className={classname.dark_mode_button} onClick={() => setIsLightMode(false)}>
						<Icon type={faMoon} style={{ color: 'var(--color-primary-800)' }} />
					</button>
				) : (
					// sun icon, change to light mode on click
					<button className={classname.light_mode_button} onClick={() => setIsLightMode(true)}>
						<Icon type={faSun} style={{ color: '#f6e27a' }} />
					</button>
				)}

				{/* all client routes  */}
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/users' component={Users} />
					<Route exact path='/logout' component={SignOut} />
					<Route exact path='/login' component={LoginPage} />
					<Route exact path='/tickets' component={Tickets} />
					<Route exact path='/projects' component={Projects} />
					<Route exact path='/register' component={RegisterPage} />
					<Route exact path='/my-profile' component={ProfilePage} />
					<Route exact path='/dashboard' component={DashBoardHome} />
					<Route exact path='/edit-profile' component={EditProfile} />
					<Route exact path='/project/:id' component={SingleProject} />
					<Route exact path='/project/:id/edit' component={EditProject} />
					<Route exact path='/create-ticket' component={CreateTicketPage} />
					<Route exact path='/project/:id/delete' component={DeleteProject} />
					<Route exact path='/create-project' component={CreateProjectPage} />
					<Route exact path='/single-ticket/:id' component={SingleTicketPage} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
