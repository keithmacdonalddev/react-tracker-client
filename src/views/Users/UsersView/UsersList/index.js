/** ---------------------------------------------------------------------------
 * @title UsersList
 * @path > Dashboard > Users > UsersList
 * @description
 * @components
-------------------------------------------------------------------------------- */

import React from 'react';
import GlobalUsersList from './GlobalUsersList';

import classname from './user_list_display.module.css';

const UsersList = () => {
	return (
		<div className={classname.users_list}>
			<div className={classname.all_user_cards}>
				<GlobalUsersList />
			</div>
		</div>
	);
};

export default UsersList;
