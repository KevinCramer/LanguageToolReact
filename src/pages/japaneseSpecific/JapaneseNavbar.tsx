import { consistentStyles, mobileBreakPoint } from '../../constants';
import { NavLink, useLocation } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth';
  
const JapaneseNavbar = () => {
  const width = useWindowWidth(); // Get the current window width
  const location = useLocation(); 

  // Now you can use width to check screen size in your component
  const isMobile = width < mobileBreakPoint 
  return (
    <>
      <nav className='p-4'>
        {/* Add a wrapper div with horizontal overflow */}
        <div 
          className={`${consistentStyles.textBlack} overflow-x-auto whitespace-nowrap`}>
          <ul className="flex space-x-4 justify-start lg:justify-center">
            <li>
              <NavLink 
                to='/japanese/home-page' 
                className={({ isActive }) => (isActive) ? 'block px-4  underline' : 'block px-4 '}
              >
                 Home Page
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
            {isMobile &&
              <li>
                <NavLink 
                  to='/contact' 
                  className={({ isActive }) => isActive ? 'block px-4  underline' : 'block px-4 '}
                >
                 Contact
                </NavLink>
              </li>
            }
           
          </ul>
        </div>
      </nav>
      <hr className='bg-black' />
    </>
  );
};

export default JapaneseNavbar;
