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
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const checkAnswer = (
    e: React.ChangeEvent<HTMLInputElement>,
    submittedAnswer: string,
    correctAnswer: string
  ) => {
    e.preventDefault();
    if(submittedAnswer !== ''){
      const doesItMatch = (roughlyEqual(submittedAnswer, correctAnswer)) ? '✔' : 
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
      <Navbar className='flex flex-col items-center'>
        <div className='w-full'>
          <form 
            onBlur={e => checkAnswer(
              e as unknown as React.ChangeEvent<HTMLInputElement>,
              formValues.answer, propsAnswerWord)}
            onSubmit={e => checkAnswer(
              e as unknown as React.ChangeEvent<HTMLInputElement>,
              formValues.answer, propsAnswerWord)}
          >
            <div className='flex justify-center items-center'>
              <label className='mr-4'>{propsQuestionWord}</label>
              <input 
                type='text'
                name='answer' 
                placeholder={myPlaceHolder}
                value={formValues.answer} 
                onChange={handleChange}
                autoComplete='off' 
                autoCorrect='off' 
                spellCheck='false' 
                autoCapitalize='off'
                className='border px-4 py-2 rounded-md'
              />
              {/* Correct answer checkmark displayed on the same line */}
              {response === '✔' && <span className='text-green-500 ml-2'>{response}</span>}
            </div>
          </form>
          
          {/* For incorrect answers, show the ✘ message on the next line */}
          <div>
            {response !== '✔' && response}
          </div>
        </div>
      </Navbar>
    )
  } else {
    return null
  }
}

export default QuizElement;
