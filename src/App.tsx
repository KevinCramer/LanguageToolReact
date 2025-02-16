import './index.css';
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './pages/About'
import Account from './pages/Account'
import ContactUs from './pages/ContactUs'
import Custom404Error from './pages/Custom404Error'
import DeleteAccount from './components/atoms/DeleteAccount'
import FoodVocabularyGuide from './pages/Japanese/VocabularyGuides/FoodVocabularyGuide'
import FreeContent from './components/atoms/FreeContent';
import fujiImage from '/src/assets/mount-fuji.jpg';
import GrammarContent from './pages/GrammarContent'
import HiraganaExplained from './pages/Japanese/HiraganaExplained'
import Home from './pages/Home'
import HomeVocabularyGuide from './pages/Japanese/VocabularyGuides/HomeVocabularyGuide'
import HowToTypeJapanese from './pages/Japanese/HowToTypeJapanese'
import japaneseComprehensionVideo from './data/raw-data/tutorial-videos/japanese-comprehension-tutorial.mp4'
import JapaneseHomepage from './pages/Japanese/JapaneseHomePage'
import JapaneseNavbar from './pages/Japanese/JapaneseNavbar';
import JapaneseStudyGuide from './pages/Japanese/JapaneseStudyGuide'
import japaneseVocabGuideVideo from './data/raw-data/tutorial-videos/japanese-vocab-guide.mp4'
import JapaneseWritingSystems from './pages/Japanese/WritingSystemsExplained'
import japaneseWritingSystemsVideo from './data/raw-data/tutorial-videos/japanese-writing-systems-tutorial.mp4'
import KanjiExplained from './pages/Japanese/KanjiExplained'
import KatakanaExplained from './pages/Japanese/KatakanaExplained'
import Login from './components/molecules/Login'
import { mobileBreakPoint } from './constants';
import Navbar from './components/atoms/Navbar'
import ReadingListening from './pages/ReadingListening'
import ResetPassword from './components/molecules/ResetPassword'
import Signup from './components/molecules/Signup'
import useWindowWidth from './hooks/useWindowWidth';
import VocabContent from './pages/VocabContent'
import MainVocabularyGuide from './pages/Japanese/VocabularyGuides/MainVocabularyGuide';
import VerbVocabularyGuide from './pages/Japanese/VocabularyGuides/VerbVocabularyGuide'
import WritingSystems from './pages/WritingSystems'

const App = ()=> {
  const location = useLocation();
  // will log out user iff there is no lingocommand tab 
  // where the user was active in the last 30 minutes
  // useInactivityTimer(30 * msInMinute, 30 * msInMinute);

  const width = useWindowWidth(); // Get the current window width
  const isMobile = width < mobileBreakPoint; 

  const pathWithBackground = location.pathname === '/' 
  || location.pathname === '/account'
  || (isMobile ? false : location.pathname === '/contact');

  return (
    <>
      {pathWithBackground && <div
        id="fuji-background-container"
        className="bg-cover bg-center w-full h-screen text-lg"
        style={{ backgroundImage: `url(${fujiImage})` }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/explore" element={ <Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/delete-account" element={<DeleteAccount/>} />
          <Route path="/free-content" element={<FreeContent/>} />
          <Route path="/japanese/home-page" element={<JapaneseHomepage/>} />
          <Route path="/japanese/vocabulary-guide" 
            element={<MainVocabularyGuide/>} />
          <Route path="/japanese/food-vocabulary-guide" 
            element={<FoodVocabularyGuide/>} />
          <Route path="/japanese/home-vocabulary-guide" 
            element={<HomeVocabularyGuide/>} />
          <Route path="/japanese/verb-vocabulary-guide" 
            element={<VerbVocabularyGuide/>} />
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
        className="bg-cover bg-center w-full h-screen text-lg"
      >
        <Navbar/>
        {(location.pathname.includes('japanese') || (isMobile ? location.pathname.includes('contact') : false)) && <JapaneseNavbar/>}
        <div className='pb-20'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/explore" element={ <Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/account" element={<Account />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/reset-password" element={<ResetPassword/>} />
            <Route path="/delete-account" element={<DeleteAccount/>} />
            <Route path="/free-content" element={<FreeContent/>} />
            <Route path="/japanese/home-page" element={<JapaneseHomepage/>} />
            <Route path="/japanese/vocabulary-guide" 
              element={<MainVocabularyGuide/>} />
            <Route path="/japanese/food-vocabulary-guide" 
              element={<FoodVocabularyGuide/>} />
            <Route path="/japanese/home-vocabulary-guide" 
              element={<HomeVocabularyGuide/>} />
            <Route path="/japanese/verb-vocabulary-guide" 
              element={<VerbVocabularyGuide/>} />
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
    </>
  );
}

export default App;

