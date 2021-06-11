import { useSelector } from 'react-redux';

const useMakeBackground = (value, bool) => {
	const { component } = useSelector((state) => state.component);

	if (bool) {
		return '#9174d8';
	} else if (value === component) {
		return 'var(--color-primary-700)';
	} else {
		return null;
	}
};

export default useMakeBackground;
