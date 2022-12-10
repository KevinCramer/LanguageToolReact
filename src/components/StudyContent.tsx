import { Key, useState } from "react"
import QuizElement from "./QuizElement"
import StudyElement from "./StudyElement"
import {Container, Navbar as NavbarBs, Nav} from "react-bootstrap"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {languages} from "../data/words"



const StudyContent = (props: any) => {
    var currentLanguageName = languages[0].languageName
    var [currentLanguageName,setLanguageName] = useState(currentLanguageName)

    var currentLanguage = languages[0].Content
    var [currentLanguage,setLanguage] = useState(currentLanguage)

    var currentLanguageTopics = languages[0].topics
    var [currentLanguageTopics,setCurrentLanguageTopics] = useState(currentLanguageTopics)

    var current_topic = currentLanguageTopics[0]
    var [current_topic,setCurrentTopic] = useState(current_topic)

    var showBaseLanguage = true;
    var [showBaseLanguage,setShowBaseLanguage] = useState(showBaseLanguage)

    const handleClick = () => { return setShowBaseLanguage(!showBaseLanguage)}
    const changeCurrentLanguage= (languageName:string, languageContent:any, topics: any) => { return setLanguage(languageContent),setLanguageName(languageName), setCurrentLanguageTopics(topics)}
    const changeCurrentTopic = (topic:string) => { return setCurrentTopic(topic)}

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
                        {languages.map((languageItem: any) =>
                        <Dropdown.Item onClick = {() => changeCurrentLanguage(languageItem.languageName, languageItem.Content,languageItem.topics)}>{languageItem.languageName}</Dropdown.Item>)}
                    </DropdownButton>
                    <DropdownButton id="Topics" title={"Topic: " + current_topic}>
                        {currentLanguageTopics.map((topic: string) =>
                        <Dropdown.Item onClick = {() => changeCurrentTopic(topic)}>{topic}</Dropdown.Item>)}
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
