import { Key, useState } from "react"
import Button from "./Button"
import QuizElement from "./QuizElement"
import StudyElement from "./StudyElement"
import {Container, Navbar as NavbarBs, Nav} from "react-bootstrap"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {NavLink} from "react-router-dom"
import {arabic,dutch,spanish} from "../data/words"



const StudyContent = (props: any) => {
    var language = arabic  
    var languageName = "Arabic"
    var [language,setLanguage] = useState(language)
    var [languageName,setLanguageName] = useState(languageName)
    const changeCurrentLanguageToArabic = () => { return setLanguage(arabic),setLanguageName("Arabic")}
    const changeCurrentLanguageToDutch = () => { return setLanguage(dutch),setLanguageName("Dutch")}
    const changeCurrentLanguageToSpanish = () => { return setLanguage(spanish),setLanguageName("Spanish")}

    
    var showBaseLanguage = true;
    var [showBaseLanguage,setShowBaseLanguage] = useState(showBaseLanguage)
    const handleClick = () => { return setShowBaseLanguage(!showBaseLanguage)}
    var topics = ["Clothes","Colours","Food","Numbers"]
    var current_topic = topics[0]
    var [current_topic,setCurrentTopic] = useState(current_topic)
    const changeCurrentTopicToClothes = () => { return setCurrentTopic(topics[0])}
    const changeCurrentTopicToColours = () => { return setCurrentTopic(topics[1])}
    const changeCurrentTopicToFood = () => { return setCurrentTopic(topics[2])}
    const changeCurrentTopicToNumbers = () => { return setCurrentTopic(topics[3])}
    var quiz = false
    var [quiz,setQuiz] = useState(quiz)
    const changeQuizState = () => { return setQuiz((!quiz))}

    function ToggleQuiz(){
        if (quiz) {
            return ( 
                <div>
                    {topic_words.map((pair: any) =>
                    <div>
                                            <QuizElement QuestionWord = { showBaseLanguage? pair.englishWord: pair.foreignWord } AnswerWord = {showBaseLanguage? pair.foreignWord: pair.englishWord}/>
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
                                            <StudyElement BaseLanguageWord = { showBaseLanguage? pair.englishWord: pair.foreignWord } ForeignLanguageWord = {showBaseLanguage? pair.foreignWord: pair.englishWord}/>
                    </div>                    
                    )}
                </div>
            )
        }

    }

    var topic_words = language.filter((word: { topic: string; }) => {return word.topic === current_topic} )
    return (
        <div style = {{backgroundColor: "white", height: "100vh"}}>
        <Container>    
            <NavbarBs className = "bg-white shadow-sm mb-3">
                <Container>
                    <DropdownButton id="Languages" title={"Language: " + String(languageName)}> 
                        <Dropdown.Item onClick = {changeCurrentLanguageToArabic}>Arabic</Dropdown.Item>
                        <Dropdown.Item onClick = {changeCurrentLanguageToDutch}>Dutch</Dropdown.Item>
                        <Dropdown.Item onClick = {changeCurrentLanguageToSpanish}>spanish</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="Topics" title={"Topic: " + current_topic}>
                        <Dropdown.Item onClick = {changeCurrentTopicToClothes}>Clothes</Dropdown.Item>
                        <Dropdown.Item onClick = {changeCurrentTopicToColours}>Colours</Dropdown.Item>
                        <Dropdown.Item onClick = {changeCurrentTopicToFood}>Food</Dropdown.Item>
                        <Dropdown.Item onClick = {changeCurrentTopicToNumbers}>Numbers</Dropdown.Item>

                    </DropdownButton>
                    <DropdownButton id="Settings" title="Learning Parameters">
                        <Dropdown.Item onClick = {handleClick}>Toggle base language</Dropdown.Item>
                        <Dropdown.Item onClick = {changeQuizState}>Revise/Quiz</Dropdown.Item>
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
