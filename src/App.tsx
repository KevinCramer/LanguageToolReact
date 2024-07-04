import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import GrammarContent from './pages/GrammarContent'
import { Home } from './pages/Home'
import ListeningComprehension from './pages/ListeningComprehension'
import ContactUs from './pages/ContactUs'
import { Navbar } from './components/atoms/navbar/Navbar'
import VocabContent from './pages/VocabContent'

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
        <Route path="/listening-comprehension" element={<ListeningComprehension />} />
        <Route path="/contactus" element={<ContactUs />} />

      </Routes>
    </div>
  );
}

export default App

