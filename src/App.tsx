import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import { authModalStates, hideModal, RootStateAuth } from './redux-store/auth'
import { Container, Modal } from 'react-bootstrap'
import { resetPermission, RootStateLock } from './redux-store/lock'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Account from './pages/Account/Account'
import ContactUs from './pages/ContactUs/ContactUs'
import About from './pages/About/About'
import Custom404Error from './pages/Custom404Error/Custom404Error'
import DeleteAccount from './components/atoms/DeleteAccount/DeleteAccount'
import ForgotPassword from './components/molecules/ForgotPassword/ForgotPassword'
import GrammarContent from './pages/GrammarContent/GrammarContent'
import Home from './pages/Home/Home'
import Japanese from './pages/Japanese/Japanese'
import JapaneseStudyGuide from './pages/Japanese/JapaneseStudyGuide'
import JapaneseWritingSystems from './pages/Japanese/WritingSystems'
import HiraganaExplained from './pages/Japanese/HiraganaExplained'
import KatakanaExplained from './pages/Japanese/KatakanaExplained'
import KanjiExplained from './pages/Japanese/KanjiExplained'
import HowToTypeJapanese from './pages/Japanese/HowToTypeJapanese'
import Comprehension from './pages/Comprehension/Comprehension'
import PremiumContent from './components/atoms/PremiumContent/PremiumContent'
import Login from './components/molecules/Login/Login'
import Navbar from './components/atoms/Navbar/Navbar'
import Signup from './components/molecules/Signup/Signup'
import UpdateAccount from './components/atoms/UpdateAccount/UpdateAccount'
import { useAuth } from './contexts/AuthContext'
import { useEffect } from 'react'
import VocabContent from './pages/VocabContent/VocabContent'
import japaneseComprehensionVideo from './data/raw-data/tutorial-videos/japanese-comprehension-tutorial.mp4'
import japaneseWritingSystemsVideo from './data/raw-data/tutorial-videos/japanese-writing-systems-tutorial.mp4'
import japaneseVocabGuideVideo from './data/raw-data/tutorial-videos/japanese-vocab-guide.mp4'

const App = ()=> {
  const location = useLocation();
  // will log out user iff there is no lingocommand tab 
  // where the user was active in the last 30 minutes
  // useInactivityTimer(30 * msInMinute, 30 * msInMinute);
  const dispatch = useDispatch(); 

  const reduxAuth = useSelector((state: RootStateAuth) => state.auth);
  const reduxLock = useSelector((state: RootStateLock) => state.lock);
  // @ts-ignore
  const { currentUser } = useAuth();
  const pathWithBackground = location.pathname === '/' || location.pathname === '/contact' || location.pathname === '/account' || location.pathname === '/about'
  
  const userIsLoggedIn = currentUser && currentUser.email
  useEffect(() => {
    if (currentUser && currentUser.email) {
      dispatch(hideModal());
    }
  }, [currentUser && currentUser.email]);

  return (
    <>
      {pathWithBackground && <div className="full-background">
        <Navbar />
        <Routes>
          <Route path="/" element={ <div className='home-container'> <Home /></div>} />
          <Route path="/explore" element={ <div className='home-container'> <Home /></div>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/japanese" element={<Japanese/>} />
          <Route path="/japanese/vocabulary" element={<VocabContent languageNumber={0}howToGuideVideo={japaneseVocabGuideVideo} />} />
          <Route path="/japanese/writing-systems-explained" element={<JapaneseWritingSystems />} />
          <Route path="/japanese/hiragana-explained" element={<HiraganaExplained />} />
          <Route path="/japanese/katakana-explained" element={<KatakanaExplained />} />
          <Route path="/japanese/kanji-explained" element={<KanjiExplained />} />
          <Route path="/japanese/how-to-type-japanese" element={<HowToTypeJapanese />} />
          <Route path="/japanese/writing-systems" element={<VocabContent languageNumber={1} isWritingSystem ={true} howToGuideVideo={japaneseWritingSystemsVideo} />} />
          <Route path="/japanese/study-guide" element={<JapaneseStudyGuide/>} />
          <Route path="/japanese/grammar/:topicSlug" element={<GrammarContent languageNumber={0} />} />
          <Route path="/japanese/comprehension/:topicSlug" element={<Comprehension languageNumber={0} howToGuideVideo={japaneseComprehensionVideo}/>} />
          <Route path="/*" element={<Custom404Error/>} />
        </Routes>
      </div>}
      {!pathWithBackground && <div className="plain-background">
        <Navbar/>
        <Routes>
          <Route path="/" element={ <div className='home-container'> <Home /></div>} />
          <Route path="/explore" element={ <div className='home-container'> <Home /></div>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/japanese" element={<Japanese/>} />
          <Route path="/japanese/vocabulary" element={<VocabContent languageNumber={0} howToGuideVideo={japaneseVocabGuideVideo} />} />
          <Route path="/japanese/writing-systems-explained" element={<JapaneseWritingSystems />} />
          <Route path="/japanese/hiragana-explained" element={<HiraganaExplained />} />
          <Route path="/japanese/katakana-explained" element={<KatakanaExplained />} />
          <Route path="/japanese/kanji-explained" element={<KanjiExplained />} />
          <Route path="/japanese/how-to-type-japanese" element={<HowToTypeJapanese />} />
          <Route path="/japanese/writing-systems" element={<VocabContent languageNumber={1} isWritingSystem ={true} howToGuideVideo={japaneseWritingSystemsVideo}/>} />
          <Route path="/japanese/study-guide" element={<JapaneseStudyGuide/>} />
          <Route path="/japanese/grammar/:topicSlug" element={<GrammarContent languageNumber={0} />} />
          <Route path="/japanese/comprehension/:topicSlug" element={<Comprehension languageNumber={0} howToGuideVideo={japaneseComprehensionVideo}/>} />
          <Route path="/*" element={<Custom404Error/>} />
        </Routes>
      </div>}
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
      <Modal show ={reduxLock.permissionDenied && !userIsLoggedIn}
        onHide={() => dispatch(resetPermission())}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Container className='d-flex align-items-center justify-content-center'
            style={{ minHeight: '60vh' }}>
            <div className='w-100' style={{ maxWidth: '400px' }}>
              <PremiumContent/>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default App;

