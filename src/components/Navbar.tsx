import {Nav, Container, Navbar as NavbarBs} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export function Navbar(){
  return(
    <NavbarBs>
      <Container style={{justifyContent: 'center'}}>
        <Nav.Link style={{margin: '0px 40px 0px 40px'}} to ="/" as= {NavLink}>Home</Nav.Link>
        <Nav.Link style={{margin: '0px 40px 0px 40px'}} to ="/study" as= {NavLink}>Study</Nav.Link>
        <Nav.Link style={{margin: '0px 40px 0px 40px'}} to ="/about" as= {NavLink}>About</Nav.Link>
      </Container>
    </NavbarBs>
  )
}