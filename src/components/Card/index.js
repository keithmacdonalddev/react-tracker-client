import React from 'react';
import classname from './card.module.css';

const Card = ({ title, quantity, subTitle1, subQuantity1, subTitle2, subQuantity2 }) => {
	console.log(title, quantity, subTitle1, subQuantity1, subTitle2, subQuantity2);
	return (
		<div className={classname.card_container}>
			<div className={classname.card_title}>{title}</div>
			<div className={classname.card_content}>
				{subTitle1 && (
					<div className={classname.card_content_item}>
						<div className={classname.card_sub_title}>{subTitle1}</div>
						<div className={classname.card_quantity}>{subQuantity1}</div>
					</div>
				)}

				{subTitle2 && (
					<div className={classname.card_content_item}>
						<div className={classname.card_sub_title}>{subTitle2}</div>
						<div className={classname.card_quantity}>{subQuantity2}</div>
					</div>
				)}

				{quantity && (
					<div className={classname.card_content_item}>
						<div className={classname.absent_subtitle}>{''}</div>
						<div className={classname.card_quantity}>{quantity}</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;
