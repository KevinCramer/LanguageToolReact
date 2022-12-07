import {Nav, Container, Navbar as NavbarBs} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export function Navbar(){
    return(
            <NavbarBs style = {{color: "white"}} className = "bg-black shadow-sm">
                <Container>
                    <Nav.Link to ="/" as= {NavLink}>Home</Nav.Link>
                    <Nav.Link to ="/about" as= {NavLink}>About</Nav.Link>
                    <Nav.Link to ="/study/Arabic" as= {NavLink}>Learn</Nav.Link>
                    <DropdownButton variant="Success" id="LT" title="LT">
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Login</Dropdown.Item>
                        <Dropdown.Item>Sign Up</Dropdown.Item>
                        <Dropdown.Item>Sign Out</Dropdown.Item>
                    </DropdownButton>
                </Container>
            </NavbarBs>
    )
}