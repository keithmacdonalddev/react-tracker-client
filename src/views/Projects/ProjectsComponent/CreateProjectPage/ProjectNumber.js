import React from 'react';
import { useState } from 'react';
import classname from './create_project.module.css';

const ProjectNumber = ({ eventType, inputType }) => {
	const [isEditing, setIsEditing] = useState(false);

	// const { userInfo } = useSelector((state) => state.userLogin);

	const projectNumberSubitHandler = () => {
		console.log('projectNumberSubitHandler');
	};

	if (!isEditing) {
		return (
			<div className={classname.input_container} onClick={projectNumberClickHandler}>
				<div className={classname.label}>Project Number: </div>
				<div className={classname.dataField}>{projectNumber}</div>
			</div>
		);
	}

	if (isEditing) {
		return (
			<form onSubmit={projectNumberSubitHandler} onClick={() => setIsEditing(true)}>
				<div className={classname.input_container} onClick={projectNumberClickHandler}>
					<label className={classname.label}>Project Number: </label>
					<input
						className={classname.dataField}
						type='text'
						value={projectNumber}
						onChange={(event) => setProjectNumber(event.target.value)}
					/>
				</div>
			</form>
		);
	}
};

export default ProjectNumber;
