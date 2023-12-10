import {Nav, Container, Navbar as NavbarBs} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export function Navbar(){
  return(
    <NavbarBs>
      <Container style={{justifyContent: 'center'}}>
        <Nav.Link style={{margin: '0px 20px 0px 20px'}} to ="/" as= {NavLink}>Home</Nav.Link>
        <Nav.Link style={{margin: '0px 20px 0px 20px'}} to ="/study" as= {NavLink}>Study</Nav.Link>
        <Nav.Link style={{margin: '0px 20px 0px 20px'}} to ="/about" as= {NavLink}>About</Nav.Link>
      </Container>
    </NavbarBs>
  )
}