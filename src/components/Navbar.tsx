import {Nav, Container, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"
export function Navbar(){
    return(
            <NavbarBs className = "bg-white shadow-sm mb-3">
                <Container>
                    <Nav.Link to ="/" as= {NavLink}>Home</Nav.Link>
                    <Nav.Link to ="/about" as= {NavLink}>About</Nav.Link>
                    <NavbarBs className = "bg-white  mb-1">
                        <Nav.Link to ="/study/arabic" as= {NavLink}><label style= {{width: "100px"}}>Arabic</label></Nav.Link>
                        <Nav.Link to ="/study/dutch" as= {NavLink}><label style= {{width: "100px"}}>Dutch</label></Nav.Link>
                        <Nav.Link to ="/study/spanish" as= {NavLink}><label style= {{width: "100px"}}>Spanish</label></Nav.Link>
                    </NavbarBs>
                </Container>
            </NavbarBs>
    )
}