import './Navbar.css';
import { Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
              to="/listening-comprehension"
              as={NavLink}
              onClick={closeNavbar} // Close navbar on click
            >
              Listening Comprehension
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
              to="/contactus"
              as={NavLink}
              onClick={closeNavbar} // Close navbar on click
            >
            Contact Us
            </Nav.Link>
          </Nav>
        
        </NavbarBs.Collapse>
      </Container>
    </NavbarBs>
  );
}