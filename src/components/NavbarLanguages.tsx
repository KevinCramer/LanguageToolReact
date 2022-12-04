import {Nav} from "react-bootstrap"
import {NavLink} from "react-router-dom"
export function NavbarLanguages(){
    return( <div>
        <div>
            <div>
          {/*        <Nav.Link to="/study/amharic" as= {NavLink}>
                    Amharic
                </Nav.Link> */}
                <Nav.Link className = "nav-links"  to="/study/arabic" as= {NavLink}>
                    Arabic 
                </Nav.Link>
                <Nav.Link className = "nav-links" to="/study/dutch" as= {NavLink}>
                    Dutch
                </Nav.Link>
        {/*         <Nav.Link to="/study/japanese" as= {NavLink}>
                    Japanese
                </Nav.Link> */}
                <Nav.Link className = "nav-links" to="/study/spanish" as= {NavLink}>
                    Spanish
                </Nav.Link>
            </div>
        </div>
    </div>
    )
}