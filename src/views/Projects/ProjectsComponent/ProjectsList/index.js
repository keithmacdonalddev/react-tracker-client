import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Moment from 'react-moment';

import { getProjects } from 'store/actions/projectActions/getProjects';
import { singleProjectDetails } from 'store/actions/projectActions/singleProjectDetails';
import { Icon, faChevronRight, faTrash } from 'components/Icon';

import classname from './project_list.module.css';

const ProjectList = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const { projects, loading, error } = useSelector((state) => state.projects);

	const handleClick = (project) => {
		dispatch(singleProjectDetails(project));
		history.push(`/project/${project._id}`);
	};

	const handleDelete = (project) => {
		history.push(`/project/${project._id}/delete`);
	};

	useEffect(() => {
		dispatch(getProjects());
	}, [dispatch]);

	return (
		<div className={classname.projects_container}>
			{loading ? (
				<div>loading...</div>
			) : error ? (
				<div>{error}</div>
			) : projects ? (
				<>
					{projects.map((project) => {
						return (
							<div key={project._id} className={classname.card}>
								<div className={classname.project_title}>
									<div className={classname.data_item_label}>Title</div>
									<div className={classname.data_item}>{project.title}</div>
								</div>
								<div className={classname.project_description}>
									<div className={classname.data_item_label}>Description</div>
									<div className={classname.data_item}>{project.description}</div>
								</div>
								<div className={classname.project_status}>
									<div className={classname.data_item_label}>Status</div>
									<div className={classname.data_item}>{project.status}</div>
								</div>
								<div className={classname.date}>
									<div className={classname.data_item_label}>Date</div>
									<Moment className={classname.data_item} style={{ display: 'block' }} format='MMM-DD'>
										{project.date}
									</Moment>
								</div>
								<div className={classname.icon} style={{ background: '#f85656' }} onClick={() => handleDelete(project)}>
									<Icon type={faTrash} />
								</div>
								<div className={classname.icon} onClick={() => handleClick(project)}>
									<Icon type={faChevronRight} />
								</div>
							</div>
						);
					})}
				</>
			) : (
				<h6>Loading...</h6>
			)}
		</div>
	);
};

export default ProjectList;
