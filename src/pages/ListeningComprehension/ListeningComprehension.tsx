import './ListeningComprehension.scss';
import { AudioTranscription, Language,
  Paragraph, TranscriptionType } from '../../../types/listeningComprehension';
import { Container, Modal, Navbar as NavbarBs, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { languages as allLanguages } from '../../data/structured-data/listeningComprehension';
import AudioPlayer from '../../components/atoms/CustomAudioPlayer/CustomAudioPlayer';
import CustomDropDownButton from '../../components/atoms/CustomDropDownButton/CustomDropDownButton';
import CustomDropDownButtonWhite from '../../components/atoms/CustomDropDownButtonWhite/CustomDropDownButtonWhite';
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

  const initialLeft = queryParams.get('L') || 
  (currentLanguage.numForeignAlphabets > 1 ? TranscriptionType.WritingSystem3 
    : TranscriptionType.WritingSystem1)
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
    navigate(`/${currentLanguage.languageName.toLowerCase()}/comprehension/${slugName}?${query.toString()}`);
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    query.set('eng', transcriptionInEnglish ? 'T' : 'F');
    navigate(`/${currentLanguage.languageName.toLowerCase()}/comprehension/${topicSlug}?${query.toString()}`, { replace: true });
  }, [currentLanguage.languageName, topicSlug, currentAudioTranscription.slugName, navigate, transcriptionInEnglish]);

  const titleMap: Record<TranscriptionType, string> = {
    [TranscriptionType.Audio]: `${currentLanguage.languageName} Audio`,
    [TranscriptionType.English]:'English Transcription',
    [TranscriptionType.WritingSystem1]: `${currentLanguage.languageName} Transcription ${currentLanguage.numForeignAlphabets > 1 ? '(Roman Alphabetisation)' : ''}`,
    [TranscriptionType.WritingSystem2]: `${currentLanguage.languageName} Transcription (Hiragana and Katakana)`,
    [TranscriptionType.WritingSystem2v2]: `${currentLanguage.languageName} Transcription (Hiragana and Katakana + spacing)`,
    [TranscriptionType.WritingSystem3]: `${currentLanguage.languageName} Transcription (Hiragana, Katakana, and Kanji)`,

  }

  const renderListeningComprehensionTopic = () => (
    <div className="inner-audio-player-and-table-container">
      <Table striped bordered hover size="sm" className="react-bootstrap-table2">
        <thead>
          <tr>
            <th><CustomDropDownButtonWhite title={
              titleMap[currentLeft as TranscriptionType].length > 20 ?
                titleMap[currentLeft as TranscriptionType].substring(0,20) + '...' :
                titleMap[currentLeft as TranscriptionType]}>
              <Dropdown.Item onClick={() =>{changeLeft(TranscriptionType.Audio)}}>
                {titleMap[TranscriptionType.Audio]}
              </Dropdown.Item>
              <Dropdown.Item onClick={() =>{changeLeft(TranscriptionType.WritingSystem1)}}>
                {titleMap[TranscriptionType.WritingSystem1]}
              </Dropdown.Item>
              {currentLanguage.numForeignAlphabets > 1 && <Dropdown.Item
                onClick={() =>{changeLeft(TranscriptionType.WritingSystem2v2)}}
              >
                {titleMap[TranscriptionType.WritingSystem2v2]}
              </Dropdown.Item>}
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
            </CustomDropDownButtonWhite></th>
            <th><CustomDropDownButtonWhite title={
              titleMap[currentRight as TranscriptionType].length > 20 ?
                titleMap[currentRight as TranscriptionType].substring(0,20) + '...' :
                titleMap[currentRight as TranscriptionType]}>
              <Dropdown.Item onClick={() =>{changeRight(TranscriptionType.Audio)}}>
                {titleMap[TranscriptionType.Audio]}
              </Dropdown.Item>
              <Dropdown.Item onClick={() =>{changeRight(TranscriptionType.WritingSystem1)}}>
                {titleMap[TranscriptionType.WritingSystem1]}
              </Dropdown.Item>
              {currentLanguage.numForeignAlphabets > 1 && <Dropdown.Item
                onClick={() =>{changeRight(TranscriptionType.WritingSystem2v2)}}
              >
                {titleMap[TranscriptionType.WritingSystem2v2]}
              </Dropdown.Item>}
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
            </CustomDropDownButtonWhite></th>
          </tr>
        </thead>
        <tbody>
          {currentAudioTranscription.contents.map((content: Paragraph, index: number) => (
            <>
              <tr key={index}>
                <td style={{ height: '10px', verticalAlign: 'top', paddingTop: '15px' }}>
                  {currentLeft === 'Audio' && <div style={{ display: 'flex' }}>
                    <AudioPlayer audioFile={content.audioFile} />
                  </div>}
                  {currentLeft === 'WritingSystem1' && <div style={{ display: 'flex', textAlign:'left', paddingLeft:'5px', paddingRight: '5px' }}>
                    {content.foreignText[0]}
                  </div>}
                  {currentLeft === 'WritingSystem2' && <div style={{ display: 'flex', textAlign:'left', paddingLeft:'5px', paddingRight: '5px' }}>
                    {content.foreignText[1]}
                  </div>}
                  {currentLeft === 'WritingSystem2v2' && (
                    <div style={{
                      display: 'flex', 
                      flexWrap: 'wrap', // Allows the child divs to wrap to the next line
                      textAlign: 'left', 
                      width: '100%' // You can adjust the width depending on your container size
                    }}>
                      {content.foreignText[2]
                        .split(' ') // Split by spaces
                        .map((word, index) => (
                          <div key={index} style={{
                            display: 'inline-block', 
                            paddingRight: '4px',
                            marginRight: '4px' // Optional, adds spacing between the words
                          }}>
                            {word}
                          </div>
                        ))}
                    </div>
                  )}
                  {currentLeft === 'WritingSystem3' && <div style={{ display: 'flex', textAlign:'left', paddingLeft:'5px', paddingRight: '5px' }}>
                    {content.foreignText[3]}
                  </div>}
                  {currentLeft === 'English' && <div style={{ display: 'flex', textAlign:'left', paddingLeft:'5px', paddingRight: '5px' }}>
                    {content.englishText}
                  </div>}
                </td>
                <td style={{ verticalAlign: 'top', paddingTop: '15px' }}>
                  {currentRight === 'Audio' && <div style={{ display: 'flex' }}>
                    <AudioPlayer audioFile={content.audioFile} />
                  </div>}
                  {currentRight === 'WritingSystem1' && <div style={{ display: 'flex', textAlign:'left', paddingLeft:'5px', paddingRight: '5px' }}>
                    {content.foreignText[0]}
                  </div>}
                  {currentRight === 'WritingSystem2' && <div style={{ display: 'flex', textAlign:'left', paddingLeft:'5px', paddingRight: '5px' }}>
                    {content.foreignText[1]}
                  </div>}
                  {currentRight === 'WritingSystem2v2' && (
                    <div style={{
                      display: 'flex', 
                      flexWrap: 'wrap', // Allows the child divs to wrap to the next line
                      textAlign: 'left', 
                      width: '100%' // You can adjust the width depending on your container size
                    }}>
                      {content.foreignText[2]
                        .split(' ') // Split by spaces
                        .map((word, index) => (
                          <div key={index} style={{
                            display: 'inline-block', 
                            paddingRight: '4px',
                            marginRight: '4px' // Optional, adds spacing between the words
                          }}>
                            {word}
                          </div>
                        ))}
                    </div>
                  )}
                  {currentRight === 'WritingSystem3' && <div style={{ display: 'flex', textAlign:'left', paddingLeft:'5px', paddingRight: '5px' }}>
                    {content.foreignText[3]}
                  </div>}
                  {currentRight === 'English' && <div style={{ display: 'flex', textAlign:'left', paddingLeft:'5px', paddingRight: '5px' }}>
                    {content.englishText}
                  </div>}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );

  return (
    <>
      <div className="page-container-no-padding-small-font">
        <h4>{currentLanguage.languageName} Reading and Listening Comprehension</h4>
        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '60px',
          paddingTop: '0px' }}>
          <button style= {{ color:'rgb(13, 110,253)', border: 'none', backgroundColor: 'white',
            textDecoration: 'underline', fontSize: '18px' }}
          onClick={displayPopUp}>How to Guide</button>
        </div>
        <Container>
          <NavbarBs>
            <Container className="listening-comprehension-container">
       
              <div className="inner-listening-comprehension-container">
                <CustomDropDownButton title={`Topic: ${currentAudioTranscription.name.length > 25 ? 
                  currentAudioTranscription.name.substring(0,25) + '...' 
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
          <Modal show={showPopUp} onHide={hidePopUp} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title style={{ textAlign: 'center', width: '100%' }}>How to Guide</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {currentLanguage.languageName === 'Japanese' &&
               <div className="embed-responsive embed-responsive-16by9">
                 <video width="100%" controls>
                   <source src={props.howToGuideVideo} type="video/mp4"/>
                    Your browser does not support the video tag.
                 </video>
               </div>}
              {currentLanguage.languageName !== 'Japanese' &&
              <div>Video coming soon</div>}
            </Modal.Body>
          </Modal>
        </Container>
      </div>
    </>
  );
};

export default ListeningComprehensionContent;
