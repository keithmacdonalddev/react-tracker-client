import { DEBUGGER } from '../types';

export const deBuggerReducer = (state = false, action) => {
	switch (action.type) {
		case DEBUGGER:
			const bool = action.payload;
			return bool;
		default:
			return state;
	}
};
