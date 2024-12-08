import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../contexts/AuthContext';
import { denyPermission } from '../redux-store/lock';

export const useProtectedLink = () => {
  const dispatch = useDispatch();

  // @ts-ignore
  const { currentUser } = useAuth(); // Access the auth context

  const userIsLoggedIn = currentUser && currentUser.email;

  const handleProtectedClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!userIsLoggedIn) {
      e.preventDefault(); // Prevent navigation
      dispatch(denyPermission()); // Dispatch the denyPermission action
    }
  };

  return handleProtectedClick; // Return only the function
};
