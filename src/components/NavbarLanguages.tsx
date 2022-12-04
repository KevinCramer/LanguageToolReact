import {Nav} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import  "./navbar.css"


export function NavbarLanguages(){
    return(
            <div className = "mynavbarlanguages">
                <Nav.Link to ="/study/arabic" as= {NavLink}>
                    Arabic 
                </Nav.Link>
                <Nav.Link to ="/study/dutch" as= {NavLink}>
                    Dutch
                </Nav.Link>
                <Nav.Link to ="/study/spanish" as= {NavLink}>
                    Spanish
                </Nav.Link>
            </div>

    )
}