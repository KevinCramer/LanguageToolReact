import {Nav, Container, Navbar as NavbarBs} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
export function Navbar(){
  return(
    <NavbarBs className="bg-body-tertiary" >
      <Container style={{justifyContent: 'center'}}>
        <Nav>
          <Nav.Link style={{margin: '0px 10px 0px 10px'}} to ="/" as= {NavLink}>Home</Nav.Link>
          <Nav.Link style={{margin: '0px 10px 0px 10px'}} 
            to ="/vocabulary" as= {NavLink}>Vocabulary</Nav.Link>
          <Nav.Link style={{margin: '0px 10px 0px 10px'}} 
            to ="/grammar" as= {NavLink}>Grammar</Nav.Link>
        <Nav.Link style={{margin: '0px 10px 0px 10px'}} 
            to ="/immersion" as= {NavLink}>Immersion</Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  )
}