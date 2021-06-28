import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivity } from 'store/actions/activityActions';

import classname from './ActivityMonitor.module.css';

const ActivityMonitor = () => {
	const dispatch = useDispatch();
	const { newActivitySuccess } = useSelector((state) => state.newActivity);
	const { activity } = useSelector((state) => state.allActivity);
	useEffect(() => {
		if (newActivitySuccess) {
			dispatch(getAllActivity());
		}
	}, [newActivitySuccess, dispatch]);
	return (
		<div className={classname.activity_monitor_container}>
			<div className={classname.activityFeedBox}>
				{activity ? (
					<>
						{activity.reverse().map((activityItem, idx) => (
							<div className={classname.singleLog} key={activityItem._id}>
								<div className={classname.timeStamp}>{activity.length - idx}</div>
								<div className={classname.timeStamp}>{activityItem.createdAt}</div>
								<div style={{ color: 'rgba(255,255,100,1)', fontWeight: 500 }} className={classname.timeStamp}>
									<span style={{ paddingRight: '10px', color: 'white' }}>Event:</span> {activityItem.event}
								</div>
								<div style={{ color: 'rgba(50, 255, 50, 1)', fontWeight: 500 }} className={classname.message}>
									<span style={{ color: 'white' }}>Details:</span> {activityItem.details}
								</div>
							</div>
						))}{' '}
					</>
				) : (
					<div>loading...</div>
				)}
			</div>
		</div>
	);
};

export default ActivityMonitor;
