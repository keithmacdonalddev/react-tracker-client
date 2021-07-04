// Packages
import React from 'react';
import Dashboard from 'views/Dashboard';
// import MainView from 'views/Dashboard/MainView';

import PageOne from './PageOne';

const CreateTicketPage = ({ projectId }) => {
	return (
		<Dashboard>
			<PageOne projectId={projectId} />
		</Dashboard>
	);
};

export default CreateTicketPage;
