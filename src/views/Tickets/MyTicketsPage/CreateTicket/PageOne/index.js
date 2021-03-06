// Packages
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import // PAGE_TWO,
// REPORT_A_BUG,
// REQUEST_A_FEATURE,
// TICKET_TYPE_RESET,
'store/types';

import { showComponent } from 'store/actions/navigationActions';
import { CREATE_TICKET_RESET } from 'store/types';

import PageTwo from '../PageTwo';

// Styles ~ css
import classname from './pageOne.module.css';

const PageOne = ({ projectId }) => {
	const dispatch = useDispatch();

	const [ticketType, setTicketType] = useState(null);

	const {
		// ticketCreate,
		successCreate,
		loadingCreate,
		errorCreate,
	} = useSelector((state) => state.ticketCreate);

	const ticketTypeHandler = (selection) => {
		if (selection === ticketType) {
			setTicketType(null);
		} else {
			setTicketType(selection);
		}
	};

	useEffect(() => {
		if (successCreate) {
			setTimeout(() => {
				dispatch({ type: CREATE_TICKET_RESET });
				dispatch(showComponent('home'));
			}, 3000);
		}
	});

	return (
		<div className={classname.createTicketContainer}>
			{loadingCreate ? (
				<h6>Loading...</h6>
			) : errorCreate ? (
				<h6>{errorCreate}</h6>
			) : successCreate ? (
				<div className={classname.successMessage}>
					<h6>Ticket was created successfully</h6>
				</div>
			) : (
				<div className={classname.widthAdjustment}>
					{/* -------------------- STEP ONE --------------------*/}
					<div className={classname.stepOneContainer}>
						<h2 className={classname.step_one_heading}>Would you like to</h2>
						<div className={classname.ticketTypeContainer}>
							<div
								onClick={() => ticketTypeHandler('bug')}
								className={ticketType === 'bug' ? classname.active : classname.notActive}>
								Report A Bug
							</div>
							<div style={{ margin: '20px' }} className={classname.step_one_heading}>
								OR
							</div>
							<div
								onClick={() => ticketTypeHandler('feature')}
								className={ticketType === 'feature' ? classname.active : classname.notActive}>
								Request A Feature
							</div>
						</div>
					</div>
					{/* -------------------- STEP TWO --------------------*/}
					<PageTwo ticketType={ticketType} projectId={projectId} />
				</div>
			)}
		</div>
	);
};

export default PageOne;
