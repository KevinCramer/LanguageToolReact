import '@fortawesome/fontawesome-free/css/all.min.css';
import { backHome, RootStateNavbar } from '../../../redux-store/navbar';
import { Nav, Navbar as NavbarBs, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { displayLogin } from '../../../redux-store/auth';
import { useAuth } from '../../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import lingoCommandLogo from '../../../assets/lingoCommandLogo.svg';
import './Navbar.scss';
import { mobileBreakPoint } from '../../../constants';
import { BsPerson } from 'react-icons/bs';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // @ts-ignore
  const { currentUser, logout } = useAuth();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = (isOpen: boolean) => {
    setIsDropdownOpen(isOpen);
  };

  const isOnLanguagesPage = location.pathname.startsWith('/japanese');

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
  const isMobile = width < mobileBreakPoint; 

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
            fontSize: isMobile ? '18px' : '20px', 
          }}
          onClick={() => dispatch(backHome())}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <img src={lingoCommandLogo} width={isMobile ? 70 : 90} height={ isMobile ? 70 : 90} alt="LingoCommand Logo" />
            {!isMobile && <div style={{ width: '20px' }}></div>}
            {!isMobile && <div>
              <div>LingoCommand</div>
            </div>}
          </div>
        </Nav.Link>

        <Nav.Link
          to="/japanese"
          as={NavLink}
          style={{
            color: isOnLanguagesPage ? 'black' : 'white',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            position: 'relative',
            fontSize: isMobile ? '18px' : '20px', 
            letterSpacing: isMobile ? '' : '0.25rem',
          }}
        >
          Japanese
        </Nav.Link>
         
        <Nav.Link
          to="/about"
          as={NavLink}
          style={{
            color: isOnLanguagesPage ? 'black' : 'white',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            position: 'relative',
            fontSize: isMobile ? '18px' : '20px', 
            letterSpacing: isMobile ? '' : '0.25rem',
          }}
        >
          About
        </Nav.Link>

        <Nav.Link
          to="/contact"
          as={NavLink}
          style={{
            color: isOnLanguagesPage ? 'black' : 'white',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            position: 'relative',
            fontSize: isMobile ? '18px' : '20px', 
            letterSpacing: isMobile ? '' : '0.25rem',
          }}
        >
          Contact
        </Nav.Link>
        {!(currentUser && currentUser.email) && (
          <div
            style={{
              color: isOnLanguagesPage ? 'black' : 'white',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              fontSize: isMobile ? '18px' : '20px',
              letterSpacing: isMobile ? '' : '0.25rem',
            }}
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
          </div>

        )}
        {currentUser && currentUser.email && (
          <>
            <NavDropdown
              title={
                <span
                  style={{
                    color: isOnLanguagesPage ? 'black' : 'white',
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    position: 'relative',
                    letterSpacing: isMobile ? '' : '0.25rem',
                    fontSize: isMobile ? '18px' : '20px', 
                  }}
                >
                  <BsPerson size={isMobile ? 30 : 40}/>
                </span>
              }
              id="study-dropdown"
              onToggle={handleDropdownToggle}
              align="end"
              style={{
              }}
              className={isOnLanguagesPage ? 'dropdown-language-page' : 'dropdown-other-page'}

            >
              <NavDropdown.Item
                to="/account"
                as={NavLink}
                style={{
                  whiteSpace: 'nowrap',
                  color: 'black',
                  fontSize:'18px', 
                }}
              >
            Account Settings
              </NavDropdown.Item>
              <div
                style={{
                  color: 'black',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  fontSize: '18px',
                  paddingLeft:'15px'
                }}
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
              </div>
            </NavDropdown>
            
          </>
          
        )}
        
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
