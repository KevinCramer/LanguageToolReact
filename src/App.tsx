import {Routes, Route} from "react-router-dom"
import {Container} from "react-bootstrap"
import {Home} from "./pages/Home"
import {Study} from "./pages/Study"
import {About} from "./pages/About"
import {Amharic} from "./pages/Languages/Amharic"
import {Arabic} from "./pages/Languages/Arabic"
import {Dutch} from "./pages/Languages/Dutch"
import {Japanese} from "./pages/Languages/Japanese"
import {Spanish} from "./pages/Languages/Spanish"


import {Navbar} from "./components/Navbar"


function App() {
  return( 
    <>
  <Navbar/>
  <Container className = "mb-4">
    <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/study" element = {<Study/>}/>
      <Route path ="/about" element = {<About/>}/>
      <Route path ="/study/amharic" element = {<Amharic/>}/>
      <Route path ="/study/arabic" element = {<Arabic/>}/>
      <Route path ="/study/dutch" element = {<Dutch/>}/>
      <Route path ="/study/Japanese" element = {<Japanese/>}/>
      <Route path ="/study/Spanish" element = {<Spanish/>}/>


    </Routes>
  </Container>
  </>
  
  )
}

export default App
