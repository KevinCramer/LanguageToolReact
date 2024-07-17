import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ContactUs from './pages/ContactUs/ContactUs'
import { Container } from 'react-bootstrap'
import GrammarContent from './pages/GrammarContent/GrammarContent'
import Home from './pages/Home/Home'
import ListeningComprehension from './pages/ListeningComprehension/ListeningComprehension'
import Navbar from './components/atoms/Navbar/Navbar'
import Signup from './components/atoms/Signup/Signup'
import { useState } from 'react'

import VocabContent from './pages/VocabContent/VocabContent'

const App = ()=> {
  var showLogin = false;
  var [showLogin,setShowLogin] = useState(showLogin)
  const hideLogin = () => { return setShowLogin(false)}
  const displayLogin = () => { return setShowLogin(true)}
  return (
    <AuthProvider>
      <div className="full-background">
        <div style = {{ display:'flex', flexDirection: 'row', justifyContent:'space-between' }}>
          <Navbar />
          <button onClick={() => displayLogin()}>
          Login
          </button>
        </div>
        <Routes>
          <Route path="/" element={ <div className='home-container'> <Home /></div>} />
          <Route path="/vocabulary" element={<VocabContent />} />
          <Route path="/grammar" element={<GrammarContent />} />
          <Route path="/listening-comprehension" element={<ListeningComprehension />} />
          <Route path="/contactus" element={<ContactUs />} />

        </Routes>
      </div>
      {showLogin && <Container className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '100vh' }}>
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <button onClick={() => hideLogin()}>
            X
          </button>
          <Signup/>
        </div>
      </Container>}
    </AuthProvider>
  );
}

export default App;

