import React from 'react';
import classname from './SingleProject.module.css';

const SingleProjectJSX = ({ project }) => {
	console.log(project);
	return (
		<div className={classname.single_project_jsx_container}>
			<div className={classname.data_wrapper}>
				<h1 className={classname.project_title}>{project.title}</h1>
			</div>
			<div className={classname.data_wrapper}>
				<div className={classname.data_field_title}>Status</div>
				<div className={classname.dataField}>{project.status}</div>
			</div>
			<div className={classname.data_wrapper}>
				<div className={classname.data_field_title}>Owner</div>
				<div className={classname.dataField}>{project.owner}</div>
			</div>
			<div className={classname.data_wrapper}>
				<div className={classname.data_field_title}>Project Id</div>

				<div className={classname.dataField}>{project._id}</div>
			</div>
			{/*  */}
			<div className={classname.data_wrapper}>
				<div className={classname.data_field_title}>Description</div>
				<div className={classname.dataField}>{project.description}</div>
			</div>
		</div>
	);
};

export default SingleProjectJSX;
