import React from 'react';

import style from './SingleProject.module.css';

const SingleProjectJSX = ({ project }) => {
	return (
		<div className={style.dataFieldContainer}>
			<div className={style.line_one}>
				<div className={style.input_container}>
					<label className={style.label}>Project Title</label>
					<div className={style.dataField}>{project.title}</div>
				</div>
				<div className={style.input_container}>
					<label className={style.label}>Status</label>
					<div className={style.dataField}>{project.status}</div>
				</div>
				<div className={style.input_container}>
					<label className={style.label}>Owner</label>
					<div className={style.dataField}>{project.owner}</div>
				</div>
				<div className={style.input_container}>
					<label className={style.label}>Project Id</label>
					<div className={style.dataField}>{project._id}</div>
				</div>
				<div className={style.input_container}>
					<label className={style.label}>Assigned Personnel</label>
					{project.assignee.map((person) => (
						<div className={style.dataField}>{person}</div>
					))}
				</div>
			</div>

			<div className={style.input_container}>
				<label className={style.label}>Description</label>
				<div className={style.dataField}>{project.description}</div>
			</div>
		</div>
	);
};

export default SingleProjectJSX;
