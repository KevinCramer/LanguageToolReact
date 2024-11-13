import './NavbarDark.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { closeNavbar, RootStateNavbar, toggleNavbar } from '../../../redux-store/navbar';
import { Container, Nav, Navbar as NavbarBs, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { displayLogin } from '../../../redux-store/auth';
import { useAuth } from '../../../contexts/AuthContext';
import { useState } from 'react';

const NavbarDark = () => {
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

  return (
    <NavbarBs expand="false" expanded={reduxNavbar.isNavbarOpen }
      onToggle={() => dispatch(toggleNavbar())}>
      <Container style ={{ margin: '0px' }}>
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="nav-link-custom2"
              to="/"
              as={NavLink}
              onClick={() => dispatch(closeNavbar())}
            >
              Home
            </Nav.Link>
            <NavDropdown
              className="nav-link-custom2"
              title={
                <span className={`dropdown-title-dark ${isDropdownOpen ? 'open' : 'closed'}`}>
                  <div style={{ 
                    display: 'inline',
                    borderRadius: '5px',
                    fontWeight: 'bold'
                  }} >Languages</div>
                </span>
              }
              id="study-dropdown"
              onToggle={handleDropdownToggle}
            >
              <NavDropdown.Item
                to="/spanish"
                as={NavLink}
                onClick={() => dispatch(closeNavbar())}
                style={{ color:'#4A4A4A' }}
              >
                Spanish
              </NavDropdown.Item>
              <NavDropdown.Item
                to="/japanese"
                as={NavLink}
                onClick={() => dispatch(closeNavbar())}
                style={{ color:'#4A4A4A' }}
              >
                Japanese
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              className="nav-link-custom2"
              to="/contact"
              as={NavLink}
              onClick={() => dispatch(closeNavbar())}
            >
              Contact Us
            </Nav.Link>
            {currentUser && currentUser.email && <Nav.Link
              className="nav-link-custom2"
              to="/account"
              as={NavLink}
              onClick={() => dispatch(closeNavbar())}
            >
                Account
            </Nav.Link>}
            <div className="log-in-log-out-dark"
              onClick={async () => {
                if (currentUser && currentUser.email) {
                  try {
                    await logout();
                    if (location.pathname === '/account') {
                      navigate('/');
                    }
                    dispatch(closeNavbar());
                  } catch (error) {
                    // eslint-disable-next-line no-console
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
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
};

export default NavbarDark;