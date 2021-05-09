/** ---------------------------------------------------------------------------
 * @title Users
 * @path > Dashboard > Users
 * @description Sets a 2 base column layout for user components
 * @components
  
 * This is the root Users component.  It has a layout container with a unique 
 	 navigation component (UsersNav) and a users view component (UsersView)
 	 displays the selection from the UsersNav.
 
 * Users Tree:
 	 							Users/index.js (** YOU ARE HERE **)
 	 									> Users/UsersNav/index.js	
 	 									> Users/UsersView/index.js
 	 											> Users/UsersView/UsersList/Friends	
 	 											> Users/UsersView/UsersList/SentRequests		
  											> Users/UsersView/UsersList/GlobalUsersList		
 	 											> Users/UsersView/UsersList/ReceivedRequests
-------------------------------------------------------------------------------- */

import React from "react";

import UsersView from "./UsersView";
import classname from "views/Users/users.module.css";

import UsersNav from "./UsersNav";

const Users = () => {
	return (
		<div className={classname.users_layout_container}>
			<UsersNav />
			<UsersView />
		</div>
	);
};

export default Users;
