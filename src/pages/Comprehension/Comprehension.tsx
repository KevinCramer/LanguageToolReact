import './Comprehension.scss';
import { AudioTranscription, Language, Paragraph, SentenceWithNumAlphabets, TranscriptionType } from '../../../types/Comprehension';
import { Container, DropdownItem, Modal, Navbar as NavbarBs, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { languages as allLanguages } from '../../data/structured-data/comprehension';
import AudioPlayer from '../../components/atoms/CustomAudioPlayer/CustomAudioPlayer';
import CustomDropDownButton from '../../components/atoms/CustomDropDownButton/CustomDropDownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { lightGrey, lingoCommandIsLocked, mobileBreakPoint } from '../../constants';
import CustomButton from '../../components/atoms/CustomButton/CustomButton';
import CustomDropDownButtonWhite from '../../components/atoms/CustomDropDownButtonWhite/CustomDropDownButtonWhite';
import CustomSwitch from '../../components/atoms/CustomSwitch/CustomSwitch';
import RenderTableCell from '../../components/molecules/RenderTableCell/RenderTableCell';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import { denyPermission } from '../../redux-store/lock';

const ComprehensionContent = (props: { languageNumber: number; howToGuideVideo?: any }) => {
  const dispatch = useDispatch();

  //@ts-ignore
  const { currentUser } = useAuth();
  
  const userIsLoggedIn = currentUser && currentUser.email

  const navigate = useNavigate();
  const { topicSlug } = useParams();
  const location = useLocation();

  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Check if the device is mobile
  const checkIfMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    // Regular expression to check for mobile devices (phones, tablets)
    const isMobile = /iphone|ipod|android|blackberry|windows phone|mobile/i.test(userAgent);
    setIsMobileDevice(isMobile);
  };

  // Run the check on mount
  useEffect(() => {
    checkIfMobile();
  }, []);

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
  const initialGranularity = queryParams.get('gran') || 'paragraph';

  const [currentAudioTranscription, setCurrentAudioTranscription] =
    useState<AudioTranscription>(initialAudioTranscription);

  const changeTranscription = (topic: AudioTranscription) => {
    if(topic.isLocked && lingoCommandIsLocked && !userIsLoggedIn ){
      dispatch(denyPermission());
    }
    else{
      navigate(`/${currentLanguage.languageName.toLowerCase()}/comprehension/${topic.slugName}`, { replace: true });
      return setCurrentAudioTranscription(topic);}
  
  }
  
  const [transcriptionInEnglish, setTranscriptionInEnglish] = useState(initialTranscriptionInEnglish);
  const [currentAlphabet, setCurrentAlphabet] = useState(initialAlphabet);
  const [granularity, setGranularity] = useState(initialGranularity); // Granularity state
  
  const preventDropdownClose = (event: any) => {
    event.stopPropagation(); // Prevent click event from closing the dropdown
  };

  const [currentLeft, setCurrentLeft] = useState(initialLeft);
  const [currentRight, setCurrentRight] = useState(initialRight);
  const [leftVisibility, setLeftVisibility] = useState(true);
  const toggleLeftVisibility = () => { return setLeftVisibility(!leftVisibility)}
  const toggleRightVisibility = () => { return setRightVisibility(!rightVisibility)}
  const toggleGranularity = () => { return setGranularity(granularity === 'sentence' ? 'paragraph' : 'sentence')}

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

  const updateURL = (slugName: string, left: TranscriptionType, right: TranscriptionType, granularity: string) => {
    const query = new URLSearchParams(location.search);
    query.set('L', left);
    query.set('R', right);
    query.set('gran', granularity)
    navigate(`/${currentLanguage.languageName.toLowerCase()}/comprehension/${slugName}?${query.toString()}`, {
      replace: true,
    });
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    query.set('eng', transcriptionInEnglish ? 'T' : 'F');
    updateURL(topicSlug as string, currentLeft as TranscriptionType, currentRight as TranscriptionType, granularity); // Call updateURL here
  }, [transcriptionInEnglish, currentLeft, currentRight, topicSlug, granularity]);

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

  const isSentenceWithNumAlphabets = (sentence: any, numAlphabets: number): boolean => {
    return sentence.foreignText.length === numAlphabets;
  };

  const renderComprehensionTopic = () => {
    // Flatten the paragraphs into individual sentences if granularity is 'sentence'
    const rowsToRender = granularity === 'sentence'
      ? currentAudioTranscription.contents.flatMap((content) =>
        content.sentences.map((sentence) => ({
          sentences: [sentence], // Wrap each sentence in an array to pass to renderTableCell
          audioFile: content.audioFile,
        }))
      )
      : currentAudioTranscription.contents.map((content) => ({
        sentences: content.sentences, // Keep sentences as they are when granularity is 'paragraph'
        audioFile: content.audioFile,
      }));
  
    return (
      <div className="inner-audio-player-and-table-container">
        <Table striped bordered hover size="sm" className="react-bootstrap-table2 scrollable-table">
          <thead style={{ display: 'table', width: isMobileDevice ? '100%' : 'calc(100% - 16px)', tableLayout: 'fixed' }}>
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
                  
                </th>
              ))}
            </tr>
          </thead>
          <div className="scrollable-tbody">
            <tbody
              style={{
                overflowX: 'hidden', // Disable horizontal scrolling
              }}
            >
              {rowsToRender.map((row, index) => (
                <tr key={index}>
                  <td style={{ verticalAlign: 'top' }}>
                    <RenderTableCell
                      current={currentLeft as TranscriptionType}
                      visibility={leftVisibility}
                      sentences={row.sentences}
                      audioFile={row.audioFile}
                      granularity={granularity}
                    />
                  </td>
                  <td style={{ verticalAlign: 'top' }}>
                    <RenderTableCell
                      current={currentRight as TranscriptionType}
                      visibility={rightVisibility}
                      sentences={row.sentences}
                      audioFile={row.audioFile}
                      granularity={granularity}
                    />                  </td>
                </tr>
              ))}
            </tbody>
          </div>
        </Table>
      </div>
    );
  };
    
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
                    onClick={() => changeTranscription(topic)}
                  >
                    <div className="topic-container">
                      {topic.name} {
                        topic.isLocked 
                          && lingoCommandIsLocked 
                          && !userIsLoggedIn
                          && <LockIcon style={{ fontSize: '20px' }}/>}
                    </div>
                  </Dropdown.Item>
                ))}
              </CustomDropDownButton>
              <CustomDropDownButton title='Settings' align="end">
                <DropdownItem
                  onClick={(event) => {
                    toggleLeftVisibility();
                    preventDropdownClose(event);
                  }}
                >
                  <div style={{ color: rightVisibility ? '#4A4A4A' : '#E0E0E0' }}>
                    <input
                      type="checkbox"
                      checked={!leftVisibility}
                      onChange={toggleLeftVisibility}
                      disabled={!rightVisibility}
                      style={{
                        transform: 'scale(1.5)', // Increase size by a factor of 2 (adjust as needed)
                        marginRight: '10px', // Space between checkbox and text
                        width: '20px'
                      }} 
                      key={leftVisibility as any} // Changing the key forces the rerender

                    /> 
                    hide left column
                  </div>
                </DropdownItem>
                <DropdownItem
                  onClick={(event) => {
                    toggleRightVisibility();
                    preventDropdownClose(event);
                  }}
                >
                  <div style={{ color: leftVisibility ? '#4A4A4A' : '#E0E0E0' }}>
                    <input
                      type="checkbox"
                      checked={!rightVisibility}
                      onChange={toggleRightVisibility}
                      disabled={!leftVisibility}
                      style={{
                        transform: 'scale(1.5)', // Increase size by a factor of 2 (adjust as needed)
                        marginRight: '10px', // Space between checkbox and text
                        width: '20px'
                      }} 
                      key={rightVisibility as any} // Changing the key forces the rerender
                    /> 
                  hide right column
                  </div>
                  
                </DropdownItem>
              </CustomDropDownButton>
            </div>
          </Container>
        </NavbarBs>
        <div className='div-switch-container' style ={{ paddingTop: '20px', justifyContent: 'center' }}>
          <div style={{ marginRight: '10px', fontWeight: granularity === 'sentence' ? 'normal' : '600' }}>
                Paragraphs
          </div>
          <CustomSwitch 
            onChange={toggleGranularity} 
            checked= {granularity === 'sentence'} 
          /> 
          <div style = {{ marginLeft: '10px', fontWeight: granularity === 'sentence' ? '600' : 'normal' }}>
                 Sentences
          </div>               
        </div>
        <div className="audio-player-and-table-container">{renderComprehensionTopic()}</div>
        <Modal show={showPopUp} onHide={() => setShowPopUp(false)} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title style={{ textAlign: 'center', width: '100%' }}>How to Guide</Modal.Title>
          </Modal.Header>
          {false && <Modal.Body>
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
          </Modal.Body>}
          <Modal.Body>
            Video coming soon
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default ComprehensionContent;
