import React from 'react';
import { useSpring, config, animated } from 'react-spring';

import classname from './Welcome.module.css';

const SubTitle = () => {
	const styles = useSpring({
		from: { y: 10, opacity: 0 },
		to: { y: 0, opacity: 1 },
		config: config.slow,
	});
	return (
		<animated.div style={styles}>
			<h4 className={classname.subtitleContainer}>CAPTURE - PRIORITIZE - RESOLVE</h4>
		</animated.div>
	);
};

export default SubTitle;
