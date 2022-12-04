import {Nav} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {NavbarLanguages} from "./NavbarLanguages"
import  "./navbar.css"
export function Navbar(){
    return( <div>
        <div>
            <div>
                <Nav.Link className = "link" to="/" as= {NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link className = "link" to="/about" as= {NavLink}>
                    About
                </Nav.Link>
                <NavbarLanguages/>
            </div>   
        </div>
    </div>
    )
}