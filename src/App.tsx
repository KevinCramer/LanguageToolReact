import {Routes, Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Navbar} from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import video from "./assets/720p.mp4"
import StudyContent from "./components/molecules/StudyContent"
import ReactGA from 'react-ga' 
const TRACKING_ID = "UA-253414467-1"
ReactGA.initialize(TRACKING_ID)

function App() {
  return(
    <div className = "Main">
      <div className= "overlay"></div>
      <video src={video} autoPlay loop muted></video> 

      <div className = "content">
        <Navbar/>
        <Routes>
          <Route path ="/" element = {<Home/>}/>
          <Route path ="/about" element = {<About/>}/>
          <Route path ="/study" element = {<StudyContent/>}/>
        </Routes>  
      </div>
    </div> 
    
  )
}

export default App

