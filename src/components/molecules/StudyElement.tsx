import { Modal, Navbar } from 'react-bootstrap'
import CustomButton from '../atoms/CustomButton'
import { useEffect, useState } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const StudyElement = (
  props: 
  {
    BaseLanguageWord: string,
    ForeignLanguageWord: string,
    ForeignLanguageWordAudio: string,
    showAudio: boolean,
    showBaseLanguageFirst: boolean,
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
    onClick={ ((showBaseLanguageFirst && !strokeOrderVideo ) || (!showBaseLanguageFirst && strokeOrderVideo)) ? displayPopUp : ()=> {}}>
    <>{BaseLanguageWord}</> </label>
  const foreignLanguageLabelStrokeOrder = <label
    onClick={showBaseLanguageFirst ? displayPopUp : ()=> {}}> <> {ForeignLanguageWord}</></label>
  const foreignLanguageLabel = (strokeOrderVideo ? foreignLanguageLabelStrokeOrder : 
    <label><>{ForeignLanguageWord}</></label>)
  return (
    <Navbar>
      { showLeftLabel ? baseLanguageLabel : foreignLanguageLabel}
      {showAudio && (showBaseLanguageFirst ? !showLeftLabel : showLeftLabel) && <div>
        <audio src={ForeignLanguageWordAudio} id={ForeignLanguageWordAudio}></audio>
        <CustomButton disabled={!ForeignLanguageWord} onClick={handleAudioToggle}>
          {ForeignLanguageWordAudio ? 
            <VolumeUpIcon/> :
            <VolumeOffIcon />}
        </CustomButton>
      </div>}
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