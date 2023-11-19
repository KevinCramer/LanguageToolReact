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

const StudyContent = () => {
    var currentLanguageName: string = languages[0].languageName
    var [currentLanguageName,setLanguageName] = useState(currentLanguageName)

    var currentLanguage: Word[] = languages[0].content
    var [currentLanguage,setLanguage] = useState(currentLanguage)

    var currentLanguageTopics: string[] = languages[0].topics
    var [currentLanguageTopics,setCurrentLanguageTopics] = useState(currentLanguageTopics)

    var currentNumForeignAlphabets: number = languages[0].numForeignAlphabets
    var [currentNumForeignAlphabets,setCurrentNumForeignAlphabets] = useState(currentNumForeignAlphabets)

    var currentPronouns: string[] = languages[0].pronouns
    var [currentPronouns,setCurrentPronouns] = useState(currentPronouns)

    var currentTopic = currentLanguageTopics[0]
    var [currentTopic,setCurrentTopic] = useState(currentTopic)


    var showBaseLanguage = true;
    var [showBaseLanguage,setShowBaseLanguage] = useState(showBaseLanguage)
    const changeBaseLanguage = () => { return setShowBaseLanguage(!showBaseLanguage)}

    var currentAlphabet: number = 0;
    var [currentAlphabet,setCurrentAlphabet] = useState(currentAlphabet)
    const changeCurrentAlphabet = () => { return setCurrentAlphabet(currentAlphabet = (currentAlphabet +1)% currentNumForeignAlphabets)}

    var showTrueOrder = true;
    var [showTrueOrder,setShowTrueOrder] = useState(showTrueOrder)
    const changeOrder = () => { return setShowTrueOrder(!showTrueOrder)}

    
    const changeCurrentLanguage = 
    (   languageName: string,
        languageContent: Word[], 
        topics: string[], 
        numForeignAlphabets: number,
        currentPronouns: string[]
    ) => 
    { 
        setLanguage(languageContent);
        setLanguageName(languageName);
        setCurrentLanguageTopics(topics);
        setCurrentNumForeignAlphabets(numForeignAlphabets);
        setCurrentPronouns(currentPronouns);

    }
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
            const isVerb  = currentTopic=== "Verbs"
            return ( 
                <div>
                    {topicWords.map((pair: Word) =>
                    <div key ={showTrueOrder.toString() + (isVerb?(pair.englishWord as VerbConjugationEnglish).infinitive: pair.englishWord) + pair.foreignWord[currentAlphabet] + showBaseLanguage}>
                                            <QuizElement questionWord = { showBaseLanguage? pair.englishWord: pair.foreignWord[currentAlphabet] } answerWord = {showBaseLanguage? pair.foreignWord[currentAlphabet]: pair.englishWord} isVerb = {currentTopic=== "Verbs"}/>
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
                                            BaseLanguageWord = { showBaseLanguage? pair.englishWord: pair.foreignWord[currentAlphabet]} 
                                            ForeignLanguageWord = {showBaseLanguage? pair.foreignWord[currentAlphabet]: pair.englishWord}  
                                            ForeignLanguageWordAudio = {pair.foreignAudio} 
                                            showAudio = {audioBool} 
                                            showBaseLanguageFirst = {showBaseLanguage} 
                                            isVerb = {currentTopic=== "Verbs"}
                                            pronouns = {currentPronouns}
                                            />
                    </div>                    
                    )}
                </div>
            )
        }

    }
    if(showTrueOrder)
    {
        var topicWords = currentLanguage.filter((word: { topic: string; }) => {return word.topic === currentTopic} )
    }
    else
    {
        var topicWords = currentLanguage.filter((word: { topic: string; }) => {return word.topic === currentTopic}).sort((a, b) => 0.5 - Math.random());
    }
    return (
        <div style = {{backgroundColor: "white", height: "100vh"}}>
        <Container>    
            <NavbarBs className = "bg-white shadow-sm mb-3">
                <Container>
                    <DropdownButton id="Languages" title={String(currentLanguageName)} size = "sm"> 
                        {languages.map((languageItem: Language) =>
                        <Dropdown.Item onClick = {() => [changeCurrentLanguage(languageItem.languageName, languageItem.content,languageItem.topics, languageItem.numForeignAlphabets, languageItem.pronouns), setCurrentAlphabet(0),changeCurrentTopic(languageItem.topics[0]) ]}>{languageItem.languageName}</Dropdown.Item>)}
                    </DropdownButton>
                    <DropdownButton id="Topics" title={"Topic: " + currentTopic} size = "sm">
                        {currentLanguageTopics.map((topic: string) =>
                        <Dropdown.Item onClick = {() => changeCurrentTopic(topic)}>{topic}</Dropdown.Item>)}
                    </DropdownButton>
                    <DropdownButton id="Parameters" title="Parameters" size = "sm">
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
