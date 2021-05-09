// Packages
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import {
	PAGE_ONE,
	DELETE_FORM_DATA,
	SELECTED_PROJECT_RESET,
	TICKET_TYPE_RESET,
} from 'store/types';
import { modalStatusAction } from 'store/actions/navigationActions';

// Modal views
import DeleteTicket from 'views/Tickets/MyTicketsPage/DeleteTicket';
import CreateTicketPage from 'views/Tickets/MyTicketsPage/CreateTicket';
import CreateProjectPage from 'views/Projects/CreateProjectPage';
import EditAvatar from 'components/EditAvatar';

// CSS
import style from './modal.module.css';
import EditProfile from 'views/Profile/ProfilePage/EditProfile';

const Modal = () => {
	// Package methods
	const dispatch = useDispatch();

	// Global state
	const { isModalOpen, showThisComponentInModal } = useSelector(
		(state) => state.modalStatus,
	);

	// Local state
	// const [localIsModalOpen, setLocalIsModalOpen] = useState(isModalOpen);

	// when x close button is clicked, reset local and global states
	const closeModalClickHandler = () => {
		// setLocalIsModalOpen(false);
		dispatch({ type: SELECTED_PROJECT_RESET });
		dispatch({ type: DELETE_FORM_DATA });
		dispatch({ type: TICKET_TYPE_RESET });
		dispatch({ type: PAGE_ONE });
		dispatch(modalStatusAction(false, ''));
	};

	// useEffect(() => {
	// 	if (showThisComponentInModal === 'clear') {
	// 		closeModalClickHandler();
	// 	}
	// if (isModalOpen) {
	// setLocalIsModalOpen(true);
	// }
	// if (!isModalOpen) {
	// 	setLocalIsModalOpen(false);
	// }
	// }, [closeModalClickHandler, showThisComponentInModal]);

	return (
		<div className={isModalOpen ? style.modalContainer : style.none}>
			<div className={style.modalContentContainer}>
				<div
					onClick={() => closeModalClickHandler()}
					className={style.closeButtonContainer}>
					<div className={style.closeButton}>X</div>
				</div>

				<div className={style.modalContent}>
					{showThisComponentInModal === 'createTicket' ? (
						<CreateTicketPage />
					) : showThisComponentInModal === 'createProject' ? (
						<CreateProjectPage />
					) : showThisComponentInModal === 'editProfile' ? (
						<EditProfile />
					) : showThisComponentInModal === 'editAvatar' ? (
						<EditAvatar />
					) : showThisComponentInModal === 'deleteTicket' ? (
						<DeleteTicket />
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Modal;
