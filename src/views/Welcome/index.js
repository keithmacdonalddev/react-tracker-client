import React from 'react';

// Components
import Title from './Title';
import SubTitle from './SubTitle';
import Paragraph from './Paragraph';
import StartButton from './StartButton';

// Images
import network from 'img/network.png';

// CSS
import classname from './Welcome.module.css';

const HomePage = () => {
	return (
		<div className={classname.welcomeContainer}>
			<div className={classname.contentContainer}>
				<Title />
				<SubTitle />
				<Paragraph />
				<StartButton />
			</div>

			<div className={classname.imageContainer}>
				<img className={classname.image} src={network} alt='' />
			</div>
		</div>
	);
};

export default HomePage;
