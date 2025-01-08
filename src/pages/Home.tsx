import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

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

  return (
    <div className='flex flex-col flex-1  md:flex-row justify-center items-center'>
      <div className='m-2'>
        Learn Japanese Faster
      </div>
      <button className='m-2 p-2 bg-blue-500 text-white'
        onClick={(event) => { navigate('/japanese') }}>
        Start Now 
      </button>
    </div>
  );
};

export default Home;
