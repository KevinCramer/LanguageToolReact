
import { createHash, verifyHash } from '../helpers/hash-helpers';
import { useEffect, useRef } from 'react';
import { auth } from '../firebase';
import { BroadcastChannel } from 'broadcast-channel';
import { useNavigate } from 'react-router-dom';

const useInactivityTimer = (timeout: number, closedTimeout: number) => {

  const navigate = useNavigate();
  const channelName = 'inactivity_channel';
  const broadcastRef = useRef<BroadcastChannel | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    const currentTime = Date.now().toString();
    const hash = createHash(currentTime);
    localStorage.setItem('lastActivity', currentTime);
    localStorage.setItem('lastActivityHash', hash);

    if (broadcastRef.current) {
      try {
        broadcastRef.current.postMessage({ type: 'reset' });
      } catch (error) {
        console.error('Error posting reset message:', error);
      }
    }

    timerRef.current = setTimeout(checkInactivityAcrossTabs, timeout);
  };

  const checkInactivityAcrossTabs = () => {
    const lastActivity = localStorage.getItem('lastActivity');
    const lastActivityHash = localStorage.getItem('lastActivityHash');
    if (lastActivity && lastActivityHash && verifyHash(lastActivity, lastActivityHash)) {
      const inactivityPeriod = Date.now() - parseInt(lastActivity, 10);
      if (inactivityPeriod >= timeout) {
        signOut();
      } else {
        timerRef.current = setTimeout(checkInactivityAcrossTabs, timeout - inactivityPeriod);
      }
    } else {
      signOut();
    }
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem('lastActivity');
      localStorage.removeItem('lastActivityHash');

      if (broadcastRef.current) {
        try {
          broadcastRef.current.postMessage({ type: 'signout' });
        } catch (error) {
          console.error('Error posting signout message:', error);
        }
      }

      navigate('/');
    }).catch((error) => {
      console.error('Error signing out: ', error);
    });
  };

  useEffect(() => {
    broadcastRef.current = new BroadcastChannel(channelName);

    const handleMessage = (event: MessageEvent) => {
      const data = event.data as { type?: string };
      if (data?.type === 'reset') {
        resetTimer();
      } else if (data?.type === 'signout') {
        signOut();
      } else {
        console.warn('Received unknown message type:', data);
      }
    };

    broadcastRef.current.addEventListener('message', handleMessage);

    const events = ['load', 'mousemove', 'keypress', 'scroll', 'click'];
    events.forEach(event => window.addEventListener(event, resetTimer));

    const checkAllTabsClosed = () => {
      const lastClose = localStorage.getItem('lastClose');
      if (lastClose) {
        const closedPeriod = Date.now() - parseInt(lastClose, 10);
        if (closedPeriod >= closedTimeout) {
          signOut();
        }
      }
    };

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('lastClose', Date.now().toString());
    });

    checkAllTabsClosed();

    resetTimer();

    const periodicCheck = setInterval(() => {
      checkInactivityAcrossTabs();
    }, 10000); // Increase the interval to reduce load, e.g., 10 seconds

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      clearInterval(periodicCheck);
      events.forEach(event => window.removeEventListener(event, resetTimer));
      if (broadcastRef.current) {
        broadcastRef.current.removeEventListener('message', handleMessage);
        try {
          broadcastRef.current.close(); // Ensure channel is closed on unmount
        } catch (error) {
          console.error('Error closing broadcast channel:', error);
        }
      }
    };
  }, [closedTimeout]);

  return null; // This hook doesn't render anything
};

export default useInactivityTimer;