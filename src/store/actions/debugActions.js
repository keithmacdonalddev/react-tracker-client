import { DEBUGGER } from '../types';

export const deBugger = (bool) => (dispatch) => {
	try {
		dispatch({
			type: DEBUGGER,
			payload: bool,
		});
	} catch (error) {
		console.log(error);
	}
};
