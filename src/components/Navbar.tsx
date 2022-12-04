import {Nav} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {NavbarLanguages} from "./NavbarLanguages"
import  "./navbar.css"
export function Navbar(){
    return( 
            <div className ="Container">
                <Nav.Link to ="/" as= {NavLink}>Home</Nav.Link>
                <Nav.Link to ="/about" as= {NavLink}>About</Nav.Link>
                <NavbarLanguages/>
            </div>   
    )
}