import './index.css';
import { authModalStates, hideModal, RootStateAuth } from './redux-store/auth'
import { resetPermission, RootStateLock } from './redux-store/lock'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Account from './pages/Account'
import ContactUs from './pages/ContactUs'
import About from './pages/About'
import Custom404Error from './pages/Custom404Error'
import DeleteAccount from './components/atoms/DeleteAccount'
import ForgotPassword from './components/molecules/ForgotPassword'
import FreeContent from './components/atoms/FreeContent';
import GrammarContent from './pages/GrammarContent'
import Home from './pages/Home'
import Japanese from './pages/Japanese/Japanese'
import JapaneseStudyGuide from './pages/Japanese/JapaneseStudyGuide'
import JapaneseWritingSystems from './pages/Japanese/WritingSystemsExplained'
import HiraganaExplained from './pages/Japanese/HiraganaExplained'
import KatakanaExplained from './pages/Japanese/KatakanaExplained'
import KanjiExplained from './pages/Japanese/KanjiExplained'
import HowToTypeJapanese from './pages/Japanese/HowToTypeJapanese'
import ReadingListening from './pages/ReadingListening'
import Login from './components/molecules/Login'
import Navbar from './components/atoms/Navbar'
import Signup from './components/molecules/Signup'
import UpdateAccount from './components/atoms/UpdateAccount'
import { useAuth } from './contexts/AuthContext'
import { useEffect } from 'react'
import VocabContent from './pages/VocabContent'
import WritingSystems from './pages/WritingSystems'
import japaneseComprehensionVideo from './data/raw-data/tutorial-videos/japanese-comprehension-tutorial.mp4'
import japaneseWritingSystemsVideo from './data/raw-data/tutorial-videos/japanese-writing-systems-tutorial.mp4'
import japaneseVocabGuideVideo from './data/raw-data/tutorial-videos/japanese-vocab-guide.mp4'
import fujiImage from '/src/assets/mount-fuji.jpg';
import JapaneseNavbar from './pages/Japanese/JapaneseNavbar';

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
  const pathWithBackground = location.pathname === '/' 
  || location.pathname === '/contact' 
  || location.pathname === '/account'
  
  const userIsLoggedIn = currentUser && currentUser.email
  useEffect(() => {
    if (currentUser && currentUser.email) {
      dispatch(hideModal());
    }
  }, [currentUser && currentUser.email]);

  return (
    <>
      {pathWithBackground && <div
        id="fuji-background-container"
        className="bg-cover bg-center w-full h-screen"
        style={{ backgroundImage: `url(${fujiImage})` }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={ <Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/japanese/home-page" element={<Japanese/>} />
          <Route path="/japanese/vocabulary" 
            element={<VocabContent howToGuideVideo={japaneseVocabGuideVideo} />} />
          <Route path="/japanese/writing-systems-explained" element={<JapaneseWritingSystems />} />
          <Route path="/japanese/hiragana-explained" element={<HiraganaExplained />} />
          <Route path="/japanese/katakana-explained" element={<KatakanaExplained />} />
          <Route path="/japanese/kanji-explained" element={<KanjiExplained />} />
          <Route path="/japanese/how-to-type-japanese" element={<HowToTypeJapanese />} />
          <Route path="/japanese/writing-systems" element={<WritingSystems howToGuideVideo={japaneseWritingSystemsVideo}/>} />
          <Route path="/japanese/study-guide" element={<JapaneseStudyGuide/>} />
          <Route path="/japanese/grammar/:topicSlug" element={<GrammarContent languageNumber={0} />} />
          <Route path="/japanese/reading-listening/:topicSlug" element={<ReadingListening languageNumber={0} howToGuideVideo={japaneseComprehensionVideo}/>} />
          <Route path="/*" element={<Custom404Error/>} />
        </Routes>
      </div>}
      {!pathWithBackground && <div
        id="white-background-container"
        className="bg-cover bg-center w-full h-screen"
      >
        <Navbar/>
        {location.pathname.includes('japanese') && <JapaneseNavbar/>}
        <div className='pb-20'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/explore" element={ <Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<About />} />
            <Route path="/japanese/home-page" element={<Japanese/>} />
            <Route path="/japanese/vocabulary" 
              element={<VocabContent howToGuideVideo={japaneseVocabGuideVideo} />} />
            <Route path="/japanese/writing-systems-explained" element={<JapaneseWritingSystems />} />
            <Route path="/japanese/hiragana-explained" element={<HiraganaExplained />} />
            <Route path="/japanese/katakana-explained" element={<KatakanaExplained />} />
            <Route path="/japanese/kanji-explained" element={<KanjiExplained />} />
            <Route path="/japanese/how-to-type-japanese" element={<HowToTypeJapanese />} />
            <Route path="/japanese/writing-systems" element={<WritingSystems howToGuideVideo={japaneseWritingSystemsVideo}/>} />
            <Route path="/japanese/study-guide" element={<JapaneseStudyGuide/>} />
            <Route path="/japanese/grammar/:topicSlug" element={<GrammarContent languageNumber={0} />} />
            <Route path="/japanese/reading-listening/:topicSlug" element={<ReadingListening languageNumber={0} howToGuideVideo={japaneseComprehensionVideo}/>} />
            <Route path="/*" element={<Custom404Error/>} />
          </Routes>
        </div>
       
      </div>}
      {reduxAuth.modalToShow !== authModalStates.none && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-end p-4">
              <button
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
                onClick={() => dispatch(hideModal())}
              >
          &times;
              </button>
            </div>
            <div className="p-6">
              {reduxAuth.modalToShow === authModalStates.signup && <Signup />}
              {reduxAuth.modalToShow === authModalStates.login && <Login />}
              {reduxAuth.modalToShow === authModalStates.forgotPassword && <ForgotPassword />}
              {reduxAuth.modalToShow === authModalStates.updateAccount && <UpdateAccount />}
              {reduxAuth.modalToShow === authModalStates.deleteAccount && <DeleteAccount />}
            </div>
          </div>
        </div>
      )}

      {reduxLock.permissionDenied && !userIsLoggedIn && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
            <div className="flex justify-end p-4">
              <button
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
                onClick={() => dispatch(resetPermission())}
              >
          &times;
              </button>
            </div>
            <div className="p-6">
              <FreeContent/>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

