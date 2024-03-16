import { Navbar } from 'react-bootstrap'
import { useState } from 'react'
import { VerbConjugation } from '../../../types/vocabTypes'

const QuizElement = (
  props: {
    questionWord: string | VerbConjugation,
    answerWord: string | VerbConjugation,
    isVerb: boolean
    myCounter: number
    }) => {
  const [formValues, setFormValues] = useState({ answer: '' })
  const [response, setResponse] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name,value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const roughlyEqual = (a: string, b: string ) => {return (a.toLowerCase() === b)};
  const checkAnswer = (
    e:React.ChangeEvent<HTMLInputElement>, 
    submittedAnswer:string, 
    correctAnswer:string
  ) => {
    e.preventDefault();
    if(submittedAnswer !== ''){
      const doesItMatch = (roughlyEqual(submittedAnswer,correctAnswer)) ? '✔' : 
        ` ✘ the correct answer is  '${correctAnswer}' not '${submittedAnswer}'` 
      setResponse(doesItMatch)
    }
  };
    
  var hideStudyElement = false;
  var [hideStudyElement] = useState(hideStudyElement)

  if(!hideStudyElement){
    let propsQuestionWord: string;
    let propsAnswerWord: string;
    if(props.isVerb){
      propsQuestionWord = (props.questionWord as VerbConjugation)
        .infinitive
      propsAnswerWord = (props.answerWord as VerbConjugation)
        .infinitive

    }
    else{
      propsQuestionWord = (props.questionWord as string)
      propsAnswerWord = (props.answerWord as string)
    }
    const myPlaceHolder = props.myCounter === 1 ? 'enter your answer here' : '';
    return (
      <Navbar style={{ justifyContent:'center' }}>
        <form onBlur={e => checkAnswer(
          e as unknown as React.ChangeEvent<HTMLInputElement> ,
          formValues.answer, propsAnswerWord)}
        onSubmit={e => checkAnswer(
            e as unknown as React.ChangeEvent<HTMLInputElement> ,
            formValues.answer, propsAnswerWord)}>
          <div className="ui form">
            <label style= {{ width: '200px', textAlign:'center' }}>{propsQuestionWord} </label>
            <input type="text" name="answer" placeholder={myPlaceHolder}
              value={formValues.answer} 
              onChange = {handleChange} autoComplete="off" autoCorrect="off" 
              spellCheck ="false" autoCapitalize="off"/>
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