import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/Card';

import { getProjects } from 'store/actions/projectActions';

const ProjectsCard = () => {
	const dispatch = useDispatch();

	const { projects, loading, error } = useSelector((state) => state.projects);

	useEffect(() => {
		dispatch(getProjects());
	}, [dispatch]);

	if (loading) {
		return <h6>loading...</h6>;
	}

	if (error) {
		return <h6>{error}</h6>;
	}

	if (projects) {
		return <Card title={'Projects'} quantity={projects.length} />;
	}

	return <h6>Data not found</h6>;
};

export default ProjectsCard;
