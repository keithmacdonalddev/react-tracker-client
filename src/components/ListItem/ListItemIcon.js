import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMakeBackground from './useMakeBackground';
import classname from './ListItem.module.css';

const style = {
	iconStyle: {
		color: 'var(--color-primary-100)',
		stroke: 'var(--color-primary-100)',
		strokeWidth: '30',
		fontSize: '22px',
	},
};

const ListItemIcon = ({ icon, active, hover }) => {
	const makeBackground = useMakeBackground(active, hover);
	return (
		<span className={classname.icon}>
			<div style={{ background: makeBackground }} className={classname.container}>
				{icon && <FontAwesomeIcon style={style.iconStyle} className={classname.fa} icon={icon} />}
			</div>
		</span>
	);
};

export default ListItemIcon;
