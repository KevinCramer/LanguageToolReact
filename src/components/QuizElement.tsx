import { Key, useState } from "react"
import {Navbar, Container} from "react-bootstrap"

const QuizElement = (props: any) => {
    const isVerb = props.isVerb
    const QuestionWord = isVerb? props.QuestionWord.infinitive: props.QuestionWord
    const AnswerWord = isVerb? props.AnswerWord.infinitive: props.AnswerWord
    const initialAnswer = {answer: ""}
    const [formValues, setFormValues] = useState(initialAnswer)
    var initialResponse = ""
    const [response, setResponse] = useState(initialResponse)
    const handleChange = (e:any) => {
        const {name,value} = e.target;
        setFormValues({...formValues, [name]: value})
    }

    const roughlyEqual = (a: any,b:any ) => {return (a.toLowerCase() ===b)};
    const onSubmit = (e:any, submitted_answer:string, correct_answer:string) => {
        e.preventDefault();
        console.log(e)
        const does_it_match = (roughlyEqual(submitted_answer,correct_answer)) ? "✔" : " ✘ the correct answer is " + "'" + correct_answer +  "'" + " not " +  "'" + submitted_answer +  "'" 
        setResponse(does_it_match)
      };
    
    var hideStudyElement = false;
    var [hideStudyElement,setHideStudyElement] = useState(hideStudyElement)
    const hide_studyElement = () => { return setHideStudyElement(true)}

    if(!hideStudyElement){
      return (
        <Navbar>
        <form  onSubmit={e => onSubmit(e, formValues.answer, AnswerWord)}>
            <div className="ui form">
                    <label style= {{width: "200px"}}>{QuestionWord} </label>
                    <input type="text" name="answer" placeholder="" value={formValues.answer} onChange = {handleChange} autoComplete="off" spellCheck ="false"/>
                    <label style= {{width: "40px"}}></label>
            </div>
        </form>
        <div> {response}</div>
        </Navbar>
      )

    }
    else {
      return (
        null
      )
    }
  }
 
export default QuizElement;