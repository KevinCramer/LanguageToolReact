import { Key, useState } from "react"

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

    var quiz = true
    var [quiz,setQuiz] = useState(quiz)
    const changeQuizState = () => { return setQuiz((!quiz))}
    function ToggleQuiz(){
        if (quiz) {
            return (
                <div>
                    {topic_words.map((word: { englishWord: Key | null | undefined; foreignWord: string; }) => (<div><div key={word.englishWord} >{showBaseLanguage? word.englishWord + " = " : word.foreignWord + " = "}  <form style={{ display: 'flex', flexDirection : 'row'}}><input type="text" id="name" /></form></div></div>))}
                </div>
           
        )
        }
        else {
            return (
                <div>
                    {topic_words.map((word: { englishWord: Key | null | undefined; foreignWord: string; }) => (<div key={word.englishWord} > {showBaseLanguage? word.englishWord + " = " + word.foreignWord : word.foreignWord + " = " + word.englishWord} </div>))}
                </div>

            )
        }

    }

    var topic_words = language.filter((word: { topic: string; }) => {return word.topic === current_topic} )
    return (
        <div>    
            <h1>{languageName}</h1>
                <button onClick={handleClick} >Toggle Languages</button>
                <button onClick={changeCurrentTopicToFood} >Food</button>
                <button onClick={changeCurrentTopicToClothes} >Clothes</button>
                <button onClick={changeCurrentTopicToColours} >Colours</button>
                <button onClick={changeCurrentTopicToNumbers} >Numbers</button>
                <button onClick={changeQuizState} >Quiz/Study</button>
                <p></p>
                {ToggleQuiz()}
        </div>
      );
}
 
export default StudyContent;