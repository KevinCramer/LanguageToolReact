import { NavLink } from 'react-router-dom';

const JapaneseNavbar = () => {
  return (
    <>
      <nav className='p-4'>
        {/* Add a wrapper div with horizontal overflow */}
        <div className="overflow-x-auto whitespace-nowrap">
          <ul className="flex space-x-4 justify-start lg:justify-center">
            <li>
              <NavLink 
                to='/japanese/home-page' 
                className={({ isActive }) => isActive ? 'block px-4  underline' : 'block px-4 '}
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
                className={({ isActive }) => isActive ? 'block px-4  underline' : 'block px-4 '}
              >
                Writing Systems
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/japanese/vocabulary' 
                className={({ isActive }) => isActive ? 'block px-4  underline' : 'block px-4 '}
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
