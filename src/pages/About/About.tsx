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
          LingoCommand is an educational platform for foreign language learning. It accelerates progress by combining these three key principles:
          </div>
          <ul> 
            <li style={{ marginTop: '20px' }}>
              <b>Active Recall</b>: Enhance your language retention through consistent memory exercises.
            </li>
            <li style={{ marginTop: '20px' }}>
              <b>Repeated Exposure</b>: Build mastery through repeated exposure to conversations in your target language, supported by focused reading and listening exercises.
            </li>
            <li style={{ marginTop: '20px' }}>
              <b>Customisable Settings</b>: Tailor your learning experience with highly customisable exercises to suit your specific needs.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
