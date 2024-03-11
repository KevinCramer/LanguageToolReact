import { Button, Modal, Navbar } from 'react-bootstrap'
import { englishPronouns } from '../../data/words'
import { modalTenses } from '../../constants'
import { useState } from 'react'

const StudyElement = (
  props: 
  {
    BaseLanguageWord: any,
    ForeignLanguageWord: any,
    ForeignLanguageWordAudio: string,
    showAudio: boolean,
    showBaseLanguageFirst: boolean,
    isVerb: boolean,
    pronouns: string[]
  }) => 
{

  const 
    {
      BaseLanguageWord,
      ForeignLanguageWord,
      ForeignLanguageWordAudio,
      showAudio,
      showBaseLanguageFirst,
      isVerb,
      pronouns 
    } = props

  const tableRowWidth = 200
  var showPopUp = false;
  var [showPopUp,setShowPopUp] = useState(showPopUp)
  const hidePopUp = () => { return setShowPopUp(false)}
  const displayPopUp = () => { return setShowPopUp(true)}
  const baseLanguageLabel = <label style= {{ width: '20%', textAlign: 'center' }}>
    {isVerb ? (showBaseLanguageFirst ? BaseLanguageWord.infinitive :
      ForeignLanguageWord.infinitive) : BaseLanguageWord} </label>
  const foreignLanguageLabelVerb = <label onClick={displayPopUp} 
    style= {{ width: '20%', textAlign: 'center', color: 'purple',
      textDecorationLine: 'underline' }}>
    { showBaseLanguageFirst ? ForeignLanguageWord.infinitive : BaseLanguageWord.infinitive} </label>
  const foreignLanguageLabelNoVerb = <label style= {{ width: '20%', textAlign: 'center' }}>
    {ForeignLanguageWord} </label>
  const foreignLanguageLabel = isVerb ? foreignLanguageLabelVerb : foreignLanguageLabelNoVerb
  return (
    <Navbar style={{ justifyContent:'center' }}>
      {isVerb ? (showBaseLanguageFirst ? baseLanguageLabel : foreignLanguageLabel) :
        baseLanguageLabel} <div style={{ paddingTop: '10px' }}>=</div>
      {isVerb ? (showBaseLanguageFirst ? foreignLanguageLabel : baseLanguageLabel) :
        foreignLanguageLabel}
      {showAudio && <div style={{ paddingTop: '10px' }}>
        <audio src={ForeignLanguageWordAudio} id={ForeignLanguageWordAudio}></audio>
        <Button size="sm" variant="secondary" aria-disabled={!ForeignLanguageWord} onClick={() => { 
          var audio = document.getElementById(ForeignLanguageWordAudio) as any;
          if (audio.paused) {
            audio.play();
          } else {
            audio.pause();
            audio.currentTime = 0; // Reset to the beginning of the audio
          }}} > {ForeignLanguageWordAudio ? 'audio' : 'no audio'}</Button>
      </div>}
      {isVerb && <Modal show ={showPopUp} onHide={hidePopUp}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vleft">
            {ForeignLanguageWord.infinitive}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalTenses.map((obj, i) => (
            <tr key={i}>
              <h5>{obj.title}</h5>
              {Array.from({ length: 6 }).map((_, j) => (
                <tr key={i}>
                  {showBaseLanguageFirst ? <td style={{ width: tableRowWidth }}>
                    {englishPronouns[j] + ' '}
                    {BaseLanguageWord.englishWordConjugation[obj.tense][j]}</td> : <td style={
                    { width: tableRowWidth }}>{pronouns[j] + ' '} 
                    {BaseLanguageWord.foreignWordConjugation[obj.tense][j] }</td>}
                  {showBaseLanguageFirst ? <td style={{ width: tableRowWidth }}>
                    {pronouns[j] + ' '} {ForeignLanguageWord.foreignWordConjugation[obj.tense][j]}
                  </td> : <td style={{ width: tableRowWidth }}>{englishPronouns[j] + ' '} 
                    {ForeignLanguageWord.englishWordConjugation[obj.tense][j]}</td> }
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
 
export default StudyElement;