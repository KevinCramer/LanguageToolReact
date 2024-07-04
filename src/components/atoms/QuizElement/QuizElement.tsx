import './QuizElement.css'
import { Navbar } from 'react-bootstrap'
import { useState } from 'react'
import { VerbConjugation } from '../../../../types/vocabTypes'

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

  const roughlyEqual = (a: string, b: string ) => {return (a.toLowerCase().trim() === b)};
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
        <div>
          <div style={{ display:'flex', flexDirection:'row' }}>
            <form 
              onBlur={e => checkAnswer(
                e as unknown as React.ChangeEvent<HTMLInputElement> ,
                formValues.answer, propsAnswerWord)}
              onSubmit={e => checkAnswer(
                        e as unknown as React.ChangeEvent<HTMLInputElement> ,
                        formValues.answer, propsAnswerWord)}
            >
              <div className="ui form">
                <label style= {{ width: '150px', textAlign:'left' }}>{propsQuestionWord} </label>
                <input 
                  type="text"
                  name="answer" 
                  placeholder={myPlaceHolder}
                  value={formValues.answer} 
                  onChange = {handleChange}
                  autoComplete="off" 
                  autoCorrect="off" 
                  spellCheck ="false" 
                  autoCapitalize="off"/>
              </div>
            </form>
            {/* This is hack to ensure the quiz element doesn't move when tick
             mark is rendered which is about 20px wide
              */}
            <div style={{ width: response !== '✔' ? '20px' : '0px' }}></div>
            <div>
              {/* This is hack to ensure the tick mark is vertically aligned with input form
              */}
              <div style={{ height:'10px' }}></div>
              <div> {response === '✔' ? response : null}</div>
            </div>
          </div>
          <div> {response !== '✔' ? response : null}</div>
        </div>
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