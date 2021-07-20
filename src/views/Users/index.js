/** ---------------------------------------------------------------------------
 * @title Users
 * @path > Dashboard > Users
 * @description Sets a 2 base column layout for user components
 * @components
  
 * This is the root Users component.  It has a layout container with a unique 
 	 navigation component (UsersNav) and a users view component (UsersView)
 	 displays the selection from the UsersNav.
*/

import React from 'react';
import UsersNav from './UsersNav';
import UsersView from './UsersView';
import Dashboard from 'views/Dashboard';
import classname from 'views/Users/users.module.css';

const Users = () => {
	return (
		<Dashboard>
			<div className={classname.users_layout_container}>
				<UsersNav />
				<UsersView />
			</div>
		</Dashboard>
	);
};

export default Users;
