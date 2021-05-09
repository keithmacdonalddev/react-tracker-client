// Packages
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Components: None

// Icons
import { Icon, faChevronRight } from "components/Icon";

// Redux
import { usersNavActiveAction } from "store/actions/navigationActions";

// Helpers
import { navItems, usersNavActiveStyle } from "./helpers";

// CSS
import classname from "./usersNav.module.css";

const UsersNav = () => {
	const dispatch = useDispatch();

	// Global state: active users nav selection as set from the onClick below
	const { usersNavState } = useSelector((state) => state.usersNavState);

	return (
		<div className={classname.users_list}>
			{navItems.map((item) => {
				return (
					<>
						<div
							/** Set active nav in global state */
							onClick={() => dispatch(usersNavActiveAction(item))}
							/** 
							 	if current navItem iteration is selected, style accordingly
							  else null (null will ensure default className below will 
							 	handle style) 
							*/
							style={usersNavState === item ? usersNavActiveStyle : null}
							className={classname.header}
						>
							{/* Title of the current navItem iteration */}
							<div className={classname.headerTitle}>{item}</div>

							<span>
								{/* Icon component */}
								<Icon type={faChevronRight} />
							</span>
						</div>
					</>
				);
			})}
		</div>
	);
};

export default UsersNav;
