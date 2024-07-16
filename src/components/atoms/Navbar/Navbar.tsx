import './Navbar.scss';
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const reduxExpanded = useSelector(state=> state.pizza);

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <NavbarBs expand="false" expanded={expanded || reduxExpanded.openNavbar} onToggle={handleNavbarToggle}>
      <Container>
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="nav-link-custom"
              to="/"
              as={NavLink}
              onClick={closeNavbar}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom"
              to="/vocabulary"
              as={NavLink}
              onClick={closeNavbar}
            >
              Vocabulary
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom"
              to="/listening-comprehension"
              as={NavLink}
              onClick={closeNavbar}
            >
              Listening Comprehension
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom"
              to="/grammar"
              as={NavLink}
              onClick={closeNavbar}
            >
              Grammar
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom"
              to="/contactus"
              as={NavLink}
              onClick={closeNavbar}
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