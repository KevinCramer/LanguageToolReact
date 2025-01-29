import { setBackwardRoute, setForwardRoute } from '../redux-store/route';
import { useLocation, useNavigate } from 'react-router-dom';
import { lingoCommandHasLoginLock } from '../constants';
import { MouseEvent } from 'react';
import { useAuth } from '../contexts/AuthContext';

import { useDispatch } from 'react-redux';

export const useProtectedLink = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  // @ts-ignore
  const { currentUser } = useAuth(); // Access the auth context

  const userIsLoggedIn = currentUser && currentUser.email;

  const handleProtectedClick = (topic: any) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (!userIsLoggedIn && topic.hasLoginLock && lingoCommandHasLoginLock) {
      e.preventDefault(); // Prevent navigation
      dispatch(setBackwardRoute(location.pathname + location.search));
      dispatch(setForwardRoute(`/japanese/writing-systems?s=${topic.slugName}-T0TFT`));
      navigate('/free-content') }
  };
  return handleProtectedClick; // Return only the function
};
