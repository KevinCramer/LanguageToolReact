import {Container,Nav, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"
export function NavbarLanguages(){
    return( <NavbarBs className= "bg-white shadow-sm mb-3">
        <Container>
            <Nav>
          {/*        <Nav.Link to="/study/amharic" as= {NavLink}>
                    Amharic
                </Nav.Link> */}
                <Nav.Link to="/study/arabic" as= {NavLink}>
                    Arabic 
                </Nav.Link>
                <Nav.Link to="/study/dutch" as= {NavLink}>
                    Dutch
                </Nav.Link>
        {/*         <Nav.Link to="/study/japanese" as= {NavLink}>
                    Japanese
                </Nav.Link> */}
                <Nav.Link to="/study/spanish" as= {NavLink}>
                    Spanish
                </Nav.Link>
            </Nav>
        </Container>
    </NavbarBs>
    )
}