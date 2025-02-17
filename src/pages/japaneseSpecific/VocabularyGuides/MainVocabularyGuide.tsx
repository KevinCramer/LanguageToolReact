import { consistentStyles, lingoCommandHasLoginLock, mobileBreakPoint } from '../../../constants';
import { setBackwardRoute, setForwardRoute } from '../../../redux-store/route';
import { japaneseVocabTopicSlugNames } from '../../../data/structured-data/words';
import LockIcon from '@mui/icons-material/Lock';
import PageTitle from '../../../components/atoms/PageTitle';
import { useAuth } from '../../../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useWindowWidth from '../../../hooks/useWindowWidth';

interface Topic {
  name: string;
  slugName: string;
  hasLoginLock: boolean;

}

// commented out topics are not yet implemented
// go to these links for vocab data:
// 1: https://www.learnalanguage.com/learn-japanese/japanese-words/
// 2: https://www.learnalanguage.com/learn-japanese/japanese-verbs/
// 3: https://www.learnalanguage.com/learn-japanese/japanese-phrases/
const allTopics: Topic[] = [
  { name: 'Animals', slugName: japaneseVocabTopicSlugNames.animals, hasLoginLock: false },
  // { name: 'Appliances' },
  // { name: 'At a Party' },
  // { name: 'At the Beach' },
  // { name: 'At the Mall' },
  // { name: 'At the Store' },
  // { name: 'Bank and Finance' },
  // { name: 'Bathroom' },
  // { name: 'Bedroom' },
  { name: 'Body Parts', slugName: japaneseVocabTopicSlugNames.body, hasLoginLock: false },
  // { name: 'Body Parts II' },
  // { name: 'Car Parts' },
  // { name: 'Cleaning Supplies' },
  { name: 'Clothes', slugName: japaneseVocabTopicSlugNames.clothes, hasLoginLock: false },
  { name: 'Colours', slugName: japaneseVocabTopicSlugNames.colours, hasLoginLock: true },
  // { name: 'Common Japanese Phrases' },
  // { name: 'Conjunctions' },
  // { name: 'Countries and Continents' },
  { name: 'Days of Week', slugName: japaneseVocabTopicSlugNames.daysOfWeek, hasLoginLock: true },
  { name: 'Family', slugName: japaneseVocabTopicSlugNames.family, hasLoginLock: true },
  { name: 'Food', slugName: japaneseVocabTopicSlugNames.food.name, hasLoginLock: true },
  // { name: 'Food II' },
  // { name: 'Furniture' },
  // { name: 'Government' },
  { name: 'Home', slugName: japaneseVocabTopicSlugNames.home.name, hasLoginLock: true },
  { name: 'Irregular Adjectives', slugName: japaneseVocabTopicSlugNames.irregularAdjectives, hasLoginLock: true },
  // { name: 'Irregular Adjectives Group 2' },
  // { name: 'Irregular Adjectives Group 3' },
  // { name: 'Irregular Adjectives Group 4' },
  // { name: 'Japanese Survival' },
  // { name: 'Japanese Greetings' },
  // { name: 'Japanese Love Phrases' },
  // { name: 'Japanese Slang' },
  // { name: 'Kitchen' },
  // { name: 'Living Room' },
  { name: 'Locations', slugName: japaneseVocabTopicSlugNames.locations, hasLoginLock: true },
  // { name: 'Military' },
  { name: 'Months', slugName: japaneseVocabTopicSlugNames.monthsOfYear, hasLoginLock: true },
  // { name: 'Music' },
  { name: 'Nature', slugName: japaneseVocabTopicSlugNames.nature, hasLoginLock: true },
  { name: 'Numbers', slugName: japaneseVocabTopicSlugNames.numbers, hasLoginLock: true },
  { name: 'Occupations', slugName: japaneseVocabTopicSlugNames.occupations, hasLoginLock: true },
  // { name: 'Outside' },
  // { name: 'Prepositions' },
  // { name: 'Pronouns' },
  { name: 'Regular Adjectives', slugName: japaneseVocabTopicSlugNames.regularAdjectives, hasLoginLock: true },
  // { name: 'Regular Adjectives Group 2' },
  // { name: 'Regular Adjectives Group 3' },
  // { name: 'Regular Adjectives Group 4' },
  // { name: 'Restaurant Table' },
  // { name: 'School and Science' },
  // { name: 'School Supplies' },
  { name: 'Sports', slugName: japaneseVocabTopicSlugNames.sports, hasLoginLock: true },
  { name: 'Technology', slugName: japaneseVocabTopicSlugNames.technology, hasLoginLock: true },
  { name: 'Time and Seasons', slugName: japaneseVocabTopicSlugNames.timeAndSeasons, hasLoginLock: true },
  // { name: 'Tools' },
  // { name: 'Toys' },
  { name: 'Travel', slugName: japaneseVocabTopicSlugNames.travel, hasLoginLock: true },
  // { name: 'Types of Restaurants' },
  // { name: 'Vehicles' },
  { name: 'Verbs', slugName: japaneseVocabTopicSlugNames.verbs.name, hasLoginLock: true },
  // { name: 'Verbs Group 1' },
  // { name: 'Verbs Group 2' },
  // { name: 'Verbs Group 3' },
  // { name: 'Verbs Group 4' },
  // { name: 'Verbs Group 5' },
  // { name: 'Verbs Group 6' },
  // { name: 'Verbs Group 7' },
  // { name: 'Verbs Group 8' },
  // { name: 'Verbs Group 9' },
  // { name: 'Verbs Group 10' },
  // { name: 'Verbs Group 11' },
  // { name: 'Verbs Group 12' },
  // { name: 'Verbs Group 13' },
  // { name: 'Verbs Group 14' },
  // { name: 'Verbs Group 15' },
  { name: 'Weather', slugName: japaneseVocabTopicSlugNames.weather, hasLoginLock: true },
];

const MainVocabularyGuide = () => {
  //@ts-ignore
  const { currentUser } = useAuth();
  const dispatch = useDispatch();

  const userIsLoggedIn = currentUser && currentUser.email;
  const navigate = useNavigate();

  const handleTopicClick = (topic: Topic) => {
    if(topic.hasLoginLock && lingoCommandHasLoginLock && !userIsLoggedIn) {
      dispatch(setBackwardRoute(`/japanese/vocabulary-guide`));
      if(topic.slugName === japaneseVocabTopicSlugNames.food.name){
        dispatch(setForwardRoute('/japanese/food-vocabulary-guide')); 
      }
      else if(topic.slugName === japaneseVocabTopicSlugNames.home.name){
        dispatch(setForwardRoute('/japanese/home-vocabulary-guide')); 
      }
      else if(topic.slugName === japaneseVocabTopicSlugNames.verbs.name){
        dispatch(setForwardRoute('/japanese/verb-vocabulary-guide')); 
      }
      else{
        dispatch(setForwardRoute(`/japanese/vocabulary?s=${topic.slugName}-T0TFT`)); 
      }
      navigate('/free-content');
    }
    else{
      if(topic.slugName === japaneseVocabTopicSlugNames.food.name){
        navigate('/japanese/food-vocabulary-guide'); 
      }
      else if(topic.slugName === japaneseVocabTopicSlugNames.home.name){
        navigate('/japanese/home-vocabulary-guide'); 
      }
      else if(topic.slugName === japaneseVocabTopicSlugNames.verbs.name){
        navigate('/japanese/verb-vocabulary-guide'); 
      }
      else {
        navigate(`/japanese/vocabulary?s=${topic.slugName}-T0TFT`);
      }
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
                {topic.name}
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

export default MainVocabularyGuide;