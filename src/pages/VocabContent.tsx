import {
  Topic,
  VocabLanguage,
  Word,
  WordWithThreeWritingSystems, 
} from '../../types/learningSections/VocabTypes'
import { queryParamCompress, queryParamDecompress } from '../helpers/query-param-helpers'
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { languages as allLanguages } from '../data/structured-data/words';
import CustomSwitch from '../components/atoms/CustomSwitch';
import { denyPermission } from '../redux-store/lock';
import { languageToSlugs, lingoCommandIsLocked } from '../constants'
import LockIcon from '@mui/icons-material/Lock';
import { nullOrUndefined } from '../helpers/audio-player-helpers'
import QuizElement from '../components/atoms/QuizElement';
import { scramble } from '../helpers/vocab-content-helpers';
import StudyElement from '../components/molecules/StudyElement';
import { useAuth } from '../contexts/AuthContext'
import { useDispatch } from 'react-redux';
import { sortTopics } from '../helpers/words-data-helper';

const VocabContent = (
  props: {
    howToGuideVideo?: any
   }) => {
      
  //@ts-ignore
  const { currentUser } = useAuth();
  
  const userIsLoggedIn = currentUser && currentUser.email

  let languages = allLanguages.map(language => ({
    ...language, // Spread the existing language properties
    topics: sortTopics(language.topics, userIsLoggedIn), // Replace topics with sorted ones
  }));
  const dispatch = useDispatch();

  const navigate = useNavigate();

  var urlSearchParams = new URLSearchParams(useLocation().search);
  const urlSettings = JSON.parse(
    queryParamDecompress(urlSearchParams.get('s') as string) as string
  ) || []
  var currentLanguage: VocabLanguage = languages[0]
 
  const urlTopic = urlSettings[1]
  var currentTopic: Topic = (currentLanguage.topics as Topic[])
    .find(t => t.slugName === urlTopic) || currentLanguage.topics[0]
  var [currentTopic,setCurrentTopic] = useState(currentTopic)
 
  const urlShowBaseLanguage = urlSettings[2]
  var showBaseLanguage = !nullOrUndefined(urlShowBaseLanguage) ? urlShowBaseLanguage : true
  var [showBaseLanguage,setShowBaseLanguage] = useState(showBaseLanguage)
  const changeBaseLanguage = () => { return setShowBaseLanguage(!showBaseLanguage)}

  const urlCurrentAlphabet = urlSettings[3]
  var currentAlphabet: number = parseInt(urlCurrentAlphabet as string) || 0;
  var [currentAlphabet,setCurrentAlphabet] = useState(currentAlphabet)
  const changeCurrentAlphabet = (number: number) => { return setCurrentAlphabet(
    currentAlphabet = number)}

  const handleSelectChange = (event: any) => {
    // Handle select change (optional)
    if(event.target.value === '0'){
      changeCurrentAlphabet(0)
    }
    if(event.target.value === '1'){
      changeCurrentAlphabet(1)
    }
    if(event.target.value === '2'){
      changeCurrentAlphabet(2)
    }
  };

  const [isTopicDropdownOpen, setIsTopicDropdownOpen] = useState(false);
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);

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
  
  function ToggleQuiz(){
    if (quiz) {
      let count = 0;
      return (
        <div className={`pt-4 space-y-4 ${minWidth}`}>
          {topicWords.map((pair: Word) => (
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
    }   
    else {
      return (
        <div className='pt-4'>
          <div className={`overflow-x-auto border rounded-lg shadow ${minWidth}`}>
            <table className="w-full bg-white border-separate border-spacing-0">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-r border-gray-300 w-1/2">
                    {showBaseLanguage ? 'English' : currentLanguage.languageName}
                  </th>
                  <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 w-1/2">
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
                    <td className="px-4 py-2 text-sm text-gray-800 text-center border-r border-gray-300 w-1/2">
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
                        showBaseLanguageFirst={showBaseLanguage}
                        strokeOrderVideo={pair.strokeOrderVideo}
                        showLeftLabel={true}
                      />
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-800 text-center w-1/2">
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
                        showBaseLanguageFirst={showBaseLanguage}
                        strokeOrderVideo={pair.strokeOrderVideo}
                        showLeftLabel={false}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      )
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
  else
  {
    var topicWords = scramble(
      currentTopic.words as (Word)[]) as 
      WordWithThreeWritingSystems[]
      
  }
  return (
    <div className='flex flex-col items-center text-lg md:text-xl'>
      <h4 className='text-center text-2xl py-12'>
        {currentLanguage.languageName} Vocabulary
      </h4>
      <div className='flex justify-center'>
        <span className='text-blue-500 underline'onClick={displayPopUp}>How to Guide (Video)</span>
      </div>
      <div className="flex space-x-4 py-4">
        {/* Topic Dropdown */}
        <div className="relative" ref={topicDropdownRef}>
          <button
            className="px-3 py-2 bg-gray-300 text-black text-sm rounded-lg shadow hover:bg-gray-400"
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
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => changeCurrentTopic(topic)}
                    >
                      <div className="flex items-center">
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
            className="px-3 py-2 bg-gray-300 text-black text-sm rounded-lg shadow hover:bg-gray-400"
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
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">
                  <div className="flex-shrink-0">writing system:&nbsp;</div>
                  <select
                    name="alphabets"
                    id="alphabets"
                    onChange={handleSelectChange}
                    onClick={preventDropdownClose}
                    className="ml-2 block w-28 max-w-full truncate overflow-hidden rounded border border-gray-300 bg-white px-2 py-1 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  >
                    <option value="0">romaji</option>
                    <option value="1">hiragana, katakana</option>
                    <option value="2">hiragana, katakana, kanji</option>
                  </select>
                </li>
                {!quiz && (
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={(event) => {
                      changeAudioBool();
                      preventDropdownClose(event);
                    }}
                  >
                    <label>
                      <input
                        type="checkbox"
                        checked={audioBool}
                        onChange={changeAudioBool}
                        className="mr-2"
                      />
                    Show audio
                    </label>
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
                    <label>
                      <input
                        type="checkbox"
                        checked={!showBaseLanguage}
                        onChange={changeBaseLanguage}
                        className="mr-2"
                      />
                    Swap columns
                    </label>
                  </li>
                )}

                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                  onClick={(event) => {
                    changeOrder();
                    preventDropdownClose(event);
                  }}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked={!showTrueOrder}
                      onChange={changeOrder}
                      className="mr-2"
                    />
                  Random ordering
                  </label>
                </li>
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
 
export default VocabContent 