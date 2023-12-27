import {Nav, Container, Navbar as NavbarBs} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
export function Navbar(){
  return(
    <NavbarBs className="bg-body-tertiary" >
      <Container style={{justifyContent: 'center'}}>
        <Nav>
          <Nav.Link style={{margin: '0px 20px 0px 20px'}} to ="/" as= {NavLink}>Home</Nav.Link>
          <Nav.Link style={{margin: '0px 20px 0px 20px'}} 
            to ="/vocabulary" as= {NavLink}>Vocabulary</Nav.Link>
          <Nav.Link style={{margin: '0px 20px 0px 20px'}} 
            to ="/grammar" as= {NavLink}>Grammar</Nav.Link>
          <Nav.Link style={{margin: '0px 20px 0px 20px'}} 
            to ="/about" as= {NavLink}>About</Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  )
}