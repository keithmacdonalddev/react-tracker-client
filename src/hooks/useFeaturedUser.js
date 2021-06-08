/** --------------------------------------------------
 * Hook takes a users id as an input and sets that
 * id in redux's global storage as {featuredUser}
 *
 * @input (string) user._id
 * @return (function) submitId - a function that take user._id as property
 * ---------------------------------------------------
 */

import { useDispatch } from 'react-redux';
import { setFeaturedProfile } from 'store/actions/userActions';
import { SET_FEATURED_PROFILE_RESET } from 'store/types';

const useFeaturedUser = (id) => {
	const dispatch = useDispatch();

	// Function to be returned when we call useFeaturedUser()
	// const {submitId} = useFeaturedUser()
	const submitId = (id) => {
		/**
		 * Reset featturedProfile to ensure all fields are
		 * empty. Next user may not have all fields necessary
		 * to overwrite existing users data fields.
		 *  */
		dispatch({
			type: SET_FEATURED_PROFILE_RESET,
		});

		// New user as a featuredProfile
		dispatch(setFeaturedProfile(id));
	};

	return { submitId };
};

export default useFeaturedUser;
