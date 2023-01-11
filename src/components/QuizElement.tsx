import { Key, useState } from "react"
import {Navbar, Container} from "react-bootstrap"
import {useSelector,useDispatch} from "react-redux"
import {flipQuizState} from "../redux/quiz";
import {makeFalse} from "../redux/resetForms";


const QuizElement = (props: any) => {
    const QuestionWord = props.QuestionWord
    const AnswerWord = props.AnswerWord
    const initialAnswer = {answer: ""}
    const resetForms = useSelector((state:any) => state.resetForms.resetFormsBool);
    const quizState = useSelector((state:any) => state.quiz.quizBool);
    const dispatch = useDispatch();
  
    const [formValues, setFormValues] = useState(initialAnswer)
    var initialResponse = ""
    const [response, setResponse] = useState(initialResponse)
    const handleChange = (e:any) => {
        const {name,value} = e.target;
        [setFormValues({...formValues, [name]: value}),dispatch(makeFalse())]

    }

    const onSubmit = (e:any, submitted_answer:string, correct_answer:string) => {
        e.preventDefault();
        console.log(e)
        const does_it_match = (submitted_answer === correct_answer) ? "✔" : " ✘ the correct answer is " + "'" + correct_answer +  "'" + " not " +  "'" + submitted_answer +  "'" 
        setResponse(does_it_match)
      };

    return (
      <Navbar>
      <form  onSubmit={e => onSubmit(e, formValues.answer, AnswerWord)}>
          <div className="ui form">
                  <label style= {{width: "200px"}}>{QuestionWord} </label>
                  <input type="text" name="answer" placeholder="" value={resetForms? "":formValues.answer} onChange = {handleChange} autoComplete="off" spellCheck ="false"/>
          </div>
      </form>
      <div> {resetForms? "":response}</div>
      </Navbar>
      );
}
 
export default QuizElement;