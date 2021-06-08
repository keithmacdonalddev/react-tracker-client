import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// REDUX ACTIONS
import { getUsers } from 'store/actions/userActions';

const FetchUsers = () => {
	const dispatch = useDispatch();

	const { error, loading, users } = useSelector((state) => state.users);
	const { userInfo } = useSelector((state) => state.userLogin);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return {
		error,
		loading,
		users,
		myInfo: userInfo,
	};
};

export default FetchUsers;
