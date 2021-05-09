import React from 'react';

import Widget from '../Widget';

import classname from './classes_sectionTwo.module.css';

const SectionTwo = () => {
	return (
		<div className={classname.section_two_container}>
			<div className={classname.section_two_content}>
				<Widget />
			</div>
		</div>
	);
};

export default SectionTwo;
