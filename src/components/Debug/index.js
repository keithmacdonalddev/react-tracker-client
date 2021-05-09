import React from 'react';
import { useSelector } from 'react-redux';

const Debug = () => {
	const debugMessage = useSelector((state) => state.debug);
	return <div>{debugMessage}</div>;
};

export default index;
