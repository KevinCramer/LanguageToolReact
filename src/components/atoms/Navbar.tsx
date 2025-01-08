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

  return (
    <div>
      <nav className='flex justify-around items-center px-2 py-0.5 md:text-xl md:tracking-custom'>
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
        <NavLink to='/japanese'>
            Japanese
        </NavLink>
        <NavLink to='/about'>
            About
        </NavLink>
        <NavLink to='/contact'>
            Contact
        </NavLink>

        {!(currentUser && currentUser.email) && (
          <button
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
            <button>
              <BsPerson className="w-8 h-8 md:w-10 md:h-10" />
            </button>
            <div>
              <NavLink
                to='/account'>
                    Account Settings
              </NavLink>
              <button
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
                }}>
                    Log Out
              </button>
            </div>
          </div>
        )}
      </nav>
      <hr className='bg-black h-0.5' />
    </div>
  );
};

export default Navbar;
