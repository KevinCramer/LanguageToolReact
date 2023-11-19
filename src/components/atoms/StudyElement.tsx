import { useState } from "react"
import {Navbar, Modal} from "react-bootstrap"
import { englishPronouns } from "../../data/words"

const StudyElement = (props: {BaseLanguageWord: any, ForeignLanguageWord: any, ForeignLanguageWordAudio: string, showAudio: boolean, showBaseLanguageFirst: boolean, isVerb: boolean, pronouns: string[]}) => 
{
  const BaseLanguageWord = props.BaseLanguageWord
  const ForeignLanguageWord = props.ForeignLanguageWord
  const ForeignLanguageWordAudio = props.ForeignLanguageWordAudio
  const showAudio = props.showAudio
  const showBaseLanguageFirst= props.showBaseLanguageFirst
  const isVerb = props.isVerb
  const pronouns = props.pronouns;
  const tableRowWidth = 200

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
            <td style={{ width: tableRowWidth }} >{englishPronouns[0]} {BaseLanguageWord.englishWordConjugation.presentTense[0]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[0]}{ForeignLanguageWord.foreignWordConjugation.presentTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[1]} {BaseLanguageWord.englishWordConjugation.presentTense[1]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[1]} {ForeignLanguageWord.foreignWordConjugation.presentTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[2]} {BaseLanguageWord.englishWordConjugation.presentTense[2]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[2]} {ForeignLanguageWord.foreignWordConjugation.presentTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[3]} {BaseLanguageWord.englishWordConjugation.presentTense[3]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[3]} {ForeignLanguageWord.foreignWordConjugation.presentTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[4]} {BaseLanguageWord.englishWordConjugation.presentTense[4]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[4]} {ForeignLanguageWord.foreignWordConjugation.presentTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[5]} {BaseLanguageWord.englishWordConjugation.presentTense[5]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[5]} {ForeignLanguageWord.foreignWordConjugation.presentTense[5]}</td>
          </tr>
          <h5>Past Preterite Tense</h5>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[0]} {BaseLanguageWord.englishWordConjugation.pastTense[0]}</td>
            <td style={{ width: tableRowWidth }}>{pronouns[0]} {ForeignLanguageWord.foreignWordConjugation.pastTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[1]} {BaseLanguageWord.englishWordConjugation.pastTense[1]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[1]} {ForeignLanguageWord.foreignWordConjugation.pastTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[2]} {BaseLanguageWord.englishWordConjugation.pastTense[2]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[2]} {ForeignLanguageWord.foreignWordConjugation.pastTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[3]} {BaseLanguageWord.englishWordConjugation.pastTense[3]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[3]} {ForeignLanguageWord.foreignWordConjugation.pastTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[4]} {BaseLanguageWord.englishWordConjugation.pastTense[4]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[4]} {ForeignLanguageWord.foreignWordConjugation.pastTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[5]} {BaseLanguageWord.englishWordConjugation.pastTense[5]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[5]} {ForeignLanguageWord.foreignWordConjugation.pastTense[5]}</td>
          </tr>
          <h5>Future Tense</h5>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[0]} {BaseLanguageWord.englishWordConjugation.futureTense[0]}</td>
            <td style={{ width: tableRowWidth }}>{pronouns[0]} {ForeignLanguageWord.foreignWordConjugation.futureTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[1]} {BaseLanguageWord.englishWordConjugation.futureTense[1]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[1]} {ForeignLanguageWord.foreignWordConjugation.futureTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[2]} {BaseLanguageWord.englishWordConjugation.futureTense[2]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[2]} {ForeignLanguageWord.foreignWordConjugation.futureTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[3]} {BaseLanguageWord.englishWordConjugation.futureTense[3]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[3]} {ForeignLanguageWord.foreignWordConjugation.futureTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[4]} {BaseLanguageWord.englishWordConjugation.futureTense[4]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[4]} {ForeignLanguageWord.foreignWordConjugation.futureTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[5]} {BaseLanguageWord.englishWordConjugation.futureTense[5]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[5]} {ForeignLanguageWord.foreignWordConjugation.futureTense[5]}</td>
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
            <td style={{ width: tableRowWidth }} >{englishPronouns[0]} {BaseLanguageWord.foreignWordConjugation.presentTense[0]}</td>
            <td style={{ width: tableRowWidth }}>{pronouns[0]} {ForeignLanguageWord.englishWordConjugation.presentTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[1]} {BaseLanguageWord.foreignWordConjugation.presentTense[1]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[1]} {ForeignLanguageWord.englishWordConjugation.presentTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[2]} {BaseLanguageWord.foreignWordConjugation.presentTense[2]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[2]} {ForeignLanguageWord.englishWordConjugation.presentTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[3]} {BaseLanguageWord.foreignWordConjugation.presentTense[3]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[3]} {ForeignLanguageWord.englishWordConjugation.presentTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[4]} {BaseLanguageWord.foreignWordConjugation.presentTense[4]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[4]} {ForeignLanguageWord.englishWordConjugation.presentTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[5]} {BaseLanguageWord.foreignWordConjugation.presentTense[5]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[5]} {ForeignLanguageWord.englishWordConjugation.presentTense[5]}</td>
          </tr>
          <h5>Past Preterite Tense</h5>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[0]} {BaseLanguageWord.foreignWordConjugation.pastTense[0]}</td>
            <td style={{ width: tableRowWidth }}>{pronouns[0]} {ForeignLanguageWord.englishWordConjugation.pastTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[1]} {BaseLanguageWord.foreignWordConjugation.pastTense[1]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[1]} {ForeignLanguageWord.englishWordConjugation.pastTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[2]} {BaseLanguageWord.foreignWordConjugation.pastTense[2]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[2]} {ForeignLanguageWord.englishWordConjugation.pastTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[3]} {BaseLanguageWord.foreignWordConjugation.pastTense[3]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[3]} {ForeignLanguageWord.englishWordConjugation.pastTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[4]} {BaseLanguageWord.foreignWordConjugation.pastTense[4]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[4]} {ForeignLanguageWord.englishWordConjugation.pastTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[5]} {BaseLanguageWord.foreignWordConjugation.pastTense[5]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[5]} {ForeignLanguageWord.englishWordConjugation.pastTense[5]}</td>
          </tr>
          <h5>Future Tense</h5>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[0]} {BaseLanguageWord.foreignWordConjugation.futureTense[0]}</td>
            <td style={{ width: tableRowWidth }}>{pronouns[0]} {ForeignLanguageWord.englishWordConjugation.futureTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[1]} {BaseLanguageWord.foreignWordConjugation.futureTense[1]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[1]} {ForeignLanguageWord.englishWordConjugation.futureTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[2]} {BaseLanguageWord.foreignWordConjugation.futureTense[2]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[2]} {ForeignLanguageWord.englishWordConjugation.futureTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[3]} {BaseLanguageWord.foreignWordConjugation.futureTense[3]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[3]} {ForeignLanguageWord.englishWordConjugation.futureTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[4]} {BaseLanguageWord.englishWordConjugation.futureTense[4]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[4]} {ForeignLanguageWord.englishWordConjugation.futureTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[5]} {BaseLanguageWord.englishWordConjugation.futureTense[5]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[5]} {ForeignLanguageWord.englishWordConjugation.futureTense[5]}</td>
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
            <td style={{ width: tableRowWidth }} >{englishPronouns[0]} {BaseLanguageWord.englishWordConjugation.presentTense[0]}</td>
            <td style={{ width: tableRowWidth }}>{pronouns[0]} {ForeignLanguageWord.foreignWordConjugation.presentTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[1]} {BaseLanguageWord.englishWordConjugation.presentTense[1]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[1]} {ForeignLanguageWord.foreignWordConjugation.presentTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[2]} {BaseLanguageWord.englishWordConjugation.presentTense[2]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[2]} {ForeignLanguageWord.foreignWordConjugation.presentTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[3]} {BaseLanguageWord.englishWordConjugation.presentTense[3]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[3]} {ForeignLanguageWord.foreignWordConjugation.presentTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[4]} {BaseLanguageWord.englishWordConjugation.presentTense[4]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[4]} {ForeignLanguageWord.foreignWordConjugation.presentTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[5]} {BaseLanguageWord.englishWordConjugation.presentTense[5]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[5]} {ForeignLanguageWord.foreignWordConjugation.presentTense[5]}</td>
          </tr>
          <h5>Past Preterite Tense</h5>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[0]} {BaseLanguageWord.englishWordConjugation.pastTense[0]}</td>
            <td style={{ width: tableRowWidth }}>{pronouns[0]} {ForeignLanguageWord.foreignWordConjugation.pastTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[1]} {BaseLanguageWord.englishWordConjugation.pastTense[1]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[1]} {ForeignLanguageWord.foreignWordConjugation.pastTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[2]} {BaseLanguageWord.englishWordConjugation.pastTense[2]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[2]} {ForeignLanguageWord.foreignWordConjugation.pastTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[3]} {BaseLanguageWord.englishWordConjugation.pastTense[3]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[3]} {ForeignLanguageWord.foreignWordConjugation.pastTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[4]} {BaseLanguageWord.englishWordConjugation.pastTense[4]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[4]} {ForeignLanguageWord.foreignWordConjugation.pastTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[5]} {BaseLanguageWord.englishWordConjugation.pastTense[5]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[5]} {ForeignLanguageWord.foreignWordConjugation.pastTense[5]}</td>
          </tr>
          <h5>Future Tense</h5>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[0]} {BaseLanguageWord.englishWordConjugation.futureTense[0]}</td>
            <td style={{ width: tableRowWidth }}>{pronouns[0]} {ForeignLanguageWord.foreignWordConjugation.futureTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[1]} {BaseLanguageWord.englishWordConjugation.futureTense[1]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[1]} {ForeignLanguageWord.foreignWordConjugation.futureTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[2]} {BaseLanguageWord.englishWordConjugation.futureTense[2]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[2]} {ForeignLanguageWord.foreignWordConjugation.futureTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[3]} {BaseLanguageWord.englishWordConjugation.futureTense[3]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[3]} {ForeignLanguageWord.foreignWordConjugation.futureTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[4]} {BaseLanguageWord.englishWordConjugation.futureTense[4]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[4]} {ForeignLanguageWord.foreignWordConjugation.futureTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[5]} {BaseLanguageWord.englishWordConjugation.futureTense[5]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[5]} {ForeignLanguageWord.foreignWordConjugation.futureTense[5]}</td>
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
            <td style={{ width: tableRowWidth }} >{englishPronouns[0]} {BaseLanguageWord.foreignWordConjugation.presentTense[0]}</td>
            <td style={{ width: tableRowWidth }}>{pronouns[0]} {ForeignLanguageWord.englishWordConjugation.presentTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[1]} {BaseLanguageWord.foreignWordConjugation.presentTense[1]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[1]} {ForeignLanguageWord.englishWordConjugation.presentTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[2]} {BaseLanguageWord.foreignWordConjugation.presentTense[2]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[2]} {ForeignLanguageWord.englishWordConjugation.presentTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[3]} {BaseLanguageWord.foreignWordConjugation.presentTense[3]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[3]} {ForeignLanguageWord.englishWordConjugation.presentTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[4]} {BaseLanguageWord.foreignWordConjugation.presentTense[4]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[4]} {ForeignLanguageWord.englishWordConjugation.presentTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[5]} {BaseLanguageWord.foreignWordConjugation.presentTense[5]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[5]} {ForeignLanguageWord.englishWordConjugation.presentTense[5]}</td>
          </tr>
          <h5>Past Preterite Tense</h5>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[0]} {BaseLanguageWord.foreignWordConjugation.pastTense[0]}</td>
            <td style={{ width: tableRowWidth }}>{pronouns[0]} {ForeignLanguageWord.englishWordConjugation.pastTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[1]} {BaseLanguageWord.foreignWordConjugation.pastTense[1]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[1]} {ForeignLanguageWord.englishWordConjugation.pastTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[2]} {BaseLanguageWord.foreignWordConjugation.pastTense[2]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[2]} {ForeignLanguageWord.englishWordConjugation.pastTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[3]} {BaseLanguageWord.foreignWordConjugation.pastTense[3]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[3]} {ForeignLanguageWord.englishWordConjugation.pastTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[4]} {BaseLanguageWord.foreignWordConjugation.pastTense[4]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[4]} {ForeignLanguageWord.englishWordConjugation.pastTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[5]} {BaseLanguageWord.foreignWordConjugation.pastTense[5]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[5]} {ForeignLanguageWord.englishWordConjugation.pastTense[5]}</td>
          </tr>
          <h5>Future Tense</h5>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[0]} {BaseLanguageWord.foreignWordConjugation.futureTense[0]}</td>
            <td style={{ width: tableRowWidth }}>{pronouns[0]} {ForeignLanguageWord.englishWordConjugation.futureTense[0]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[1]} {BaseLanguageWord.foreignWordConjugation.futureTense[1]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[1]} {ForeignLanguageWord.englishWordConjugation.futureTense[1]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[2]} {BaseLanguageWord.foreignWordConjugation.futureTense[2]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[2]} {ForeignLanguageWord.englishWordConjugation.futureTense[2]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[3]} {BaseLanguageWord.foreignWordConjugation.futureTense[3]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[3]} {ForeignLanguageWord.englishWordConjugation.futureTense[3]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[4]} {BaseLanguageWord.englishWordConjugation.futureTense[4]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[4]} {ForeignLanguageWord.englishWordConjugation.futureTense[4]}</td>
          </tr>
          <tr>
            <td style={{ width: tableRowWidth }} >{englishPronouns[5]} {BaseLanguageWord.englishWordConjugation.futureTense[5]}</td>
            <td style={{ width: tableRowWidth }} >{pronouns[5]} {ForeignLanguageWord.englishWordConjugation.futureTense[5]}</td>
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