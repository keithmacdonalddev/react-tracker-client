import React from 'react';
import { useDispatch } from 'react-redux';

// Components
import { showComponent } from 'store/actions/navigationActions';
import ProjectsList from 'views/Projects/ProjectsList';

// CSS ~ styles
import classname from './projects_component.module.css';

// Default export
const MyProjectsPage = () => {
	// initialize dispatch
	const dispatch = useDispatch();

	// event handlers
	const clickHandler = () => {
		dispatch(showComponent('Create Project'));
	};

	return (
		<div className={classname.projects_page_container}>
			{/* *************** HEADER *************** */}
			<div className={classname.header_container}>
				<div className={classname.header_title}>My Projects</div>
				<div className={classname.button_background}>
					<div className={classname.create_project_button} onClick={() => clickHandler()}>
						+
					</div>
				</div>
			</div>

			{/* *************** LIST OF USERS PROJECTS *************** */}
			<ProjectsList />
		</div>
	);
};

export default MyProjectsPage;
