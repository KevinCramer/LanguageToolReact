import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { setBackwardRoute, setForwardRoute } from '../../redux-store/route';
import { useEffect, useRef, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { consistentStyles, mobileBreakPoint } from '../../constants';
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import useWindowWidth from '../../hooks/useWindowWidth';

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

  const width = useWindowWidth()

  // Now you can use width to check screen size in your component
  const isMobile = width < mobileBreakPoint; 

  // Check if the current URL starts with '/japanese'
  const onJapanese = location.pathname.startsWith('/japanese') || ( isMobile ? location.pathname.includes('contact') : false);

  const pathWithBackground = location.pathname === '/' 
  || location.pathname === '/account'
  || (isMobile ? false : location.pathname === '/contact');

  // Define dynamic text color class
  const backgroundColorClass = pathWithBackground ? '' : 'bg-gray-800';

  return (
    <>
      <nav className={`${backgroundColorClass} flex justify-between items-center px-2 md:pr-4 ${consistentStyles.textWhite} relative`}>
        <NavLink to='/'>
          <div className={`flex items-center my-3 text-sm md:ml-8`} style={{ fontStretch: isMobile ? '50%' : '100%' }}>
            <div className='text-emerald-400 font-bold text-2xl'>
              L
            </div>
            <div className={`${consistentStyles.textWhite} text-lg`}>
              ingo
            </div>
            <div className='text-emerald-400 font-bold text-2xl'>
              C
            </div>
            <div className={`${consistentStyles.textWhite} text-lg`}>
              ommand
            </div>
          </div>
        </NavLink>
       
        {isMobile && 
        <>
          <NavLink to='/japanese/home-page' className={onJapanese ? `underline ${consistentStyles.textWhite}` : `${consistentStyles.textWhite}`}> 
        Japanese
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? `underline ${consistentStyles.textWhite}` : `${consistentStyles.textWhite}`}> 
          About
          </NavLink>
        </>
        }
        {!(currentUser && currentUser.email) && (
          <button
            className={`${consistentStyles.textWhite} md:mr-8`}
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
                'md:font-bold' : 
                `flex items-center md:font-bold ${consistentStyles.textWhite} rounded-xl`}> 
                <div>Log In </div>
              </div>
            }
          </button>
        )}

        {currentUser && currentUser.email && (
          <div className="relative" ref={dropdownRef}>
            <button className={`${consistentStyles.textWhite}`} onClick={toggleDropdown}>
              <div className='flex justify'>
                <BsPerson className="w-8 h-8 md:w-10 md:h-10 " />
                <FaChevronDown className="inline m-auto w-4 h-4" />
              </div>  
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                <NavLink to='/account' className={`${consistentStyles.textBlack} block px-4 py-2 hover:bg-gray-200 rounded-t-lg text-center`}>
                  Account Settings
                </NavLink>
                <button
                  className={`${consistentStyles.textBlack} block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-b-lg text-center`}
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
          <NavLink to='/japanese/home-page' className={onJapanese ? `underline ${consistentStyles.textWhite} mx-8` : `${consistentStyles.textWhite} mx-8`}> 
        Japanese
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? `underline ${consistentStyles.textWhite} mx-8` : `${consistentStyles.textWhite} mx-8`}> 
          About
          </NavLink>
          <NavLink to='/contact' className={({ isActive }) => isActive ? `underline ${consistentStyles.textWhite} mx-8` : `${consistentStyles.textWhite} mx-8`}> 
          Contact
          </NavLink>
        </div>
      </nav>}
    </>
  );
};

export default Navbar;
