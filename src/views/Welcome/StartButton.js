import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import { animated, useSpring } from 'react-spring';

import classname from './Welcome.module.css';

const StartButton = () => {
	// const styles = useSpring({
	// 	from: { y: -1000, opacity: 0 },
	// 	to: { y: 0, opacity: 1 },
	// });

	return (
		<motion.div className={classname.hero_button_container}>
			<Link to={'/login'}>
				<button className={classname.hero_button}>Start for Free</button>
			</Link>
		</motion.div>
	);
};

export default StartButton;
