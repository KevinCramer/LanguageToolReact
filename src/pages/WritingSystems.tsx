import {
  Topic,
  VocabLanguage,
  Word,
  WordWithThreeWritingSystems, 
} from '../../types/learningSections/VocabTypes'
import { queryParamCompress, queryParamDecompress } from '../helpers/query-param-helpers'
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { writingSystems as allWritingSystems } from '../data/structured-data/writingSystems';
import CustomSwitch from '../components/atoms/CustomSwitch';
import { denyPermission } from '../redux-store/lock';
import { languageToSlugs, lingoCommandIsLocked } from '../constants'
import LockIcon from '@mui/icons-material/Lock';
import { nullOrUndefined } from '../helpers/audio-player-helpers'
import QuizElement from '../components/atoms/QuizElement';
import { scramble, scrambleWithoutMutate } from '../helpers/vocab-content-helpers';
import StudyElement from '../components/molecules/StudyElement';
import { useAuth } from '../contexts/AuthContext'
import { useDispatch } from 'react-redux';
import { sortTopics } from '../helpers/words-data-helper';

const WritingSystems = (
  props: {
    howToGuideVideo?: any
   }) => {
      
  //@ts-ignore
  const { currentUser } = useAuth();
  
  const userIsLoggedIn = currentUser && currentUser.email

  let writingSystems = allWritingSystems.map(writingSystem => ({
    ...writingSystem, // Spread the existing language properties
    topics: sortTopics(writingSystem.topics, userIsLoggedIn), // Replace topics with sorted ones
  }));
  const dispatch = useDispatch();

  const navigate = useNavigate();

  var urlSearchParams = new URLSearchParams(useLocation().search);
  const urlSettings = JSON.parse(
    queryParamDecompress(urlSearchParams.get('s') as string) as string
  ) || []
  var currentLanguage: VocabLanguage = writingSystems[0]
 
  const urlTopic = urlSettings[1]
  var currentTopic: Topic = (currentLanguage.topics as Topic[])
    .find(t => t.slugName === urlTopic) || currentLanguage.topics[0]
  var [currentTopic,setCurrentTopic] = useState(currentTopic)
 
  const urlShowBaseLanguage = urlSettings[2]
  var showBaseLanguage = !nullOrUndefined(urlShowBaseLanguage) ? urlShowBaseLanguage : true
  var [showBaseLanguage,setShowBaseLanguage] = useState(showBaseLanguage)
  const changeBaseLanguage = () => { return setShowBaseLanguage(!showBaseLanguage)}

  var currentAlphabet: number = 0;

  const [isTopicDropdownOpen, setIsTopicDropdownOpen] = useState(false);
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);

  var [selectedWordsForQuiz, setSelectedWordsForQuiz] = useState<Word[]>([]);

  const handleQuizSelection = (word: Word, isSelected: boolean) => {
    setSelectedWordsForQuiz(prevSelected => {
      if (isSelected) {
        if(currentTopic.hasOrdering){
          return [...prevSelected, word].sort((a: Word,
            b: Word) => (a.order || 0) < (b.order || 0) ? -1 : 1)
        }
        else {
          return [...prevSelected, word]
            .sort((a: Word, b: Word) => { return a.englishWord < b.englishWord ? -1 : 1 })
        }
      } else {
        if(currentTopic.hasOrdering){
          return prevSelected.filter(w => w !== word).sort((a: Word,
            b: Word) => (a.order || 0) < (b.order || 0) ? -1 : 1)
        }
        else {
          return prevSelected.filter(w => w !== word)
            .sort((a: Word, b: Word) => { return a.englishWord < b.englishWord ? -1 : 1 })
        }
        
      }
    });
  };
  const topicDropdownRef = useRef<HTMLDivElement | null>(null);
  const settingsDropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdowns if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (topicDropdownRef.current && !topicDropdownRef.current.contains(event.target as Node)) {
        setIsTopicDropdownOpen(false);
      }
      if (settingsDropdownRef.current && !settingsDropdownRef.current.contains(event.target as Node)) {
        setIsSettingsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTopicDropdown = () => setIsTopicDropdownOpen(!isTopicDropdownOpen);
  const toggleSettingsDropdown = () => setIsSettingsDropdownOpen(!isSettingsDropdownOpen);
  
  const preventDropdownClose = (event: any) => {
    event.stopPropagation(); // Prevent click event from closing the dropdown
  };

  const urlShowTrueOrder = urlSettings[4]
  var showTrueOrder = !nullOrUndefined(urlShowTrueOrder) ? urlShowTrueOrder : true
  var [showTrueOrder,setShowTrueOrder] = useState(showTrueOrder)
  const changeOrder = () => { return setShowTrueOrder(!showTrueOrder)}

  const changeCurrentTopic = (topic: Topic) => {
    if(topic.isLocked && lingoCommandIsLocked && !userIsLoggedIn ){
      dispatch(denyPermission());
    }
    else {
      setCurrentTopic(topic);
      setIsTopicDropdownOpen(false); // Close the dropdown when a topic is selected
    }
  }

  const urlQuiz = urlSettings[5]
  var quiz = !nullOrUndefined(urlQuiz) ? urlQuiz : false
  var [quiz,setQuiz] = useState(quiz)
  // Add a new state variable to store the previous value of showBaseLanguage
  const [previousShowBaseLanguage, setPreviousShowBaseLanguage] = useState(showBaseLanguage);

  // Update the changeQuizState function to handle this logic
  const changeQuizState = () => {
    if (!quiz && currentTopic.isAlphabet) {
    // Save the current showBaseLanguage value before changing it
      setPreviousShowBaseLanguage(showBaseLanguage);
      setShowBaseLanguage(false); // Set showBaseLanguage to false
    } else if (quiz && currentTopic.isAlphabet) {
    // Restore the previous value when switching back to quiz=false
      setShowBaseLanguage(previousShowBaseLanguage);
    }
    setQuiz(!quiz); // Toggle quiz state
  };

  const urlAudio = urlSettings[6]
  var audioBool = !nullOrUndefined(urlAudio) ? urlAudio : true 
  var [audioBool,setAudioBool] = useState(audioBool)
  const changeAudioBool = () => { return setAudioBool(!audioBool)}
  
  var modifyQuiz = false
  var [modifyQuiz,setModifyQuiz] = useState(modifyQuiz)
  const changeModifyQuiz = () => {
    // Reset selectedWordsForQuiz when modifyQuiz is turned off
    if (modifyQuiz) {
      setSelectedWordsForQuiz([]); // Clear selected words when modifying quiz is turned off
    }
    setModifyQuiz(!modifyQuiz);
  };
  var showPopUp = false;
  var [showPopUp,setShowPopUp] = useState(showPopUp)
  const hidePopUp = () => { return setShowPopUp(false)}
  const displayPopUp = () => { return setShowPopUp(true)}

  // Ensure default language is reflected in the URL if not already present
  useEffect(() => {
    const settings = [
      languageToSlugs[currentLanguage.languageName],
      currentTopic.slugName, 
      showBaseLanguage,
      currentAlphabet, 
      showTrueOrder,
      quiz,
      audioBool
    ]
    navigate(`?s=${queryParamCompress(JSON.stringify(settings))}`, { replace: true });

  }, [
    currentLanguage.languageName, currentTopic.slugName, showBaseLanguage,
    currentAlphabet,showTrueOrder,quiz,audioBool, navigate ]);

  const minWidth = 'min-w-[350px]'

  console.log('selectedWordsForQuiz: ', selectedWordsForQuiz)
  
  function ToggleQuiz() {
    if (quiz) {
      let count = 0;
      return (
        <div className={`pt-4 space-y-4 ${minWidth}`}>
          {( modifyQuiz ? (showTrueOrder ? selectedWordsForQuiz : scrambleWithoutMutate(selectedWordsForQuiz)) : topicWords).map((pair: Word) => (
            <div
              key={
                showTrueOrder.toString() +
                pair.englishWord +
                pair.foreignWord[currentAlphabet] +
                showBaseLanguage
              }
              className="p-4 border rounded-lg shadow bg-white"
            >
              <QuizElement
                myCounter={++count}
                questionWord={
                  showBaseLanguage
                    ? pair.englishWord
                    : pair.foreignWord[currentAlphabet]
                }
                answerWord={
                  showBaseLanguage
                    ? pair.foreignWord[currentAlphabet]
                    : pair.englishWord
                }
              />
            </div>
          ))}
        </div>
      );
    } else {
      // Study mode (no quiz selected words)
      return (
        <div className='pt-4'>
          <div className={`overflow-x-auto border rounded-lg shadow ${minWidth}`}>
            <table className="w-full bg-white border-separate border-spacing-0">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-center text-gray-700 border-r border-gray-300 w-1/2">
                    {showBaseLanguage ? 'English' : currentLanguage.languageName}
                  </th>
                  <th className="px-4 py-2 text-center text-gray-700 w-1/2">
                    {showBaseLanguage ? currentLanguage.languageName : 'English'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {topicWords.map((pair: Word, index: number) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-gray-100`}
                  >
                    <td className="px-4 py-2 text-sm text-gray-800 text-center border-b border-r border-gray-300 w-1/2">
                      <StudyElement
                        BaseLanguageWord={
                          showBaseLanguage
                            ? pair.englishWord
                            : pair.foreignWord[currentAlphabet]
                        }
                        ForeignLanguageWord={
                          showBaseLanguage
                            ? pair.foreignWord[currentAlphabet]
                            : pair.englishWord
                        }
                        ForeignLanguageWordAudio={pair.foreignAudio}
                        showAudio={audioBool}
                        showModifyQuiz={modifyQuiz}
                        showBaseLanguageFirst={showBaseLanguage}
                        strokeOrderVideo={pair.strokeOrderVideo}
                        showLeftLabel={true}
                        onQuizSelect={(isSelected: boolean) => handleQuizSelection(pair, isSelected)} // Pass onQuizSelect
                        initialQuizSelect={selectedWordsForQuiz.some((word) => word.englishWord === pair.englishWord)}
                      />
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-800  border-b border-gray-300 text-center w-1/2">
                      <StudyElement
                        BaseLanguageWord={
                          showBaseLanguage
                            ? pair.englishWord
                            : pair.foreignWord[currentAlphabet]
                        }
                        ForeignLanguageWord={
                          showBaseLanguage
                            ? pair.foreignWord[currentAlphabet]
                            : pair.englishWord
                        }
                        ForeignLanguageWordAudio={pair.foreignAudio}
                        showAudio={audioBool}
                        showModifyQuiz={modifyQuiz}
                        showBaseLanguageFirst={showBaseLanguage}
                        strokeOrderVideo={pair.strokeOrderVideo}
                        showLeftLabel={false}
                        onQuizSelect={(isSelected: boolean) => handleQuizSelection(pair, isSelected)} // Pass onQuizSelect
                        initialQuizSelect={selectedWordsForQuiz.some((word) => word.englishWord === pair.englishWord)}

                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if(showTrueOrder)
  {
    var topicWords = currentTopic.words
    if(currentTopic.hasOrdering){
      topicWords.sort((a: Word,
        b: Word) => (a.order || 0) < (b.order || 0) ? -1 : 1)
    }
    else {
      topicWords.sort((a: Word, b: Word) => { return a.englishWord < b.englishWord ? -1 : 1 })
    }
  }
  
  const prevShowTrueOrder = useRef(showTrueOrder); // To track the previous value of showTrueOrder
  
  useEffect(() => {
    // Check if showTrueOrder is true
    if (!showTrueOrder) {
      console.log('random ordering switched on')
      var topicWords = scramble(
          currentTopic.words as (Word)[]) as 
          WordWithThreeWritingSystems[]
      // Your logic here
    } 
  }, [showTrueOrder]);
  
  if (!showTrueOrder) {
    
    var topicWords = currentTopic.words      
  }
    
  return (
    <div className='flex flex-col items-center text-lg md:text-xl'>
      <h4 className='text-center text-2xl py-12'>
        {currentLanguage.languageName} Writing Systems
      </h4>
      <div className='flex justify-center'>
        <span className='text-blue-500 underline'onClick={displayPopUp}>How to Guide (Video)</span>
      </div>
      <div className="flex space-x-4 py-4">
        {/* Topic Dropdown */}
        <div className="relative" ref={topicDropdownRef}>
          <button
            className="border-[1px] border-b-4 text-sm border-gray-300 bg-200 text-center active:bg-gray-300 hover:bg-gray-200  p-1 pl-2 rounded-lg mb-2"
            onClick={toggleTopicDropdown}
          >
            <div className='flex'>
              <div>
              Topic: {currentTopic.name}
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <polygon points="12,16 6,8 18,8" fill="black" />
              </svg>
            </div>
          </button>
          {isTopicDropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow w-64 z-10">
              <ul className="divide-y divide-gray-200">
                {(currentLanguage.topics as Topic[])
                  .sort((t1, t2) => (t1.topicOrder || 0) < (t2.topicOrder || 0) ? -1 : 1)
                  .map((topic, index) => (
                    <li
                      key={index}
                      className={`px-4 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-200 ${
                        currentTopic.name === topic.name ? 'bg-gray-100' : ''
                      }`}
                      onClick={() => changeCurrentTopic(topic)}
                    >
                      <div className="flex items-center justify-between">
                        {topic.name}
                        {topic.isLocked && lingoCommandIsLocked && !userIsLoggedIn && <LockIcon />}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>

        {/* Settings Dropdown */}
        <div className="relative" ref={settingsDropdownRef}>
          <button
            className="border-[1px] border-b-4 text-sm border-gray-300 bg-200 text-center active:bg-gray-300 hover:bg-gray-200  p-1 pl-2 rounded-lg mb-2"
            onClick={toggleSettingsDropdown}
          >
            <div className='flex'>
              <div>
              Settings
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <polygon points="12,16 6,8 18,8" fill="black" />
              </svg>
            </div>          
          </button>
          {isSettingsDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow w-64 z-10">
              <ul className="divide-y divide-gray-200">
                {!quiz && (
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={(event) => {
                      changeAudioBool();
                      preventDropdownClose(event);
                    }}
                  >
                    <div className='flex'>
                      <input
                        type="checkbox"
                        checked={audioBool}
                        onChange={changeAudioBool}
                        className="mr-2 cursor-pointer w-4 h-4"
                      />
                      <div>
                        Show audio
                      </div>
                    </div>
                  </li>
                )}
                {((currentTopic.isAlphabet && !quiz) || !currentTopic.isAlphabet) && (
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={(event) => {
                      changeBaseLanguage();
                      preventDropdownClose(event);
                    }}
                  >
                    <div className='flex'>
                      <input
                        type="checkbox"
                        checked={!showBaseLanguage}
                        onChange={changeBaseLanguage}
                        className="mr-2 cursor-pointer w-4 h-4"
                      />
                      <div>
                        Swap columns
                      </div>
                    </div>
                  </li>
                )}

                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  onClick={(event) => {
                    changeOrder();
                    preventDropdownClose(event);
                  }}
                >
                  <div className='flex'>
                    <input
                      type="checkbox"
                      checked={!showTrueOrder}
                      onChange={changeOrder}
                      className="mr-2 cursor-pointer w-4 h-4"
                    />
                    <div>
                      Random ordering
                    </div>
                  </div>
                </li>
                {!quiz && (
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={(event) => {
                      changeModifyQuiz();
                      preventDropdownClose(event);
                    }}
                  >
                    <div className='flex'>
                      <input
                        type="checkbox"
                        checked={modifyQuiz}
                        onChange={changeModifyQuiz}
                        className="mr-2 cursor-pointer w-4 h-4"
                      />
                      <div>
                        Select questions for quiz
                      </div>
                    </div>
                  </li>
                )} 
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='px-2'>
            Study
        </div>
        <CustomSwitch 
          onChange = {changeQuizState}
          checked= {quiz} 
        /> 
        <div className='px-2'>
        Quiz
        </div>               
      </div>
      {ToggleQuiz()}
      {showPopUp && (
        <div className="modal fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded p-4 max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">How to Guide (Video)</h3>
              <button className="text-gray-500" onClick={hidePopUp}>
                ✕
              </button>
            </div>
            <div>
              <video
                controls
                src={props.howToGuideVideo}
                className="w-full rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default WritingSystems;
