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
  { Name: 'Animals', slugName: japaneseVocabTopicSlugNames.animals, hasLoginLock: false },
  // { Name: 'Appliances' },
  // { Name: 'At a Party' },
  // { Name: 'At the Beach' },
  // { Name: 'At the Mall' },
  // { Name: 'At the Store' },
  // { Name: 'Bank and Finance' },
  // { Name: 'Bathroom' },
  // { Name: 'Bedroom' },
  { Name: 'Body Parts', slugName: japaneseVocabTopicSlugNames.body, hasLoginLock: false },
  // { Name: 'Body Parts II' },
  // { Name: 'Car Parts' },
  // { Name: 'Cleaning Supplies' },
  { Name: 'Clothes', slugName: japaneseVocabTopicSlugNames.clothes, hasLoginLock: false },
  { Name: 'Colours', slugName: japaneseVocabTopicSlugNames.colours, hasLoginLock: true },
  // { Name: 'Common Japanese Phrases' },
  // { Name: 'Conjunctions' },
  // { Name: 'Countries and Continents' },
  { Name: 'Days of Week', slugName: japaneseVocabTopicSlugNames.daysOfWeek, hasLoginLock: true },
  // { Name: 'Family' },
  { Name: 'Food I', slugName: japaneseVocabTopicSlugNames.food, hasLoginLock: true },
  // { Name: 'Food II' },
  // { Name: 'Furniture' },
  // { Name: 'Government' },
  { Name: 'Irregular Adjectives', slugName: japaneseVocabTopicSlugNames.irregularAdjectives, hasLoginLock: true },
  // { Name: 'Irregular Adjectives Group 2' },
  // { Name: 'Irregular Adjectives Group 3' },
  // { Name: 'Irregular Adjectives Group 4' },
  // { Name: 'Japanese Survival' },
  // { Name: 'Japanese Greetings' },
  // { Name: 'Japanese Love Phrases' },
  // { Name: 'Japanese Slang' },
  // { Name: 'Kitchen' },
  // { Name: 'Living Room' },
  { Name: 'Locations', slugName: japaneseVocabTopicSlugNames.locations, hasLoginLock: true },
  // { Name: 'Military' },
  { Name: 'Months', slugName: japaneseVocabTopicSlugNames.monthsOfYear, hasLoginLock: true },
  // { Name: 'Music' },
  // { Name: 'Nature' },
  { Name: 'Numbers', slugName: japaneseVocabTopicSlugNames.numbers, hasLoginLock: true },
  // { Name: 'Outside' },
  // { Name: 'Prepositions' },
  // { Name: 'Professions' },
  // { Name: 'Pronouns' },
  { Name: 'Regular Adjectives', slugName: japaneseVocabTopicSlugNames.regularAdjectives, hasLoginLock: true },
  // { Name: 'Regular Adjectives Group 2' },
  // { Name: 'Regular Adjectives Group 3' },
  // { Name: 'Regular Adjectives Group 4' },
  // { Name: 'Restaurant Table' },
  // { Name: 'School and Science' },
  // { Name: 'School Supplies' },
  // { Name: 'Sports' },
  // { Name: 'Technology' },
  // { Name: 'Time and Seasons' },
  // { Name: 'Tools' },
  // { Name: 'Toys' },
  // { Name: 'Travel' },
  // { Name: 'Types of Restaurants' },
  // { Name: 'Vehicles' },
  // { Name: 'Verbs Group 1' },
  // { Name: 'Verbs Group 2' },
  // { Name: 'Verbs Group 3' },
  // { Name: 'Verbs Group 4' },
  // { Name: 'Verbs Group 5' },
  // { Name: 'Verbs Group 6' },
  // { Name: 'Verbs Group 7' },
  // { Name: 'Verbs Group 8' },
  // { Name: 'Verbs Group 9' },
  // { Name: 'Verbs Group 10' },
  // { Name: 'Verbs Group 11' },
  // { Name: 'Verbs Group 12' },
  // { Name: 'Verbs Group 13' },
  // { Name: 'Verbs Group 14' },
  // { Name: 'Verbs Group 15' },
  // { Name: 'Weather' },
];

const VocabularyGuide = () => {
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
      <PageTitle title='Vocabulary Guide' />
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

export default VocabularyGuide;