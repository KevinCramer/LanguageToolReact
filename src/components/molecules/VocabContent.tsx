import {useState } from 'react';
import QuizElement from '../atoms/QuizElement';
import StudyElement from '../atoms/StudyElement';
import {Container, Navbar as NavbarBs} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ReactSwitch from 'react-switch';
import {languages} from '../../data/words';
import ReactGA from 'react-ga';
import {useSelector,useDispatch} from 'react-redux'
import {flip} from '../../redux/displayAudio';
import { Language, Topic, VerbConjugationEnglish, 
  Word, Word1, Word2, Word3 } from '../../types';
import { scramble } from '../../helpers';

const VocabContent = () => {
  var currentLanguage: Language = languages[0]
  var [currentLanguage,setLanguage] = useState(currentLanguage);

  var currentTopic = currentLanguage.topics[0]
  var [currentTopic,setCurrentTopic] = useState(currentTopic)

  var showBaseLanguage = true;
  var [showBaseLanguage,setShowBaseLanguage] = useState(showBaseLanguage)
  const changeBaseLanguage = () => { return setShowBaseLanguage(!showBaseLanguage)}

  var currentAlphabet: number = 0;
  var [currentAlphabet,setCurrentAlphabet] = useState(currentAlphabet)
  const changeCurrentAlphabet = () => { return setCurrentAlphabet(
    currentAlphabet = (currentAlphabet +1)% currentLanguage.numForeignAlphabets)}

  var showTrueOrder = true;
  var [showTrueOrder,setShowTrueOrder] = useState(showTrueOrder)
  const changeOrder = () => { return setShowTrueOrder(!showTrueOrder)}
  const changeCurrentLanguage = 
    ( language: Language) => setLanguage(language);
  const changeCurrentTopic = (topic: Topic) => { return setCurrentTopic(topic);}

  var quiz = false
  var [quiz,setQuiz] = useState(quiz)
  const changeQuizState = () => {
    ReactGA.event({category: 'quizStateWasChanged', action: 'hdfg',label: 'dasfg',value: 4});
    return setQuiz((!quiz))}
    
  const audioBool = useSelector((state:any) => state.audio.audioBool);
  const dispatch = useDispatch();

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
          {topicWords.map((pair: Word) =>
            <div>
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
        b: Word) => a.englishWord < b.englishWord ? -1: 1)
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
              {languages.map((languageItem: Language) =>
                <Dropdown.Item onClick = {() => [changeCurrentLanguage(
                  languageItem),
                setCurrentAlphabet(0),changeCurrentTopic(languageItem.topics[0]) ]}>
                  {languageItem.languageName}</Dropdown.Item>)}
            </DropdownButton>
            <DropdownButton style={{margin: '0px 20px 0px 20px'}} variant= 'secondary'
              id="Topics" title={'Topic: ' + currentTopic.name} size = "sm">
              {currentLanguage.topics.map((topic: Topic) =>
                <Dropdown.Item onClick = {() => 
                  changeCurrentTopic(topic)}>{topic.name}</Dropdown.Item>)}
            </DropdownButton>
            <DropdownButton style={{margin: '0px 20px 0px 20px'}} variant= 'secondary' align="end"
              id="Settings" title="Settings" size = "sm">
              <Dropdown.Item onClick = {changeBaseLanguage}>toggle base language</Dropdown.Item>
              <Dropdown.Item onClick = {() => dispatch(flip())}>
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
