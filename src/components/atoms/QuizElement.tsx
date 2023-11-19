import { useState } from "react"
import {Navbar} from "react-bootstrap"

const QuizElement = (props: any) => {
    const [formValues, setFormValues] = useState({answer: ""})
    const [response, setResponse] = useState("")
    const handleChange = (e:any) => {
        const {name,value} = e.target;
        setFormValues({...formValues, [name]: value})
    }

    const roughlyEqual = (a: any,b:any ) => {return (a.toLowerCase() ===b)};
    const onSubmit = (e:any, submittedAnswer:string, correctAnswer:string) => {
        e.preventDefault();
        const doesItMatch = (roughlyEqual(submittedAnswer,correctAnswer)) ? "✔" : 
        ` ✘ the correct answer is  '${correctAnswer}' not '${submittedAnswer}'`

        setResponse(doesItMatch)
      };
    
    var hideStudyElement = false;
    var [hideStudyElement] = useState(hideStudyElement)

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