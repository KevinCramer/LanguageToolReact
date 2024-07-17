import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import { Container, Modal } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import ContactUs from './pages/ContactUs/ContactUs'
import CustomButton from './components/atoms/CustomButton/CustomButton'
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
          <button style={{ color: '#F8F8F8', backgroundColor: '#4A4A4A', height: '40px',
            marginTop: '7px', marginRight: '12px', borderRadius: '5px', borderColor: '#4A4A4A',
            borderWidth:'1px' }} onClick={() => displayLogin()}>
            <b style = {{ color: 'white' }}>Login</b>
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
      {showLogin && <Modal show ={showLogin} onHide={hideLogin}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '60vh' }}>
            <div className='w-100' style={{ maxWidth: '400px' }}>
              <Signup/>
            </div>
          </Container>
        </Modal.Body>
      </Modal>}
    </AuthProvider>
  );
}

export default App;

