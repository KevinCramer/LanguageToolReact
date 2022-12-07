import {Nav, Container, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export function Navbar(){
    return(
            <NavbarBs className = "bg-white shadow-sm mb-3">
                <Container>
                    <Nav.Link to ="/" as= {NavLink}>Home</Nav.Link>
                    <Nav.Link to ="/about" as= {NavLink}>About</Nav.Link>
                    <DropdownButton id="Languages" title="Languages">
                        <Dropdown.Item href="/study/arabic"><Nav.Link to ="/study/arabic" as= {NavLink}>Arabic</Nav.Link></Dropdown.Item>
                        <Dropdown.Item href="/study/dutch"><Nav.Link to ="/study/dutch" as= {NavLink}>Dutch</Nav.Link></Dropdown.Item>
                        <Dropdown.Item><Nav.Link to ="/study/spanish" as= {NavLink}>Spanish</Nav.Link></Dropdown.Item>
                    </DropdownButton>
                </Container>
            </NavbarBs>
    )
}