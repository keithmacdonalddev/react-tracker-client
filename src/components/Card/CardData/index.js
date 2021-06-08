import React from 'react';
import { useSelector } from 'react-redux';
// import { getProjects } from 'store/actions/projectActions';
// import { getTickets } from 'store/actions/ticketActions';

const CardData = ({ dataType }) => {
	// const dispatch = useDispatch();

	// const [localData, setLocalData] = useState([]);

	const { projects, loading, error } = useSelector((state) => state.projects);
	// const users = useSelector((state) => state.projects);
	// const { tickets } = useSelector((state) => state.projects);

	// let data;
	// if (dataType) {
	// 	data = dataType.toLowerCase();
	// }

	// if (data === 'users') {
	// 	setLocalData(users);
	// }

	// useEffect(() => {
	// 	if (data === 'projects') {
	// 		dispatch(getProjects());
	// 	}
	// }, []);

	// useEffect(() => {
	// 	if (data === 'tickets') {
	// 		dispatch(getTickets());
	// 	}
	// }, []);

	return (
		<div>
			{loading ? (
				<div>loading...</div>
			) : error ? (
				<div>{error}</div>
			) : projects ? (
				<div>{projects.length}</div>
			) : (
				<div>No data found</div>
			)}

			{/* {data === 'tickets' && <div>{tickets.length}</div>} */}
		</div>
	);
};

export default CardData;

// const [projectsOpen, setProjectsOpen] = useState(false);
// const [ticketsOpen, setTicketsOpen] = useState(false);
// const [usersOpen, setUsersOpen] = useState(false);
// console.log(`projects: ${JSON.stringify(projects)}`);
// console.log(`tickets: ${JSON.stringify(tickets)}`);
// console.log(`users: ${JSON.stringify(users)}`);
