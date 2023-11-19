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
    console.log('I am here!!')
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
          {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                <td style={{ width: tableRowWidth }}>{englishPronouns[i]} {BaseLanguageWord.englishWordConjugation.presentTense[i]}</td>
                <td style={{ width: tableRowWidth }}>{pronouns[i]} {ForeignLanguageWord.foreignWordConjugation.presentTense[i]}</td>
              </tr>
            ))
          }
          <h5>Past Preterite Tense</h5>
          {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                <td style={{ width: tableRowWidth }}>{englishPronouns[i]} {BaseLanguageWord.englishWordConjugation.pastTense[i]}</td>
                <td style={{ width: tableRowWidth }}>{pronouns[i]} {ForeignLanguageWord.foreignWordConjugation.pastTense[i]}</td>
              </tr>
            ))
          }
          <h5>Future Tense</h5>
          {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                <td style={{ width: tableRowWidth }}>{englishPronouns[i]} {BaseLanguageWord.englishWordConjugation.futureTense[i]}</td>
                <td style={{ width: tableRowWidth }}>{pronouns[i]} {ForeignLanguageWord.foreignWordConjugation.futureTense[i]}</td>
              </tr>
            ))
          }
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
        {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                <td style={{ width: tableRowWidth }}>{pronouns[i]} {BaseLanguageWord.foreignWordConjugation.presentTense[i]}</td>
                <td style={{ width: tableRowWidth }}>{englishPronouns[i]} {ForeignLanguageWord.englishWordConjugation.presentTense[i]}</td>
              </tr>
            ))
          }
          <h5>Past Preterite Tense</h5>
          {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                <td style={{ width: tableRowWidth }}>{pronouns[i]} {BaseLanguageWord.foreignWordConjugation.pastTense[i]}</td>
                <td style={{ width: tableRowWidth }}>{englishPronouns[i]} {ForeignLanguageWord.englishWordConjugation.pastTense[i]}</td>
              </tr>
            ))
          }
          <h5>Future Tense</h5>
          {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                <td style={{ width: tableRowWidth }}>{pronouns[i]} {BaseLanguageWord.foreignWordConjugation.futureTense[i]}</td>
                <td style={{ width: tableRowWidth }}>{englishPronouns[i]} {ForeignLanguageWord.englishWordConjugation.futureTense[i]}</td>
              </tr>
            ))
          }
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
        {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                <td style={{ width: tableRowWidth }}>{englishPronouns[i]} {BaseLanguageWord.englishWordConjugation.presentTense[i]}</td>
                <td style={{ width: tableRowWidth }}>{pronouns[i]} {ForeignLanguageWord.foreignWordConjugation.presentTense[i]}</td>
              </tr>
            ))
          }
          <h5>Past Preterite Tense</h5>
          {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                <td style={{ width: tableRowWidth }}>{englishPronouns[i]} {BaseLanguageWord.englishWordConjugation.pastTense[i]}</td>
                <td style={{ width: tableRowWidth }}>{pronouns[i]} {ForeignLanguageWord.foreignWordConjugation.pastTense[i]}</td>
              </tr>
            ))
          }
          <h5>Future Tense</h5>
          {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                <td style={{ width: tableRowWidth }}>{englishPronouns[i]} {BaseLanguageWord.englishWordConjugation.futureTense[i]}</td>
                <td style={{ width: tableRowWidth }}>{pronouns[i]} {ForeignLanguageWord.foreignWordConjugation.futureTense[i]}</td>
              </tr>
            ))
          }
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
        {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                <td style={{ width: tableRowWidth }}>{pronouns[i]} {BaseLanguageWord.foreignWordConjugation.presentTense[i]}</td>
                <td style={{ width: tableRowWidth }}>{englishPronouns[i]} {ForeignLanguageWord.englishWordConjugation.presentTense[i]}</td>
              </tr>
            ))
          }
          <h5>Past Preterite Tense</h5>
          {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                <td style={{ width: tableRowWidth }}>{pronouns[i]} {BaseLanguageWord.foreignWordConjugation.pastTense[i]}</td>
                <td style={{ width: tableRowWidth }}>{englishPronouns[i]} {ForeignLanguageWord.englishWordConjugation.pastTense[i]}</td>
              </tr>
            ))
          }
          <h5>Future Tense</h5>
          {Array.from({ length: 6 }).map((_, i) => (
              <tr key={i}>
                <td style={{ width: tableRowWidth }}>{pronouns[i]} {BaseLanguageWord.foreignWordConjugation.futureTense[i]}</td>
                <td style={{ width: tableRowWidth }}>{englishPronouns[i]} {ForeignLanguageWord.englishWordConjugation.futureTense[i]}</td>
              </tr>
            ))
          }
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