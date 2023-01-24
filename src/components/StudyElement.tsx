import { Key, useState } from "react"
import {Navbar, Container, Modal, Button} from "react-bootstrap"
import CloseButton from 'react-bootstrap/CloseButton';



const StudyElement = (props: any) => {
  const BaseLanguageWord = props.BaseLanguageWord
  const ForeignLanguageWord = props.ForeignLanguageWord
  const ForeignLanguageWordAudio = props.ForeignLanguageWordAudio
  const showAudio = props.showAudio
  const showBaseLanguageFirst= props.showBaseLanguageFirst
  const isVerb = props.isVerb

  var show_popup = false;
  var [show_popup,setshow_popup] = useState(show_popup)
  const hide_popup = () => { return setshow_popup(false)}
  const display_popup = () => { return setshow_popup(true)}



  if(showAudio){
    if(showBaseLanguageFirst){
      if(isVerb){
        return (
          <Navbar>
            <label style= {{width: "200px", textAlign: "left"}}>{isVerb? BaseLanguageWord.infinitive: BaseLanguageWord} </label>
            <label style= {{width: "40px"}}></label>
            <label onClick={isVerb?display_popup:hide_popup} style= {isVerb?{width: "200px", textAlign: "left", color: "purple", textDecorationLine: "underline"}:{width: "200px", textAlign: "left"}}>{ForeignLanguageWord.infinitive} </label>
            <label style= {{width: "350px", textAlign: "left"}}><audio src={ForeignLanguageWordAudio} controls autoPlay ={false}></audio> </label>
            <CloseButton/>
            <Modal show ={show_popup} onHide={hide_popup}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {ForeignLanguageWord.infinitive}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Present Tense</h5>
            <p>
              I {BaseLanguageWord.englishWordConjugation.present_tense[0]} = Yo {ForeignLanguageWord.foreignWordConjugation.present_tense[0]}<br/>
              You {BaseLanguageWord.englishWordConjugation.present_tense[1]} = Tu {ForeignLanguageWord.foreignWordConjugation.present_tense[1]} <br/>
              He/She {BaseLanguageWord.englishWordConjugation.present_tense[2]} = El/Ella {ForeignLanguageWord.foreignWordConjugation.present_tense[2]} <br/>
              We {BaseLanguageWord.englishWordConjugation.present_tense[3]} = nosotros {ForeignLanguageWord.foreignWordConjugation.present_tense[3]}<br/>
              You (p) {BaseLanguageWord.englishWordConjugation.present_tense[4]} = Vosotros {ForeignLanguageWord.foreignWordConjugation.present_tense[4]} <br/>
              They {BaseLanguageWord.englishWordConjugation.present_tense[5]} = Ellos/Ellas {ForeignLanguageWord.foreignWordConjugation.present_tense[5]} <br/>
            </p>
            <h5>Past Preterite Tense</h5>
            <p>
            I {BaseLanguageWord.englishWordConjugation.past_tense[0]} = Yo {ForeignLanguageWord.foreignWordConjugation.past_tense[0]}<br/>
              You {BaseLanguageWord.englishWordConjugation.past_tense[1]} = Tu {ForeignLanguageWord.foreignWordConjugation.past_tense[1]} <br/>
              He/She {BaseLanguageWord.englishWordConjugation.past_tense[2]} = El/Ella {ForeignLanguageWord.foreignWordConjugation.past_tense[2]} <br/>
              We {BaseLanguageWord.englishWordConjugation.past_tense[3]} = nosotros {ForeignLanguageWord.foreignWordConjugation.past_tense[3]}<br/>
              You (p) {BaseLanguageWord.englishWordConjugation.past_tense[4]} = Vosotros {ForeignLanguageWord.foreignWordConjugation.past_tense[4]} <br/>
              They {BaseLanguageWord.englishWordConjugation.past_tense[5]} = Ellos/Ellas {ForeignLanguageWord.foreignWordConjugation.past_tense[5]} <br/>
            </p>
            <h5>Future Tense</h5>
            <p>
            I {BaseLanguageWord.englishWordConjugation.future_tense[0]} = Yo {ForeignLanguageWord.foreignWordConjugation.future_tense[0]}<br/>
              You {BaseLanguageWord.englishWordConjugation.future_tense[1]} = Tu {ForeignLanguageWord.foreignWordConjugation.future_tense[1]} <br/>
              He/She {BaseLanguageWord.englishWordConjugation.future_tense[2]} = El/Ella {ForeignLanguageWord.foreignWordConjugation.future_tense[2]} <br/>
              We {BaseLanguageWord.englishWordConjugation.future_tense[3]} = nosotros {ForeignLanguageWord.foreignWordConjugation.future_tense[3]}<br/>
              You (p) {BaseLanguageWord.englishWordConjugation.future_tense[4]} = Vosotros {ForeignLanguageWord.foreignWordConjugation.future_tense[4]} <br/>
              They {BaseLanguageWord.englishWordConjugation.future_tense[5]} = Ellos/Ellas {ForeignLanguageWord.foreignWordConjugation.future_tense[5]} <br/>
            </p>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hide_popup}>Close</Button>
      </Modal.Footer>
    </Modal>  
      </Navbar>

      )
    }
    else{
      return (
        <Navbar>
        <label style= {{width: "200px", textAlign: "left"}}>{BaseLanguageWord} </label>
        <label style= {{width: "200px", textAlign: "left"}}>{ForeignLanguageWord} </label>
        <label style= {{width: "350px", textAlign: "left"}}><audio src={ForeignLanguageWordAudio} controls autoPlay ={false}></audio> </label>
        <CloseButton/>
        </Navbar>
      )
    }
  
      
}
    else{
      return (
        <Navbar>
        <label style= {{width: "200px", textAlign: "left"}}>{BaseLanguageWord} </label>
        <label style= {{width: "200px", textAlign: "left"}}>{ForeignLanguageWord} </label>
        <label style= {{width: "350px", textAlign: "left"}}><audio src={ForeignLanguageWordAudio} controls autoPlay ={false}></audio> </label>
        <CloseButton/>
        </Navbar>
      )
    }
  }
  else {
    return (
      <Navbar>
      <label style= {{width: "200px", textAlign: "left"}}>{BaseLanguageWord} </label>
      <label style= {{width: "40px"}}></label>
      <label style= {{width: "350px", textAlign: "left"}}>{ForeignLanguageWord} </label>
      <CloseButton/>
      </Navbar>
      )
  }
}
 
export default StudyElement;