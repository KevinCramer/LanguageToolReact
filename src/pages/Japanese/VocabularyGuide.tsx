import { useNavigate } from 'react-router-dom';
import { japaneseVocabTopicSlugNames } from '../../data/structured-data/words';
import { useEffect, useState } from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { lingoCommandIsLocked } from '../../constants';
import { useAuth } from '../../contexts/AuthContext';
import { setBackwardRoute, setForwardRoute } from '../../redux-store/route';
import { useDispatch } from 'react-redux';

interface Topic {
  Name: string;
  slugName: string;
  isLocked: boolean;

}

// commented out topics are not yet implemented
// go to these links for vocab data:
// 1: https://www.learnalanguage.com/learn-japanese/japanese-words/
// 2: https://www.learnalanguage.com/learn-japanese/japanese-verbs/
// 3: https://www.learnalanguage.com/learn-japanese/japanese-phrases/
const allTopics: Topic[] = [
  { Name: 'Animals', slugName: japaneseVocabTopicSlugNames.animals, isLocked: true },
  // { Name: 'Appliances' },
  // { Name: 'At a Party' },
  // { Name: 'At the Beach' },
  // { Name: 'At the Mall' },
  // { Name: 'At the Store' },
  // { Name: 'Bank and Finance' },
  // { Name: 'Bathroom' },
  // { Name: 'Bedroom' },
  { Name: 'Body Parts I', slugName: japaneseVocabTopicSlugNames.body, isLocked: true },
  // { Name: 'Body Parts II' },
  // { Name: 'Car Parts' },
  // { Name: 'Cleaning Supplies' },
  { Name: 'Clothes', slugName: japaneseVocabTopicSlugNames.clothes, isLocked: false },
  { Name: 'Colours', slugName: japaneseVocabTopicSlugNames.colours, isLocked: false },
  // { Name: 'Common Japanese Phrases' },
  // { Name: 'Conjunctions' },
  // { Name: 'Countries and Continents' },
  { Name: 'Days of Week', slugName: japaneseVocabTopicSlugNames.daysOfWeek, isLocked: true },
  // { Name: 'Family' },
  { Name: 'Food I', slugName: japaneseVocabTopicSlugNames.food, isLocked: true },
  // { Name: 'Food II' },
  // { Name: 'Furniture' },
  // { Name: 'Government' },
  { Name: 'Irregular Adjectives', slugName: japaneseVocabTopicSlugNames.irregularAdjectives, isLocked: true },
  // { Name: 'Irregular Adjectives Group 2' },
  // { Name: 'Irregular Adjectives Group 3' },
  // { Name: 'Irregular Adjectives Group 4' },
  // { Name: 'Japanese Survival' },
  // { Name: 'Japanese Greetings' },
  // { Name: 'Japanese Love Phrases' },
  // { Name: 'Japanese Slang' },
  // { Name: 'Kitchen' },
  // { Name: 'Living Room' },
  { Name: 'Locations', slugName: japaneseVocabTopicSlugNames.locations, isLocked: true },
  // { Name: 'Military' },
  { Name: 'Months', slugName: japaneseVocabTopicSlugNames.monthsOfYear, isLocked: true },
  // { Name: 'Music' },
  // { Name: 'Nature' },
  { Name: 'Numbers', slugName: japaneseVocabTopicSlugNames.numbers, isLocked: false },
  // { Name: 'Outside' },
  // { Name: 'Prepositions' },
  // { Name: 'Professions' },
  // { Name: 'Pronouns' },
  { Name: 'Regular Adjectives', slugName: japaneseVocabTopicSlugNames.regularAdjectives, isLocked: true },
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
  const { currentUser } = useAuth(); // Access the auth context
  const dispatch = useDispatch();

  const userIsLoggedIn = currentUser && currentUser.email;
  const navigate = useNavigate();

  const handleTopicClick = (topic: Topic) => {
    if(topic.isLocked && lingoCommandIsLocked && !userIsLoggedIn) {
      dispatch(setBackwardRoute(`/japanese/vocabulary-guide`)); // Set the backward route
      dispatch(setForwardRoute(`/japanese/vocabulary?s=${topic.slugName}-T0TFT`)); // Set the forward route
      navigate('/free-content'); // Navigate to the login page
    }
    else{
      navigate(`/japanese/vocabulary?s=${topic.slugName}-T0TFT`); // Navigate to the given subroute
    }
  };
  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
      // Update the windowWidth state when the window is resized
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      // Add event listener to handle window resizing
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return windowWidth;
  };

  const width = useWindowWidth(); // Get the current window width

  // Now you can use width to check screen size in your component
  const isMobile = width < 768; 

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
    gridGap: '10px',
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 text-center">
      <h4 className='text-center text-2xl py-12'>Vocabulary Topics</h4>
      <div style={gridStyles}>
        {allTopics.map((topic, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p my-4 h-[70px] shadow-md transform transition-transform duration-200 hover:scale-105 hover:cursor-pointer"
            onClick={() => handleTopicClick(topic)}
          >
            <div className={`flex justify-between items-start md:text-xl mb-4 ${!topic.slugName ? 'text-gray-500' : ''}`}>
              <div className="flex-1 h-[70px] ml-6 md:ml-8 flex items-center justify-center">
                {topic.Name}
              </div>
              {/* LockIcon aligned at the top-right */}
              {topic.isLocked && lingoCommandIsLocked && !userIsLoggedIn && (
                <div className="m-1">
                  <LockIcon style={{ fontSize: isMobile ? '20px' : '25px' }} /> 
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