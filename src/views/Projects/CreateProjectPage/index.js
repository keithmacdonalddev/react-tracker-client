// Packages
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Actions
import { showComponent } from "store/actions/navigationActions";
import {
	createProject,
	getProjects,
} from "../../../store/actions/projectActions";
import { CREATE_PROJECT_RESET } from "../../../store/types";

// Components
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";

// Css
import classname from "./create_project.module.css";

const CreateProjectPage = () => {
	// Package methods
	const dispatch = useDispatch();

	// Local State
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [status, setStatus] = useState("Active");
	console.log(`status: ${status}`);
	// Global state
	const { userInfo } = useSelector((state) => state.userLogin);

	// form submit function to create a project
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(createProject(title, description, status, userInfo._id));
	};

	const project = useSelector((state) => state.project);
	const {
		loading: loadingCreate,
		success: successCreate,
		error: errorCreate,
	} = project;

	useEffect(() => {
		if (successCreate) {
			dispatch({ type: CREATE_PROJECT_RESET });
			dispatch(getProjects());
			dispatch(showComponent("My Projects"));
		}
	}, [dispatch, successCreate]);

	return (
		<div className={classname.project_container}>
			<div className={classname.dataFieldContainer}>
				<div className={classname.header}>Create New Project</div>

				{loadingCreate ? (
					<Loader />
				) : errorCreate ? (
					<Message variant="danger">{errorCreate}</Message>
				) : (
					<form onSubmit={(event) => handleSubmit(event)}>
						<div className={classname.input_container}>
							<label className={classname.label}>
								Project Name:
							</label>
							<input
								value={title}
								className={classname.dataField}
								type="text"
								onChange={(event) =>
									setTitle(event.target.value)
								}
							/>
						</div>
						<div className={classname.input_container}>
							<label className={classname.input}>
								Project Description:
							</label>
							<textarea
								rows={5}
								cols={10}
								value={description}
								className={classname.textarea}
								onChange={(event) =>
									setDescription(event.target.value)
								}
							/>
						</div>
						<div className={classname.input_container}>
							<label className={classname.label}>Status</label>
							<select
								value={status}
								onChange={(e) => setStatus(e.target.value)}
								className={classname.dataField}
							>
								<option value="active">Active</option>
								<option value="delayed">Delayed</option>
								<option value="onhold">On Hold</option>
								<option value="cancelled">Cancelled</option>
								<option value="completed">Completed</option>
							</select>
						</div>
						<button
							className={classname.submit_button}
							type="submit"
							value="submit"
						>
							Submit
						</button>
					</form>
				)}
			</div>
		</div>
	);
};

export default CreateProjectPage;
