import React from 'react';
import CardData from './CardData';
import classname from './card.module.css';

const Card = ({ title, children }) => {
	return (
		<div className={classname.card_container}>
			<div className={classname.card_title}>{title}</div>
			<div className={classname.card_body}>
				<div className={classname.card_quantity}>{children}</div>
			</div>
		</div>
	);
};

export default Card;
