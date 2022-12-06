import { Key, useState } from "react"
import './button.css';
import Button from "./Button"


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
    const initialAnswer = {answer: ""}
    const [formValues, setFormValues] = useState(initialAnswer)
    var initialResponse = {answer: ""}
    const [response, setResponse] = useState(initialResponse)
    const handleChange = (e:any) => {
        const {name,value} = e.target;
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = (e:any) => {
        e.preventDefault();
        console.log(e.target.innerHTML)
        const text = e.target.innerHTML.slice(118,1000)
        console.log(text)
        const end = text.indexOf('"');
        const userSubmission = text.slice(0,end)
        const does_it_match = (userSubmission === "broek") ? "✓" : " X the correct answer is 'broek' not " + JSON.stringify(userSubmission)
        response.answer = does_it_match
      };

    var quiz = false
    var [quiz,setQuiz] = useState(quiz)
    const changeQuizState = () => { return setQuiz((!quiz))}
    function ToggleQuiz(){
        if (quiz) {
            return (
                <div className="Container">
                <form  onSubmit={onSubmit}>
                    <div className="ui form">
                        <div className="field">
                            <label>trousers</label>
                            <input type="text" name="answer" placeholder="" value={formValues.answer} onChange = {handleChange}/>
                        </div>
                    </div>
                </form>
                <div> {response.answer}</div>
                </div>
        )
        }
        else {
            return (
                <div>
                    {topic_words.map((word: { englishWord: Key | null | undefined; foreignWord: string; }) => (<div key={word.englishWord} > {showBaseLanguage? word.englishWord + "  " + word.foreignWord : word.foreignWord + "  " + word.englishWord} </div>))}
                </div>

            )
        }

    }

    var topic_words = language.filter((word: { topic: string; }) => {return word.topic === current_topic} )
    return (
        <div>    
            <h1>{languageName}</h1>
                <div className = "Container">
                    <Button clickMethod = {handleClick} ButtonName = "Toggle Languages"/>
                    <Button clickMethod = {changeCurrentTopicToClothes} ButtonName = "Clothes"/>
                    <Button clickMethod = {changeCurrentTopicToColours} ButtonName = "Colours"/>
                    <Button clickMethod = {changeCurrentTopicToFood} ButtonName = "Food"/>
                    <Button clickMethod = {changeCurrentTopicToNumbers} ButtonName = "Numbers"/>
                    <Button clickMethod = {changeQuizState} ButtonName = "Quiz/Study"/>
                </div>
                <p></p>
                {ToggleQuiz()}
        </div>
      );
}
 
export default StudyContent;




//<form><input type="text" id="name" /></form>


/* if (quiz) {
    return (
        <div>
            {topic_words.map((word: { englishWord: Key | null | undefined; foreignWord: string; }) => (<div><div className = "Container" key={word.englishWord} >{showBaseLanguage? word.englishWord + "  " : word.foreignWord + "  "}
            <form>
<div className="ui form">
<div className="field">
    <label></label>
    <input type="text" name="" placeholder="" />
</div>
</div>
</form>
            </div></div>))}
        </div> */
