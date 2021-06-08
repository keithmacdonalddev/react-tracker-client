import React from 'react';

import style from './style.module.css';

const index = () => {
	return (
		<div className={style.profileContainer}>
			<div className={style.avatarContainer}>
				<img
					src={
						featured.avatar
							? featured.avatar
							: 'https://www.sittingforacause.com/images//search/placeholder.jpg'
					}
					className={style.largeAvatar}
					alt=''></img>
			</div>
			<div className={style.profileHeader}>
				<div className={style.featuredProfileNameContainer}>
					<h2 className={style.featuredProfileName}>
						{featured
							? featured.name
							: 'Choose a profile on the left to display here'}
					</h2>
				</div>
			</div>
			<div className={style.bodyContainer}>
				<div className={style.colContainer}>
					<div className={style.colLeft}>
						<div className={style.columnTitleContainer}>
							<h3 className={style.columnTitle}>Profile Details:</h3>
						</div>

						<div className={style.userInfoSection}>
							<div className={style.username}>
								<label className={style.profileLabel}>username:</label>
								<input
									className={style.profileInput}
									type='text'
									value={featured.username ? featured.username : formUsername}
									readOnly
								/>
							</div>
							<div className={style.username}>
								<label className={style.profileLabel}>role:</label>
								<div className={style.profileInput}>
									{featured.role ? featured.role : formRole}
								</div>
							</div>

							<div className={style.username}>
								<label className={style.profileLabel}>email:</label>
								<div className={style.profileInput}>
									{featured.email ? featured.email : formEmail}
								</div>
							</div>
							<div className={style.username}>
								<label className={style.profileLabel}>bio:</label>
								<input
									className={style.profileInput}
									type='text'
									defaultValue={featured.bio ? featured.bio : formBio}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default index;
