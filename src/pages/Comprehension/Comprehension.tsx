import './Comprehension.scss';
import { AudioTranscription, Language, Paragraph, TranscriptionType } from '../../../types/Comprehension';
import { Container, Modal, Navbar as NavbarBs, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { languages as allLanguages } from '../../data/structured-data/comprehension';
import AudioPlayer from '../../components/atoms/CustomAudioPlayer/CustomAudioPlayer';
import CustomDropDownButton from '../../components/atoms/CustomDropDownButton/CustomDropDownButton';
import CustomDropDownButtonWhite from '../../components/atoms/CustomDropDownButtonWhite/CustomDropDownButtonWhite';
import Dropdown from 'react-bootstrap/Dropdown';
import { lightGrey } from '../../constants';

const ComprehensionContent = (props: { languageNumber: number; howToGuideVideo?: any }) => {
  const navigate = useNavigate();
  const { topicSlug } = useParams();
  const location = useLocation();

  const currentLanguage: Language = allLanguages[props.languageNumber];

  const initialAudioTranscription =
    currentLanguage.audioTranscriptions.find((t) => t.slugName === topicSlug) || currentLanguage.audioTranscriptions[0];

  const queryParams = new URLSearchParams(location.search);
  const initialTranscriptionInEnglish = queryParams.get('eng') === 'T';
  const initialAlphabet = parseInt(queryParams.get('numAlphabet') || '0');
  const initialLeft =
    queryParams.get('L') ||
    (currentLanguage.numForeignAlphabets > 1 ? TranscriptionType.WritingSystem3 : TranscriptionType.WritingSystem1);
  const initialRight = queryParams.get('R') || TranscriptionType.English;

  const [currentAudioTranscription, setCurrentAudioTranscription] =
    useState<AudioTranscription>(initialAudioTranscription);
  const [transcriptionInEnglish, setTranscriptionInEnglish] = useState(initialTranscriptionInEnglish);
  const [currentAlphabet, setCurrentAlphabet] = useState(initialAlphabet);

  const preventDropdownClose = (event: any) => {
    event.stopPropagation(); // Prevent click event from closing the dropdown
  };
  const [currentLeft, setCurrentLeft] = useState(initialLeft);
  const [currentRight, setCurrentRight] = useState(initialRight);
  const [leftVisibility, setLeftVisibility] = useState(true);
  const [rightVisibility, setRightVisibility] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);

  const titleMap: Record<TranscriptionType, string> = {
    [TranscriptionType.Audio]: `${currentLanguage.languageName} Audio`,
    [TranscriptionType.English]: 'English Transcription',
    [TranscriptionType.WritingSystem1]: `${currentLanguage.languageName} ${
      currentLanguage.numForeignAlphabets > 1 ? '(Roman Alphabetisation)' : ''
    }`,
    [TranscriptionType.WritingSystem2v2]: `${currentLanguage.languageName} (Hiragana and Katakana with spacing)`,
    [TranscriptionType.WritingSystem2]: `${currentLanguage.languageName} (Hiragana and Katakana)`,
    [TranscriptionType.WritingSystem3]: `${currentLanguage.languageName} (Hiragana, Katakana, and Kanji)`,
  };

  const updateURL = (slugName: string, left: TranscriptionType, right: TranscriptionType) => {
    const query = new URLSearchParams(location.search);
    query.set('L', left);
    query.set('R', right);
    navigate(`/${currentLanguage.languageName.toLowerCase()}/comprehension/${slugName}?${query.toString()}`, {
      replace: true,
    });
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    query.set('eng', transcriptionInEnglish ? 'T' : 'F');
    updateURL(topicSlug as string, currentLeft as TranscriptionType, currentRight as TranscriptionType); // Call updateURL here
  }, [transcriptionInEnglish, currentLeft, currentRight, topicSlug]);

  const toggleVisibility = (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    setter((prev) => !prev);
  };

  const renderDropdownItems = (current: TranscriptionType, changeHandler: (type: TranscriptionType) => void) => {
    return Object.entries(titleMap).map(([key, title]) => {
      const transcriptionType = key as TranscriptionType;
      const showCondition =
        transcriptionType !== TranscriptionType.Audio &&
        transcriptionType !== TranscriptionType.English &&
        parseInt(transcriptionType.slice(-1)) > currentLanguage.numForeignAlphabets;
      if (showCondition) return null;

      return (
        <Dropdown.Item
          key={key}
          style={{ backgroundColor: current === transcriptionType ? lightGrey : '' }}
          onClick={() => changeHandler(transcriptionType)}
        >
          {title}
        </Dropdown.Item>
      );
    });
  };

  const renderTableCell = (
    current: TranscriptionType,
    visibility: boolean,
    sentences: Paragraph['sentences']
  ) => {
    if (!visibility) return null;
  
    switch (current) {
    case TranscriptionType.Audio:
      return <div className="table-cell"><AudioPlayer audioFile={sentences[0]?.audioFile || ''} /></div>;
    case TranscriptionType.English:
      return <div className="table-cell">{sentences.map((s) => s.englishText).join(' ')}</div>;
    case TranscriptionType.WritingSystem1:
      return <div className="table-cell">{sentences.map((s) => s.foreignText[0]).join(' ')}</div>;
    case TranscriptionType.WritingSystem2:
      return <div className="table-cell">{sentences.map((s) => s.foreignText[1]).join('')}</div>;
    case TranscriptionType.WritingSystem2v2: // Hiragana and Katakana with spacing
      return (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap', // Allows wrapping of child divs
            textAlign: 'left',
            width: '100%', // Adjust the width depending on container size
            paddingTop: '10px'
          }}
        >
          {sentences
            .map((sentence) => sentence.foreignText[2] || '') // Get foreignText at index 2
            .join(' ') // Join all sentences into a single string with spaces
            .split(' ') // Split the string by spaces into individual words
            .map((word, index) => (
              <div
                key={index}
                style={{
                  display: 'inline-block',
                  paddingRight: '4px',
                  marginRight: '4px', // Optional: Adds space between words
                }}
              >
                {word}
              </div>
            ))}
        </div>
      );
    case TranscriptionType.WritingSystem3: // Hiragana, Katakana, and Kanji
      return <div className="table-cell">{sentences.map((s) => s.foreignText[3] || '').join('')}</div>;
    }
  };

  const renderComprehensionTopic = () => (
    <div className="inner-audio-player-and-table-container">
      <Table striped bordered hover size="sm" className="react-bootstrap-table2">
        <thead>
          <tr>
            {['Left', 'Right'].map((side) => (
              <th key={side}>
                <CustomDropDownButtonWhite
                  title={
                    titleMap[(side === 'Left' ? currentLeft : currentRight) as TranscriptionType].length > 20
                      ? `${titleMap[(side === 'Left' ? currentLeft : currentRight) as TranscriptionType].substring(0, 20)}...`
                      : titleMap[(side === 'Left' ? currentLeft : currentRight) as TranscriptionType]
                  }
                >
                  {renderDropdownItems(
                    (side === 'Left' ? currentLeft : currentRight) as TranscriptionType,
                    side === 'Left' ? setCurrentLeft : setCurrentRight
                  )}
                </CustomDropDownButtonWhite>
                <button onClick={toggleVisibility(side === 'Left' ? setLeftVisibility : setRightVisibility)}>
                  {side === 'Left' ? (leftVisibility ? 'hide' : 'show') : (rightVisibility ? 'hide' : 'show')}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentAudioTranscription.contents.map((content, index) => (
            <tr key={index}>
              <td>{renderTableCell(currentLeft as TranscriptionType, leftVisibility, content.sentences)}</td>
              <td>{renderTableCell(currentRight as TranscriptionType, rightVisibility, content.sentences)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

  return (
    <div className="page-container-no-padding-small-font">
      <h4>{currentLanguage.languageName} Reading and Listening Comprehension</h4>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '60px', paddingTop: '0px' }}>
        <button
          style={{
            color: 'rgb(13, 110,253)',
            border: 'none',
            backgroundColor: 'white',
            textDecoration: 'underline',
            fontSize: '18px',
          }}
          onClick={() => setShowPopUp(true)}
        >
          How to Guide
        </button>
      </div>
      <Container>
        <NavbarBs>
          <Container className="listening-comprehension-container">
            <div className="inner-listening-comprehension-container">
              <CustomDropDownButton
                title={`Topic: ${
                  currentAudioTranscription.name.length > 25
                    ? `${currentAudioTranscription.name.substring(0, 25)}...`
                    : currentAudioTranscription.name
                }`}
              >
                {currentLanguage.audioTranscriptions.map((topic, index) => (
                  <Dropdown.Item
                    key={index}
                    style={{
                      backgroundColor:
                        index ===
                        currentLanguage.audioTranscriptions.findIndex(
                          (item) => item.name === currentAudioTranscription.name
                        )
                          ? lightGrey
                          : '',
                    }}
                    onClick={() => setCurrentAudioTranscription(topic)}
                  >
                    {topic.name}
                  </Dropdown.Item>
                ))}
              </CustomDropDownButton>
              <CustomDropDownButton title='Settings' align="end">
                <Dropdown.Item
                  onClick={() => {}}
                >
                      Granularity: &nbsp;
                  <select 
                    name="alphabets" 
                    id="alphabets" 
                    onChange={() => {}} 
                    onClick={preventDropdownClose} // Prevent dropdown from closing
                    style={{
                      width: 'auto', // Make the select element only as wide as the content
                      display: 'inline-block', // Allow the select element to shrink to fit content
                      padding: '5px', // Add some padding for visual spacing
                    }}
                  >
                    <option value='0'>paragraph</option>
                    <option value="1">sentence</option>
                  </select>
                </Dropdown.Item>
              </CustomDropDownButton>
            </div>
          </Container>
        </NavbarBs>
        <div className="audio-player-and-table-container">{renderComprehensionTopic()}</div>
        <Modal show={showPopUp} onHide={() => setShowPopUp(false)} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title style={{ textAlign: 'center', width: '100%' }}>How to Guide</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {currentLanguage.languageName === 'Japanese' ? (
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/pTazGqK7Rms"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <video
                style={{ margin: '0 auto', display: 'block', maxWidth: '100%' }}
                controls
                src={props.howToGuideVideo}
              />
            )}
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default ComprehensionContent;
