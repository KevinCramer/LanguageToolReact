import { useState } from "react"
import {Navbar, Modal, Button} from "react-bootstrap"

const StudyElement = (props: any) => 
{
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
  if(showAudio && showBaseLanguageFirst && isVerb){
    return  (
      <Navbar>
        <label style= {{width: "20%", textAlign: "left"}}>{isVerb? BaseLanguageWord.infinitive: BaseLanguageWord} </label>
        <label style= {{width: "5%"}}></label>
        <label onClick={isVerb?display_popup:hide_popup} style= {isVerb?{width: "20%", textAlign: "left", color: "purple", textDecorationLine: "underline"}:{width: "20%", textAlign: "left"}}>{ForeignLanguageWord.infinitive} </label>
        <label style= {{width: "20%", textAlign: "left"}}><audio src={ForeignLanguageWordAudio} controls controlsList="nodownloads" autoPlay ={false}></audio> </label>
        <Modal show ={show_popup} onHide={hide_popup}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {ForeignLanguageWord.infinitive}
            </Modal.Title>
          </Modal.Header>
        <Modal.Body>
          <h5>Present Tense</h5>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.englishWordConjugation.present_tense[0]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.foreignWordConjugation.present_tense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You {BaseLanguageWord.englishWordConjugation.present_tense[1]}</td>
            <td style={{ width: 130 }} >Tu {ForeignLanguageWord.foreignWordConjugation.present_tense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >He/She {BaseLanguageWord.englishWordConjugation.present_tense[2]}</td>
            <td style={{ width: 130 }} >El/Ella {ForeignLanguageWord.foreignWordConjugation.present_tense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >We {BaseLanguageWord.englishWordConjugation.present_tense[3]}</td>
            <td style={{ width: 130 }} >Nosotros {ForeignLanguageWord.foreignWordConjugation.present_tense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You (p) {BaseLanguageWord.englishWordConjugation.present_tense[4]}</td>
            <td style={{ width: 130 }} >Vosotros {ForeignLanguageWord.foreignWordConjugation.present_tense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >They {BaseLanguageWord.englishWordConjugation.present_tense[5]}</td>
            <td style={{ width: 130 }} >Ellos/Ellas {ForeignLanguageWord.foreignWordConjugation.present_tense[5]}</td>
          </tr>
          <h5>Past Preterite Tense</h5>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.englishWordConjugation.past_tense[0]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.foreignWordConjugation.past_tense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You {BaseLanguageWord.englishWordConjugation.past_tense[1]}</td>
            <td style={{ width: 130 }} >Tu {ForeignLanguageWord.foreignWordConjugation.past_tense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >He/She {BaseLanguageWord.englishWordConjugation.past_tense[2]}</td>
            <td style={{ width: 130 }} >El/Ella {ForeignLanguageWord.foreignWordConjugation.past_tense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >We {BaseLanguageWord.englishWordConjugation.past_tense[3]}</td>
            <td style={{ width: 130 }} >Nosotros {ForeignLanguageWord.foreignWordConjugation.past_tense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You (p) {BaseLanguageWord.englishWordConjugation.past_tense[4]}</td>
            <td style={{ width: 130 }} >Vosotros {ForeignLanguageWord.foreignWordConjugation.past_tense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >They {BaseLanguageWord.englishWordConjugation.past_tense[5]}</td>
            <td style={{ width: 130 }} >Ellos/Ellas {ForeignLanguageWord.foreignWordConjugation.past_tense[5]}</td>
          </tr>
          <h5>Future Tense</h5>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.englishWordConjugation.future_tense[0]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.foreignWordConjugation.future_tense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You {BaseLanguageWord.englishWordConjugation.future_tense[1]}</td>
            <td style={{ width: 130 }} >Tu {ForeignLanguageWord.foreignWordConjugation.future_tense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >He/She {BaseLanguageWord.englishWordConjugation.future_tense[2]}</td>
            <td style={{ width: 130 }} >El/Ella {ForeignLanguageWord.foreignWordConjugation.future_tense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >We {BaseLanguageWord.englishWordConjugation.future_tense[3]}</td>
            <td style={{ width: 130 }} >Nosotros {ForeignLanguageWord.foreignWordConjugation.future_tense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You (p) {BaseLanguageWord.englishWordConjugation.future_tense[4]}</td>
            <td style={{ width: 130 }} >Vosotros {ForeignLanguageWord.foreignWordConjugation.future_tense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >They {BaseLanguageWord.englishWordConjugation.future_tense[5]}</td>
            <td style={{ width: 130 }} >Ellos/Ellas  {ForeignLanguageWord.foreignWordConjugation.future_tense[5]}</td>
          </tr>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={hide_popup}>Close</Button>
          </Modal.Footer>
        </Modal>  
      </Navbar>

    )
  }
  else if(showAudio && showBaseLanguageFirst && !isVerb){
    return  (
      <Navbar>
        <label style= {{width: "20%", textAlign: "left"}}>{BaseLanguageWord} </label>
        <label style= {{width: "20%", textAlign: "left"}}>{ForeignLanguageWord} </label>
        <label style= {{width: "20%", textAlign: "left"}}><audio src={ForeignLanguageWordAudio} controls controlsList="nodownloads" autoPlay ={false}></audio> </label>
      </Navbar>
    )
  }
  else if(showAudio && !showBaseLanguageFirst && isVerb){
    return  (
      <Navbar>
        <label onClick={isVerb?display_popup:hide_popup} style= {isVerb?{width: "20%", textAlign: "left", color: "purple", textDecorationLine: "underline"}:{width: "20%", textAlign: "left"}}>{BaseLanguageWord.infinitive} </label>
        <label style= {{width: "5%"}}></label>
        <label style= {{width: "20%", textAlign: "left"}}>{isVerb? ForeignLanguageWord.infinitive: ForeignLanguageWord} </label>
        <label style= {{width: "20%", textAlign: "left"}}><audio src={ForeignLanguageWordAudio} controls controlsList="nodownloads" autoPlay ={false}></audio> </label>
        <Modal show ={show_popup} onHide={hide_popup}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {ForeignLanguageWord.infinitive}
            </Modal.Title>
          </Modal.Header>
        <Modal.Body>
        <h5>Present Tense</h5>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.englishWordConjugation.present_tense[0]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.foreignWordConjugation.present_tense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You {BaseLanguageWord.englishWordConjugation.present_tense[1]}</td>
            <td style={{ width: 130 }} >Tu {ForeignLanguageWord.foreignWordConjugation.present_tense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >He/She {BaseLanguageWord.englishWordConjugation.present_tense[2]}</td>
            <td style={{ width: 130 }} >El/Ella {ForeignLanguageWord.foreignWordConjugation.present_tense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >We {BaseLanguageWord.englishWordConjugation.present_tense[3]}</td>
            <td style={{ width: 130 }} >Nosotros {ForeignLanguageWord.foreignWordConjugation.present_tense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You (p) {BaseLanguageWord.englishWordConjugation.present_tense[4]}</td>
            <td style={{ width: 130 }} >Vosotros {ForeignLanguageWord.foreignWordConjugation.present_tense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >They {BaseLanguageWord.englishWordConjugation.present_tense[5]}</td>
            <td style={{ width: 130 }} >Ellos/Ellas {ForeignLanguageWord.foreignWordConjugation.present_tense[5]}</td>
          </tr>
          <h5>Past Preterite Tense</h5>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.englishWordConjugation.past_tense[0]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.foreignWordConjugation.past_tense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You {BaseLanguageWord.englishWordConjugation.past_tense[1]}</td>
            <td style={{ width: 130 }} >Tu {ForeignLanguageWord.foreignWordConjugation.past_tense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >He/She {BaseLanguageWord.englishWordConjugation.past_tense[2]}</td>
            <td style={{ width: 130 }} >El/Ella {ForeignLanguageWord.foreignWordConjugation.past_tense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >We {BaseLanguageWord.englishWordConjugation.past_tense[3]}</td>
            <td style={{ width: 130 }} >Nosotros {ForeignLanguageWord.foreignWordConjugation.past_tense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You (p) {BaseLanguageWord.englishWordConjugation.past_tense[4]}</td>
            <td style={{ width: 130 }} >Vosotros {ForeignLanguageWord.foreignWordConjugation.past_tense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >They {BaseLanguageWord.englishWordConjugation.past_tense[5]}</td>
            <td style={{ width: 130 }} >Ellos/Ellas {ForeignLanguageWord.foreignWordConjugation.past_tense[5]}</td>
          </tr>
          <h5>Future Tense</h5>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.englishWordConjugation.future_tense[0]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.foreignWordConjugation.future_tense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You {BaseLanguageWord.englishWordConjugation.future_tense[1]}</td>
            <td style={{ width: 130 }} >Tu {ForeignLanguageWord.foreignWordConjugation.future_tense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >He/She {BaseLanguageWord.englishWordConjugation.future_tense[2]}</td>
            <td style={{ width: 130 }} >El/Ella {ForeignLanguageWord.foreignWordConjugation.future_tense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >We {BaseLanguageWord.englishWordConjugation.future_tense[3]}</td>
            <td style={{ width: 130 }} >Nosotros {ForeignLanguageWord.foreignWordConjugation.future_tense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You (p) {BaseLanguageWord.englishWordConjugation.future_tense[4]}</td>
            <td style={{ width: 130 }} >Vosotros {ForeignLanguageWord.foreignWordConjugation.future_tense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >They {BaseLanguageWord.englishWordConjugation.future_tense[5]}</td>
            <td style={{ width: 130 }} >Ellos/Ellas  {ForeignLanguageWord.foreignWordConjugation.future_tense[5]}</td>
          </tr>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={hide_popup}>Close</Button>
          </Modal.Footer>
        </Modal>  
      </Navbar>

    )
  }

  else if(showAudio && !showBaseLanguageFirst && !isVerb){
    return (
      <Navbar>
        <label style= {{width: "20%", textAlign: "left"}}>{BaseLanguageWord} </label>
        <label style= {{width: "20%", textAlign: "left"}}>{ForeignLanguageWord} </label>
        <label style= {{width: "20%", textAlign: "left"}}><audio src={ForeignLanguageWordAudio} controls controlsList="nodownloads" autoPlay ={false}></audio> </label>
      </Navbar>
    )
  }

  else if(!showAudio && showBaseLanguageFirst && isVerb){
    return  (
      <Navbar>
        <label style= {{width: "20%", textAlign: "left"}}>{isVerb? BaseLanguageWord.infinitive: BaseLanguageWord} </label>
        <label style= {{width: "5%"}}></label>
        <label onClick={isVerb?display_popup:hide_popup} style= {isVerb?{width: "20%", textAlign: "left", color: "purple", textDecorationLine: "underline"}:{width: "20%", textAlign: "left"}}>{ForeignLanguageWord.infinitive} </label>
        <Modal show ={show_popup} onHide={hide_popup}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {ForeignLanguageWord.infinitive}
            </Modal.Title>
          </Modal.Header>
        <Modal.Body>
        <h5>Present Tense</h5>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.englishWordConjugation.present_tense[0]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.foreignWordConjugation.present_tense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You {BaseLanguageWord.englishWordConjugation.present_tense[1]}</td>
            <td style={{ width: 130 }} >Tu {ForeignLanguageWord.foreignWordConjugation.present_tense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >He/She {BaseLanguageWord.englishWordConjugation.present_tense[2]}</td>
            <td style={{ width: 130 }} >El/Ella {ForeignLanguageWord.foreignWordConjugation.present_tense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >We {BaseLanguageWord.englishWordConjugation.present_tense[3]}</td>
            <td style={{ width: 130 }} >Nosotros {ForeignLanguageWord.foreignWordConjugation.present_tense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You (p) {BaseLanguageWord.englishWordConjugation.present_tense[4]}</td>
            <td style={{ width: 130 }} >Vosotros {ForeignLanguageWord.foreignWordConjugation.present_tense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >They {BaseLanguageWord.englishWordConjugation.present_tense[5]}</td>
            <td style={{ width: 130 }} >Ellos/Ellas {ForeignLanguageWord.foreignWordConjugation.present_tense[5]}</td>
          </tr>
          <h5>Past Preterite Tense</h5>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.englishWordConjugation.past_tense[0]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.foreignWordConjugation.past_tense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You {BaseLanguageWord.englishWordConjugation.past_tense[1]}</td>
            <td style={{ width: 130 }} >Tu {ForeignLanguageWord.foreignWordConjugation.past_tense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >He/She {BaseLanguageWord.englishWordConjugation.past_tense[2]}</td>
            <td style={{ width: 130 }} >El/Ella {ForeignLanguageWord.foreignWordConjugation.past_tense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >We {BaseLanguageWord.englishWordConjugation.past_tense[3]}</td>
            <td style={{ width: 130 }} >Nosotros {ForeignLanguageWord.foreignWordConjugation.past_tense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You (p) {BaseLanguageWord.englishWordConjugation.past_tense[4]}</td>
            <td style={{ width: 130 }} >Vosotros {ForeignLanguageWord.foreignWordConjugation.past_tense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >They {BaseLanguageWord.englishWordConjugation.past_tense[5]}</td>
            <td style={{ width: 130 }} >Ellos/Ellas {ForeignLanguageWord.foreignWordConjugation.past_tense[5]}</td>
          </tr>
          <h5>Future Tense</h5>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.englishWordConjugation.future_tense[0]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.foreignWordConjugation.future_tense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You {BaseLanguageWord.englishWordConjugation.future_tense[1]}</td>
            <td style={{ width: 130 }} >Tu {ForeignLanguageWord.foreignWordConjugation.future_tense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >He/She {BaseLanguageWord.englishWordConjugation.future_tense[2]}</td>
            <td style={{ width: 130 }} >El/Ella {ForeignLanguageWord.foreignWordConjugation.future_tense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >We {BaseLanguageWord.englishWordConjugation.future_tense[3]}</td>
            <td style={{ width: 130 }} >Nosotros {ForeignLanguageWord.foreignWordConjugation.future_tense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >You (p) {BaseLanguageWord.englishWordConjugation.future_tense[4]}</td>
            <td style={{ width: 130 }} >Vosotros {ForeignLanguageWord.foreignWordConjugation.future_tense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >They {BaseLanguageWord.englishWordConjugation.future_tense[5]}</td>
            <td style={{ width: 130 }} >Ellos/Ellas  {ForeignLanguageWord.foreignWordConjugation.future_tense[5]}</td>
          </tr>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={hide_popup}>Close</Button>
          </Modal.Footer>
        </Modal>  
      </Navbar>

    )
  }

  else if(!showAudio && showBaseLanguageFirst && !isVerb){
    return  (
      <Navbar>
        <label style= {{width: "20%", textAlign: "left"}}>{BaseLanguageWord} </label>
        <label style= {{width: "20%", textAlign: "left"}}>{ForeignLanguageWord} </label>
      </Navbar>
    )
  }

  else if(!showAudio && !showBaseLanguageFirst && isVerb){
    return  (
      <Navbar>
        <label onClick={isVerb?display_popup:hide_popup} style= {isVerb?{width: "20%", textAlign: "left", color: "purple", textDecorationLine: "underline"}:{width: "20%", textAlign: "left"}}>{BaseLanguageWord.infinitive} </label>
        <label style= {{width: "5%"}}></label>
        <label style= {{width: "20%", textAlign: "left"}}>{isVerb? ForeignLanguageWord.infinitive: ForeignLanguageWord} </label>
        <Modal show ={show_popup} onHide={hide_popup}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {ForeignLanguageWord.infinitive}
            </Modal.Title>
          </Modal.Header>
        <Modal.Body>
          <h5>Present Tense</h5>
          <tr>
            <td style={{ width: 130 }}>I {BaseLanguageWord.foreignWordConjugation.present_tense[0]}</td>
            <td style={{ width: 130 }}> Yo {ForeignLanguageWord.englishWordConjugation.present_tense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.foreignWordConjugation.present_tense[1]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.englishWordConjugation.present_tense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.foreignWordConjugation.present_tense[2]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.englishWordConjugation.present_tense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.foreignWordConjugation.present_tense[3]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.englishWordConjugation.present_tense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.foreignWordConjugation.present_tense[4]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.englishWordConjugation.present_tense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.foreignWordConjugation.present_tense[5]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.englishWordConjugation.present_tense[5]}</td>
          </tr>
          <h5>Past Preterite Tense</h5>
          <tr>
            <td style={{ width: 130 }}>I {BaseLanguageWord.foreignWordConjugation.past_tense[0]}</td>
            <td style={{ width: 130 }}> Yo {ForeignLanguageWord.englishWordConjugation.past_tense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.foreignWordConjugation.past_tense[1]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.englishWordConjugation.past_tense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.foreignWordConjugation.past_tense[2]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.englishWordConjugation.past_tense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.foreignWordConjugation.past_tense[3]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.englishWordConjugation.past_tense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.foreignWordConjugation.past_tense[4]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.englishWordConjugation.past_tense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.foreignWordConjugation.past_tense[5]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.englishWordConjugation.past_tense[5]}</td>
          </tr>
          <h5>Future Tense</h5>
          <tr>
            <td style={{ width: 130 }}>I {BaseLanguageWord.foreignWordConjugation.future_tense[0]}</td>
            <td style={{ width: 130 }}> Yo {ForeignLanguageWord.englishWordConjugation.future_tense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.foreignWordConjugation.future_tense[1]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.englishWordConjugation.future_tense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.foreignWordConjugation.future_tense[2]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.englishWordConjugation.future_tense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.foreignWordConjugation.future_tense[3]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.englishWordConjugation.future_tense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.foreignWordConjugation.future_tense[4]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.englishWordConjugation.future_tense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 130 }} >I {BaseLanguageWord.foreignWordConjugation.future_tense[5]}</td>
            <td style={{ width: 130 }} >Yo {ForeignLanguageWord.englishWordConjugation.future_tense[5]}</td>
          </tr>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={hide_popup}>Close</Button>
          </Modal.Footer>
        </Modal>  
      </Navbar>

    )
  }

  else { // (!showAudio && !showBaseLanguageFirst && !isVerb)
    return (
      <Navbar>
        <label style= {{width: "20%", textAlign: "left"}}>{BaseLanguageWord} </label>
        <label style= {{width: "20%", textAlign: "left"}}>{ForeignLanguageWord} </label>
      </Navbar>
    )
  }

}
 
export default StudyElement;