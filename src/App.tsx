import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Navbar} from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import StudyContent from './components/molecules/StudyContent'
import ReactGA from 'react-ga' 
const TRACKING_ID = 'UA-253414467-1'
ReactGA.initialize(TRACKING_ID)

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={ <div style= {
          {display:'flex', flexDirection: 'column', justifyContent:'center', minHeight: '70vh'}
        }> <Home /></div>} />
        <Route path="/about" element={ <div style= {
          {display:'flex', flexDirection: 'column', justifyContent:'center', minHeight: '70vh'}
        }> <About /></div>} />
        <Route path="/study" element={<StudyContent />} />
      </Routes>
    </div>
  );
}

export default App

