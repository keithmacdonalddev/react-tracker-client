import React from 'react';
import style from './CardFooter.module.css';

const CardFooter = ({ children }) => {
	return <div className={style.cardFooterContainer}>{children}</div>;
};

export default CardFooter;
