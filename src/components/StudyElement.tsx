import {Navbar} from "react-bootstrap"

const StudyElement = (props: any) => {
  const BaseLanguageWord = props.BaseLanguageWord
  const ForeignLanguageWord = props.ForeignLanguageWord
  return (
    <Navbar>
    <label style= {{width: "200px", textAlign: "left"}}>{BaseLanguageWord} </label>
    <label style= {{width: "40px"}}></label>
    <label style= {{width: "200px", textAlign: "left"}}>{ForeignLanguageWord} </label>
    </Navbar>
    );
}
 
export default StudyElement;