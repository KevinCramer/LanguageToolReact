import { useState } from 'react'
import {Navbar} from 'react-bootstrap'
import { VerbConjugation} from '../../types'

const QuizElement = (
  props: {
    questionWord: string | VerbConjugation,
    answerWord: string | VerbConjugation,
    isVerb: boolean
    }) => {
  const [formValues, setFormValues] = useState({answer: ''})
  const [response, setResponse] = useState('')
  const handleChange = (e:any) => {
    const {name,value} = e.target;
    setFormValues({...formValues, [name]: value})
  }

  const roughlyEqual = (a: string, b: string ) => {return (a.toLowerCase() ===b)};
  const onSubmit = (e:any, submittedAnswer:string, correctAnswer:string) => {
    e.preventDefault();
    const doesItMatch = (roughlyEqual(submittedAnswer,correctAnswer)) ? '✔' : 
      ` ✘ the correct answer is  '${correctAnswer}' not '${submittedAnswer}'`

    setResponse(doesItMatch)
  };
    
  var hideStudyElement = false;
  var [hideStudyElement] = useState(hideStudyElement)

  if(!hideStudyElement){
    let propsQuestionWord: string;
    let propsAnswerWord: string;
    if(props.isVerb){
      propsQuestionWord= (props.questionWord as VerbConjugation)
        .infinitive
      propsAnswerWord= (props.answerWord as VerbConjugation)
        .infinitive

    }
    else{
      propsQuestionWord = (props.questionWord as string)
      propsAnswerWord = (props.answerWord as string)
    }

    return (
      <Navbar style={{justifyContent:'center'}}>
        <form onSubmit={e => onSubmit(e, formValues.answer, propsAnswerWord)}>
          <div className="ui form">
            <label style= {{width: '200px'}}>{propsQuestionWord} </label>
            <input type="text" name="answer" placeholder="" value={formValues.answer} 
              onChange = {handleChange} autoComplete="off" autoCorrect="off" 
              spellCheck ="false" autoCapitalize="off"/>
            <label style= {{width: '40px'}}></label>
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