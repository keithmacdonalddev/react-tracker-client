import { useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import { newLog } from 'store/actions/logActions';

// useLogger returns function submitLog()
// we will then use submitLog() in place of useLogger()
// submitLog() will take in 2 args (type, message) that
// will be passed immediately to useLogger() which will begin
// processing useLogger() logic
const useLogger = () => {
	const dispatch = useDispatch();

	const submitLog = (message) => {
		const newTimeStamp = timeStamp();
		const id = uuidv4();
		const log = {
			id: id,
			timeStamp: newTimeStamp,
			message: message,
		};
		dispatch(newLog(log));
	};

	return { submitLog };
};

function timeStamp() {
	const today = new Date();

	const year = today.getFullYear();
	const month = today.getMonth() + 1;
	const date = today.getDate();
	const hour = today.getUTCHours();
	const min = today.getUTCMinutes();
	const sec = today.getUTCSeconds();

	const setDate = `${year}/${month}/${date}`;
	const setTime = `${hour}:${min}:${sec}`;

	const dateAndTime = `${setTime} ${setDate}`;

	return dateAndTime;
}

export default useLogger;
