import './Home.scss';
import { useEffect, useState } from 'react';
import japaneseFlag from '../../assets/flag-icons/japanese-flag-icon.svg';
import spanishFlag from '../../assets/flag-icons/spanish-flag-icon.svg';
import { backHome, RootStateNavbar, startNow } from '../../redux-store/navbar';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();

  const reduxNavbar = useSelector((state: RootStateNavbar) => state.navbar);

  // Prevent toggleNavbar on flag clicks
  const handleFlagClick = (event: any) => {
    event.stopPropagation();
  };

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
  const isMobile = width < 768; // Example: is the screen size less than or equal to 768px?

  return (
    <div>
      <div className="content2">
        {reduxNavbar.isHome && <div style ={{ display:'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>  
          <div
            style={{
              paddingTop: '10px',
              paddingBottom: '10px',
              fontSize: '26px',
              color: 'white',
              letterSpacing: '0.25rem',
            }}
          >
          Learn Foreign Languages Faster
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
              event.stopPropagation(); // Prevent toggleNavbar
              dispatch(startNow())
            }}
          >
          Start Now
          </button>
        </div>}
        { !reduxNavbar.isHome && <div style={{ }}>
          <a href="/spanish" style={{ margin:'30px', textDecorationColor: 'white' }} onClick={handleFlagClick}>
            <div style={{ display:'flex', flexDirection:'row', alignItems: 'center' }}>
              <img src={spanishFlag} style={{ width: '80px', height: '80px' }} alt="Spanish flag"/>
              <div style={{ width: '20px' }}>
              </div>
              <div style={{ color:'white', }}>
                            Spanish
              </div> 
            </div> 
          </a>
          <a href="/japanese" style={{ margin:'30px', marginBottom: '100px', textDecorationColor: 'white' }} onClick={handleFlagClick}>
            <div style={{ display:'flex', flexDirection:'row', alignItems: 'center' }}>
              <img src={japaneseFlag} style ={{ width: '80px', height: '80px' }} alt="Japanese flag"/>
              <div style={{ width: '20px' }}>
              </div>
              <div style={{ color:'white' }}>
                            Japanese
              </div>
            </div> 
          </a>
          <div style={{ height:'40px' }}>

          </div>
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
              event.stopPropagation(); // Prevent toggleNavbar
              dispatch(backHome());
            }}
          >
          Back Home
          </button>
        </div>}
      </div>

    </div>
  );
};

export default Home;
