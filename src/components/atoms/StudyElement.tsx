import { useState } from "react"
import {Navbar, Modal} from "react-bootstrap"
import { modalTenses } from "../../constants"
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
  if(isVerb){
      const baseLanguageLabel = <label style= {{width: "20%", textAlign: "left"}}>{BaseLanguageWord.infinitive} </label>
      const foreignLanguageLabelVerb= <label onClick={displayPopUp} style= {{width: "20%", textAlign: "left", color: "purple", textDecorationLine: "underline"}}>{ForeignLanguageWord.infinitive} </label>
      const foreignLanguageLabelNoVerb  = showAudio ?<label style= {{width: "20%", textAlign: "left"}}><audio src={ForeignLanguageWordAudio} controls controlsList="nodownloads" autoPlay ={false}></audio> </label>: null
      const foreignLanguageLabel = isVerb ? foreignLanguageLabelVerb: foreignLanguageLabelNoVerb
      return  (
        <Navbar>
          {showBaseLanguageFirst? baseLanguageLabel: foreignLanguageLabel}
          {isVerb && <label style= {{width: "5%"}}></label>}
          {showBaseLanguageFirst? foreignLanguageLabel: baseLanguageLabel}
          {showAudio && <label style= {{width: "20%", textAlign: "left"}}><audio src={ForeignLanguageWordAudio} controls controlsList="nodownloads" autoPlay ={false}></audio> </label>}
          {isVerb && <Modal show ={showPopUp} onHide={hidePopUp}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                {ForeignLanguageWord.infinitive}
              </Modal.Title>
            </Modal.Header>
          <Modal.Body>
          {modalTenses.map((obj, i) => (
                <tr key={i}>
                  <h5>{obj.title}</h5>
                  {Array.from({ length: 6 }).map((_, j) => (
                    <tr key={i}>
                        {showBaseLanguageFirst? <td style={{ width: tableRowWidth }}>{englishPronouns[j]} {BaseLanguageWord.englishWordConjugation[obj.tense][j]}</td> : <td style={{ width: tableRowWidth }}>{pronouns[j]} {BaseLanguageWord.foreignWordConjugation[obj.tense][j] }</td>}
                        {showBaseLanguageFirst? <td style={{ width: tableRowWidth }}>{pronouns[j]} {ForeignLanguageWord.foreignWordConjugation[obj.tense][j]}</td>: <td style={{ width: tableRowWidth }}>{englishPronouns[j]} {ForeignLanguageWord.englishWordConjugation[obj.tense][j]}</td> }
                      </tr>
                    ))
                  }
                </tr>
              ))
          }
            </Modal.Body>
          </Modal>}
        </Navbar>

      )
    }
  else {
    return  (
      <Navbar>
      <label style= {{width: "20%", textAlign: "left"}}>{BaseLanguageWord} </label>
      <label style= {{width: "20%", textAlign: "left"}}>{ForeignLanguageWord} </label>
      {showAudio && <label style= {{width: "20%", textAlign: "left"}}><audio src={ForeignLanguageWordAudio} controls controlsList="nodownloads" autoPlay ={false}></audio> </label>}
    </Navbar>
    )
  }
}
 
export default StudyElement;