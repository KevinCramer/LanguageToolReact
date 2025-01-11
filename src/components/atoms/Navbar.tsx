import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { displayLogin } from '../../redux-store/auth';
import lingoCommandLogo from '../../assets/lingoCommandLogo.svg';
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // @ts-ignore
  const { currentUser, logout } = useAuth();

  const pathWithBackground =
    location.pathname === '/' ||
    location.pathname === '/contact' ||
    location.pathname === '/account';

  // Define dynamic text color class
  const backgroundColorClass = pathWithBackground ? '' : 'bg-gray-500';

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

  return (
    <div>
      <nav className={`${backgroundColorClass} flex justify-between items-center px-4 py-0.5 md:text-xl text-white md:tracking-custom`}>
        <NavLink to='/'>
          <div className='flex items-center'>
            <img
              src={lingoCommandLogo}
              alt='LingoCommand Logo'
              className='w-16 h-16 md:w-24 md:h-24 md:mr-2'
            />
          </div>
        </NavLink>
        <NavLink to='/japanese' className='text-white'>
          Japanese
        </NavLink>
        <NavLink to='/about' className='text-white'>
          About
        </NavLink>
        <NavLink to='/contact' className='text-white'>
          Contact
        </NavLink>

        {!(currentUser && currentUser.email) && (
          <button
            className='text-white'
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
                dispatch(displayLogin());
              }
            }}
          >
            {currentUser && currentUser.email ? 'Log Out' : 'Log In '}
            { currentUser && currentUser.email ? null : <FaChevronRight className="inline w-3 h-3" /> }
          </button>
        )}

        {currentUser && currentUser.email && (
          <div className="relative" ref={dropdownRef}>
            <button className='text-white' onClick={toggleDropdown}>
              <div className='flex justify'>
                <BsPerson className="w-3 h-8 md:w-10 md:h-10 " />
                <FaChevronDown className="inline m-auto w-4 h-4" />
              </div>  
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
                <NavLink to='/account' className={`text-black text-sm block px-4 py-2 hover:bg-gray-200 rounded-t-lg text-center`}>
                  Account Settings
                </NavLink>
                <button
                  className={`text-black text-sm block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-b-lg text-center`}
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
                      dispatch(displayLogin());
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
      {pathWithBackground && <hr className='bg-white opacity-50' />}
    </div>
  );
};

export default Navbar;
