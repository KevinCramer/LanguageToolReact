import {Nav, Container, Navbar as NavbarBs} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
export function Navbar(){
  return(
    <NavbarBs expand="lg" className="bg-body-tertiary" >
      <Container style={{justifyContent: 'center'}}>
        <NavbarBs.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBs.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={{margin: '0px 20px 0px 20px'}} to ="/" as= {NavLink}>Home</Nav.Link>
            <Nav.Link style={{margin: '0px 20px 0px 20px'}} to ="/study" as= {NavLink}>Study</Nav.Link>
            <Nav.Link style={{margin: '0px 20px 0px 20px'}} to ="/about" as= {NavLink}>About</Nav.Link>
          </Nav>
        </NavbarBs.Collapse >
      </Container>
    </NavbarBs>
  )
}