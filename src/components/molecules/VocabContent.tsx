import {useState, useEffect } from 'react';
import QuizElement from '../atoms/QuizElement';
import StudyElement from '../atoms/StudyElement';
import {Container, Navbar as NavbarBs} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ReactSwitch from 'react-switch';
import {languages} from '../../data/words';
import ReactGA from 'react-ga';
import { Language, VerbConjugationEnglish, 
  Word, Word1, Word2, Word3, Topic } from '../../types';
import { scramble } from '../../helpers';
import { useNavigate, useLocation } from 'react-router-dom';
import { languageToSlugs} from '../../constants'

const VocabContent = () => {
  const navigate = useNavigate();
  const notNullOrUndefined = (value: any) => value !== null && value !== undefined
  const kevinSettingsCompress = (settings: string)=> {
    let output = ''
    const settingsArray = JSON.parse(settings)
    output += settingsArray[0] + '-'
    output += settingsArray[1] + '-'
    output += settingsArray[2] ? 'T': 'F'
    output += settingsArray[3].toString();
    output += settingsArray[4] ? 'T': 'F'
    output += settingsArray[5] ? 'T': 'F'
    output += settingsArray[6] ? 'T': 'F'
    return output
  };
  const kevinSettingsDecompress = (compressedSettings: string)=> {
    if(compressedSettings === null){
      return null
    }
    let output = '['
    const a = compressedSettings.split('-')
    output += '"' + a[0] + '",'
    output += '"' + a[1] + '",'
    output += a[2][0] === 'T' ? 'true,' : 'false,'
    output += a[2][1] + ','
    output += a[2][2] === 'T' ? 'true,' : 'false,'
    output += a[2][3] === 'T' ? 'true,' : 'false,'
    output += a[2][4] === 'T' ? 'true' : 'false'
    output += ']'
    return output
  };

  var urlSearchParams = new URLSearchParams(useLocation().search);
  const urlSettings = JSON.parse(kevinSettingsDecompress(urlSearchParams.get('settings') as string) as string) || []
  const urlLanguage = urlSettings[0]
  var currentLanguage: Language = languages
    .find(l => languageToSlugs[l.languageName] === urlLanguage) || languages[0]
  var [currentLanguage,setLanguage] = useState(currentLanguage);
 
  const urlTopic = urlSettings[1]
  var currentTopic: Topic = (currentLanguage.topics as Topic[])
    .find(t => t.slugName === urlTopic) || currentLanguage.topics[0]
  var [currentTopic,setCurrentTopic] = useState(currentTopic)
 
  const urlShowBaseLanguage = urlSettings[2]
  var showBaseLanguage = notNullOrUndefined(urlShowBaseLanguage) ? urlShowBaseLanguage : true
  var [showBaseLanguage,setShowBaseLanguage] = useState(showBaseLanguage)
  const changeBaseLanguage = () => { return setShowBaseLanguage(!showBaseLanguage)}

  const urlCurrentAlphabet = urlSettings[3]
  var currentAlphabet: number = parseInt(urlCurrentAlphabet as string) || 0;
  var [currentAlphabet,setCurrentAlphabet] = useState(currentAlphabet)
  const changeCurrentAlphabet = () => { return setCurrentAlphabet(
    currentAlphabet = (currentAlphabet +1)% currentLanguage.numForeignAlphabets)}

  const urlShowTrueOrder = urlSettings[4]
  var showTrueOrder = notNullOrUndefined(urlShowTrueOrder) ? urlShowTrueOrder : true
  var [showTrueOrder,setShowTrueOrder] = useState(showTrueOrder)
  const changeOrder = () => { return setShowTrueOrder(!showTrueOrder)}
  const changeCurrentLanguage = 
    ( language: Language) => {
      return setLanguage(language)
      ;
    };
  const changeCurrentTopic = (topic: Topic) => {
    return setCurrentTopic(topic);
  }

  const urlQuiz = urlSettings[5]
  var quiz = notNullOrUndefined(urlQuiz) ? urlQuiz : false
  var [quiz,setQuiz] = useState(quiz)
  const changeQuizState = () => {
    ReactGA.event({category: 'quizStateWasChanged', action: 'hdfg',label: 'dasfg',value: 4});
    return setQuiz((!quiz))}

  const urlAudio = urlSettings[6]
  var audioBool = notNullOrUndefined(urlAudio) ? urlAudio: false 
  var [audioBool,setAudioBool] = useState(audioBool)
  const changeAudioBool = () => { return setAudioBool(!audioBool)}

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
    navigate(`?settings=${kevinSettingsCompress(JSON.stringify(settings))}`);

  }, [
    currentLanguage.languageName, currentTopic.slugName, showBaseLanguage,
    currentAlphabet,showTrueOrder,quiz,audioBool, navigate ]);
  
  function ToggleQuiz(){
    if (quiz) {
      const isVerb = currentTopic.name=== 'Verbs'
      var count = 0;
      return ( 
        <div>
          {topicWords.map((pair: Word) =>
            <div key ={showTrueOrder.toString() + (isVerb?
              (pair.englishWord as VerbConjugationEnglish).infinitive: pair.englishWord)
               + pair.foreignWord[currentAlphabet] + showBaseLanguage}>
              <QuizElement myCounter = {count +=1} questionWord = { showBaseLanguage? 
                pair.englishWord: pair.foreignWord[currentAlphabet] }
              answerWord = {showBaseLanguage? pair.foreignWord[currentAlphabet]:
                pair.englishWord} isVerb = {currentTopic.name=== 'Verbs'}/>
            </div>                    
          )}
        </div>
      )
    }
    else {
      return (
        <div>
          {topicWords.map((pair: Word, index: number) =>
            <div key = {index}>
              <StudyElement 
                BaseLanguageWord = { showBaseLanguage? pair.englishWord:
                  pair.foreignWord[currentAlphabet]} 
                ForeignLanguageWord = {showBaseLanguage? 
                  pair.foreignWord[currentAlphabet]: pair.englishWord}  
                ForeignLanguageWordAudio = {pair.foreignAudio} 
                showAudio = {audioBool} 
                showBaseLanguageFirst = {showBaseLanguage} 
                isVerb = {currentTopic.name=== 'Verbs'}
                pronouns = {currentLanguage.pronouns}
              />
            </div>                    
          )}
        </div>
      )
    }
  }
  if(showTrueOrder)
  {
    var topicWords = currentTopic.words
    if(currentTopic.hasOrdering){
      topicWords.sort((a: Word,
        b: Word) => (a.order || 0) < (b.order || 0) ? -1: 1)
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
          return aInfinitive < bInfinitive? -1: 1
        }
        else {
          return a.englishWord < b.englishWord ? -1: 1
        }
         
      }
      )
    }
  }
  else
  {
    var topicWords = scramble(
      currentTopic.words as (Word)[]) as Word1[] | Word2[] | Word3[]
      
  }
  return (
    <div>
      <Container>    
        <NavbarBs>
          <Container style={{justifyContent:'center'}}>
            <DropdownButton style={{margin: '0px 20px 0px 20px'}} variant= 'secondary'
              id="Languages" title=
                {String(currentLanguage.languageName)} size = "sm"> 
              {languages.map((languageItem: Language, index: number) =>
                <Dropdown.Item key = {index} onClick = {() => [changeCurrentLanguage(
                  languageItem),
                setCurrentAlphabet(0),changeCurrentTopic(languageItem.topics[0]) ]}>
                  {languageItem.languageName}</Dropdown.Item>)}
            </DropdownButton>
            <DropdownButton style={{margin: '0px 20px 0px 20px'}} variant= 'secondary'
              id="Topics" title={'Topic: ' + currentTopic.name} size = "sm">
              {currentLanguage.topics.map((topic: Topic, index: number) =>
                <Dropdown.Item key = {index} onClick = {() => 
                  changeCurrentTopic(topic)}>{topic.name}</Dropdown.Item>)}
            </DropdownButton>
            <DropdownButton style={{margin: '0px 20px 0px 20px'}} variant= 'secondary' align="end"
              id="Settings" title="Settings" size = "sm">
              <Dropdown.Item onClick = {changeBaseLanguage}>toggle base language</Dropdown.Item>
              <Dropdown.Item onClick = {() => changeAudioBool()}>
                {audioBool? 'hide audio':'show audio'}</Dropdown.Item>
              <Dropdown.Item onClick = {changeOrder}>
                {showTrueOrder? 'random ordering':'default ordering'}</Dropdown.Item>
              {currentLanguage.numForeignAlphabets > 1 && !currentTopic.isAlphabet &&
              <Dropdown.Item onClick = {changeCurrentAlphabet}>
                toggle foreign alphabet</Dropdown.Item>}
            </DropdownButton>                
          </Container>
        </NavbarBs>
        <NavbarBs>
          <Container style={{justifyContent:'center'}}>
            <div>
              <ReactSwitch onChange = {changeQuizState} checked= {quiz} 
                uncheckedIcon = {false} checkedIcon = {false} onColor = {'#0038FF'}/> 
              <div>{quiz? 'Quiz Mode': 'Study Mode'}</div>        
            </div>
          </Container>
          
        </NavbarBs>
        <p></p>
        {ToggleQuiz()}
      </Container>
    </div>
  );
}
 
export default VocabContent;
