import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { useState } from 'react'; // Import useState hook

export function Navbar() {
  const [expanded, setExpanded] = useState(false); // State to manage navbar expansion

  // Function to toggle navbar collapse
  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  // Function to close navbar when a link is clicked
  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <NavbarBs expand="false" expanded={expanded} onToggle={handleNavbarToggle}>
      <Container>
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className="nav-link-custom"
              style={{ color: '#4A4A4A' }}
              to="/"
              as={NavLink}
              onClick={closeNavbar} // Close navbar on click
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom"
              style={{ color: '#4A4A4A' }}
              to="/vocabulary"
              as={NavLink}
              onClick={closeNavbar} // Close navbar on click
            >
              Vocabulary
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom"
              style={{ color: '#4A4A4A' }}
              to="/grammar"
              as={NavLink}
              onClick={closeNavbar} // Close navbar on click
            >
              Grammar
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom"
              style={{ color: '#4A4A4A' }}
              to="/immersion"
              as={NavLink}
              onClick={closeNavbar} // Close navbar on click
            >
              Immersion
            </Nav.Link>
            <a 
              className="hover-underline"
              style={{ color: '#4A4A4A', marginLeft: '10px' }
              } href="mailto:contact@lingocommand.com"
              onClick={closeNavbar} // Close navbar on click
            >
    contact us
            </a>
          </Nav>
        
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}