import './Home.scss';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mobileBreakPoint } from '../../constants';
import { RootStateNavbar } from '../../redux-store/navbar';
import { useSelector } from 'react-redux';

export const Home = () => {
  const reduxNavbar = useSelector((state: RootStateNavbar) => state.navbar);

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
      <div className="content2">
        {reduxNavbar.isHome && <div style = 
          {{ display:'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>  
          <div
            style={{
              paddingTop: '10px',
              paddingBottom: '10px',
              fontSize: '26px',
              color: 'white',
              letterSpacing: '0.25rem',
            }}
          >
          Learn Japanese Faster
          </div>
          {!isMobile && <div style={{ width: '40px' }}>
          </div>}
          <button
            style={{
              marginTop: '10px',
              marginBottom: '10px',
              marginRight: '00px',
              fontSize: '18px',
              color: 'white',
              backgroundColor: '#1e90ff',
              border: 'none',
              borderRadius: '5px',
              padding: '10px 20px',
              cursor: 'pointer',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease',
              letterSpacing: '0.25rem',
              width: isMobile ? '50%' : ''

            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#4682b4';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#1e90ff';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onClick={(event) => {
              navigate('/japanese'); 
            }}
          >
          Start Now
          </button>
        </div>}
      </div>
    </div>
  );
};

export default Home;
