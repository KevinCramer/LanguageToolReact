import React, { useEffect, useState } from 'react';
import './Home.scss';
import japaneseFlag from '../../assets/flag-icons/japanese-flag-icon.svg';
import lingoCommandLogo from '../../assets/lingoCommandLogo.svg';
import spanishFlag from '../../assets/flag-icons/spanish-flag-icon.svg';
import { toggleNavbar } from '../../redux-store/navbar';
import { useDispatch } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent toggleNavbar on flag clicks
  const handleFlagClick = (event: any) => {
    event.stopPropagation();
  };

  // Function to handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
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
    <div onClick={() => dispatch(toggleNavbar())}>
      <div className="imageContent">
      </div>
      <div className="content2">
        <div style ={{ display:'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>  
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
              setIsModalOpen(true);
            }}
          >
          Start Now
          </button>
        </div>

      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            width: '50%',
            height: '50%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker background for better contrast
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: '50%', // Position the top of the modal at the middle of the screen
            left: '50%', // Position the left of the modal at the middle of the screen
            transform: 'translate(-50%, -50%)', // Adjust for modal's own width and height to truly center it
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: '100%', // Take up full width
              height: '100%', // Take up full height
              backgroundColor: 'white', // Modal background
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative', // To position child elements inside
            }}
          >
            <h2 style={{ marginBottom: '100px', fontSize: '24px', color: '#333' }}>
        I want to learn...
            </h2>

            <div style={{ display: 'flex' }}>
              <a href="/spanish" style={{ margin:'30px' }} onClick={handleFlagClick}>
                <img src={spanishFlag} style={{ width: '80px', height: '80px' }} alt="Spanish flag"/>
                <div>
            Spanish
                </div> 
              </a>
              <a href="/japanese" style={{ margin:'30px', marginBottom: '100px' }} onClick={handleFlagClick}>
                <img src={japaneseFlag} style ={{ width: '80px', height: '80px' }} alt="Japanese flag"/>
                <div>
            Japanese
                </div>
              </a>
            </div>
            <button
              style={{
                backgroundColor: '#1e90ff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                padding: '10px 20px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
                transition: 'all 0.3s ease',
              }}
              onClick={closeModal}
            >
        BACK HOME
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
