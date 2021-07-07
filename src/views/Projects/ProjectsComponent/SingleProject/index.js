// Packages
import React from 'react';
import { useSelector } from 'react-redux';

// Project Views
import SingleProjectJSX from './SingleProjectJSX';
// import EditProject from '../EditProject';
// import DeleteProject from '../DeleteProject';
import SingleProjectNavigation from './SingleProjectNavigation';

// Actions
// import { showComponent } from 'store/actions/navigationActions';
// import { addAssignee } from 'store/actions/projectActions';

// CSS
import classname from './SingleProject.module.css';
import SingleProjectAssignees from './SingleProjectAssignees';

const SingleProject = ({ project, loading }) => {
	if (loading) {
		return <h6>Loading...</h6>;
	}

	if (project) {
		return (
			<div className={classname.page_layout}>
				<SingleProjectNavigation />

				{/* show a component depending on the current value of the "view" local state */}
				<div className={classname.project_container}>
					{/* Manage project personnel */}
					<SingleProjectAssignees project={project} loading={loading} />
					<SingleProjectJSX />
				</div>
			</div>
		);
	}

	return <h6>No data available</h6>;
};

export default SingleProject;
