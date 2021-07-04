import React from 'react';

// Components
import Title from './Title';
import SubTitle from './SubTitle';
import StartButton from './StartButton';

// Images
// import network from 'img/network.png';

import classname from './Welcome.module.css'; // CSS

const HomePage = () => {
	return (
		<div className={classname.welcome_container}>
			<div className={classname.content_container}>
				<Title />
				<SubTitle />
				<StartButton />
			</div>
		</div>
	);
};

export default HomePage;
