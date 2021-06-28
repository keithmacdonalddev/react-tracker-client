import React from 'react';
import Moment from 'react-moment';

// Styles
import classes from './classes_dataField.module.css';

const DataField = ({ label, data, date = false }) => {
	return (
		<div className={classes.dataFieldContainer}>
			<label className={classes.label}>{label}:</label>
			<div className={classes.dataField}>
				{date ? (
					<Moment format='MMM-DD-YYYY hh:mm:ss'>{data}</Moment>
				) : (
					<>{data}</>
				)}
			</div>
		</div>
	);
};

export default DataField;
