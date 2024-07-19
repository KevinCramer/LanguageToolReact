import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import { authModalStates, hideModal, RootState } from './redux-store/auth'
import { Container, Modal } from 'react-bootstrap'
import { Route, Routes
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ContactUs from './pages/ContactUs/ContactUs'
import ForgotPassword from './components/molecules/ForgotPassword/ForgotPassword'
import GrammarContent from './pages/GrammarContent/GrammarContent'
import Home from './pages/Home/Home'
import ListeningComprehension from './pages/ListeningComprehension/ListeningComprehension'
import Login from './components/molecules/Login/Login'
import Navbar from './components/atoms/Navbar/Navbar'
import Profile from './pages/Profile/Profile'
import Signup from './components/molecules/Signup/Signup'
import UpdateProfile from './components/atoms/UpdateProfile/UpdateProfile'
import { useAuth } from './contexts/AuthContext'
import { useEffect } from 'react'
import VocabContent from './pages/VocabContent/VocabContent'

const App = ()=> {
  const dispatch = useDispatch();

  const reduxAuth = useSelector((state: RootState) => state.auth);
  // @ts-ignore
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser && currentUser.email) {
      dispatch(hideModal());
    }
  }, [currentUser && currentUser.email]);

  return (
    <>
      <div className="full-background">
        <Navbar />
        <Routes>
          <Route path="/" element={ <div className='home-container'> <Home /></div>} />
          <Route path="/vocabulary" element={<VocabContent />} />
          <Route path="/grammar" element={<GrammarContent />} />
          <Route path="/listening-comprehension" element={<ListeningComprehension />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </div>
      <Modal show ={reduxAuth.modalToShow !== authModalStates.none}
        onHide={() => dispatch(hideModal())}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '60vh' }}>
            <div className='w-100' style={{ maxWidth: '400px' }}>
              {reduxAuth.modalToShow === authModalStates.signup && <Signup/>}
              {reduxAuth.modalToShow === authModalStates.login && <Login/>}
              {reduxAuth.modalToShow === authModalStates.forgotPassword && <ForgotPassword/>}
              {reduxAuth.modalToShow === authModalStates.updateProfile && <UpdateProfile/>}

            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;

