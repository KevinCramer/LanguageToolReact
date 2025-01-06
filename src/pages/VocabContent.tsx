import { Container, Modal, Navbar as NavbarBs, Table } from 'react-bootstrap';
import {
  Topic,
  VerbConjugationEnglish, 
  VocabLanguage,
  Word,
  WordWithOneAlphabet, 
  WordWithThreeAlphabets, 
  WordWithTwoAlphabets 
} from '../../types/learningSections/VocabTypes'
import { queryParamCompress, queryParamDecompress } from '../helpers/query-param-helpers'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { languages as allLanguages } from '../data/structured-data/words';
import CustomDropDownButton from '../components/atoms/CustomDropDownButton';
import CustomSwitch from '../components/atoms/CustomSwitch';
import { denyPermission } from '../redux-store/lock';
import Dropdown from 'react-bootstrap/Dropdown';
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
    languageNumber: number
    isWritingSystem?: boolean
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

  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Check if the device is mobile
  const checkIfMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    // Regular expression to check for mobile devices (phones, tablets)
    const isMobile = /iphone|ipod|android|blackberry|windows phone|mobile/i.test(userAgent);
    setIsMobileDevice(isMobile);
  };

  // Run the check on mount
  useEffect(() => {
    checkIfMobile();
  }, []);

  var urlSearchParams = new URLSearchParams(useLocation().search);
  const urlSettings = JSON.parse(
    queryParamDecompress(urlSearchParams.get('s') as string) as string
  ) || []
  const urlLanguage = urlSettings[0]
  var currentLanguage: VocabLanguage = languages
    .find(l => languageToSlugs[l.languageName] === urlLanguage) || languages[props.languageNumber]
  var [currentLanguage,setLanguage] = useState(currentLanguage);
  console.log('currentLanguage', currentLanguage)
 
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
  
  function ToggleQuiz(){
    if (quiz) {
      const isVerb = currentTopic.name === 'Verbs'
      var count = 0;
      return ( 
        <div>
          {topicWords.map((pair: Word) =>
            <div key ={showTrueOrder.toString() + (isVerb ?
              (pair.englishWord as VerbConjugationEnglish).infinitive : pair.englishWord)
               + pair.foreignWord[currentAlphabet] + showBaseLanguage}>
              <QuizElement myCounter = {count += 1} questionWord = { showBaseLanguage ? 
                pair.englishWord : pair.foreignWord[currentAlphabet] }
              answerWord = {showBaseLanguage ? pair.foreignWord[currentAlphabet] :
                pair.englishWord} isVerb = {currentTopic.name === 'Verbs'}/>
            </div>                    
          )}
        </div>
      )
    }
    else {
      return (
        <div>
          <title>{currentLanguage.languageName }Vocabulary</title>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>
                  {showBaseLanguage ? 'English' : currentLanguage.languageName }
                </th>
                <th>
                  {showBaseLanguage ? currentLanguage.languageName : 'English' }
                </th>
              </tr>
            </thead>
            <div>
              <tbody>
                {topicWords.map((pair: Word, index: number) => (
                  <tr key={index}>
                    <td>     
                      <StudyElement 
                        BaseLanguageWord = { showBaseLanguage ? pair.englishWord :
                          pair.foreignWord[currentAlphabet]} 
                        ForeignLanguageWord = {showBaseLanguage ? 
                          pair.foreignWord[currentAlphabet] : pair.englishWord}  
                        ForeignLanguageWordAudio = {pair.foreignAudio} 
                        showAudio = {audioBool} 
                        showBaseLanguageFirst = {showBaseLanguage} 
                        isVerb = {currentTopic.name === 'Verbs'}
                        strokeOrderVideo = {pair.strokeOrderVideo}
                        pronouns = {currentLanguage.pronouns}
                        showLeftLabel = {true}
                      />
                    </td>
                    <td>     
                      <StudyElement 
                        BaseLanguageWord = { showBaseLanguage ? pair.englishWord :
                          pair.foreignWord[currentAlphabet]} 
                        ForeignLanguageWord = {showBaseLanguage ? 
                          pair.foreignWord[currentAlphabet] : pair.englishWord}  
                        ForeignLanguageWordAudio = {pair.foreignAudio} 
                        showAudio = {audioBool} 
                        showBaseLanguageFirst = {showBaseLanguage} 
                        isVerb = {currentTopic.name === 'Verbs'}
                        strokeOrderVideo = {pair.strokeOrderVideo}
                        pronouns = {currentLanguage.pronouns}
                        showLeftLabel = {false}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </div>
          </Table>
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
      topicWords.sort((a: Word,
        b: Word) => 
      {
        const aInfinitive = (a.englishWord as unknown as VerbConjugationEnglish).infinitive
        const bInfinitive = (b.englishWord as unknown as VerbConjugationEnglish).infinitive
        // aInfinitive is only truthy when a (and thus b) are verbs,
        if(aInfinitive) {
          // sort by infinitive property
          return aInfinitive < bInfinitive ? -1 : 1
        }
        else {
          return a.englishWord < b.englishWord ? -1 : 1
        }
         
      }
      )
    }
  }
  else
  {
    var topicWords = scramble(
      currentTopic.words as (Word)[]) as 
      WordWithOneAlphabet[] | WordWithTwoAlphabets[] | WordWithThreeAlphabets[]
      
  }
  return (
    <>
      <div>
        <h4> 
          {currentLanguage.languageName} {props.isWritingSystem ? 'Writing Systems' : 'Vocabulary'}
        </h4>
        <Container >   
          <div>
            <button onClick={displayPopUp}>How to Guide (Video)</button>
          </div>
          <NavbarBs>
            <Container>
              <div>
                <CustomDropDownButton title={'Topic: ' + currentTopic.name}>
                  {(currentLanguage.topics as Topic[]).sort((t1,t2) => ((t1.topicOrder || 0) < (t2.topicOrder || 0)) ? -1 : 1 )
                    .map((topic: Topic, index: number) =>
                      <Dropdown.Item 
                        key = {index} onClick = {() => 
                          changeCurrentTopic(topic)}>
                        <div>
                          {topic.name} {
                            topic.isLocked 
                          && lingoCommandIsLocked 
                          && !userIsLoggedIn
                          && <LockIcon/>}
                        </div>
                      </Dropdown.Item>)}
                </CustomDropDownButton>
                <CustomDropDownButton title="Settings" align="end">
                  {currentLanguage.numForeignAlphabets > 1 && !currentTopic.isAlphabet &&
                  <>
                    <Dropdown.Item>
                writing system:  &nbsp;
                      <select 
                        name="alphabets" 
                        id="alphabets" 
                        onChange={handleSelectChange} 
                        onClick={preventDropdownClose} // Prevent dropdown from closing
                      >
                        <option value='0'>romaji</option>
                        <option value="1">hiragana, katakana</option>
                        <option value="2">hiragana, katakana, kanji</option>
                      </select>
                    </Dropdown.Item>
                    <hr/>
                  </>
                  }

                  {!quiz && <Dropdown.Item
                    onClick={(event) => {
                      changeAudioBool();
                      preventDropdownClose(event);
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={audioBool} // Checkbox is checked if showBaseLanguage is true
                      onChange={changeAudioBool} // Toggle onChange as well
                    />
                    show audio</Dropdown.Item>}
                  {((currentTopic.isAlphabet && !quiz) || !currentTopic.isAlphabet) && <Dropdown.Item onClick={(event) => {
                    changeBaseLanguage();
                    preventDropdownClose(event);
                  }}>
                    <input
                      type="checkbox"
                      checked={!showBaseLanguage} // Checkbox is checked if showBaseLanguage is true
                      onChange={changeBaseLanguage} // Toggle onChange as well
                    />
                    swap columns</Dropdown.Item>}
                  <Dropdown.Item onClick={(event) => {
                    changeOrder();
                    preventDropdownClose(event);
                  }}>
                    <input
                      type="checkbox"
                      checked={!showTrueOrder} // Checkbox is checked if showBaseLanguage is true
                      onChange={changeOrder} // Toggle onChange as well
                    />
                    random ordering</Dropdown.Item>
                </CustomDropDownButton>  
              </div>             
            </Container>
          </NavbarBs>
          <Container>
            <div>
              <div>
                Study
              </div>
              <CustomSwitch 
                onChange = {changeQuizState}
                checked= {quiz} 
              /> 
              <div>
                 Quiz
              </div>               
            </div>
          </Container>
          {ToggleQuiz()}
          <Modal show ={showPopUp} onHide={hidePopUp}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vleft">
              How to Guide (Video)
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {currentLanguage.languageName === 'Japanese' ? (
                <div>
                  <video
                    controls
                    src={props.howToGuideVideo}
                  />
                </div>
              ) : (
                <div>Video coming soon</div>
              )}
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    </>
  );
};
 
export default VocabContent;
