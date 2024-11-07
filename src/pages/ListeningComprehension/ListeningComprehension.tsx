import './ListeningComprehension.scss';
import { AudioTranscription, Language, Paragraph, TranscriptionType } from '../../../types/listeningComprehension';
import { Container, Modal, Navbar as NavbarBs } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { languages as allLanguages } from '../../data/structured-data/listeningComprehension';
import AudioPlayer from '../../components/atoms/CustomAudioPlayer/CustomAudioPlayer';
import CustomDropDownButton from '../../components/atoms/CustomDropDownButton/CustomDropDownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const ListeningComprehensionContent = (props: { languageNumber: number, howToGuideVideo?: any }) => {
  const navigate = useNavigate();
  const { topicSlug } = useParams();
  const location = useLocation();

  const currentLanguage: Language = allLanguages[props.languageNumber];

  const initialAudioTranscription = currentLanguage.audioTranscriptions.find(
    (t) => t.slugName === topicSlug
  ) || currentLanguage.audioTranscriptions[0];

  // Read the 'transcriptionInEnglish' and 'numAlphabet' from query params or default values
  const queryParams = new URLSearchParams(location.search);
  const initialTranscriptionInEnglish = queryParams.get('eng') === 'T';
  const initialAlphabet = parseInt(queryParams.get('numAlphabet') || '0')

  const [currentAudioTranscription, setCurrentAudioTranscription] = useState<AudioTranscription>(
    initialAudioTranscription
  );

  const [transcriptionInEnglish, setTranscriptionInEnglish] = useState(initialTranscriptionInEnglish);
  
  const [currentAlphabet, setCurrentAlphabet] = useState(initialAlphabet);

  const initialLeft = queryParams.get('L') || TranscriptionType.Audio
  const [currentLeft, setCurrentLeft] = useState(initialLeft);

  const initialRight = queryParams.get('R') || TranscriptionType.English
  const [currentRight, setCurrentRight] = useState(initialRight);

  const changeCurrentAudioTranscription = (currentAudioTranscription: AudioTranscription) => {
    setCurrentAudioTranscription(currentAudioTranscription);
    updateURL(currentAudioTranscription.slugName, currentLeft, currentRight);
  };

  const changeLeft = (input: TranscriptionType) => {
    setCurrentLeft(input);
    updateURL(currentAudioTranscription.slugName, input,currentRight );
  };

  const changeRight = (input: TranscriptionType) => {
    setCurrentRight(input);
    updateURL(currentAudioTranscription.slugName, currentLeft,input );
  };

  var showPopUp = false;
  var [showPopUp,setShowPopUp] = useState(showPopUp)
  const hidePopUp = () => { return setShowPopUp(false)}
  const displayPopUp = () => { return setShowPopUp(true)}

  const updateURL = (slugName: string, left: any, right : any) => {
    const query = new URLSearchParams(location.search);
    query.set('L', left);
    query.set('R', right);
    navigate(`/${currentLanguage.languageName.toLowerCase()}/listening-comprehension/${slugName}?${query.toString()}`);
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    query.set('eng', transcriptionInEnglish ? 'T' : 'F');
    navigate(`/${currentLanguage.languageName.toLowerCase()}/listening-comprehension/${topicSlug}?${query.toString()}`, { replace: true });
  }, [currentLanguage.languageName, topicSlug, currentAudioTranscription.slugName, navigate, transcriptionInEnglish]);

  const titleMap: Record<TranscriptionType, string> = {
    [TranscriptionType.Audio]: `${currentLanguage.languageName} Audio`,
    [TranscriptionType.English]:'English Transcription',
    [TranscriptionType.WritingSystem1]: `${currentLanguage.languageName} Transcription ${currentLanguage.numForeignAlphabets > 1 ? '(Roman Alphabetisation)' : ''}`,
    [TranscriptionType.WritingSystem2]: `${currentLanguage.languageName} Transcription (Hiragana and Katakana)`,
    [TranscriptionType.WritingSystem3]: `${currentLanguage.languageName} Transcription (Hiragana, Katakana, and Kanji)`,

  }

  const renderListeningComprehensionTopic = () => (
    <div className="inner-audio-player-and-table-container">
      <table className="scrolldown">
        <thead>
          <tr>
            <th><CustomDropDownButton title={
              titleMap[currentLeft as TranscriptionType].length > 15 ?
                titleMap[currentLeft as TranscriptionType].substring(0,15) + '...' :
                titleMap[currentLeft as TranscriptionType]}>
              <Dropdown.Item onClick={() =>{changeLeft(TranscriptionType.Audio)}}>
                {titleMap[TranscriptionType.Audio]}
              </Dropdown.Item>
              <Dropdown.Item onClick={() =>{changeLeft(TranscriptionType.WritingSystem1)}}>
                {titleMap[TranscriptionType.WritingSystem1]}
              </Dropdown.Item>
              {currentLanguage.numForeignAlphabets > 1 && <Dropdown.Item
                onClick={() =>{changeLeft(TranscriptionType.WritingSystem2)}}
              >
                {titleMap[TranscriptionType.WritingSystem2]}
              </Dropdown.Item>}
              {currentLanguage.numForeignAlphabets > 2 && <Dropdown.Item
                onClick={() =>{changeLeft(TranscriptionType.WritingSystem3)}}
              >
                {titleMap[TranscriptionType.WritingSystem3]}
              </Dropdown.Item>}
              <Dropdown.Item
                onClick={() =>{changeLeft(TranscriptionType.English)}}
              >
                {titleMap[TranscriptionType.English]}
              </Dropdown.Item>
            </CustomDropDownButton></th>
            <th><CustomDropDownButton title={
              titleMap[currentRight as TranscriptionType].length > 15 ?
                titleMap[currentRight as TranscriptionType].substring(0,15) + '...' :
                titleMap[currentRight as TranscriptionType]}>
              <Dropdown.Item onClick={() =>{changeRight(TranscriptionType.Audio)}}>
                {titleMap[TranscriptionType.Audio]}
              </Dropdown.Item>
              <Dropdown.Item onClick={() =>{changeRight(TranscriptionType.WritingSystem1)}}>
                {titleMap[TranscriptionType.WritingSystem1]}
              </Dropdown.Item>
              {currentLanguage.numForeignAlphabets > 1 && <Dropdown.Item
                onClick={() =>{changeRight(TranscriptionType.WritingSystem2)}}
              >
                {titleMap[TranscriptionType.WritingSystem2]}
              </Dropdown.Item>}
              {currentLanguage.numForeignAlphabets > 2 && <Dropdown.Item
                onClick={() =>{changeRight(TranscriptionType.WritingSystem3)}}
              >
                {titleMap[TranscriptionType.WritingSystem3]}
              </Dropdown.Item>}
              <Dropdown.Item
                onClick={() =>{changeRight(TranscriptionType.English)}}
              >
                {titleMap[TranscriptionType.English]}
              </Dropdown.Item>
            </CustomDropDownButton></th>
          </tr>
        </thead>
        <tbody>
          {currentAudioTranscription.contents.map((content: Paragraph, index: number) => (
            <>
              <tr key={index}>
                <td style={{ height: '10px', verticalAlign: 'top', paddingTop: '20px' }}>
                  {currentLeft === 'Audio' && <div style={{ display: 'flex' }}>
                    <AudioPlayer audioFile={content.audioFile} />
                  </div>}
                  {currentLeft === 'WritingSystem1' && <div style={{ display: 'flex' }}>
                    {content.foreignText[0]}
                  </div>}
                  {currentLeft === 'WritingSystem2' && <div style={{ display: 'flex' }}>
                    {content.foreignText[1]}
                  </div>}
                  {currentLeft === 'WritingSystem3' && <div style={{ display: 'flex' }}>
                    {content.foreignText[2]}
                  </div>}
                  {currentLeft === 'English' && <div style={{ display: 'flex' }}>
                    {content.englishText}
                  </div>}
                </td>
                <td style={{ verticalAlign: 'top', paddingTop: '20px' }}>
                  {currentRight === 'Audio' && <div style={{ display: 'flex' }}>
                    <AudioPlayer audioFile={content.audioFile} />
                  </div>}
                  {currentRight === 'WritingSystem1' && <div style={{ display: 'flex' }}>
                    {content.foreignText[0]}
                  </div>}
                  {currentRight === 'WritingSystem2' && <div style={{ display: 'flex' }}>
                    {content.foreignText[1]}
                  </div>}
                  {currentRight === 'WritingSystem3' && <div style={{ display: 'flex' }}>
                    {content.foreignText[2]}
                  </div>}
                  {currentRight === 'English' && <div style={{ display: 'flex' }}>
                    {content.englishText}
                  </div>}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <h4>{currentLanguage.languageName} Listening and Reading Comprehension</h4>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '60px',
        paddingTop: '0px' }}>
        <button style= {{ color:'rgb(13, 110,253)', border: 'none', backgroundColor: '#F8F8F8',
          textDecoration: 'underline', fontSize: '18px' }}
        onClick={displayPopUp}>How to Guide</button>
      </div>
      <Container>
        <NavbarBs>
          <Container className="listening-comprehension-container">
       
            <div className="inner-listening-comprehension-container">
              <CustomDropDownButton title={`Topic: ${currentAudioTranscription.name.length > 15 ? 
                currentAudioTranscription.name.substring(0,15) + '...' 
                : currentAudioTranscription.name}`}>
                {currentLanguage.audioTranscriptions.map((topic: AudioTranscription, index: number) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => changeCurrentAudioTranscription(topic)}
                  >
                    {topic.name}
                  </Dropdown.Item>
                ))}
              </CustomDropDownButton>
            </div>
          </Container>
        </NavbarBs>
        <div className="audio-player-and-table-container">
          {renderListeningComprehensionTopic()}
        </div>
        <Modal show ={showPopUp} onHide={hidePopUp}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vleft" style={{ textAlign: 'center', width: '100%' }}>
              How to Guide!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <video width="460" controls>
              <source src={props.howToGuideVideo} type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default ListeningComprehensionContent;
