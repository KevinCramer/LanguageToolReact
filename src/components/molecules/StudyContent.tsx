import {useState } from "react";
import QuizElement from "../atoms/QuizElement";
import StudyElement from "../atoms/StudyElement";
import {Container, Navbar as NavbarBs} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {languages} from "../../data/words";
import ReactGA from 'react-ga';
import {useSelector,useDispatch} from "react-redux"
import {flip} from "../../redux/displayAudio";
import { Language, VerbConjugationEnglish, Word } from "../../types";
import { scramble } from "../../helpers";

const StudyContent = () => {
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
  const changeCurrentTopic = (topic: string) => { return setCurrentTopic(topic)}

  var quiz = false
  var [quiz,setQuiz] = useState(quiz)
  const changeQuizState = () => {
    ReactGA.event({category: "quizStateWasChanged", action: "hdfg",label: "dasfg",value: 4});
    return setQuiz((!quiz))}
    
  const audioBool = useSelector((state:any) => state.audio.audioBool);
  const dispatch = useDispatch();

  function ToggleQuiz(){
    if (quiz) {
      const isVerb = currentTopic=== "Verbs"
      return ( 
        <div>
          {topicWords.map((pair: Word) =>
            <div key ={showTrueOrder.toString() + (isVerb?
              (pair.englishWord as VerbConjugationEnglish).infinitive: pair.englishWord)
               + pair.foreignWord[currentAlphabet] + showBaseLanguage}>
              <QuizElement questionWord = { showBaseLanguage? 
                pair.englishWord: pair.foreignWord[currentAlphabet] }
              answerWord = {showBaseLanguage? pair.foreignWord[currentAlphabet]:
                pair.englishWord} isVerb = {currentTopic=== "Verbs"}/>
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
                isVerb = {currentTopic=== "Verbs"}
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
    var topicWords = currentLanguage.content
      .filter((word: { topic: string; }) => {return word.topic === currentTopic} )
  }
  else
  {
    var topicWords = scramble(currentLanguage.content
      .filter((word: { topic: string; }) => {return word.topic === currentTopic}))
      
  }
  return (
    <div style = {{backgroundColor: "white", height: "100vh"}}>
      <Container>    
        <NavbarBs className = "bg-white shadow-sm mb-3">
          <Container>
            <DropdownButton id="Languages" title=
              {String(currentLanguage.languageName)} size = "sm"> 
              {languages.map((languageItem: Language) =>
                <Dropdown.Item onClick = {() => [changeCurrentLanguage(
                  languageItem),
                setCurrentAlphabet(0),changeCurrentTopic(languageItem.topics[0]) ]}>
                  {languageItem.languageName}</Dropdown.Item>)}
            </DropdownButton>
            <DropdownButton id="Topics" title={"Topic: " + currentTopic} size = "sm">
              {currentLanguage.topics.map((topic: string) =>
                <Dropdown.Item onClick = {() => changeCurrentTopic(topic)}>{topic}</Dropdown.Item>)}
            </DropdownButton>
            <DropdownButton id="Parameters" title="Parameters" size = "sm">
              <Dropdown.Item onClick = {changeBaseLanguage}>Toggle base language</Dropdown.Item>
              <Dropdown.Item onClick = {changeQuizState}>Revise/Quiz</Dropdown.Item>
              <Dropdown.Item onClick = {() => dispatch(flip())}>Show/Hide Audio</Dropdown.Item>
              <Dropdown.Item onClick = {changeOrder}>
                {showTrueOrder? "random ordering":"default ordering"}</Dropdown.Item>
              {currentLanguage.numForeignAlphabets > 1 && 
              <Dropdown.Item onClick = {changeCurrentAlphabet}>
                Toggle foreign alphabet</Dropdown.Item>}
            </DropdownButton>                
          </Container>
        </NavbarBs>
        <p></p>
        {ToggleQuiz()}
      </Container>
    </div>
  );
}
 
export default StudyContent;
