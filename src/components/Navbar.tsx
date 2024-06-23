import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export function Navbar() {
  return (
    <NavbarBs expand="false">
      <Container>
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="nav-link-custom"
              style={{ color: '#4A4A4A' }}
              to="/"
              as={NavLink}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom"
              style={{ color: '#4A4A4A' }}
              to="/vocabulary"
              as={NavLink}
            >
              Vocabulary
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom"
              style={{ color: '#4A4A4A' }}
              to="/grammar"
              as={NavLink}
            >
              Grammar
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom"
              style={{ color: '#4A4A4A' }}
              to="/immersion"
              as={NavLink}
            >
              Immersion
            </Nav.Link>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}