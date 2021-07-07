import React from 'react';
import SiteName from './SiteName'; // local component
import SubTitle2 from './SubTitle2'; // local component
import StartButton from './StartButton'; // local component
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
