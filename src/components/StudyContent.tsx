import { Key, useState } from "react"
import Button from "./Button"
import QuizElement from "./QuizElement"
import StudyElement from "./StudyElement"
import {Container, Navbar as NavbarBs, Nav} from "react-bootstrap"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {NavLink} from "react-router-dom"



const StudyContent = (props: any) => {
    const language = props.language
    const languageName = props.languageName
    
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
                    <DropdownButton id="Languages" title={"Language: " + (window.location.href.split("/")[4]).charAt(0).toUpperCase() + (window.location.href.split("/")[4]).slice(1)}> 
                        <Dropdown.Item href="/study/arabic"><Nav.Link to ="/study/arabic" as= {NavLink}>Arabic</Nav.Link></Dropdown.Item>
                        <Dropdown.Item href="/study/dutch"><Nav.Link to ="/study/dutch" as= {NavLink}>Dutch</Nav.Link></Dropdown.Item>
                        <Dropdown.Item><Nav.Link to ="/study/spanish" as= {NavLink}>Spanish</Nav.Link></Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="Topics" title={"Topic: " + current_topic}>
                        <Dropdown.Item onClick = {changeCurrentTopicToClothes}>Clothes</Dropdown.Item>
                        <Dropdown.Item onClick = {changeCurrentTopicToColours}>Colours</Dropdown.Item>
                        <Dropdown.Item onClick = {changeCurrentTopicToFood}>Food</Dropdown.Item>
                        <Dropdown.Item onClick = {changeCurrentTopicToNumbers}>Numbers</Dropdown.Item>

                    </DropdownButton>
                    <DropdownButton id="Settings" title="Settings">
                        <Dropdown.Item onClick = {handleClick}>Toggle base language</Dropdown.Item>
                        <Dropdown.Item onClick = {changeQuizState}>Quiz/Study</Dropdown.Item>
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
