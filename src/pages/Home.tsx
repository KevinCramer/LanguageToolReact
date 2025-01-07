import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mobileBreakPoint } from '../constants';

export const Home = () => {
  const navigate = useNavigate(); // React Router's navigation hook
  const location = useLocation(); // React Router's location hook

  useEffect(() => {
    // tiktok sets referrer to no-referrer so this hack is required to track traffic from TikTok
    if (window.location.pathname === '/explore') {
      window.location.replace(
        // eslint-disable-next-line @stylistic/js/max-len
        'https://www.lingocommand.com/?utm_source=tiktok&utm_medium=social&utm_campaign=homepage_campaign'
      );
    }
  }, []);
  
  // UTM tracking logic
  useEffect(() => {
    const referrerMap = {
      'facebook.com': {
        utm_source: 'facebook',
        utm_medium: 'social',
        utm_campaign: 'homepage_campaign',
      },
      'instagram.com': {
        urm_source: 'instagram',
        utm_medium: 'social',
        utm_campaign: 'homepage_campaign',

      },
      'youtube.com': {
        utm_source: 'youtube',
        utm_medium: 'social',
        utm_campaign: 'homepage_campaign',
      },
      'linkedin.com': {
        utm_source: 'linkedin',
        utm_medium: 'social',
        utm_campaign: 'homepage_campaign',
      },
      'pinterest.com': {
        utm_source: 'pinterest',
        utm_medium: 'social',
        utm_campaign: 'homepage_campaign',
      },
    };

    const referrer = document.referrer;

    if (referrer) {
      const matchedSource = Object.keys(referrerMap).find((source) =>
        referrer.includes(source)
      );

      if (matchedSource) {
        const utmParams = referrerMap[matchedSource as keyof typeof referrerMap];
        const currentSearchParams = new URLSearchParams(location.search);
      
        const hasUTMs = Object.keys(utmParams).every((key) =>
          currentSearchParams.has(key)
        );
      
        if (!hasUTMs) {
          Object.entries(utmParams).forEach(([key, value]) => {
            currentSearchParams.set(key, value);
          });
      
          const updatedURL = `${location.pathname}?${currentSearchParams.toString()}`;
          navigate(updatedURL, { replace: true });
        }
      }
    }
  }, [location, navigate]);

  // Responsive width logic
  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
      // Update the windowWidth state when the window is resized
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      // Add event listener to handle window resizing
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return windowWidth;
  };

  const width = useWindowWidth(); // Get the current window width

  // Now you can use width to check screen size in your component
  const isMobile = width < mobileBreakPoint

  return (
    <div>
      <div>
        <div>  
          <div>
          Learn Japanese Faster
          </div>
          {!isMobile && <div>
          </div>}
          <button
            onClick={(event) => {
              navigate('/japanese'); 
            }}
          >
          Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
