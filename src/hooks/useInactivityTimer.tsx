import { createHash, verifyHash } from '../helpers/hash-helpers';
import { auth } from '../firebase';
import { BroadcastChannel } from 'broadcast-channel';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useInactivityTimer = (timeout: number) => {
  const navigate = useNavigate();
  let timer: NodeJS.Timeout;
  const broadcast = new BroadcastChannel('inactivity_channel');

  const resetTimer = () => {
    clearTimeout(timer);
    const currentTime = Date.now().toString();
    const hash = createHash(currentTime);
    localStorage.setItem('lastActivity', currentTime);
    localStorage.setItem('lastActivityHash', hash);
    broadcast.postMessage('reset');
    timer = setTimeout(signOut, timeout);
  };

  const signOut = () => {
    auth.signOut().then(() => {
      console.log('User signed out due to inactivity.');
      localStorage.removeItem('lastActivity');
      localStorage.removeItem('lastActivityHash');
      broadcast.postMessage('signout');
      navigate('/'); 
    }).catch((error) => {
      console.error('Error signing out: ', error);
    });
  };

  const checkInactivity = () => {
    const lastActivity = localStorage.getItem('lastActivity');
    const lastActivityHash = localStorage.getItem('lastActivityHash');
    if (lastActivity && lastActivityHash && verifyHash(lastActivity, lastActivityHash)) {
      const inactivityPeriod = Date.now() - parseInt(lastActivity, 10);
      if (inactivityPeriod >= timeout) {
        signOut();
      } else {
        timer = setTimeout(signOut, timeout - inactivityPeriod);
      }
    } else {
      // Hash verification failed or no data found
      signOut();
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