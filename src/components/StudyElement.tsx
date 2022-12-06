import { Key, useState } from "react"
import {Navbar, Container} from "react-bootstrap"

const StudyElement = (props: any) => {
  const BaseLanguageWord = props.BaseLanguageWord
  const ForeignLanguageWord = props.ForeignLanguageWord
  return (
    <Navbar>
    <label style= {{width: "200px", textAlign: "center"}}>{BaseLanguageWord} </label>
    <label style= {{width: "40px"}}></label>
    <label style= {{width: "200px", textAlign: "center"}}>{ForeignLanguageWord} </label>
    </Navbar>
    );
}
 
export default StudyElement;