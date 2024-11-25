import '@fortawesome/fontawesome-free/css/all.min.css';
import { closeNavbar, RootStateNavbar } from '../../../redux-store/navbar';
import { Nav, Navbar as NavbarBs, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { displayLogin } from '../../../redux-store/auth';
import { useAuth } from '../../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import lingoCommandLogo from '../../../assets/lingoCommandLogo.svg';
import './Navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const reduxNavbar = useSelector((state: RootStateNavbar) => state.navbar);
  // @ts-ignore
  const { currentUser, logout } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = (isOpen: boolean) => {
    setIsDropdownOpen(isOpen);
  };

  const isOnLanguagesPage = location.pathname.startsWith('/spanish') || location.pathname.startsWith('/japanese');

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
  const isMobile = width < 768; // Example: is the screen size less than or equal to 768px?

  return (
    <NavbarBs
      style={{
        width: '100%',
        position: 'relative',
        height: isMobile ? '78px' : '98px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}
    >
      <Nav
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent:'space-around',
          alignItems: 'center',
        }}
      >
        <Nav.Link
          to="/"
          as={NavLink}
          style={{
            color: isOnLanguagesPage ? 'black' : 'white',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            position: 'relative',
            letterSpacing: isMobile ? '' : '0.25rem',
            fontSize: `clamp(18px, 2vw , 20px)`, // Gradually changes from 16px to 20px based on screen width
          }}
          onClick={() => dispatch(closeNavbar())}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <img src={lingoCommandLogo} width={isMobile ? 70 : 90} height={ isMobile ? 70 : 90} alt="LingoCommand Logo" />
            {!isMobile && <div style={{ width: '20px' }}></div>}
            {!isMobile && <div>
              <div>LingoCommand</div>
            </div>}
          </div>
        </Nav.Link>

        <NavDropdown
          title={
            <span
              style={{
                color: isOnLanguagesPage ? 'black' : 'white',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                position: 'relative',
                letterSpacing: isMobile ? '' : '0.25rem',
                fontSize: `clamp(18px, 2vw , 20px)`, // Gradually changes from 16px to 20px based on screen width
              }}
            >
              Languages
            </span>
          }
          id="study-dropdown"
          onToggle={handleDropdownToggle}
          style={{
            padding: '0.5rem 1rem',
          }}
          className={isOnLanguagesPage ? 'dropdown-language-page' : 'dropdown-other-page'}

        >
          <NavDropdown.Item
            to="/spanish"
            as={NavLink}
            style={{
              whiteSpace: 'nowrap',
              color: 'black',
              fontSize: `clamp(14px, 2vw + 0.5rem, 16px)`, // Gradually changes font size for items
            }}
            onClick={() => dispatch(closeNavbar())}
          >
            Spanish
          </NavDropdown.Item>
          <NavDropdown.Item
            to="/japanese"
            as={NavLink}
            style={{
              whiteSpace: 'nowrap',
              color: 'black',
              fontSize: `clamp(14px, 2vw + 0.5rem, 16px)`, // Gradually changes font size for items
            }}
            onClick={() => dispatch(closeNavbar())}
          >
            Japanese
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Link
          to="/contact"
          as={NavLink}
          style={{
            color: isOnLanguagesPage ? 'black' : 'white',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            padding: '0.5rem 1rem',
            position: 'relative',
            fontSize: `clamp(18px, 2vw , 20px)`, // Gradually changes from 16px to 20px based on screen width
            letterSpacing: isMobile ? '' : '0.25rem',
          }}
          onClick={() => dispatch(closeNavbar())}
        >
          Contact Us
        </Nav.Link>

        {currentUser && currentUser.email && (
          <Nav.Link
            to="/account"
            as={NavLink}
            style={{
              color: isOnLanguagesPage ? 'black' : 'white',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              padding: '0.5rem 1rem',
              position: 'relative',
              fontSize: `clamp(18px, 2vw , 20px)`, // Gradually changes from 16px to 20px based on screen width
              letterSpacing: isMobile ? '' : '0.25rem',
            }}
            onClick={() => dispatch(closeNavbar())}
          >
            Account
          </Nav.Link>
        )}

        <div
          style={{
            color: isOnLanguagesPage ? 'black' : 'white',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            padding: '0.5rem 1rem',
            fontSize: `clamp(18px, 2vw , 20px)`, // Gradually changes from 16px to 20px based on screen width
            letterSpacing: isMobile ? '' : '0.25rem',
          }}
          onClick={async () => {
            if (currentUser && currentUser.email) {
              try {
                await logout();
                if (location.pathname === '/account') {
                  navigate('/');
                }
                dispatch(closeNavbar());
              } catch (error) {
                console.error('Failed to log out', error);
              }
            } else {
              dispatch(displayLogin());
            }
          }}
        >
          {currentUser && currentUser.email ? 'Log Out' : 'Log In'}
        </div>
      </Nav>
      <hr
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          border: 'none',
          borderTop: `2px solid ${isOnLanguagesPage ? 'black' : 'white'}`,
          margin: 0,
        }}
      />
    </NavbarBs>
  );
};

export default Navbar;
