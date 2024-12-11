import { useEffect, useState } from 'react';
import { mobileBreakPoint } from '../../constants';
import './About.scss';

const About = () => {

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

  const isMobile = width < mobileBreakPoint; 
  return (
    <>
      <div className="contact-us-container">
        <div style={{ color: 'black', backgroundColor: 'white', padding:'10px', borderRadius: '10px', maxWidth: '820px', fontSize: isMobile ? '16px' : '20px', }}>
          <div style={{ marginTop:'10px' }}>
          LingoCommand is an educational platform for foreign language learning. It boosts language learning by combining these key principles:
          </div>
          <ul> 
            <li style={{ marginTop: '20px' }}>
              <b>Active Recall</b>: Enhance your language retention through memory exercises.
            </li>
            <li style={{ marginTop: '20px' }}>
              <b>Repeated Exposure</b>: Master your target language naturally through exposure to real-world conversations with reading and listening exercises.
            </li>
            <li style={{ marginTop: '20px' }}>
              <b>Customisable Settings</b>: We provide highly customisable language learning exercises so you can tailor your learning experience to match your needs exactly.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
