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
// import { Icon, faShoePrints } from 'components/Icon';

const HomePage = () => {
	return (
		<div className={classname.welcome_container}>
			<div className={classname.content_container}>
				<Title />
				<SubTitle />
				<Paragraph />
				<StartButton />
			</div>
		</div>
	);
};

export default HomePage;

// <div className={classname.shoe_prints_icon}>
// 		<Icon type={faShoePrints} />
// 	</div>{' '}
// 	<div className={classname.shoe_prints_icon1}>
// 		<Icon type={faShoePrints} />
// 	</div>{' '}
// 	<div className={classname.shoe_prints_icon2}>
// 		<Icon type={faShoePrints} />
// 	</div>{' '}
// 	<div className={classname.shoe_prints_icon3}>
// 		<Icon type={faShoePrints} />
// 	</div>
