import { NavLink, useLocation } from 'react-router-dom';
import { fontStretch } from '../../constants';
import { useEffect, useState } from 'react';

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
  
const JapaneseNavbar = () => {
  const width = useWindowWidth(); // Get the current window width
  const location = useLocation(); 

  // Now you can use width to check screen size in your component
  const isMobile = width < 768; 
  const navbarFontStretch = isMobile ? fontStretch : '100%'
  console.log('location.pathname:', location.pathname);
  return (
    <>
      <nav className='p-4'>
        {/* Add a wrapper div with horizontal overflow */}
        <div className="overflow-x-auto whitespace-nowrap" style={{ fontStretch: navbarFontStretch }}>
          <ul className="flex space-x-4 justify-start lg:justify-center">
            <li>
              <NavLink 
                to='/japanese/home-page' 
                className={({ isActive }) => (isActive) ? 'block px-4  underline' : 'block px-4 '}
              >
                Japanese Home Page
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/japanese/study-guide' 
                className={({ isActive }) => isActive ? 'block px-4  underline' : 'block px-4 '}
              >
                Study Guide
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/japanese/writing-systems-explained' 
                className={({ isActive }) => isActive 
                || location.pathname.includes('hiragana-explained') 
                || location.pathname.includes('katakana-explained')
                || location.pathname.includes('kanji-explained')
                || location.pathname.includes('how-to-type-japanese')
                || location.pathname.includes('writing-systems')

                  ? 'block px-4  underline' : 'block px-4 '}
              >
                Writing Systems
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/japanese/vocabulary-guide' 
                className={({ isActive }) => isActive 
                || location.pathname.includes('vocabulary') 
                  ? 'block px-4  underline' : 'block px-4 '}
              >
                Vocabulary
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/japanese/grammar/keigo' 
                className={({ isActive }) => isActive ? 'block px-4  underline' : 'block px-4 '}
              >
                Grammar
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/japanese/reading-listening/aikos-book-sanctuary' 
                className={({ isActive }) => isActive ? 'block px-4  underline' : 'block px-4 '}
              >
                Reading/Listening
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <hr className='bg-black' />
    </>
  );
};

export default JapaneseNavbar;
