import './About.scss';
import { useEffect, useState } from 'react';
import { mobileBreakPoint } from '../../constants';

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
        <div>
          <div>
          LingoCommand is an educational platform for learning Japanese. It accelerates progress by combining these three key principles:
          </div>
          <ul> 
            <li>
              <b>Customisable Exercises</b>: Select your own Japanese study sessions that perfectly match your learning style and goals with our highly adjustable exercises.
            </li>
            <li>
              <b>Active Recall</b>: Enhance your Japanese retention through consistent memory exercises.
            </li>
            <li>
              <b>Repeated Exposure</b>: Develop your skills through repeated exposure to conversations in Japanese, complemented by targeted reading and listening exercises.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
