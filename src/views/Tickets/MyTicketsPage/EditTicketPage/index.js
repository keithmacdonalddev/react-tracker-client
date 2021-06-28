import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { editTicket, getTicket, singleTicketId } from 'store/actions/ticketActions';
import { showComponent } from 'store/actions/navigationActions';

import style from './EditTicketPage.module.css';
import { EDIT_TICKET_RESET, SET_EDITING_FALSE } from 'store/types';

const EditTicket = () => {
	const dispatch = useDispatch();
	const [message, setMessage] = useState(null);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState();
	const [status, setStatus] = useState('');
	const [developer, setDeveloper] = useState('');
	const [priority, setPriority] = useState('');
	const [project, setProject] = useState('');

	const { users2 } = useSelector((state) => state.users);

	const { userInfo } = useSelector((state) => state.userLogin);
	const { projects } = useSelector((state) => state.projects);
	const { success } = useSelector((state) => state.editedTicket);
	const { ticket } = useSelector((state) => state.id);
	const { singleTicket, loading, error } = useSelector((state) => state.singleTicket);

	useEffect(() => {
		if (ticket) {
			dispatch(getTicket(ticket));
		}
	}, [dispatch, ticket]);

	const submitHandler = (event) => {
		event.preventDefault();
		const id = singleTicket._id;
		dispatch(editTicket(title, description, developer, project, priority, status, id));
	};

	const cancelHandler = () => {
		dispatch({ type: SET_EDITING_FALSE });
		dispatch({ type: EDIT_TICKET_RESET });
		dispatch(singleTicketId(singleTicket._id));
		dispatch(showComponent('singleTicket'));
	};

	useEffect(() => {
		if (success) {
			setMessage('Ticket edited successfully, redirecting...');
			setTimeout(() => {
				setMessage(null);
				dispatch({ type: SET_EDITING_FALSE });
				dispatch({ type: EDIT_TICKET_RESET });
				dispatch(showComponent('My Tickets'));
				// store a reference of the id of the clicked ticket in global state
				dispatch(singleTicketId(singleTicket._id));
				// get ticket data
				dispatch(getTicket(singleTicket._id));
				// display single ticket UI
				dispatch(showComponent('singleTicket'));
			}, 3000);
		}
	}, [success, dispatch, singleTicket._id]);

	return (
		<div className={style.main}>
			{loading ? (
				<h6>Loading...</h6>
			) : error ? (
				<h6>{error}</h6>
			) : singleTicket ? (
				<>
					<div className={style.titleContainer}>
						<h6 className={style.title}>Editing Ticket id: {singleTicket._id}</h6>
					</div>
					<form onSubmit={(event) => submitHandler(event)} className={style.formGrid}>
						{message ? (
							<h6>{message}</h6>
						) : (
							<>
								<div className={style.two_column_container}>
									<div className={style.dataFieldContainer}>
										<label className={style.label}>Title:</label>
										<input
											required
											className={style.inputField}
											type='text'
											value={!title ? singleTicket.title : title}
											placeholder={singleTicket.title}
											onChange={(event) => setTitle(event.target.value)}
										/>
									</div>
									<div className={style.dataFieldContainer}>
										<label className={style.label}>Project:</label>
										{projects ? (
											<select
												required
												value={!project ? singleTicket.project : project}
												className={style.inputField}
												onChange={(event) => setProject(event.target.value)}>
												<option></option>
												{projects.map((project) => (
													<option key={project._id}>{project.title}</option>
												))}
											</select>
										) : (
											'loading...'
										)}
									</div>
								</div>
								<div className={style.two_column_container}>
									<div className={style.dataFieldContainer}>
										<label className={style.label}>Assigned To:</label>
										{users2 ? (
											<select
												required
												value={!developer ? singleTicket.assignedTo : developer}
												className={style.inputField}
												onChange={(event) => setDeveloper(event.target.value)}>
												<option>{(userInfo.firstName, userInfo.lastName)}</option>
												{users2.userListFriends.map((developer) => (
													<option key={developer._id}>{developer.name}</option>
												))}
											</select>
										) : (
											'loading...'
										)}
									</div>

									<div className={style.dataFieldContainer}>
										<label className={style.label}>Priority:</label>
										<select
											required
											className={style.inputField}
											type='text'
											value={!priority ? singleTicket.priority : priority}
											onChange={(event) => setPriority(event.target.value)}>
											<option value={singleTicket.priority}>{singleTicket.priority}</option>
											<option></option>
											<option value='normal'>Normal</option>
											<option value='urgent'>Urgent</option>
											<option value='test'>Test</option>
										</select>
									</div>
								</div>
								{/* ---------------  Ticket Descrition --------------- */}
								<div className={style.dataFieldContainer}>
									<label className={style.label}>Description:</label>
									<textarea
										rows='10'
										cols='50'
										className={style.inputField}
										type='text'
										value={!description ? singleTicket.description : description}
										placeholder={singleTicket.description}
										onChange={(event) => setDescription(event.target.value)}
									/>
								</div>

								<div className={style.dataFieldContainer}>
									<label className={style.label}>Status:</label>

									<select
										required
										value={!status ? singleTicket.status : status}
										className={style.inputField}
										type='text'
										onChange={(event) => setStatus(event.target.value)}>
										<option></option>
										<option value='open'>Open</option>
										<option value='closed'>Closed</option>
										<option value='test'>Test</option>
									</select>
								</div>
								<div className={style.buttonContainer}>
									<button type='submit' className={style.submitButton} onClick={(e) => submitHandler(e)}>
										Submit
									</button>
								</div>
								<button type='button' className={style.cancelButton} onClick={(e) => cancelHandler(e)}>
									Cancel
								</button>
							</>
						)}
					</form>
				</>
			) : null}
		</div>
	);
};

export default EditTicket;
