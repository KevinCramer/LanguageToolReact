import '@fortawesome/fontawesome-free/css/all.min.css';
import { backHome, RootStateNavbar } from '../../../redux-store/navbar';
import { Nav, Navbar as NavbarBs, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { displayLogin } from '../../../redux-store/auth';
import { useAuth } from '../../../contexts/AuthContext';
import { useEffect, useState } from 'react';
import lingoCommandLogo from '../../../assets/lingoCommandLogo.svg';
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
    <NavbarBs>
      <Nav>
        <Nav.Link
          to="/"
          as={NavLink}
          onClick={() => dispatch(backHome())}
        >
          <div>
            <img src={lingoCommandLogo} width={isMobile ? 70 : 90} height={ isMobile ? 70 : 90} alt="LingoCommand Logo" />
            {!isMobile && <div></div>}
            {!isMobile && <div>
              <div>LingoCommand</div>
            </div>}
          </div>
        </Nav.Link>

        <Nav.Link
          to="/japanese"
          as={NavLink}
        >
          Japanese
        </Nav.Link>
         
        <Nav.Link
          to="/about"
          as={NavLink}
        >
          About
        </Nav.Link>

        <Nav.Link
          to="/contact"
          as={NavLink}
        >
          Contact
        </Nav.Link>
        {!(currentUser && currentUser.email) && (
          <Nav.Link>
            <div
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
          </Nav.Link>
        )}
        {currentUser && currentUser.email && (
          <>
            <NavDropdown
              title={
                <span>
                  <BsPerson size={isMobile ? 30 : 40}/>
                </span>
              }
              id="study-dropdown"
              onToggle={handleDropdownToggle}
              align="end"
            >
              <NavDropdown.Item
                to="/account"
                as={NavLink}>
            Account Settings
              </NavDropdown.Item>
              <div
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
      <hr/>
    </NavbarBs>
  );
};

export default Navbar;
