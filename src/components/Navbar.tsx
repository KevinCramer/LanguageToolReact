import {Nav, Container, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"

export function Navbar(){
    return(
            <NavbarBs style = {{color: "white"}} className = "bg-black shadow-sm">
                <Container>
                    <Nav.Link to ="/" as= {NavLink}>Home</Nav.Link>
                    <Nav.Link to ="/study" as= {NavLink}>Study</Nav.Link>
                    <Nav.Link to ="/about" as= {NavLink}>About</Nav.Link>
                </Container>
            </NavbarBs>
    )
}