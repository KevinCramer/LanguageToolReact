import { Modal, Navbar } from 'react-bootstrap'
import { 
  Tenses, 
  VerbConjugation, 
  VerbConjugationEnglish,
  VerbConjugationForeign
} from '../../../types/learningSections/VocabTypes'
import CustomButton from '../atoms/CustomButton'
import { englishPronouns } from '../../data/structured-data/words'
import { modalTenses } from '../../constants'
import { useEffect, useState } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const StudyElement = (
  props: 
  {
    BaseLanguageWord: string | VerbConjugation,
    ForeignLanguageWord: string | VerbConjugation,
    ForeignLanguageWordAudio: string,
    showAudio: boolean,
    showBaseLanguageFirst: boolean,
    isVerb: boolean,
    strokeOrderVideo?: any,
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
      strokeOrderVideo,
      pronouns,
      showLeftLabel
    } = props

  var showPopUp = false;
  var [showPopUp,setShowPopUp] = useState(showPopUp)
  var [isPlaying, setIsPlaying] = useState(false);

  const handleAudioToggle = () => {
    const audio = document.getElementById(ForeignLanguageWordAudio) as HTMLAudioElement;
    if (audio) {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        audio.currentTime = 0; // Reset to the beginning of the audio
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const audio = document.getElementById(ForeignLanguageWordAudio) as HTMLAudioElement;
    if (audio) {
      const handleAudioEnd = () => {
        setIsPlaying(false);
      };

      audio.addEventListener('ended', handleAudioEnd);
      return () => {
        audio.removeEventListener('ended', handleAudioEnd);
      };
    }
  }, [ForeignLanguageWordAudio]);

  const hidePopUp = () => { return setShowPopUp(false)}
  const displayPopUp = () => { return setShowPopUp(true)}
  const baseLanguageLabel = <label
    // this onClick function is a complicated mess. This while component needs massive refactor + e2e tests. 
    onClick={ !isVerb && ((showBaseLanguageFirst && !strokeOrderVideo ) || (!showBaseLanguageFirst && strokeOrderVideo)) ? displayPopUp : ()=> {}}>
    <>{isVerb ? (showBaseLanguageFirst ? (BaseLanguageWord as VerbConjugation).infinitive :
      (ForeignLanguageWord as VerbConjugation).infinitive) : BaseLanguageWord}</> </label>
  const foreignLanguageLabelVerb = <label onClick={displayPopUp}>
    { showBaseLanguageFirst ? (ForeignLanguageWord as VerbConjugation).infinitive : 
      (BaseLanguageWord as VerbConjugation).infinitive} </label>
  const foreignLanguageLabelStrokeOrder = <label
    onClick={showBaseLanguageFirst ? displayPopUp : ()=> {}}> <> {ForeignLanguageWord}</></label>
  const foreignLanguageLabelNoVerb = <label >
    <> {ForeignLanguageWord}</></label>
  const foreignLanguageLabel = isVerb ? foreignLanguageLabelVerb : (strokeOrderVideo ? foreignLanguageLabelStrokeOrder : foreignLanguageLabelNoVerb)
  return (
    <Navbar>
      { showLeftLabel ? (
        isVerb ? (showBaseLanguageFirst ? baseLanguageLabel : foreignLanguageLabel
        ) :
          baseLanguageLabel) :
        isVerb ? (showBaseLanguageFirst ? foreignLanguageLabel : baseLanguageLabel) :
          foreignLanguageLabel}
      {showAudio && (showBaseLanguageFirst ? !showLeftLabel : showLeftLabel) && <div>
        <audio src={ForeignLanguageWordAudio} id={ForeignLanguageWordAudio}></audio>
        <CustomButton disabled={!ForeignLanguageWord} onClick={handleAudioToggle}>
          {ForeignLanguageWordAudio ? 
            <VolumeUpIcon/> :
            <VolumeOffIcon />}
        </CustomButton>
      </div>}
      {isVerb && <Modal show ={showPopUp} onHide={hidePopUp}>
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            {(ForeignLanguageWord as VerbConjugation).infinitive.toUpperCase()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalTenses.map((obj, i) => (
            <table key={i}>
              {/* Top row with a single centered cell */}
              <tr>
                <td colSpan={2}>
                  <h6>{obj.title}</h6>
                </td>
              </tr>
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
            </table>
          ))
          }
        </Modal.Body>
      </Modal>}
      { strokeOrderVideo && <Modal show={showPopUp} onHide={hidePopUp} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {ForeignLanguageWord.toString() + ' - Hiragana Stroke Order'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <video width='100%' controls>
              <source src={strokeOrderVideo} type='video/mp4'/>
              Your browser does not support the video tag.
            </video>
          </div>
        </Modal.Body>
      </Modal>}
    </Navbar>

  )
}
 
export default StudyElement;