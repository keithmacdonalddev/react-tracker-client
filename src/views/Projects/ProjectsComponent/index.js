import { Link } from 'react-router-dom';
import ProjectList from 'views/Projects/ProjectsComponent/ProjectsList';
import classname from './projects_component.module.css';

const ProjectsComponent = () => {
	return (
		<div className={classname.projects_page_container}>
			<div className={classname.header_container}>
				My Projects
				<Link to='/create-project' className={classname.create_project_button}>
					Create Project
				</Link>
			</div>
			<ProjectList />
		</div>
	);
};

export default ProjectsComponent;
