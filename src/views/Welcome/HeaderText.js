import React from 'react';
// import { useSpring, config, animated } from 'react-spring';
import { motion } from 'framer-motion';

import classname from './Welcome.module.css';

const SubTitle2 = () => {
	// const styles = useSpring({
	// 	from: { y: 20, opacity: 0 },
	// 	to: { y: 0, opacity: 1 },
	// 	config: config.slow,
	// });
	return (
		<motion.div>
			<h4 data-testid='header-text' className={classname.subtitle}>
				Portfolio tools designed for aspiring software engineers
			</h4>
		</motion.div>
	);
};

export default SubTitle2;
