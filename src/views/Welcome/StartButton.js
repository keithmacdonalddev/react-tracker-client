import React from 'react';
import { Link } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';

import classname from './Welcome.module.css';

const StartButton = () => {
	const styles = useSpring({
		from: { y: -1000, opacity: 0 },
		to: { y: 0, opacity: 1 },
	});

	return (
		<animated.div style={styles}>
			<Link to={'/login'}>
				<button className={classname.hero_button}>Start for Free</button>
			</Link>
		</animated.div>
	);
};

export default StartButton;
