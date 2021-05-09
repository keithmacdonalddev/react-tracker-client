import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showComponent } from "store/actions/navigationActions";
import { deleteProjectAction } from "store/actions/projectActions";
import { DELETE_PROJECT_RESET } from "store/types";

import classname from "./delete_project.module.css";

const DeleteProject = ({ project }) => {
	const dispatch = useDispatch();

	const { success } = useSelector((state) => state.projectDelete);

	const deleteButtonClickHandler = () => {
		dispatch(deleteProjectAction(project._id));
	};

	useEffect(() => {
		if (success) {
			dispatch({ type: DELETE_PROJECT_RESET });
			dispatch(showComponent("My Projects"));
		}
	}, [success, dispatch]);

	return (
		<>
			<div>Are you sure you want to delete project: {project.title}?</div>
			<div className={classname.button_container}>
				<button
					onClick={() => deleteButtonClickHandler()}
					className={classname.delete_button}
				>
					Delete
				</button>

				<button
					className={classname.cancel_button}
					onClick={() => dispatch(showComponent("My Projects"))}
				>
					Cancel
				</button>
			</div>
		</>
	);
};
export default DeleteProject;
