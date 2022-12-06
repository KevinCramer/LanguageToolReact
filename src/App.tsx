import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Arabic} from "./pages/Languages/Arabic"
import {Dutch} from "./pages/Languages/Dutch"
import {Spanish} from "./pages/Languages/Spanish"
import {Navbar} from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return( 
    <>
  <Navbar/>
    <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/about" element = {<About/>}/>
      <Route path ="/study/arabic" element = {<Arabic/>}/>
      <Route path ="/study/dutch" element = {<Dutch/>}/>
      <Route path ="/study/Spanish" element = {<Spanish/>}/>
    </Routes>
  </>
  
  )
}

export default App
