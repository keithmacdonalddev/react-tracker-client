// ************************************************************
// 												IMPORTS
// ************************************************************

import React, { useState } from "react";
import style from "./pageThree.module.css";
import { useSelector, useDispatch } from "react-redux";
import { createTicket } from "store/actions/ticketActions";
import { featureExample, warnStyle } from "./pageThreeHelpers";
import { modalStatusAction } from "store/actions/navigationActions";

// ************************************************************
// 											DEFAULT COMPONENT
// ************************************************************

const PageThree = ({ ticketType, localProject }) => {
	//
	// ************************************************************
	// 												LOCAL STATE
	// ************************************************************

	// Input formData
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	// Dynamic error text inside <label>
	const [titleError, setTitleError] = useState(null);
	const [descriptionError, setDescriptionError] = useState(null);

	// Red error styling if user tries to submit a form with an error
	const [titleErrorRed, setTitleErrorRed] = useState(false);
	const [descriptionErrorRed, setDescriptionErrorRed] = useState(false);

	// ************************************************************
	// 												GLOBAL STATE
	// ************************************************************

	// userInfo of the current logged in user
	const { userInfo } = useSelector((state) => state.userLogin);

	// ************************************************************
	// 												MISC
	// ************************************************************

	// Initialize dispatch
	const dispatch = useDispatch();

	// Object constant with all data needed to create a new ticket
	const newTicket = {
		ticketType,
		title,
		description,
		status: "open",
		assignedTo: "admin",
		priority: "normal",
		localProject,
		submittedBy: userInfo._id,
	};

	// ************************************************************
	// 														EVENTS
	// ************************************************************

	// Form: onSubmit handler
	const submitHandler = (event) => {
		event.preventDefault();
		if (titleError) {
			setTitleErrorRed(true);
			return;
		}
		if (descriptionError) {
			setDescriptionErrorRed(true);
			return;
		}
		dispatch(createTicket(newTicket));
		dispatch(modalStatusAction(false, ""));
	};

	// Controlled input: onChange handler
	const descriptionChangeHandler = (event) => {
		setDescription(event);
		if (event.length < 10) {
			setDescriptionError("(must be at least 10 characters)");
		}
		if (event.length >= 10) {
			setDescriptionError(null);
			setDescriptionErrorRed(false);
		}
	};

	// Controlled textarea: onChange handler
	const titleChangeHandler = (event) => {
		setTitle(event);
		if (event.length < 3) {
			setTitleError("(must be at least 3 characters)");
		}
		if (event.length >= 3) {
			setTitleError(null);
			setTitleErrorRed(false);
		}
	};

	// Show page three fields only if a ticket type and project have been selected
	// if either field is null, show nothing
	if (ticketType && localProject !== null) {
		// ************************************************************
		// 														JSX
		// ************************************************************
		return (
			// ******************** FORM ********************
			<form onSubmit={(event) => submitHandler(event)}>
				{/* *************** Title Input *************** */}
				<div className={style.inputContainer}>
					<label className={style.titleLabel}>
						Title
						{titleError && <span>{titleError}</span>}
					</label>
					<input
						required
						type="text"
						value={title}
						className={style.titleInput}
						placeholder={featureExample.title}
						style={titleErrorRed ? warnStyle : null}
						onChange={(event) => titleChangeHandler(event.target.value)}
					/>
				</div>
				{/* *************** Description textarea *************** */}
				<div className={style.inputContainer}>
					<label className={style.titleLabel}>
						Description {descriptionError && <span>{descriptionError}</span>}
					</label>
					<textarea
						required
						rows="6"
						cols="50"
						type="text"
						value={description}
						className={style.textarea}
						placeholder={featureExample.description}
						style={descriptionErrorRed ? warnStyle : null}
						onChange={(event) => descriptionChangeHandler(event.target.value)}
					/>
				</div>

				{/* *************** Form submit button *************** */}
				<div className={style.buttonContainer}>
					<button type="submit" className={style.nextButton}>
						submit
					</button>
				</div>
			</form>
		);
	} else {
		return null;
	}
};

export default PageThree;
