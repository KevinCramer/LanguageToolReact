import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './pages/ContactUs/ContactUs'
import GrammarContent from './pages/GrammarContent/GrammarContent'
import { Home } from './pages/Home/Home'
import ListeningComprehension from './pages/ListeningComprehension/ListeningComprehension'
import Navbar from './components/atoms/Navbar/Navbar'
import VocabContent from './pages/VocabContent/VocabContent'

function App() {
  return (
    <div className="full-background">
      <Navbar />
      <Routes>
        <Route path="/" element={ <div className='home-container'> <Home /></div>} />
        <Route path="/vocabulary" element={<VocabContent />} />
        <Route path="/grammar" element={<GrammarContent />} />
        <Route path="/listening-comprehension" element={<ListeningComprehension />} />
        <Route path="/contactus" element={<ContactUs />} />

      </Routes>
    </div>
  );
}

export default App

