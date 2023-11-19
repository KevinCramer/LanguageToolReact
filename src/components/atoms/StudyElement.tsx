import { useState } from "react"
import {Navbar, Modal} from "react-bootstrap"

const StudyElement = (props: any) => 
{
  const BaseLanguageWord = props.BaseLanguageWord
  const ForeignLanguageWord = props.ForeignLanguageWord
  const ForeignLanguageWordAudio = props.ForeignLanguageWordAudio
  const showAudio = props.showAudio
  const showBaseLanguageFirst= props.showBaseLanguageFirst
  const isVerb = props.isVerb

  var showPopUp = false;
  var [showPopUp,setShowPopUp] = useState(showPopUp)
  const hidePopUp = () => { return setShowPopUp(false)}
  const displayPopUp = () => { return setShowPopUp(true)}
  if(showAudio && showBaseLanguageFirst && isVerb){
    return  (
      <Navbar>
        <label style= {{width: "20%", textAlign: "left"}}>{isVerb? BaseLanguageWord.infinitive: BaseLanguageWord} </label>
        <label style= {{width: "5%"}}></label>
        <label onClick={isVerb?displayPopUp:hidePopUp} style= {isVerb?{width: "20%", textAlign: "left", color: "purple", textDecorationLine: "underline"}:{width: "20%", textAlign: "left"}}>{ForeignLanguageWord.infinitive} </label>
        <label style= {{width: "20%", textAlign: "left"}}><audio src={ForeignLanguageWordAudio} controls controlsList="nodownloads" autoPlay ={false}></audio> </label>
        <Modal show ={showPopUp} onHide={hidePopUp}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {ForeignLanguageWord.infinitive}
            </Modal.Title>
          </Modal.Header>
        <Modal.Body>
          <h5>Present Tense</h5>
          <tr>
            <td style={{ width: 200 }} >I {BaseLanguageWord.englishWordConjugation.presentTense[0]}</td>
            <td style={{ width: 200 }} >Yo {ForeignLanguageWord.foreignWordConjugation.presentTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You {BaseLanguageWord.englishWordConjugation.presentTense[1]}</td>
            <td style={{ width: 200 }} >Tu {ForeignLanguageWord.foreignWordConjugation.presentTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >He/She {BaseLanguageWord.englishWordConjugation.presentTense[2]}</td>
            <td style={{ width: 200 }} >El/Ella {ForeignLanguageWord.foreignWordConjugation.presentTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >We {BaseLanguageWord.englishWordConjugation.presentTense[3]}</td>
            <td style={{ width: 200 }} >Nosotros {ForeignLanguageWord.foreignWordConjugation.presentTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You (p) {BaseLanguageWord.englishWordConjugation.presentTense[4]}</td>
            <td style={{ width: 200 }} >Vosotros {ForeignLanguageWord.foreignWordConjugation.presentTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >They {BaseLanguageWord.englishWordConjugation.presentTense[5]}</td>
            <td style={{ width: 200 }} >Ellos/Ellas {ForeignLanguageWord.foreignWordConjugation.presentTense[5]}</td>
          </tr>
          <h5>Past Preterite Tense</h5>
          <tr>
            <td style={{ width: 200 }} >I {BaseLanguageWord.englishWordConjugation.pastTense[0]}</td>
            <td style={{ width: 200 }} >Yo {ForeignLanguageWord.foreignWordConjugation.pastTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You {BaseLanguageWord.englishWordConjugation.pastTense[1]}</td>
            <td style={{ width: 200 }} >Tu {ForeignLanguageWord.foreignWordConjugation.pastTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >He/She {BaseLanguageWord.englishWordConjugation.pastTense[2]}</td>
            <td style={{ width: 200 }} >El/Ella {ForeignLanguageWord.foreignWordConjugation.pastTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >We {BaseLanguageWord.englishWordConjugation.pastTense[3]}</td>
            <td style={{ width: 200 }} >Nosotros {ForeignLanguageWord.foreignWordConjugation.pastTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You (p) {BaseLanguageWord.englishWordConjugation.pastTense[4]}</td>
            <td style={{ width: 200 }} >Vosotros {ForeignLanguageWord.foreignWordConjugation.pastTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >They {BaseLanguageWord.englishWordConjugation.pastTense[5]}</td>
            <td style={{ width: 200 }} >Ellos/Ellas {ForeignLanguageWord.foreignWordConjugation.pastTense[5]}</td>
          </tr>
          <h5>Future Tense</h5>
          <tr>
            <td style={{ width: 200 }} >I {BaseLanguageWord.englishWordConjugation.futureTense[0]}</td>
            <td style={{ width: 200 }} >Yo {ForeignLanguageWord.foreignWordConjugation.futureTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You {BaseLanguageWord.englishWordConjugation.futureTense[1]}</td>
            <td style={{ width: 200 }} >Tu {ForeignLanguageWord.foreignWordConjugation.futureTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >He/She {BaseLanguageWord.englishWordConjugation.futureTense[2]}</td>
            <td style={{ width: 200 }} >El/Ella {ForeignLanguageWord.foreignWordConjugation.futureTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >We {BaseLanguageWord.englishWordConjugation.futureTense[3]}</td>
            <td style={{ width: 200 }} >Nosotros {ForeignLanguageWord.foreignWordConjugation.futureTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You (p) {BaseLanguageWord.englishWordConjugation.futureTense[4]}</td>
            <td style={{ width: 200 }} >Vosotros {ForeignLanguageWord.foreignWordConjugation.futureTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >They {BaseLanguageWord.englishWordConjugation.futureTense[5]}</td>
            <td style={{ width: 200 }} >Ellos/Ellas  {ForeignLanguageWord.foreignWordConjugation.futureTense[5]}</td>
          </tr>
          </Modal.Body>
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
        <label onClick={isVerb?displayPopUp:hidePopUp} style= {isVerb?{width: "20%", textAlign: "left", color: "purple", textDecorationLine: "underline"}:{width: "20%", textAlign: "left"}}>{BaseLanguageWord.infinitive} </label>
        <label style= {{width: "5%"}}></label>
        <label style= {{width: "20%", textAlign: "left"}}>{isVerb? ForeignLanguageWord.infinitive: ForeignLanguageWord} </label>
        <label style= {{width: "20%", textAlign: "left"}}><audio src={ForeignLanguageWordAudio} controls controlsList="nodownloads" autoPlay ={false}></audio> </label>
        <Modal show ={showPopUp} onHide={hidePopUp}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {ForeignLanguageWord.infinitive}
            </Modal.Title>
          </Modal.Header>
        <Modal.Body>
        <h5>Present Tense</h5>
          <tr>
            <td style={{ width: 200 }} >I {BaseLanguageWord.foreignWordConjugation.presentTense[0]}</td>
            <td style={{ width: 200 }} >Yo {ForeignLanguageWord.englishWordConjugation.presentTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You {BaseLanguageWord.foreignWordConjugation.presentTense[1]}</td>
            <td style={{ width: 200 }} >Tu {ForeignLanguageWord.englishWordConjugation.presentTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >He/She {BaseLanguageWord.foreignWordConjugation.presentTense[2]}</td>
            <td style={{ width: 200 }} >El/Ella {ForeignLanguageWord.englishWordConjugation.presentTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >We {BaseLanguageWord.foreignWordConjugation.presentTense[3]}</td>
            <td style={{ width: 200 }} >Nosotros {ForeignLanguageWord.englishWordConjugation.presentTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You (p) {BaseLanguageWord.foreignWordConjugation.presentTense[4]}</td>
            <td style={{ width: 200 }} >Vosotros {ForeignLanguageWord.englishWordConjugation.presentTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >They {BaseLanguageWord.foreignWordConjugation.presentTense[5]}</td>
            <td style={{ width: 200 }} >Ellos/Ellas {ForeignLanguageWord.englishWordConjugation.presentTense[5]}</td>
          </tr>
          <h5>Past Preterite Tense</h5>
          <tr>
            <td style={{ width: 200 }} >I {BaseLanguageWord.foreignWordConjugation.pastTense[0]}</td>
            <td style={{ width: 200 }} >Yo {ForeignLanguageWord.englishWordConjugation.pastTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You {BaseLanguageWord.foreignWordConjugation.pastTense[1]}</td>
            <td style={{ width: 200 }} >Tu {ForeignLanguageWord.englishWordConjugation.pastTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >He/She {BaseLanguageWord.foreignWordConjugation.pastTense[2]}</td>
            <td style={{ width: 200 }} >El/Ella {ForeignLanguageWord.englishWordConjugation.pastTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >We {BaseLanguageWord.foreignWordConjugation.pastTense[3]}</td>
            <td style={{ width: 200 }} >Nosotros {ForeignLanguageWord.englishWordConjugation.pastTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You (p) {BaseLanguageWord.foreignWordConjugation.pastTense[4]}</td>
            <td style={{ width: 200 }} >Vosotros {ForeignLanguageWord.englishWordConjugation.pastTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >They {BaseLanguageWord.foreignWordConjugation.pastTense[5]}</td>
            <td style={{ width: 200 }} >Ellos/Ellas {ForeignLanguageWord.englishWordConjugation.pastTense[5]}</td>
          </tr>
          <h5>Future Tense</h5>
          <tr>
            <td style={{ width: 200 }} >I {BaseLanguageWord.foreignWordConjugation.futureTense[0]}</td>
            <td style={{ width: 200 }} >Yo {ForeignLanguageWord.englishWordConjugation.futureTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You {BaseLanguageWord.foreignWordConjugation.futureTense[1]}</td>
            <td style={{ width: 200 }} >Tu {ForeignLanguageWord.englishWordConjugation.futureTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >He/She {BaseLanguageWord.foreignWordConjugation.futureTense[2]}</td>
            <td style={{ width: 200 }} >El/Ella {ForeignLanguageWord.englishWordConjugation.futureTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >We {BaseLanguageWord.foreignWordConjugation.futureTense[3]}</td>
            <td style={{ width: 200 }} >Nosotros {ForeignLanguageWord.englishWordConjugation.futureTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You (p) {BaseLanguageWord.englishWordConjugation.futureTense[4]}</td>
            <td style={{ width: 200 }} >Vosotros {ForeignLanguageWord.englishWordConjugation.futureTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >They {BaseLanguageWord.englishWordConjugation.futureTense[5]}</td>
            <td style={{ width: 200 }} >Ellos/Ellas  {ForeignLanguageWord.englishWordConjugation.futureTense[5]}</td>
          </tr>
          </Modal.Body> 
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
        <label onClick={isVerb?displayPopUp:hidePopUp} style= {isVerb?{width: "20%", textAlign: "left", color: "purple", textDecorationLine: "underline"}:{width: "20%", textAlign: "left"}}>{ForeignLanguageWord.infinitive} </label>
        <Modal show ={showPopUp} onHide={hidePopUp}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {ForeignLanguageWord.infinitive}
            </Modal.Title>
          </Modal.Header>
        <Modal.Body>
        <h5>Present Tense</h5>
          <tr>
            <td style={{ width: 200 }} >I {BaseLanguageWord.englishWordConjugation.presentTense[0]}</td>
            <td style={{ width: 200 }} >Yo {ForeignLanguageWord.foreignWordConjugation.presentTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You {BaseLanguageWord.englishWordConjugation.presentTense[1]}</td>
            <td style={{ width: 200 }} >Tu {ForeignLanguageWord.foreignWordConjugation.presentTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >He/She {BaseLanguageWord.englishWordConjugation.presentTense[2]}</td>
            <td style={{ width: 200 }} >El/Ella {ForeignLanguageWord.foreignWordConjugation.presentTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >We {BaseLanguageWord.englishWordConjugation.presentTense[3]}</td>
            <td style={{ width: 200 }} >Nosotros {ForeignLanguageWord.foreignWordConjugation.presentTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You (p) {BaseLanguageWord.englishWordConjugation.presentTense[4]}</td>
            <td style={{ width: 200 }} >Vosotros {ForeignLanguageWord.foreignWordConjugation.presentTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >They {BaseLanguageWord.englishWordConjugation.presentTense[5]}</td>
            <td style={{ width: 200 }} >Ellos/Ellas {ForeignLanguageWord.foreignWordConjugation.presentTense[5]}</td>
          </tr>
          <h5>Past Preterite Tense</h5>
          <tr>
            <td style={{ width: 200 }} >I {BaseLanguageWord.englishWordConjugation.pastTense[0]}</td>
            <td style={{ width: 200 }} >Yo {ForeignLanguageWord.foreignWordConjugation.pastTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You {BaseLanguageWord.englishWordConjugation.pastTense[1]}</td>
            <td style={{ width: 200 }} >Tu {ForeignLanguageWord.foreignWordConjugation.pastTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >He/She {BaseLanguageWord.englishWordConjugation.pastTense[2]}</td>
            <td style={{ width: 200 }} >El/Ella {ForeignLanguageWord.foreignWordConjugation.pastTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >We {BaseLanguageWord.englishWordConjugation.pastTense[3]}</td>
            <td style={{ width: 200 }} >Nosotros {ForeignLanguageWord.foreignWordConjugation.pastTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You (p) {BaseLanguageWord.englishWordConjugation.pastTense[4]}</td>
            <td style={{ width: 200 }} >Vosotros {ForeignLanguageWord.foreignWordConjugation.pastTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >They {BaseLanguageWord.englishWordConjugation.pastTense[5]}</td>
            <td style={{ width: 200 }} >Ellos/Ellas {ForeignLanguageWord.foreignWordConjugation.pastTense[5]}</td>
          </tr>
          <h5>Future Tense</h5>
          <tr>
            <td style={{ width: 200 }} >I {BaseLanguageWord.englishWordConjugation.futureTense[0]}</td>
            <td style={{ width: 200 }} >Yo {ForeignLanguageWord.foreignWordConjugation.futureTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You {BaseLanguageWord.englishWordConjugation.futureTense[1]}</td>
            <td style={{ width: 200 }} >Tu {ForeignLanguageWord.foreignWordConjugation.futureTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >He/She {BaseLanguageWord.englishWordConjugation.futureTense[2]}</td>
            <td style={{ width: 200 }} >El/Ella {ForeignLanguageWord.foreignWordConjugation.futureTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >We {BaseLanguageWord.englishWordConjugation.futureTense[3]}</td>
            <td style={{ width: 200 }} >Nosotros {ForeignLanguageWord.foreignWordConjugation.futureTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You (p) {BaseLanguageWord.englishWordConjugation.futureTense[4]}</td>
            <td style={{ width: 200 }} >Vosotros {ForeignLanguageWord.foreignWordConjugation.futureTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >They {BaseLanguageWord.englishWordConjugation.futureTense[5]}</td>
            <td style={{ width: 200 }} >Ellos/Ellas  {ForeignLanguageWord.foreignWordConjugation.futureTense[5]}</td>
          </tr>
          </Modal.Body>
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
        <label onClick={isVerb?displayPopUp:hidePopUp} style= {isVerb?{width: "20%", textAlign: "left", color: "purple", textDecorationLine: "underline"}:{width: "20%", textAlign: "left"}}>{BaseLanguageWord.infinitive} </label>
        <label style= {{width: "5%"}}></label>
        <label style= {{width: "20%", textAlign: "left"}}>{isVerb? ForeignLanguageWord.infinitive: ForeignLanguageWord} </label>
        <Modal show ={showPopUp} onHide={hidePopUp}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {ForeignLanguageWord.infinitive}
            </Modal.Title>
          </Modal.Header>
        <Modal.Body>
        <h5>Present Tense</h5>
          <tr>
            <td style={{ width: 200 }} >I {BaseLanguageWord.foreignWordConjugation.presentTense[0]}</td>
            <td style={{ width: 200 }} >Yo {ForeignLanguageWord.englishWordConjugation.presentTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You {BaseLanguageWord.foreignWordConjugation.presentTense[1]}</td>
            <td style={{ width: 200 }} >Tu {ForeignLanguageWord.englishWordConjugation.presentTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >He/She {BaseLanguageWord.foreignWordConjugation.presentTense[2]}</td>
            <td style={{ width: 200 }} >El/Ella {ForeignLanguageWord.englishWordConjugation.presentTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >We {BaseLanguageWord.foreignWordConjugation.presentTense[3]}</td>
            <td style={{ width: 200 }} >Nosotros {ForeignLanguageWord.englishWordConjugation.presentTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You (p) {BaseLanguageWord.foreignWordConjugation.presentTense[4]}</td>
            <td style={{ width: 200 }} >Vosotros {ForeignLanguageWord.englishWordConjugation.presentTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >They {BaseLanguageWord.foreignWordConjugation.presentTense[5]}</td>
            <td style={{ width: 200 }} >Ellos/Ellas {ForeignLanguageWord.englishWordConjugation.presentTense[5]}</td>
          </tr>
          <h5>Past Preterite Tense</h5>
          <tr>
            <td style={{ width: 200 }} >I {BaseLanguageWord.foreignWordConjugation.pastTense[0]}</td>
            <td style={{ width: 200 }} >Yo {ForeignLanguageWord.englishWordConjugation.pastTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You {BaseLanguageWord.foreignWordConjugation.pastTense[1]}</td>
            <td style={{ width: 200 }} >Tu {ForeignLanguageWord.englishWordConjugation.pastTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >He/She {BaseLanguageWord.foreignWordConjugation.pastTense[2]}</td>
            <td style={{ width: 200 }} >El/Ella {ForeignLanguageWord.englishWordConjugation.pastTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >We {BaseLanguageWord.foreignWordConjugation.pastTense[3]}</td>
            <td style={{ width: 200 }} >Nosotros {ForeignLanguageWord.englishWordConjugation.pastTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You (p) {BaseLanguageWord.foreignWordConjugation.pastTense[4]}</td>
            <td style={{ width: 200 }} >Vosotros {ForeignLanguageWord.englishWordConjugation.pastTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >They {BaseLanguageWord.foreignWordConjugation.pastTense[5]}</td>
            <td style={{ width: 200 }} >Ellos/Ellas {ForeignLanguageWord.englishWordConjugation.pastTense[5]}</td>
          </tr>
          <h5>Future Tense</h5>
          <tr>
            <td style={{ width: 200 }} >I {BaseLanguageWord.foreignWordConjugation.futureTense[0]}</td>
            <td style={{ width: 200 }} >Yo {ForeignLanguageWord.englishWordConjugation.futureTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You {BaseLanguageWord.foreignWordConjugation.futureTense[1]}</td>
            <td style={{ width: 200 }} >Tu {ForeignLanguageWord.englishWordConjugation.futureTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >He/She {BaseLanguageWord.foreignWordConjugation.futureTense[2]}</td>
            <td style={{ width: 200 }} >El/Ella {ForeignLanguageWord.englishWordConjugation.futureTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >We {BaseLanguageWord.foreignWordConjugation.futureTense[3]}</td>
            <td style={{ width: 200 }} >Nosotros {ForeignLanguageWord.englishWordConjugation.futureTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >You (p) {BaseLanguageWord.englishWordConjugation.futureTense[4]}</td>
            <td style={{ width: 200 }} >Vosotros {ForeignLanguageWord.englishWordConjugation.futureTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: 200 }} >They {BaseLanguageWord.englishWordConjugation.futureTense[5]}</td>
            <td style={{ width: 200 }} >Ellos/Ellas  {ForeignLanguageWord.englishWordConjugation.futureTense[5]}</td>
          </tr>
          </Modal.Body>
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