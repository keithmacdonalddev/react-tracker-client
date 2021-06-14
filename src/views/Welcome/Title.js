import React from 'react';
import { animated, useSpring } from 'react-spring';

import classname from './Welcome.module.css';

const Title = () => {
	const styles = useSpring({
		from: { opacity: 0, y: 10 },
		to: { opacity: 1, y: 0 },
	});

	return (
		<animated.div style={styles}>
			<h1 className={classname.title}>React Tracker</h1>
		</animated.div>
	);
};

export default Title;
