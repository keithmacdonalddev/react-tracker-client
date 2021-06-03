import React from 'react';
import classname from './card.module.css';

const Card = ({ title, children }) => {
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
				<div className={classname.card_quantity}>{children}</div>
			</div>
		</div>
	);
};

export default Card;
