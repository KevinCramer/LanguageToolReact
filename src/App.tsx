import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import { authModalStates, hideModal, RootStateAuth } from './redux-store/auth'
import { Container, Modal } from 'react-bootstrap'
import { resetPermission, RootStateLock } from './redux-store/lock'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Account from './pages/Account/Account'
import ContactUs from './pages/ContactUs/ContactUs'
import Custom404Error from './pages/Custom404Error/Custom404Error'
import DeleteAccount from './components/atoms/DeleteAccount/DeleteAccount'
import ForgotPassword from './components/molecules/ForgotPassword/ForgotPassword'
import GrammarContent from './pages/GrammarContent/GrammarContent'
import Home from './pages/Home/Home'
import Japanese from './pages/Japanese/Japanese'
import JapaneseStudyGuide from './pages/Japanese/JapaneseStudyGuide'
import JapaneseWritingSystems from './pages/Japanese/WritingSystems'
import ListeningComprehension from './pages/ListeningComprehension/ListeningComprehension'
import LockedContent from './components/atoms/LockedContent/LockedContent'
import Login from './components/molecules/Login/Login'
import Navbar from './components/atoms/Navbar/Navbar'
import Signup from './components/molecules/Signup/Signup'
import Spanish from './pages/Spanish/Spanish'
import SpanishStudyGuide from './pages/Spanish/SpanishStudyGuide'
import UpdateAccount from './components/atoms/UpdateAccount/UpdateAccount'
import { useAuth } from './contexts/AuthContext'
import { useEffect } from 'react'
import VocabContentNew from './pages/VocabContentNew/VocabContentNew'
import myVideo from './data/raw-data/tutorial-videos/japanese-comprehension-video-guide.mp4'

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
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/spanish" element={<Spanish/>} />
          <Route path="/spanish/vocabulary" element={<VocabContentNew languageNumber={0}/>} />
          <Route path="/spanish/study-guide" element={<SpanishStudyGuide/>} />
          <Route path="/spanish/grammar/:topicSlug" element={<GrammarContent languageNumber={0} />} />
          <Route path="/spanish/listening-comprehension/:topicSlug" element={<ListeningComprehension languageNumber={0}/>} />
          <Route path="/japanese" element={<Japanese/>} />
          <Route path="/japanese/vocabulary" element={<VocabContentNew languageNumber={1} />} />
          <Route path="/japanese/writing-systems-explanation" element={<JapaneseWritingSystems />} />
          <Route path="/japanese/writing-systems" element={<VocabContentNew languageNumber={2} isWritingSystem ={true} />} />
          <Route path="/japanese/study-guide" element={<JapaneseStudyGuide/>} />
          <Route path="/japanese/grammar/:topicSlug" element={<GrammarContent languageNumber={1} />} />
          <Route path="/japanese/listening-comprehension/:topicSlug" element={<ListeningComprehension languageNumber={1} howToGuideVideo={myVideo}/>} />
          <Route path="/*" element={<Custom404Error/>} />
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
              {reduxAuth.modalToShow === authModalStates.updateAccount && <UpdateAccount/>}
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

