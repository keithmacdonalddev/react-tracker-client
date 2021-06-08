import React from 'react';
import classname from './card.module.css';

const orange = 'rgb(175, 82, 222)';
const green = 'rgb(52, 199, 89)';
const blue = 'rgb(0, 122, 255)';

const Card = ({ title, children }) => {
	const color = (title) => {
		if (title === 'Tickets') {
			return blue;
		}
		if (title === 'Projects') {
			return green;
		}
		if (title === 'Connections') {
			return orange;
		}
	};

	return (
		<div className={classname.card_container}>
			<div className={classname.card_title}>
				<div className={classname.title_text}>{title}</div>
				<div className={classname.bar_one}>
					<div className={classname.bar_two}>
						<div className={classname.bar_three}></div>
					</div>
				</div>
				<div className={classname.bar_four}>
					<div className={classname.bar_five}>
						<div className={classname.bar_six}></div>
					</div>
				</div>
			</div>
			<div className={classname.card_body}>
				<div style={{ color: color(title) }} className={classname.card_quantity}>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Card;
