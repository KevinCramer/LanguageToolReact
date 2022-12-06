import { Key, useState } from "react"


const Quiz = (props: any) => {
    const QuestionWord = props.QuestionWord
    const initialAnswer = {answer: ""}
    const [formValues, setFormValues] = useState(initialAnswer)
    var initialResponse = ""
    const [response, setResponse] = useState(initialResponse)
    const handleChange = (e:any) => {
        const {name,value} = e.target;
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = (e:any, submitted_answer:string, correct_answer:string) => {
        e.preventDefault();
        console.log(e)
        const does_it_match = (submitted_answer === correct_answer) ? "✔" : " ✘ the correct answer is " + "'" + correct_answer +  "'" + " not " +  "'" + submitted_answer +  "'" 
        setResponse(does_it_match)
      };

    return (
      <div className="Container">
      <form  onSubmit={e => onSubmit(e, formValues.answer, "stropdas")}>
          <div className="ui form">
              <div className="field">
                  <label>{QuestionWord} </label>
                  <input type="text" name="answer" placeholder="" value={formValues.answer} onChange = {handleChange} autoComplete="off" spellCheck ="false"/>
              </div>
          </div>
      </form>
      <div> {response}</div>
      </div>
      );
}
 
export default quiz;