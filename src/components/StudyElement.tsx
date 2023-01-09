import { Key, useState } from "react"
import {Navbar, Container} from "react-bootstrap"
import Purple from '../data/audio/purple.mp3';


const StudyElement = (props: any) => {
  const BaseLanguageWord = props.BaseLanguageWord
  const ForeignLanguageWord = props.ForeignLanguageWord
  const ForeignLanguageWordAudio = props.ForeignLanguageWordAudio
  const showAudio = props.showAudio
  if(showAudio){
    return (
      <Navbar>
      <label style= {{width: "200px", textAlign: "left"}}>{BaseLanguageWord} </label>
      <label style= {{width: "40px"}}></label>
      <label style= {{width: "200px", textAlign: "left"}}>{ForeignLanguageWord} </label>
      <label style= {{width: "200px", textAlign: "left"}}><audio src={ForeignLanguageWordAudio} controls autoplay></audio> </label>
      </Navbar>
      )
  }
  else {
    return (
      <Navbar>
      <label style= {{width: "200px", textAlign: "left"}}>{BaseLanguageWord} </label>
      <label style= {{width: "40px"}}></label>
      <label style= {{width: "200px", textAlign: "left"}}>{ForeignLanguageWord} </label>
      </Navbar>
      )
  }
}
 
export default StudyElement;