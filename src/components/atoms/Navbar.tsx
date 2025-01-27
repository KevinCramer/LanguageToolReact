import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { useAuth } from '../../contexts/AuthContext';
import { FaChevronDown } from 'react-icons/fa';

import { useEffect, useRef, useState } from 'react';
import { fontStretch } from '../../constants';
import { setBackwardRoute, setForwardRoute } from '../../redux-store/route';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // @ts-ignore
  const { currentUser, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  // Correct the type of dropdownRef to be a reference to a HTMLDivElement
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Check if the current URL starts with '/japanese'
  const onJapanese = location.pathname.startsWith('/japanese');

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
  const isMobile = width < 768; 

  const pathWithBackground = location.pathname === '/' 
  || location.pathname === '/account'
  || (isMobile ? false : location.pathname === '/contact');

  // Define dynamic text color class
  const backgroundColorClass = pathWithBackground ? '' : 'bg-gray-800';

  const navbarFontStretch = isMobile ? fontStretch : '100%'
  return (
    <>
      <nav className={`${backgroundColorClass} flex justify-between items-center px-2 md:pr-4 text-white relative`}>
        <NavLink to='/'>
          <div className={`flex items-center my-3 text-sm md:ml-8`} style={{ fontStretch: '100%' }}>
            <div className='text-emerald-400 font-bold text-2xl'>
              L
            </div>
            <div className='text-white text-lg '>
              ingo
            </div>
            <div className='text-emerald-400 font-bold text-2xl'>
              C
            </div>
            <div className='text-white text-lg'>
              ommand
            </div>
          </div>
        </NavLink>
       
        {isMobile && 
        <>
          <NavLink to='/japanese/home-page' className={onJapanese ? 'underline text-white' : 'text-white '}> 
        Japanese
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'underline text-white ' : 'text-white '}style={{ fontStretch: navbarFontStretch }}> 
          About
          </NavLink>
        </>
        }
        {!(currentUser && currentUser.email) && (
          <button
            className='text-white md:mr-8'
            style={{ fontStretch: navbarFontStretch }}
            onClick={async () => {
              if (currentUser && currentUser.email) {
                try {
                  await logout();
                  if (location.pathname === '/account') {
                    navigate('/');
                  }
                } catch (error) {
                  console.error('Failed to log out', error);
                }
              } else {
                dispatch(setBackwardRoute(location.pathname));
                dispatch(setForwardRoute(location.pathname));
                navigate('/login'); }
            }}
          >
            {currentUser && currentUser.email ? 'Log Out' : 
              <div className={pathWithBackground ? 
                'font-bold' : 
                'flex items-center font-bold text-white rounded-xl'}> 
                <div>Log In </div>
              </div>
            }
          </button>
        )}

        {currentUser && currentUser.email && (
          <div className="relative" ref={dropdownRef}>
            <button className='text-white' onClick={toggleDropdown}>
              <div className='flex justify'>
                <BsPerson className="w-8 h-8 md:w-10 md:h-10 " />
                <FaChevronDown className="inline m-auto w-4 h-4" />
              </div>  
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                <NavLink to='/account' className={`text-black block px-4 py-2 hover:bg-gray-200 rounded-t-lg text-center`}>
                  Account Settings
                </NavLink>
                <button
                  className={`text-black block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-b-lg text-center`}
                  onClick={async () => {
                    if (currentUser && currentUser.email) {
                      try {
                        await logout();
                        if (location.pathname === '/account') {
                          navigate('/');
                        }
                      } catch (error) {
                        console.error('Failed to log out', error);
                      }
                    } else {
                      dispatch(setBackwardRoute(location.pathname));
                      dispatch(setForwardRoute(location.pathname));
                      navigate('/login');
                    }
                  }}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
      {!isMobile && true && <nav className="absolute left-1/2 transform -translate-x-1/2 z-1 bg-opacity-50 h-14 flex items-center px-4">
        <div>
          <NavLink to='/japanese/home-page' className={onJapanese ? 'underline text-white mx-8' : 'text-white mx-8 '}> 
        Japanese
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'underline text-white mx-8 ' : 'text-white mx-8 '}> 
          About
          </NavLink>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'underline text-white mx-8 ' : 'text-white mx-8 '}> 
          Contact
          </NavLink>
        </div>
      </nav>}
    </>
  );
};

export default Navbar;
