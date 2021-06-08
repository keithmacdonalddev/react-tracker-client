import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'components/Card';
import classname from './projectsCard.module.css';

const ProjectsCard = () => {
	const { projects, loading, error } = useSelector((state) => state.projects);
	const { userInfo } = useSelector((state) => state.userLogin);

	let myProjects = [];

	if (projects) {
		projects.map((project) => {
			if (project.owner === userInfo._id) {
				myProjects.push(project);
			}
			return null;
		});
	}

	return (
		<Card title={'Projects'}>
			{loading ? (
				<div className={classname.loading}>Searhing for projects...</div>
			) : error ? (
				<div>
					Unable to find projects.
					<div>{error}</div>
				</div>
			) : myProjects ? (
				<div>{myProjects.length}</div>
			) : (
				<div>No data found</div>
			)}
		</Card>
	);
};

export default ProjectsCard;
