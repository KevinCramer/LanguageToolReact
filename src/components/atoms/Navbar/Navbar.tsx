import './Navbar.scss';
import { closeNavbar, toggleNavbar } from '../../../redux-store/navbar';
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  const reduxStore = useSelector(state=> state.navbar);

  return (
    <NavbarBs expand="false" expanded={reduxStore.isNavbarOpen} 
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
          </Nav>
        
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;