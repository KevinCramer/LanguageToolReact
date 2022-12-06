import { Key, useState } from "react"
import Button from "./Button"
import QuizElement from "./QuizElement"
import StudyElement from "./StudyElement"

import {Container, Navbar as NavbarBs} from "react-bootstrap"

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
        <Container>    
            <NavbarBs className = "bg-white shadow-sm mb-3">
                <Container>
                    <Button clickMethod = {handleClick} ButtonName = "Toggle Languages"/>
                    <Button clickMethod = {changeCurrentTopicToClothes} ButtonName = "Clothes"/>
                    <Button clickMethod = {changeCurrentTopicToColours} ButtonName = "Colours"/>
                    <Button clickMethod = {changeCurrentTopicToFood} ButtonName = "Food"/>
                    <Button clickMethod = {changeCurrentTopicToNumbers} ButtonName = "Numbers"/>
                    <Button clickMethod = {changeQuizState} ButtonName = "Quiz/Study"/>
                </Container>
            </NavbarBs>
                <p></p>
                {ToggleQuiz()}
        </Container>
      );
}
 
export default StudyContent;
