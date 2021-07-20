// import { motion } from 'framer-motion';
import React from 'react';

import classname from './Welcome.module.css';

const SiteName = () => {
	return (
		<div data-testid='logo-text' className={classname.site_name}>
			React Tracker
		</div>
	);
};

export default SiteName;
