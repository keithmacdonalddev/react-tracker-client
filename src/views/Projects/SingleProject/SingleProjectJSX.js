import React from "react";

import style from "./SingleProject.module.css";

const SingleProjectJSX = ({ project }) => {
	return (
		<div className={style.dataFieldContainer}>
			<div className={style.input_container}>
				<label className={style.label}>Project Title</label>
				<div className={style.dataField}>{project.title}</div>
			</div>
			<div className={style.input_container}>
				<label className={style.label}>Description</label>
				<div className={style.dataField}>{project.description}</div>
			</div>
			<div className={style.input_container}>
				<label className={style.label}>Status</label>
				<div className={style.dataField}>{project.status}</div>
			</div>{" "}
			<div className={style.input_container}>
				<label className={style.label}>Assignees</label>
				<div className={style.dataField}>{project.assignees}</div>
			</div>{" "}
			<div className={style.input_container}>
				<label className={style.label}>Administrator</label>
				<div className={style.dataField}>{project.administrator}</div>
			</div>
			<div className={style.input_container}>
				<label className={style.label}>Project Id</label>
				<div className={style.dataField}>{project._id}</div>
			</div>
		</div>
	);
};

export default SingleProjectJSX;
