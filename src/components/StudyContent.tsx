import { Key, useState } from "react"
import QuizElement from "./QuizElement"
import StudyElement from "./StudyElement"
import {Container, Navbar as NavbarBs, Nav} from "react-bootstrap"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {languages, arabic, arabic_topics, dutch, dutch_topics, spanish, spanish_topics} from "../data/words"



const StudyContent = (props: any) => {
    var currentLanguage = arabic  
    var currentLanguageName = "Arabic"
    var [currentLanguage,setLanguage] = useState(currentLanguage)
    var [currentLanguageName,setLanguageName] = useState(currentLanguageName)
    var currentLanguageTopics = arabic_topics
    var [currentLanguageTopics,setCurrentLanguageTopics] = useState(currentLanguageTopics)
    var current_topic = currentLanguageTopics[0]
    var [current_topic,setCurrentTopic] = useState(current_topic)
    const changeCurrentLanguageToArabic = () => { return setLanguage(arabic),setLanguageName("Arabic"),setCurrentLanguageTopics(arabic_topics)}
    const changeCurrentLanguageToDutch = () => { return setLanguage(dutch),setLanguageName("Dutch"),setCurrentLanguageTopics(dutch_topics)}
    const changeCurrentLanguageToSpanish = () => { return setLanguage(spanish),setLanguageName("Spanish"),setCurrentLanguageTopics(spanish_topics)}
    const changeCurrentLanguageToX= (languageName:string, languageContent:any) => { return setLanguage(languageContent),setLanguageName(languageName)}

    
    var showBaseLanguage = true;
    var [showBaseLanguage,setShowBaseLanguage] = useState(showBaseLanguage)
    const handleClick = () => { return setShowBaseLanguage(!showBaseLanguage)}

    var changeCurrentTopicToX = (topic:string) => { return setCurrentTopic(topic)}

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

    var topic_words = currentLanguage.filter((word: { topic: string; }) => {return word.topic === current_topic} )
    return (
        <div style = {{backgroundColor: "white", height: "100vh"}}>
        <Container>    
            <NavbarBs className = "bg-white shadow-sm mb-3">
                <Container>
                    <DropdownButton id="Languages" title={"Language: " + String(currentLanguageName)}> 
                        <Dropdown.Item onClick = {changeCurrentLanguageToArabic}>Arabic</Dropdown.Item>
                        <Dropdown.Item onClick = {changeCurrentLanguageToDutch}>Dutch</Dropdown.Item>
                        <Dropdown.Item onClick = {changeCurrentLanguageToSpanish}>Spanish</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton id="Topics" title={"Topic: " + current_topic}>
                        {currentLanguageTopics.map((topic: string) =>
                        <Dropdown.Item onClick = {() => changeCurrentTopicToX(topic)}>{topic}</Dropdown.Item>)}
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
