import { createHash, verifyHash } from '../helpers/hash-helpers';
import { auth } from '../firebase'; 
import { BroadcastChannel } from 'broadcast-channel';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useInactivityTimer = (timeout: number = 1800000) => {
  const navigate = useNavigate();
  let timer: NodeJS.Timeout;
  const channelName = 'inactivity_channel';
  const broadcast = new BroadcastChannel(channelName);

  const resetTimer = () => {
    clearTimeout(timer);
    const currentTime = Date.now().toString();
    const hash = createHash(currentTime);
    localStorage.setItem('lastActivity', currentTime);
    localStorage.setItem('lastActivityHash', hash);

    try {
      broadcast.postMessage('reset');
    } catch (error) {
      console.error('Error posting reset message:', error);
    }

    timer = setTimeout(checkInactivityAcrossTabs, timeout);
  };

  const checkInactivityAcrossTabs = () => {
    const lastActivity = localStorage.getItem('lastActivity');
    const lastActivityHash = localStorage.getItem('lastActivityHash');
    if (lastActivity && lastActivityHash && verifyHash(lastActivity, lastActivityHash)) {
      const inactivityPeriod = Date.now() - parseInt(lastActivity, 10);
      if (inactivityPeriod >= timeout) {
        signOut();
      } else {
        timer = setTimeout(checkInactivityAcrossTabs, timeout - inactivityPeriod);
      }
    } else {
      signOut();
    }
  };

  const signOut = () => {
    auth.signOut().then(() => {
      console.log('User signed out due to inactivity.');
      localStorage.removeItem('lastActivity');
      localStorage.removeItem('lastActivityHash');

      try {
        broadcast.postMessage('signout');
      } catch (error) {
        console.error('Error posting signout message:', error);
      }

      navigate('/'); 
    }).catch((error) => {
      console.error('Error signing out: ', error);
    });
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data === 'reset') {
        resetTimer();
      } else if (event.data === 'signout') {
        // Handle signout message if necessary, e.g., in case of any UI update
        if (document.visibilityState === 'visible') {
          signOut();
        }
      }
    };

    broadcast.addEventListener('message', handleMessage);

    const events = ['load', 'mousemove', 'keypress', 'scroll', 'click'];
    events.forEach(event => window.addEventListener(event, resetTimer));

    resetTimer(); // Initialize the timer on mount

    return () => {
      clearTimeout(timer);
      events.forEach(event => window.removeEventListener(event, resetTimer));
      broadcast.removeEventListener('message', handleMessage);
      try {
        broadcast.close(); // Ensure channel is closed on unmount
      } catch (error) {
        console.error('Error closing broadcast channel:', error);
      }
    };
  }, []);

  return null; // This hook doesn't render anything
};

export default useInactivityTimer;