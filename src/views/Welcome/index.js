import React from 'react';
import SiteName from './SiteName'; // local component
import HeaderText from './HeaderText'; // local component
import StartButton from './StartButton'; // local component
import classname from './Welcome.module.css'; // CSS

const HomePage = () => {
	return (
		<div className={classname.welcome_page_container}>
			<SiteName />
			<div className={classname.content_container}>
				<HeaderText />
				<StartButton />
			</div>
		</div>
	);
};

export default HomePage;
