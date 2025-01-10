import { Navbar } from 'react-bootstrap'
import { roughlyEqual } from '../../helpers/vocab-content-helpers'
import { useState } from 'react'

const QuizElement = (
  props: {
    questionWord: string,
    answerWord: string,
    myCounter: number
    }) => {
  const [formValues, setFormValues] = useState({ answer: '' })
  const [response, setResponse] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name,value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  }

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
    propsQuestionWord = (props.questionWord as string)
    propsAnswerWord = (props.answerWord as string)
    const myPlaceHolder = props.myCounter === 1 ? 'enter your answer here' : '';
    return (
      <Navbar>
        <div>
          <div>
            <form 
              onBlur={e => checkAnswer(
                e as unknown as React.ChangeEvent<HTMLInputElement> ,
                formValues.answer, propsAnswerWord)}
              onSubmit={e => checkAnswer(
                        e as unknown as React.ChangeEvent<HTMLInputElement> ,
                        formValues.answer, propsAnswerWord)}
            >
              <div>
                <label>{propsQuestionWord} </label>
                <input 
                  type='text'
                  name='answer' 
                  placeholder={myPlaceHolder}
                  value={formValues.answer} 
                  onChange = {handleChange}
                  autoComplete='off' 
                  autoCorrect='off' 
                  spellCheck ='false' 
                  autoCapitalize='off'/>
              </div>
            </form>
            {/* This is hack to ensure the quiz element doesn't move when tick
             mark is rendered which is about 20px wide
              */}
            <div></div>
            <div>
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