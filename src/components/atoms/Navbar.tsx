import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { displayLogin } from '../../redux-store/auth';
import lingoCommandLogo from '../../assets/lingoCommandLogo.svg';
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import { FaChevronDown } from 'react-icons/fa';

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
  const backgroundColorClass = pathWithBackground ? '' : 'bg-gray-800';

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

  return (
    <div>
      <nav className={`${backgroundColorClass} flex justify-between items-center px-1 md:pr-4 text-white`}>
        <NavLink to='/'>
          <div className={`flex items-center my-3 text-sm md:ml-8`}>
            <div className='text-emerald-400 font-bold text-2xl'>
              L
            </div>
            <div className='text-white text-lg '>
              ingo
            </div>
            <div className='text-emerald-400 font-bold text-2xl '>
              C
            </div>
            <div className='text-white text-lg'>
              ommand
            </div>
          </div>
        </NavLink>
        <NavLink to='/japanese/home-page' className={onJapanese ? 'underline text-white text-sm md:text-base' : 'text-white text-sm md:text-base '}> 
        Japanese
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'underline text-white text-sm md:text-base ' : 'text-white text-sm md:text-base '}> 
          About
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'underline text-white text-sm md:text-base ' : 'text-white text-sm md:text-base '}> 
          Contact
        </NavLink>
       
        {!(currentUser && currentUser.email) && (
          <button
            className='text-white md:mr-8 text-sm md:text-base'
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
    </div>
  );
};

export default Navbar;
