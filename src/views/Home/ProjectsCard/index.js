import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Icon, faPlus } from 'components/Icon';

import Card from 'components/Card';
import CardHeader from 'components/Card/CardHeader';
import CardBody from 'components/Card/CardBody';
import CardFooter from 'components/Card/CardFooter';
import { getProjects } from 'store/actions/projectActions';

import {
	// createAlert,
	modalStatusAction,
	// showComponent,
	showWidgetItem,
} from 'store/actions/navigationActions';

import style from './projectsCard.module.css';

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
		return (
			<div onClick={() => dispatch(showWidgetItem('projects'))} className=''>
				<Card>
					<CardFooter>
						<div
							className={style.footerButton}
							onClick={() =>
								dispatch(modalStatusAction(true, 'createProject'))
							}>
							<Icon type={faPlus} />
						</div>
					</CardFooter>
					<CardHeader>Projects</CardHeader>
					<CardBody>{projects && <div>{projects.length}</div>}</CardBody>
				</Card>
			</div>
		);
	}

	return <h6>Data not found</h6>;
};

export default ProjectsCard;
