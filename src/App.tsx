import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import GrammarContent from './components/molecules/GrammarContent'
import { Home } from './pages/Home'
import Immersion from './components/molecules/Immersion'
import { Navbar } from './components/Navbar'
import VocabContent from './components/molecules/VocabContent'

function App() {
  return (
    <div className="full-background">
      <div style={{ height:'0px' }}></div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <div style= {
          { display:'flex', flexDirection: 'column', justifyContent:'center', minHeight: '50vh' }
        }> <Home /></div>} />
        <Route path="/vocabulary" element={<VocabContent />} />
        <Route path="/grammar" element={<GrammarContent />} />
        <Route path="/immersion" element={<Immersion />} />

      </Routes>
    </div>
  );
}

export default App

