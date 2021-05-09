import React from 'react';
import style from './CardBody.module.css';

const CardBody = ({ children }) => {
	return <div className={style.cardBodyContainer}>{children}</div>;
};

export default CardBody;
