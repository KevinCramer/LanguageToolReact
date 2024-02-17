import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Navbar} from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import VocabContent from './components/molecules/VocabContent'
import GrammarContent from './components/molecules/GrammarContent'
import Immersion from './components/molecules/Immersion'

import ReactGA from 'react-ga' 
const TRACKING_ID = 'UA-253414467-1'
ReactGA.initialize(TRACKING_ID)

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={ <div style= {
          {display:'flex', flexDirection: 'column', justifyContent:'center', minHeight: '50vh'}
        }> <Home /></div>} />
        <Route path="/vocabulary" element={<VocabContent />} />
        <Route path="/grammar" element={<GrammarContent />} />
        <Route path="/immersion" element={<Immersion />} />

      </Routes>
    </div>
  );
}

export default App

