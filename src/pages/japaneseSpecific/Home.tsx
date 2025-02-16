import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { consistentStyles } from '../../constants';

export const Home = () => {
  const navigate = useNavigate(); // React Router's navigation hook
  const location = useLocation(); // React Router's location hook

  useEffect(() => {
    // tiktok sets referrer to no-referrer so this hack is required to track traffic from TikTok
    if (window.location.pathname === '/explore') {
      window.location.replace(
        // eslint-disable-next-line @stylistic/js/max-len
        '/?utm_source=tiktok&utm_medium=social&utm_campaign=homepage_campaign'
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
    <div className='flex flex-col flex-1 justify-center items-center'>
      <div className={`m-2 ${consistentStyles.textWhite} text-2xl tracking-custom`}>
        Learn Japanese Faster
      </div>
      <button
        className={`mt-8 border-[1px] border-b-4 ${consistentStyles.blueBackground} 
        ${consistentStyles.darkBlueBorder} bg-200 text-center ${consistentStyles.textWhite} p-2 rounded-2xl
         text-xl transform transition-transform duration-200 hover:scale-105 tracking-custom`}
        onClick={(event) => { navigate('/japanese/home-page') }}
      >
  Start Now
      </button>
  
    </div>    
  );
};

export default Home;
