import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import GrammarContent from './components/molecules/GrammarContent'
import { Home } from './pages/Home'
import Immersion from './components/molecules/Immersion'
import { Navbar } from './components/Navbar'
import ReactGA from 'react-ga' 
import { toggleX } from './redux-store/featureToggleSlice';
import { useDispatch } from 'react-redux';
import VocabContent from './components/molecules/VocabContent'

const ToggleButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleX());
  };

  // Return JSX for the button
  return (
    <button 
      onClick ={handleClick}
      style={{
        backgroundColor: 'transparent',
        border: 'none', 
        color: '#F5F5F5', // Set the text color (example: Bootstrap primary blue)
        width: '100%'
      }}
    
    >Show experimental features</button>
  );
};
const TRACKING_ID = 'UA-253414467-1'
ReactGA.initialize(TRACKING_ID)

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={ <div style= {
          { display:'flex', flexDirection: 'column', justifyContent:'center', minHeight: '50vh' }
        }> <Home /></div>} />
        <Route path="/vocabulary" element={<VocabContent />} />
        <Route path="/grammar" element={<GrammarContent />} />
        <Route path="/immersion" element={<Immersion />} />

      </Routes>
      <ToggleButton />
    </div>
  );
}

export default App

