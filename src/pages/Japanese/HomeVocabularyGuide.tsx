import { consistentStyles, lingoCommandHasLoginLock, mobileBreakPoint } from '../../constants';
import { setBackwardRoute, setForwardRoute } from '../../redux-store/route';
import { japaneseVocabTopicSlugNames } from '../../data/structured-data/words';
import LockIcon from '@mui/icons-material/Lock';
import PageTitle from '../../components/atoms/PageTitle';
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useWindowWidth from '../../hooks/useWindowWidth';

interface Topic {
  Name: string;
  slugName: string;
  hasLoginLock: boolean;

}

// commented out topics are not yet implemented
// go to these links for vocab data:
// 1: https://www.learnalanguage.com/learn-japanese/japanese-words/
// 2: https://www.learnalanguage.com/learn-japanese/japanese-verbs/
// 3: https://www.learnalanguage.com/learn-japanese/japanese-phrases/
const allTopics: Topic[] = [
  { Name: 'Bathroom', slugName: japaneseVocabTopicSlugNames.weather, hasLoginLock: true },
  { Name: 'Bedroom', slugName: japaneseVocabTopicSlugNames.weather, hasLoginLock: true },
  { Name: 'Furniture', slugName: japaneseVocabTopicSlugNames.weather, hasLoginLock: true },
  { Name: 'Kitchen', slugName: japaneseVocabTopicSlugNames.weather, hasLoginLock: true },
  { Name: 'Living Room', slugName: japaneseVocabTopicSlugNames.weather, hasLoginLock: true },

];

const HomeVocabularyGuide = () => {
  //@ts-ignore
  const { currentUser } = useAuth();
  const dispatch = useDispatch();

  const userIsLoggedIn = currentUser && currentUser.email;
  const navigate = useNavigate();

  const handleTopicClick = (topic: Topic) => {
    if(topic.hasLoginLock && lingoCommandHasLoginLock && !userIsLoggedIn) {
      dispatch(setBackwardRoute(`/japanese/vocabulary-guide`));
      dispatch(setForwardRoute(`/japanese/vocabulary?s=${topic.slugName}-T0TFT`)); 
      navigate('/free-content');
    }
    else{
      navigate(`/japanese/vocabulary?s=${topic.slugName}-T0TFT`);
    }
  };

  const width = useWindowWidth(); // Get the current window width

  // Now you can use width to check screen size in your component
  const isMobile = width < mobileBreakPoint; 

  const numItems = allTopics.length;
  const numCols = isMobile ? 2 : 3 // 3 columns for large screens, 2 columns for smaller ones.
  const numRows = Math.ceil(numItems / numCols);

  const gridStyles = {
    listStyle: 'none',
    padding: 0,
    display: 'grid',
    gridTemplateColumns: `repeat(${numCols}, 1fr)`,
    gridTemplateRows: `repeat(${numRows}, 1fr)`,
    gridAutoFlow: 'column',
    gridGap: '20px',
  };

  return (
    <div className="max-w-screen-md mx-auto px-4 text-center">
      <PageTitle title='Home Vocabulary Guide' />
      <div style={gridStyles}>
        {allTopics.map((topic, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg h-[70px] shadow-md transform transition-transform duration-200 hover:scale-105 hover:cursor-pointer"
            onClick={() => handleTopicClick(topic)}
          >
            <div className={`flex justify-between items-start ${!topic.slugName ? 'text-gray-500' : ''}`}>
              <div className={`flex-1 h-[70px] ${consistentStyles.textBlack} ${topic.hasLoginLock && lingoCommandHasLoginLock && !userIsLoggedIn ? 'ml-6 md:ml-8' : ''} flex items-center justify-center`}>
                {topic.Name}
              </div>
              {/* LockIcon aligned at the top-right */}
              {topic.hasLoginLock && lingoCommandHasLoginLock && !userIsLoggedIn && (
                <div className="m-1">
                  <LockIcon style={{ fontSize: isMobile ? '20px' : '25px' }} className={consistentStyles.textBlack} /> 
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default HomeVocabularyGuide;