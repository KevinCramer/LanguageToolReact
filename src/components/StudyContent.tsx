import { Key, useState } from "react";
import QuizElement from "./QuizElement";
import StudyElement from "./StudyElement";
import {Container, Navbar as NavbarBs} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {languages} from "../data/words";
import ReactGA from 'react-ga';
import {useSelector,useDispatch} from "react-redux"
import {flip} from "../redux/displayAudio";

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


    var showBaseLanguage = true;
    var [showBaseLanguage,setShowBaseLanguage] = useState(showBaseLanguage)
    const changeBaseLanguage = () => { return setShowBaseLanguage(!showBaseLanguage)}

    var currentAlphabet: number = 0;
    var [currentAlphabet,setCurrentAlphabet] = useState(currentAlphabet)
    const changeCurrentAlphabet = () => { return setCurrentAlphabet(currentAlphabet = (currentAlphabet +1)% currentNumForeignAlphabets)}

    var showTrueOrder = true;
    var [showTrueOrder,setShowTrueOrder] = useState(showTrueOrder)
    const changeOrder = () => { return setShowTrueOrder(!showTrueOrder)}

    
    const changeCurrentLanguage= (languageName:string, languageContent:any, topics: any, num_foreign_alphabets:any) => { return setLanguage(languageContent),setLanguageName(languageName), setCurrentLanguageTopics(topics), setCurrentNumForeignAlphabets(num_foreign_alphabets)}
    const changeCurrentTopic = (topic:string) => { return setCurrentTopic(topic)}

    var quiz = false
    var [quiz,setQuiz] = useState(quiz)
    const changeQuizState = () => {
        ReactGA.event({category: "quizStateWasChanged", action: "hdfg",label: "dasfg",value: 4});
        return setQuiz((!quiz))}
    
    const audioBool = useSelector((state:any) => state.audio.audioBool);
    const dispatch = useDispatch();


    
    function ToggleQuiz(){
        if (quiz) {
            const isVerb  = current_topic=== "Verbs"
            return ( 
                <div>
                    {topic_words.map((pair: any) =>
                    <div key ={showTrueOrder+ (isVerb?pair.englishWord.infinitive: pair.englishWord) + pair.foreignWord[currentAlphabet] + showBaseLanguage}>
                                            <QuizElement QuestionWord = { showBaseLanguage? pair.englishWord: pair.foreignWord[currentAlphabet] } AnswerWord = {showBaseLanguage? pair.foreignWord[currentAlphabet]: pair.englishWord} isVerb = {current_topic=== "Verbs"}/>
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
                                            <StudyElement BaseLanguageWord = { showBaseLanguage? pair.englishWord: pair.foreignWord[currentAlphabet]} ForeignLanguageWord = {showBaseLanguage? pair.foreignWord[currentAlphabet]: pair.englishWord}  ForeignLanguageWordAudio = {pair.foreignAudio} showAudio = {audioBool} showBaseLanguageFirst = {showBaseLanguage} isVerb = {current_topic=== "Verbs"}/>
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
                        <Dropdown.Item onClick = {() => [changeCurrentLanguage(languageItem.languageName, languageItem.Content,languageItem.topics, languageItem.num_foreign_alphabets), setCurrentAlphabet(0),changeCurrentTopic(currentLanguageTopics[0]) ]}>{languageItem.languageName}</Dropdown.Item>)}
                    </DropdownButton>
                    <DropdownButton id="Topics" title={"Topic: " + current_topic}>
                        {currentLanguageTopics.map((topic: string) =>
                        <Dropdown.Item onClick = {() => changeCurrentTopic(topic)}>{topic}</Dropdown.Item>)}
                    </DropdownButton>
                    <DropdownButton id="Settings" title="Learning Parameters">
                        <Dropdown.Item onClick = {changeBaseLanguage}>Toggle base language</Dropdown.Item>
                        <Dropdown.Item onClick = {changeQuizState}>Revise/Quiz</Dropdown.Item>
                        <Dropdown.Item onClick = {() => dispatch(flip())}>Show/Hide Audio</Dropdown.Item>
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
