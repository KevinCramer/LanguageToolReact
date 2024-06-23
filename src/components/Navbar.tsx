import { Container, Nav , Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './navbar.css'
export function Navbar(){
  return(
    <NavbarBs style={{ backgroundColor: '#4A4A4A' }} >
      <Container style={{ justifyContent: 'center' }}>
        <Nav>
          <Nav.Link 
            className="nav-link-custom" 
            style={{ color: '#F8F8F8' }}
            to ="/" 
            as= {NavLink}>
              Home
          </Nav.Link>
          <Nav.Link 
            className="nav-link-custom"  
            style={{ color: '#F8F8F8' }}
            to ="/vocabulary" 
            as= {NavLink}>
              Vocabulary
          </Nav.Link>
          <Nav.Link 
            style={{ color: '#F8F8F8' }}
            className="nav-link-custom" 
            to="/grammar"
            as={NavLink}>
              Grammar
          </Nav.Link>
          <Nav.Link 
            style={{ color: '#F8F8F8' }}
            className="nav-link-custom"
            to="/immersion"
            as={NavLink}>
            Immersion
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  )
}