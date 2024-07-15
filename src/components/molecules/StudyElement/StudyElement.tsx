import './StudyElement.css'
import { Modal, Navbar } from 'react-bootstrap'
import { 
  Tenses, 
  VerbConjugation, 
  VerbConjugationEnglish,
  VerbConjugationForeign
} from '../../../../types/vocabTypes'
import { englishPronouns } from '../../../data/structured-data/words'
import { modalTenses } from '../../../constants'
import MyButton from '../../atoms/MyButton/myButton'
import { useState } from 'react'

const StudyElement = (
  props: 
  {
    BaseLanguageWord: string | VerbConjugation,
    ForeignLanguageWord: string | VerbConjugation,
    ForeignLanguageWordAudio: string,
    showAudio: boolean,
    showBaseLanguageFirst: boolean,
    isVerb: boolean,
    pronouns: string[]
    showLeftLabel: boolean, 
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
      pronouns,
      showLeftLabel
    } = props

  var showPopUp = false;
  var [showPopUp,setShowPopUp] = useState(showPopUp)
  const hidePopUp = () => { return setShowPopUp(false)}
  const displayPopUp = () => { return setShowPopUp(true)}
  const baseLanguageLabel = <label className='base-language-label'>
    <>{isVerb ? (showBaseLanguageFirst ? (BaseLanguageWord as VerbConjugation).infinitive :
      (ForeignLanguageWord as VerbConjugation).infinitive) : BaseLanguageWord}</> </label>
  const foreignLanguageLabelVerb = <label className='verb-label' onClick={displayPopUp}>
    { showBaseLanguageFirst ? (ForeignLanguageWord as VerbConjugation).infinitive : 
      (BaseLanguageWord as VerbConjugation).infinitive} </label>
  const foreignLanguageLabelNoVerb = <label className='foreign-language-label-no-verb'>
    <> {ForeignLanguageWord}</></label>
  const foreignLanguageLabel = isVerb ? foreignLanguageLabelVerb : foreignLanguageLabelNoVerb
  return (
    <Navbar>
      { showLeftLabel ? (
        isVerb ? (showBaseLanguageFirst ? baseLanguageLabel : foreignLanguageLabel
        ) :
          baseLanguageLabel) :
        isVerb ? (showBaseLanguageFirst ? foreignLanguageLabel : baseLanguageLabel) :
          foreignLanguageLabel}
      {showAudio && !showLeftLabel && <div>
        <audio src={ForeignLanguageWordAudio} id={ForeignLanguageWordAudio}></audio>
        <MyButton disabled={!ForeignLanguageWord} onClick={() => { 
          var audio = document.getElementById(ForeignLanguageWordAudio) as HTMLAudioElement;
          if (audio.paused) {
            audio.play();
          } else {
            audio.pause();
            audio.currentTime = 0; // Reset to the beginning of the audio
          }}} > {ForeignLanguageWordAudio ? 'audio' : 'no audio'}</MyButton>
      </div>}
      {isVerb && <Modal show ={showPopUp} onHide={hidePopUp}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vleft">
            {(ForeignLanguageWord as VerbConjugation).infinitive}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalTenses.map((obj, i) => (
            <tr key={i}>
              <h5>{obj.title}</h5>
              {Array.from({ length: 6 }).map((_, j) => (
                <tr key={i}> 
                  {showBaseLanguageFirst ? <td>
                    {englishPronouns[j] + ' '}
                    {(BaseLanguageWord as VerbConjugationEnglish)
                      .englishWordConjugation[obj.tense as keyof Tenses][j]}</td> : 
                    <td>{pronouns[j] + ' '} 
                      {(BaseLanguageWord as VerbConjugationForeign)
                        .foreignWordConjugation[obj.tense as keyof Tenses][j] }</td>}
                  {showBaseLanguageFirst ? <td>
                    {pronouns[j] + ' '} {(ForeignLanguageWord as VerbConjugationForeign)
                      .foreignWordConjugation[obj.tense as keyof Tenses][j]}
                  </td> : <td>{englishPronouns[j] + ' '} 
                    {(ForeignLanguageWord as VerbConjugationEnglish)
                      .englishWordConjugation[obj.tense as keyof Tenses][j]}</td> }
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