import React from 'react';
import { animated, useSpring } from 'react-spring';

import classname from './Welcome.module.css';

const SiteName = () => {
	const styles = useSpring({
		from: { opacity: 0, y: 10 },
		to: { opacity: 1, y: 0 },
	});

	return (
		<animated.div style={styles}>
			<div data-testid='logo-text' className={classname.site_name}>
				React Tracker
			</div>
		</animated.div>
	);
};

export default SiteName;
