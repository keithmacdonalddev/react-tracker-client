import React from 'react';

import classname from './loader.module.css';
const Loader = () => {
	return (
		<div className={classname.container}>
			<div className={classname.loader_container}>
				<span className={classname.name}>Loading</span>
				<div className={classname.percent}>
					<div className={classname.progress}></div>
				</div>
				<span className={classname.value}></span>
			</div>
		</div>
	);
};

export default Loader;
