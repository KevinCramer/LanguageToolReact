import { consistentStyles, languageToSlugs, lingoCommandHasLoginLock } from '../../constants'
import { queryParamCompress, queryParamDecompress } from '../../helpers/query-param-helpers'
import { scramble, scrambleWithoutMutate } from '../../helpers/vocab-content-helpers';
import { setBackwardRoute, setForwardRoute } from '../../redux-store/route';
import { Topic, VocabLanguage, Word, WordWithThreeWritingSystems } from '../../../types/learningSections/VocabTypes'
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { writingSystems as allWritingSystems } from '../../data/structured-data/writingSystems';
import LockIcon from '@mui/icons-material/Lock';
import { nullOrUndefined } from '../../helpers/audio-player-helpers'
import QuizElement from '../../components/atoms/QuizElement';
import { sortTopics } from '../../helpers/words-data-helper';
import StudyElement from '../../components/molecules/StudyElement';
import { useAuth } from '../../contexts/AuthContext'
import { useDispatch } from 'react-redux';
import QuizButton from '../../components/molecules/QuizButton';
import DropdownButton from '../../components/molecules/dropdownButton';

const WritingSystems = (
  props: {
    howToGuideVideo?: any
   }) => {
      
  //@ts-ignore
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  const location = useLocation();
  
  const userIsLoggedIn = currentUser && currentUser.email

  let writingSystems = allWritingSystems.map(writingSystem => ({
    ...writingSystem, // Spread the existing language properties
    topics: sortTopics(writingSystem.topics, userIsLoggedIn), // Replace topics with sorted ones
  }));

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
      if (topicDropdownRef.current && !topicDropdownRef
        .current.contains(event.target as Node)) {
        setIsTopicDropdownOpen(false);
      }
      if (settingsDropdownRef.current && !settingsDropdownRef
        .current.contains(event.target as Node)) {
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
    if(topic.hasLoginLock && lingoCommandHasLoginLock && !userIsLoggedIn ){
      dispatch(setBackwardRoute(location.pathname + location.search));
      dispatch(setForwardRoute((location.pathname + location.search)
        .replace(/(?<=\?s=)[^=-]+(?=-)/, topic.slugName)));
      navigate('/free-content')
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
  
  var [s, setS] = useState(JSON.parse(JSON.stringify(selectedWordsForQuiz))); // Using state instead of a regular variable
  let keyRender = 0;
  
  useEffect(() => {
    if (!showTrueOrder) {
      const scrambledWords = scrambleWithoutMutate(s); // Scramble the array without mutating it
      setS(scrambledWords); // Update the state with the scrambled array
    } 
  }, [showTrueOrder]); // Re-run the effect when showTrueOrder changes

  // Effect for handling changes to `selectedWordsForQuiz`
  useEffect(() => {
    if (!showTrueOrder) {
      const scrambledWords = scrambleWithoutMutate(selectedWordsForQuiz);
      setS(scrambledWords); // Update `s` with scrambled version
    } else {
      setS(JSON.parse(JSON.stringify(selectedWordsForQuiz)));
    }
  }, [selectedWordsForQuiz, showTrueOrder]);

  // Effect for handling changes to `currentTopic`
  useEffect(() => {
  // Reset both selectedWordsForQuiz and s to empty arrays when currentTopic changes
    setS([]);
    setSelectedWordsForQuiz([]); // Make sure selectedWordsForQuiz is also set to empty
    setModifyQuiz(false)
  }, [currentTopic]); // This effect runs whenever currentTopic changes
  
  function ToggleQuiz() {
    if (quiz) {
      let count = 0;
      return (
        <div className={`pt-4 space-y-4 ${minWidth}`}>
          {( modifyQuiz ? (showTrueOrder ? selectedWordsForQuiz :
            scrambleWithoutMutate(selectedWordsForQuiz)) : topicWords).map((pair: Word) => (
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
        <div className='pt-2'>
          <div className={`overflow-x-auto border shadow ${minWidth}`}>
            <table className="w-full bg-white border-separate border-t border-l border-r border-gray-500 border-spacing-0">
              <thead className={`${consistentStyles.textBlack} bg-gray-200`}>
                <tr>
                  <th className="px-4 py-2 text-center border-r border-b border-gray-800 w-1/2">
                    {showBaseLanguage ? 'English' : currentLanguage.languageName}
                  </th>
                  <th className="px-4 py-2 text-center border-b border-gray-800 w-1/2">
                    {showBaseLanguage ? currentLanguage.languageName : 'English'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {topicWords.map((pair: Word, index: number) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-white' : 'bg-white'
                    } hover:bg-gray-100`}
                  >
                    <td className="px-4 py-2 text-sm text-center border-b border-r border-gray-500 w-1/2">
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
                        onQuizSelect={(isSelected: boolean) =>
                          handleQuizSelection(pair, isSelected)}
                        initialQuizSelect={selectedWordsForQuiz.some((word) => 
                          word.englishWord === pair.englishWord)}
                      />
                    </td>
                    <td className="px-4 py-2 text-sm  border-b border-gray-500 text-center w-1/2">
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
                        onQuizSelect={(isSelected: boolean) => 
                          handleQuizSelection(pair, isSelected)} // Pass onQuizSelect
                        initialQuizSelect={selectedWordsForQuiz.some((word) =>
                          word.englishWord === pair.englishWord)}

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
    
  useEffect(() => {
    // Check if showTrueOrder is true
    if (!showTrueOrder) {
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
    <div className='flex flex-col items-center'>
      <div className='flex mt-12 mb-12 items-center'>
        <h4 className="flex flex-row justify-center text-center text-2xl">
          <div className={`${consistentStyles.textBlack}`}>
            {currentLanguage.languageName} Writing Systems -&nbsp;
            <a
              onClick={() => setShowPopUp(true)}
              className={`${consistentStyles.blueText} underline text-2xl`}
            >
        Video Guide
            </a>
          </div>
        </h4>
      </div>
      <div className="flex min-w-[350px] justify-between items-center">
        {/* Topic Dropdown */}
        <div className="relative" ref={topicDropdownRef}>
          <DropdownButton text={`Topic: 
                ${currentTopic.name.length > 7
      ? `${currentTopic.name.substring(0, 7)}...`
      : currentTopic.name}`} onClick={toggleTopicDropdown}/>
          {isTopicDropdownOpen && (
            <div className=" absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow w-64 z-10">
              <ul className="divide-y divide-gray-200">
                {(currentLanguage.topics as Topic[])
                  .sort((t1, t2) => (t1.topicOrder || 0) < (t2.topicOrder || 0) ? -1 : 1)
                  .map((topic, index) => (
                    <li
                      key={index}
                      className={`${consistentStyles.textBlack} px-4 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-200 ${
                        currentTopic.name === topic.name ? 'bg-gray-100' : ''
                      }`}
                      onClick={() => changeCurrentTopic(topic)}
                    >
                      <div className="flex items-center justify-between">
                        {topic.name}
                        {topic.hasLoginLock && lingoCommandHasLoginLock && !userIsLoggedIn && <LockIcon />}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
        <div className='flex justify-center'>
          <QuizButton quiz={quiz} changeQuizState={changeQuizState}/>
        </div>
        {/* Settings Dropdown */}
        <div className={ `${consistentStyles.textBlack} relative`} ref={settingsDropdownRef}>
          <DropdownButton text='Settings' onClick={toggleSettingsDropdown}/>
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
      {ToggleQuiz()}
      {showPopUp && (
        <div className="modal fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded p-4 max-w-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className={`${consistentStyles.textBlack} text-lg font-semibold`}>How to Guide (Video)</h3>
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
