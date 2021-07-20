import React from 'react';

import SingleProjectJSX from './SingleProjectJSX';
import SingleProjectNavigation from './SingleProjectNavigation';
// import SingleProjectAssignees from './SingleProjectAssignees';

// CSS
import classname from './SingleProject.module.css';

const SingleProject = ({ project, loading }) => {
	if (loading) {
		return <h6>Loading...</h6>;
	}

	return (
		<div className={classname.page_layout}>
			<SingleProjectNavigation />

			<div className={classname.project_container}>
				{/* <SingleProjectAssignees project={project} loading={loading} /> */}
				<SingleProjectJSX />
			</div>
		</div>
	);
};

export default SingleProject;
