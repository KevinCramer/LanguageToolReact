import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import { Container, Modal } from 'react-bootstrap'
import { displayLogin, hideModal, loginModalStates, RootState } from './redux-store/login'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { AuthProvider } from './contexts/AuthContext'
import ContactUs from './pages/ContactUs/ContactUs'
import GrammarContent from './pages/GrammarContent/GrammarContent'
import Home from './pages/Home/Home'
import ListeningComprehension from './pages/ListeningComprehension/ListeningComprehension'
import Login from './components/atoms/Login/Login'
import Navbar from './components/atoms/Navbar/Navbar'
import Signup from './components/atoms/Signup/Signup'

import VocabContent from './pages/VocabContent/VocabContent'

const App = ()=> {
  const dispatch = useDispatch();
  const reduxLogin = useSelector((state: RootState) => state.login);

  return (
    <AuthProvider>
      <div className="full-background">
        <div style = {{ display:'flex', flexDirection: 'row', justifyContent:'space-between' }}>
          <Navbar />
          <button style={{ color: '#F8F8F8', backgroundColor: 'rgb(13, 110,253)', height: '40px',
            marginTop: '7px', marginRight: '12px', 
            borderRadius: '5px', border: 'none' }} onClick={() => dispatch(displayLogin())}>
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
      <Modal show ={reduxLogin.modalToShow !== loginModalStates.none}
        onHide={() => dispatch(hideModal())}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '60vh' }}>
            <div className='w-100' style={{ maxWidth: '400px' }}>
              {reduxLogin.modalToShow === loginModalStates.signup && <Signup/>}
              {reduxLogin.modalToShow === loginModalStates.login && <Login/>}
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </AuthProvider>
  );
}

export default App;

