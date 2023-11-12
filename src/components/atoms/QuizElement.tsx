import { Key, useState } from "react"
import {Navbar, Container} from "react-bootstrap"

const QuizElement = (props: any) => {
    const [formValues, setFormValues] = useState({answer: ""})
    const [response, setResponse] = useState("")
    const handleChange = (e:any) => {
        const {name,value} = e.target;
        setFormValues({...formValues, [name]: value})
    }

    const roughlyEqual = (a: any,b:any ) => {return (a.toLowerCase() ===b)};
    const onSubmit = (e:any, submitted_answer:string, correct_answer:string) => {
        e.preventDefault();
        const does_it_match = (roughlyEqual(submitted_answer,correct_answer)) ? "✔" : 
        " ✘ the correct answer is " + "'" + correct_answer +  "'" + " not " +  "'" + submitted_answer +  "'" 
        setResponse(does_it_match)
      };
    
    var hideStudyElement = false;
    var [hideStudyElement,setHideStudyElement] = useState(hideStudyElement)

    if(!hideStudyElement){
      return (
        <Navbar>
        <form  onSubmit={e => onSubmit(e, formValues.answer, props.isVerb? props.AnswerWord.infinitive: props.AnswerWord)}>
            <div className="ui form">
                    <label style= {{width: "200px"}}>{props.isVerb? props.QuestionWord.infinitive: props.QuestionWord} </label>
                    <input type="text" name="answer" placeholder="" value={formValues.answer} onChange = {handleChange} autoComplete="off" autoCorrect="off" spellCheck ="false" autoCapitalize="off"/>
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