// src/hooks/useInactivityTimer.tsx

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Adjust the import according to your Firebase setup

const useInactivityTimer = (timeout: number = 1800000) => { // Default to 30 minutes
  const navigate = useNavigate();
  let timer: NodeJS.Timeout;
  const broadcast = new BroadcastChannel('inactivity_channel');

  const resetTimer = () => {
    clearTimeout(timer);
    const currentTime = Date.now();
    localStorage.setItem('lastActivity', currentTime.toString());
    broadcast.postMessage('reset');
    timer = setTimeout(signOut, timeout);
  };

  const signOut = () => {
    auth.signOut().then(() => {
      console.log('User signed out due to inactivity.');
      localStorage.removeItem('lastActivity');
      broadcast.postMessage('signout');
      navigate('/'); // Redirect to login page
    }).catch((error) => {
      console.error('Error signing out: ', error);
    });
  };

  const checkInactivity = () => {
    const lastActivity = localStorage.getItem('lastActivity');
    if (lastActivity) {
      const inactivityPeriod = Date.now() - parseInt(lastActivity, 10);
      if (inactivityPeriod >= timeout) {
        signOut();
      } else {
        timer = setTimeout(signOut, timeout - inactivityPeriod);
      }
    }
  };

  useEffect(() => {
    window.onload = resetTimer;
    document.onmousemove = resetTimer;
    document.onkeypress = resetTimer;
    document.onscroll = resetTimer;
    document.onclick = resetTimer;

    broadcast.onmessage = (event) => {
      if (event.data === 'reset') {
        resetTimer();
      } else if (event.data === 'signout') {
        signOut();
      }
    };

    checkInactivity(); // Check inactivity on mount

    return () => {
      clearTimeout(timer);
      window.onload = null;
      document.onmousemove = null;
      document.onkeypress = null;
      document.onscroll = null;
      document.onclick = null;
      broadcast.close();
    };
  }, []);

  return null; // This hook doesn't render anything
};

export default useInactivityTimer;