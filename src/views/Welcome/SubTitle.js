import React from 'react';
import { useSpring, config, animated } from 'react-spring';

import classname from './Welcome.module.css';

const SubTitle = () => {
	const styles = useSpring({
		from: { y: 20, opacity: 0 },
		to: { y: 0, opacity: 1 },
		config: config.slow,
	});
	return (
		<animated.div style={styles}>
			<div className={classname.subtitle_container}>
				<div className={classname.feature_column}>
					<h4 className={classname.subtitle}>CAPTURE</h4>
					<div className={classname.additional_info}>
						<p className={classname.text}>Feature Requests</p>
						<p className={classname.text}>Knowledge Base</p>
						<p className={classname.text}>Bug Reports</p>
					</div>
				</div>
				<div className={classname.spacer}>-</div>
				<div className={classname.feature_column}>
					<h4 className={classname.subtitle}>PRIORITIZE</h4>
					<div className={classname.additional_info}>
						<p className={classname.text}>Assign Personnel</p>
						<p className={classname.text}>Update Status</p>
					</div>
				</div>
				<div className={classname.spacer}>-</div>
				<div className={classname.feature_column}>
					<h4 className={classname.subtitle}>RESOLVE</h4>
					<div className={classname.additional_info}>
						<p className={classname.text}>Ticket Summary</p>
						<p className={classname.text}>Collarboration</p>
						<p className={classname.text}>Comments</p>
					</div>
				</div>
			</div>
		</animated.div>
	);
};

export default SubTitle;
