/**
 *  Retrieves logs from global state and displays them on page
 */
import React from 'react';
import { useSelector } from 'react-redux';

import style from './ActivityMonitor.module.css';

const ActivityMonitor = () => {
	const { logs } = useSelector((state) => state.logFeed);

	return (
		<div className={style.wrapper}>
			<div className={style.activityFeedBox}>
				{logs.map((log) => (
					<div className={style.singleLog} key={log.id}>
						<div className={style.timeStamp}>{log.timeStamp}</div>
						<div className={style.timeStamp}>{log.id}</div>
						<div className={style.message}>{log.message}</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ActivityMonitor;
