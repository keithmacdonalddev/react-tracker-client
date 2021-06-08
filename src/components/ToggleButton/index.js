import React from 'react';
import { faBars, faTimes, Icon } from 'components/Icon';
import classname from './togglebutton.module.css';

const ToggleButton = ({ toggleSidebar }) => {
	if (toggleSidebar) {
		return (
			<div className={classname.icon_container}>
				<div className={classname.toggle_icon_x}>
					<Icon type={faTimes} />
				</div>
			</div>
		);
	}

	if (!toggleSidebar) {
		return (
			<div className={classname.icon_container}>
				<div className={classname.toggle_icon_hamburger}>
					<Icon type={faBars} />
				</div>
			</div>
		);
	}
};

export default ToggleButton;
