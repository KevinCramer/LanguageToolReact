import { Key, useState } from "react";
import QuizElement from "./QuizElement";
import StudyElement from "./StudyElement";
import {Container, Navbar as NavbarBs, Nav} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {languages} from "../data/words";
import ReactGA from 'react-ga';
import {useSelector,useDispatch} from "react-redux"
import {flipAudioBool} from "../redux/displayAudio";
import {flipBaseLanguage} from "../redux/baseLanguage";
import {flipQuizState} from "../redux/quiz";



const StudyContent = (props: any) => {
    var currentLanguageName = languages[0].languageName
    var [currentLanguageName,setLanguageName] = useState(currentLanguageName)

    var currentLanguage = languages[0].Content
    var [currentLanguage,setLanguage] = useState(currentLanguage)

    var currentLanguageTopics = languages[0].topics
    var [currentLanguageTopics,setCurrentLanguageTopics] = useState(currentLanguageTopics)

    var currentNumForeignAlphabets = languages[0].num_foreign_alphabets
    var [currentNumForeignAlphabets,setCurrentNumForeignAlphabets] = useState(currentNumForeignAlphabets)

    var current_topic = currentLanguageTopics[0]
    var [current_topic,setCurrentTopic] = useState(current_topic)


    var currentAlphabet: number = 0;
    var [currentAlphabet,setCurrentAlphabet] = useState(currentAlphabet)
    const changeCurrentAlphabet = () => { return setCurrentAlphabet(currentAlphabet = (currentAlphabet +1)% currentNumForeignAlphabets)}

    var showTrueOrder = true;
    var [showTrueOrder,setShowTrueOrder] = useState(showTrueOrder)
    const changeOrder = () => { return setShowTrueOrder(!showTrueOrder)}

    
    const changeCurrentLanguage= (languageName:string, languageContent:any, topics: any, num_foreign_alphabets:any) => { return setLanguage(languageContent),setLanguageName(languageName), setCurrentLanguageTopics(topics), setCurrentNumForeignAlphabets(num_foreign_alphabets)}
    const changeCurrentTopic = (topic:string) => { return setCurrentTopic(topic)}

    const audioBool = useSelector((state:any) => state.audio.audioBool);
    const baseLanguageBool = useSelector((state:any) => state.baseLanguage.baseLanguageBool);
    const quizState = useSelector((state:any) => state.quiz.quizBool);
    const dispatch = useDispatch();
    console.log(quizState)
    function ToggleQuiz(){
        if (quizState) {
            return ( 
                <div>
                    {topic_words.map((pair: any) =>
                    <div>
                                            <QuizElement QuestionWord = { baseLanguageBool? pair.englishWord: pair.foreignWord[currentAlphabet] } AnswerWord = {baseLanguageBool? pair.foreignWord[currentAlphabet]: pair.englishWord}/>
                    </div>                    
                    )}
                </div>
        )
        }
        else {
            return (
                <div>
                    {topic_words.map((pair: any) =>
                    <div>
                                            <StudyElement BaseLanguageWord = { baseLanguageBool? pair.englishWord: pair.foreignWord[currentAlphabet]} ForeignLanguageWord = {baseLanguageBool? pair.foreignWord[currentAlphabet]: pair.englishWord}  ForeignLanguageWordAudio = {pair.foreignAudio} showAudio = {audioBool} showBaseLanguageFirst = {baseLanguageBool}/>
                    </div>                    
                    )}
                </div>
            )
        }

    }
    if(showTrueOrder)
    {
        var topic_words = currentLanguage.filter((word: { topic: string; }) => {return word.topic === current_topic} )
    }
    else
    {
        var topic_words = currentLanguage.filter((word: { topic: string; }) => {return word.topic === current_topic}).sort((a, b) => 0.5 - Math.random());
    }
    return (
        <div style = {{backgroundColor: "white", height: "100vh"}}>
        <Container>    
            <NavbarBs className = "bg-white shadow-sm mb-3">
                <Container>
                    <DropdownButton id="Languages" title={"Language: " + String(currentLanguageName)}> 
                        {languages.map((languageItem: any) =>
                        <Dropdown.Item onClick = {() => changeCurrentLanguage(languageItem.languageName, languageItem.Content,languageItem.topics, languageItem.num_foreign_alphabets)}>{languageItem.languageName}</Dropdown.Item>)}
                    </DropdownButton>
                    <DropdownButton id="Topics" title={"Topic: " + current_topic}>
                        {currentLanguageTopics.map((topic: string) =>
                        <Dropdown.Item onClick = {() => changeCurrentTopic(topic)}>{topic}</Dropdown.Item>)}
                    </DropdownButton>
                    <DropdownButton id="Settings" title="Learning Parameters">
                        <Dropdown.Item onClick = {() => dispatch(flipBaseLanguage())}>Toggle base language</Dropdown.Item>
                        <Dropdown.Item onClick = {() => [dispatch(flipQuizState()), ReactGA.event({category: "quizStateWasChanged", action: "",label: "",value: 0})]}>Revise/Quiz</Dropdown.Item>
                        <Dropdown.Item onClick = {() => dispatch(flipAudioBool())}>Show/Hide Audio</Dropdown.Item>
                        <Dropdown.Item onClick = {changeOrder}>{showTrueOrder? "random ordering":"default ordering"}</Dropdown.Item>
                        <Dropdown.Item onClick = {changeCurrentAlphabet}>{currentNumForeignAlphabets>1 ? "Toggle foreign alphabet": null}</Dropdown.Item>
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
