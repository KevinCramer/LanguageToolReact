import {Nav} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import  "./navbar.css"
export function Navbar(){
    return( 
            <div>
                <div className="mynavbar">
                    <Nav.Link to ="/" as= {NavLink}>Home</Nav.Link>
                    <Nav.Link to ="/about" as= {NavLink}>About</Nav.Link>
                    <div className="mynavbarlanguages">
                        <Nav.Link to ="/study/arabic" as= {NavLink}>Arabic</Nav.Link>
                    <div className="mynavbarlanguages">
                    <Nav.Link to ="/study/dutch" as= {NavLink}>Dutch</Nav.Link>
                    </div>
                    <div className="mynavbarlanguages">
                    <Nav.Link to ="/study/spanish" as= {NavLink}>Spanish</Nav.Link>
                    </div>
                    </div>

                </div>
            </div>   
    )
}