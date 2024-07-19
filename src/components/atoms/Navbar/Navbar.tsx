import './Navbar.scss';
import { closeNavbar, RootState, toggleNavbar } from '../../../redux-store/navbar';
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { displayLogin } from '../../../redux-store/auth';
import { useAuth } from '../../../contexts/AuthContext';
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const reduxNavbar = useSelector((state: RootState) => state.navbar);
  // @ts-ignore
  const { currentUser, logout } = useAuth();

  return (
    <NavbarBs expand="false" expanded={reduxNavbar.isNavbarOpen} 
      onToggle={() => dispatch(toggleNavbar())}>
      <Container>
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="nav-link-custom"
              to="/"
              as={NavLink}
              onClick={() => dispatch(closeNavbar())}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom"
              to="/vocabulary"
              as={NavLink}
              onClick={() => dispatch(closeNavbar())}
            >
              Vocabulary
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom"
              to="/listening-comprehension"
              as={NavLink}
              onClick={() => dispatch(closeNavbar())}
            >
              Listening Comprehension
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom"
              to="/grammar"
              as={NavLink}
              onClick={() => dispatch(closeNavbar())}
            >
              Grammar
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom"
              to="/contactus"
              as={NavLink}
              onClick={() => dispatch(closeNavbar())}
            >
            Contact Us
            </Nav.Link>
            {currentUser && currentUser.email && <Nav.Link
              className="nav-link-custom"
              to="/profile"
              as={NavLink}
              onClick={() => dispatch(closeNavbar())}
            >
            Your Profile
            </Nav.Link>}
            <div className="log-in-log-out"
              onClick={async () => {
                if (currentUser && currentUser.email) {
                  try {
                    await logout();
                    if (location.pathname === '/profile') {
                      navigate('/');
                    }
                    dispatch(closeNavbar())
                  } catch (error) {
                    // eslint-disable-next-line no-console
                    console.error('Failed to log out', error);
                  }
                } else {
                  dispatch(displayLogin());
                }}}>
              {currentUser && currentUser.email ? 'Log Out' : 'Log In'}
            </div>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;