// ******************************************************************************************
//										IMPORTS
// ******************************************************************************************

// PACKAGES *********************************************
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// REDUX *******************************************************
import {GET_TICKET_RESET } from "store/types";
import {SET_EDITING_FALSE } from "store/types";
import {EDIT_TICKET_RESET } from "store/types";
import {DELETE_TICKET_RESET } from "store/types";
import {SINGLE_TICKET_ID_RESET } from "store/types";
import { deleteTicket } from "store/actions/ticketActions";
import { showComponent } from "store/actions/navigationActions";

// CSS ****************************************
import style from "./deleteTicket.module.css";



// ******************************************************************************************
// 									DEFAULT  COMPONENT
// ******************************************************************************************

const DeleteTicket = () => {
				
			// GLOBAL STATE **********************************************************************
			const { ticketId } = useSelector((state) => state.id);
			const { isDeleted, loading, error } = useSelector((state) => state.ticketDeleted);

			// HOOKS *******************************************
			const dispatch = useDispatch();
			
			useEffect(() => {
				if (isDeleted) {
					setTimeout(() => {
						dispatch({ type: DELETE_TICKET_RESET });
						dispatch(showComponent("My Tickets"));
					}, 1000);
				}
			}, [isDeleted, dispatch]);
						
			// EVENT HANDLERS *********************************
			const deleteButtonClickHandler = () => {
				dispatch({ type: SET_EDITING_FALSE });
				dispatch({ type: EDIT_TICKET_RESET });
				dispatch({ type: GET_TICKET_RESET });
				dispatch({ type: SINGLE_TICKET_ID_RESET });
				dispatch(deleteTicket(ticketId));
			};

			const cancelButtonClickHandler = () => {
				dispatch(showComponent("My Tickets"));
			};

	

// ******************************************************************************************
// 										JSX
// ******************************************************************************************

			// HANDLE LOADING
			if (loading) {
				return <h6>loading...</h6>;
			}

			// HANDLE ERRORS
			if (error) {
				return <h6>{error}</h6>;
			}

			return (
				<div className={style.deleteTicketWrapper}>
					{isDeleted ? (
						<h6>Ticket was deleted successfully</h6>
					) : (
						<>
							<p>Are you sure you want to delete?</p>
							<button
								onClick={() => cancelButtonClickHandler()}
								style={{ background: "#66ba93", color: "white" }}
								className={style.singleButton}
							>
								No, don't delete
							</button>
							<button
								onClick={() => deleteButtonClickHandler()}
								className={style.deleteButton}
							>
								Delete Ticket

							</button>
						</>
					)}
				</div>
			);
};


// ******************************************************************************************
// 										EXPORTS
// ******************************************************************************************
export default DeleteTicket;
