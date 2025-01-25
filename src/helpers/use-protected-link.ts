import { MouseEvent } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { lingoCommandIsLocked } from '../constants';
import { useNavigate } from 'react-router-dom';

export const useProtectedLink = () => {
  const navigate = useNavigate();

  // @ts-ignore
  const { currentUser } = useAuth(); // Access the auth context

  const userIsLoggedIn = currentUser && currentUser.email;

  const handleProtectedClick = (topic: any) => (e: MouseEvent<HTMLAnchorElement>) => {
    if (!userIsLoggedIn && topic.isLocked && lingoCommandIsLocked) {
      e.preventDefault(); // Prevent navigation
      navigate('/free-content');
    }
  };

  return handleProtectedClick; // Return only the function
};
