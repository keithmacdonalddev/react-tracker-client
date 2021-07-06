import React from 'react';
import { useSpring, config, animated } from 'react-spring';

import classname from './Welcome.module.css';

const SubTitle2 = () => {
	const styles = useSpring({
		from: { y: 20, opacity: 0 },
		to: { y: 0, opacity: 1 },
		config: config.slow,
	});
	return (
		<animated.div style={styles}>
			<h4 className={classname.subtitle}>Portfolio tools designed for aspiring software engineers.</h4>
		</animated.div>
	);
};

export default SubTitle2;
