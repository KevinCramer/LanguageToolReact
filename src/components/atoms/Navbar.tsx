import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { displayLogin } from '../../redux-store/auth';
import lingoCommandLogo from '../../assets/lingoCommandLogo.svg';
import { mobileBreakPoint } from '../../constants';
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // @ts-ignore
  const { currentUser, logout } = useAuth();

  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return windowWidth;
  };

  const width = useWindowWidth();
  const isMobile = width < mobileBreakPoint;

  return (
    <nav>
      <div>
        <NavLink to="/">
          <div>
            <img
              src={lingoCommandLogo}
              width={isMobile ? 70 : 90}
              height={isMobile ? 70 : 90}
              alt="LingoCommand Logo"
            />
            {!isMobile && (
              <div>LingoCommand</div>
            )}
          </div>
        </NavLink>

        <div>
          <NavLink to="/japanese">
            Japanese
          </NavLink>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/contact">
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
                <BsPerson size={isMobile ? 30 : 40} />
              </button>
              <div>
                <NavLink
                  to="/account">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
