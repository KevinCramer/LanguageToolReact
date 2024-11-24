import '@fortawesome/fontawesome-free/css/all.min.css';
import { closeNavbar, RootStateNavbar } from '../../../redux-store/navbar';
import { Nav, Navbar as NavbarBs, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { displayLogin } from '../../../redux-store/auth';
import { useAuth } from '../../../contexts/AuthContext';
import { useState } from 'react';
import lingoCommandLogo from '../../../assets/lingoCommandLogo.svg';

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

  return (
    <NavbarBs
      style={{
        width: '100%',
        position: 'relative',
        height: '6rem',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent', // Ensure no background color

      }}
    >      
     
      {/* Navigation Section */}
      <Nav
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <Nav.Link
          to="/"
          as={NavLink}
          style={{
            color: isOnLanguagesPage ? 'black' : 'white', // Black if on a Languages page
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            padding: '0.5rem 1rem',
            position: 'relative',
            letterSpacing: '0.25rem'
          }}
          onClick={() => dispatch(closeNavbar())}
        >
          <img src={lingoCommandLogo} width={80} height={80} alt="LingoCommand Logo"/>
        </Nav.Link>
        <NavDropdown
          title={
            <span
              style={{
                color: isOnLanguagesPage ? 'black' : 'white',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                position: 'relative',
                letterSpacing: '0.25rem'

              }}
            >
              LANGUAGES
            </span>
          }
          id="study-dropdown"
          onToggle={handleDropdownToggle}
          style={{
            padding: '0.5rem 1rem',
          }}
        >
          <NavDropdown.Item
            to="/spanish"
            as={NavLink}
            style={{ whiteSpace: 'nowrap' }}
            onClick={() => dispatch(closeNavbar())}
          >
            Spanish
          </NavDropdown.Item>
          <NavDropdown.Item
            to="/japanese"
            as={NavLink}
            style={{ whiteSpace: 'nowrap' }}
            onClick={() => dispatch(closeNavbar())}
          >
            Japanese
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link
          to="/contact"
          as={NavLink}
          style={{
            color: isOnLanguagesPage ? 'black' : 'white', // Black if on a Languages page
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            padding: '0.5rem 1rem',
            position: 'relative',
            letterSpacing: '0.25rem'
          }}
          onClick={() => dispatch(closeNavbar())}
        >
          CONTACT US
        </Nav.Link>
        {currentUser && currentUser.email && (
          <Nav.Link
            to="/account"
            as={NavLink}
            style={{
              color: isOnLanguagesPage ? 'black' : 'white', // Black if on a Languages page
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              padding: '0.5rem 1rem',
              position: 'relative',
              letterSpacing: '0.25rem'
            }}
            onClick={() => dispatch(closeNavbar())}
          >
            ACCOUNT
          </Nav.Link>
        )}
        <div
          style={{
            color: isOnLanguagesPage ? 'black' : 'white',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            padding: '0.5rem 1rem',
            letterSpacing: '0.25rem'

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
          {currentUser && currentUser.email ? 'LOG OUT' : 'LOG IN'}
        </div>
      </Nav>
    </NavbarBs>
  );
};

export default Navbar;
