import React from 'react';

// Components
import SiteName from './SiteName';
import SubTitle2 from './SubTitle2';
import StartButton from './StartButton';

// Images
// import network from 'img/network.png';

import classname from './Welcome.module.css'; // CSS

const HomePage = () => {
	return (
		<div className={classname.welcome_page_container}>
			<SiteName />
			<div className={classname.content_container}>
				<div className={classname.subtitle_container}>
					<SubTitle2 />
				</div>
				<div className={classname.hero_button_container}>
					<StartButton />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
