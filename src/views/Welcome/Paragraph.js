import React from 'react';
import { animated, config, useSpring } from 'react-spring';

import classname from './Welcome.module.css';

const Paragraph = () => {
	const styles = useSpring({
		from: { y: 10, opacity: 0 },
		to: { y: 0, opacity: 1 },
		config: config.slow,
	});

	return (
		<animated.div style={styles}>
			<p className={classname.text}>Software to organize website feedback, resolve issues and manage your projects.</p>
		</animated.div>
	);
};

export default Paragraph;
