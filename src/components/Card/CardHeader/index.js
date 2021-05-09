import React from 'react';
import style from './CardHeader.module.css';

const CardHeader = ({ children }) => {
	return <div className={style.cardHeaderContainer}>{children}</div>;
};

export default CardHeader;
