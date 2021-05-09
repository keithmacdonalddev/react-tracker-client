import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from 'views/Welcome';
import LoginPage from 'views/Authentication/LoginPage';
import RegisterPage from 'views/Authentication/RegisterPage';
import Dashboard from 'views/Dashboard';
import ProfilePage from 'views/Profile/ProfilePage';
import CreateTicketPage from 'views/Tickets/MyTicketsPage/CreateTicket';
import SingleTicketPage from 'views/Tickets/MyTicketsPage/SingleTicket';

const App = () => {
	return (
		<Router>
			<Route path='/dashboard' component={Dashboard} />
			<Route path='/create-ticket' component={CreateTicketPage} />
			<Route path='/single-ticket' component={SingleTicketPage} />
			<Route path='/profile' component={ProfilePage} />
			<Route path='/register' component={RegisterPage} />
			<Route path='/login' component={LoginPage} />
			<Route path='/' component={HomePage} exact />
		</Router>
	);
};

export default App;
