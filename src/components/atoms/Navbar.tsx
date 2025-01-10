import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs';
import { displayLogin } from '../../redux-store/auth';
import lingoCommandLogo from '../../assets/lingoCommandLogo.svg';
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch } from 'react-redux';

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
  const textColorClass = pathWithBackground ? 'text-white' : 'text-white';
  const backgroundColorClass = pathWithBackground ? '' : 'bg-gray-500';
  const lineBreakColorClass = pathWithBackground ? 'bg-white opacity-50' : 'bg-black h-0.5 opacity-50';

  return (
    <div>
      <nav className={`${backgroundColorClass} flex justify-between items-center px-4 py-0.5 md:text-xl md:tracking-custom ${textColorClass}`}>
        <NavLink to='/'>
          <div className='flex items-center'>
            <img
              src={lingoCommandLogo}
              alt='LingoCommand Logo'
              className='w-16 h-16 md:w-24 md:h-24 md:mr-2'
            />
            <div className="hidden md:block">LingoCommand</div>
          </div>
        </NavLink>
        <NavLink to='/japanese' className={textColorClass}>
          Japanese
        </NavLink>
        <NavLink to='/about' className={textColorClass}>
          About
        </NavLink>
        <NavLink to='/contact' className={textColorClass}>
          Contact
        </NavLink>

        {!(currentUser && currentUser.email) && (
          <button
            className={textColorClass}
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
            {currentUser && currentUser.email ? 'Log Out' : 'Log In'}
          </button>
        )}

        {currentUser && currentUser.email && (
          <div>
            <button className={textColorClass}>
              <BsPerson className="w-8 h-8 md:w-10 md:h-10" />
            </button>
            <div>
              <NavLink to='/account' className={textColorClass}>
                Account Settings
              </NavLink>
              <button
                className={textColorClass}
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
          </div>
        )}
      </nav>
      <hr className={lineBreakColorClass} />
    </div>
  );
};

export default Navbar;
