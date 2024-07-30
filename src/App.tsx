import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import { authModalStates, hideModal, RootStateAuth } from './redux-store/auth'
import { Container, Modal } from 'react-bootstrap'
import { resetPermission, RootStateLock } from './redux-store/lock'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ContactUs from './pages/ContactUs/ContactUs'
import DeleteAccount from './components/atoms/DeleteAccount/DeleteAccount'
import ForgotPassword from './components/molecules/ForgotPassword/ForgotPassword'
import GrammarContent from './pages/GrammarContent/GrammarContent'
import Home from './pages/Home/Home'
import ListeningComprehension from './pages/ListeningComprehension/ListeningComprehension'
import LockedContent from './components/atoms/LockedContent/LockedContent'
import Login from './components/molecules/Login/Login'
import Navbar from './components/atoms/Navbar/Navbar'
import Profile from './pages/Profile/Profile'
import Signup from './components/molecules/Signup/Signup'
import UpdateProfile from './components/atoms/UpdateProfile/UpdateProfile'
import { useAuth } from './contexts/AuthContext'
import { useEffect } from 'react'
import useInactivityTimer from './hooks/useInactivityTimer'
import VocabContent from './pages/VocabContent/VocabContent'
import VocabContentNew from './pages/VocabContentNew/VocabContentNew'
import Japanese from './pages/Japanese/Japanese'
import Spanish from './pages/Spanish/Spanish'

const msInMinute = 60 * 1000;

const App = ()=> {
  // will log out user iff there is no lingocommand tab 
  // where the user was active in the last 30 minutes
  // useInactivityTimer(30 * msInMinute, 30 * msInMinute);
  const dispatch = useDispatch();

  const reduxAuth = useSelector((state: RootStateAuth) => state.auth);
  const reduxLock = useSelector((state: RootStateLock) => state.lock);
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
          <Route path="/spanish" element={<Spanish/>} />
          <Route path="/japanese" element={<Japanese/>} />
          <Route path="/spanish/vocab" element={<VocabContentNew 
            key="spanish" languageNumber={0}/>} />
          <Route path="/japanese/vocab" element={<VocabContentNew
            key="japanese" languageNumber={1} />} />

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
              {reduxAuth.modalToShow === authModalStates.deleteAccount && <DeleteAccount/>}
            </div>
          </Container>
        </Modal.Body>
      </Modal>
      <Modal show ={reduxLock.permissionDenied}
        onHide={() => dispatch(resetPermission())}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '60vh' }}>
            <div className='w-100' style={{ maxWidth: '400px' }}>
              <LockedContent/>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;

