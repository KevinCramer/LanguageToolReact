import {Container,Nav, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {NavbarLanguages} from "./NavbarLanguages"
export function Navbar(){
    return( <NavbarBs className= "bg-white shadow-sm mb-3">
        <Container>
            <Nav>
                <Nav.Link to="/" as= {NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/about" as= {NavLink}>
                    About
                </Nav.Link>
            </Nav>
            <NavbarLanguages/>
        </Container>
    </NavbarBs>
    )
}