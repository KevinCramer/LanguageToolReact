import './Comprehension.scss';
import { AudioTranscription, Language, Paragraph, SentenceWithNumAlphabets, TranscriptionType } from '../../../types/Comprehension';
import { Container, DropdownItem, Modal, Navbar as NavbarBs, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { languages as allLanguages } from '../../data/structured-data/comprehension';
import AudioPlayer from '../../components/atoms/CustomAudioPlayer/CustomAudioPlayer';
import CustomDropDownButton from '../../components/atoms/CustomDropDownButton/CustomDropDownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { lightGrey, mobileBreakPoint } from '../../constants';
import CustomButton from '../../components/atoms/CustomButton/CustomButton';
import CustomDropDownButtonWhite from '../../components/atoms/CustomDropDownButtonWhite/CustomDropDownButtonWhite';

const ComprehensionContent = (props: { languageNumber: number; howToGuideVideo?: any }) => {
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

  const renderTableCell = (
    current: TranscriptionType,
    visibility: boolean,
    sentences: (SentenceWithNumAlphabets<1> | SentenceWithNumAlphabets<2>
       | SentenceWithNumAlphabets<3> | SentenceWithNumAlphabets<4>)[], // Flexible type
    audioFile: Paragraph['audioFile']
  ) => {
    if (!visibility) return null;
  
    // Determine the display mode based on granularity
    const displayContent = granularity === 'sentence'
      ? sentences // Use individual sentences when granularity is 'sentence'
      : [{ 
        englishText: sentences.map((s) => s.englishText).join(' '), 
        foreignText: [
          sentences.map((s) => s.foreignText[0]).join(' '),
          sentences.map((s) => s.foreignText[1]).join(''),
          sentences.map((s) => s.foreignText[2]).join(' '),
          sentences.map((s) => s.foreignText[3]).join('')
        ], 
        audioFile: audioFile 
      }]; // Join all sentences into a single paragraph
  
    if (granularity === 'sentence') {
      // When granularity is sentence, return each sentence in its own row
      return (
        <div className="table-cell">
          {displayContent.map((content, index) => (
            <div key={index}>
              {current === TranscriptionType.Audio && <AudioPlayer audioFile={content.audioFile || ''} />}
              {current === TranscriptionType.English && <div>{content.englishText}</div>}
              {current === TranscriptionType.WritingSystem1 && <div>{content.foreignText[0]}</div>}
              {current === TranscriptionType.WritingSystem2 && <div>{content.foreignText[1]}</div>}
              {current === TranscriptionType.WritingSystem2v2 && (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {content.foreignText[2]?.split(' ').map((word: any, idx: any) => (
                    <div key={idx} style={{ display: 'inline-block', paddingRight: '5px', marginRight: '5px', marginTop: '10px' }}>
                      {word}
                    </div>
                  ))}
                </div>
              )}
              {current === TranscriptionType.WritingSystem3 && <div>{content.foreignText[3] || ''}</div>}
            </div>
          ))}
        </div>
      );
    } else {
      // When granularity is paragraph, render all content in a single row
      return (
        <div className="table-cell">
          {current === TranscriptionType.Audio && <AudioPlayer audioFile={displayContent[0].audioFile || ''} />}
          {current === TranscriptionType.English && <div>{displayContent[0].englishText}</div>}
          {current === TranscriptionType.WritingSystem1 && <div>{displayContent[0].foreignText[0]}</div>}
          {current === TranscriptionType.WritingSystem2 && <div>{displayContent[0].foreignText[1]}</div>}
          {current === TranscriptionType.WritingSystem2v2 && (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {displayContent[0].foreignText[2]?.split(' ').map((word, idx) => (
                <div key={idx} style={{ display: 'inline-block', paddingRight: '4px', marginRight: '4px' }}>
                  {word}
                </div>
              ))}
            </div>
          )}
          {current === TranscriptionType.WritingSystem3 && <div>{displayContent[0].foreignText[3] || ''}</div>}
        </div>
      );
    }
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
                  <td style={{ verticalAlign: 'top' }}>{renderTableCell(currentLeft as TranscriptionType, leftVisibility, row.sentences, row.audioFile)}</td>
                  <td style={{ verticalAlign: 'top' }}>{renderTableCell(currentRight as TranscriptionType, rightVisibility, row.sentences, row.audioFile)}</td>
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
                    onClick={() => setCurrentAudioTranscription(topic)}
                  >
                    {topic.name}
                  </Dropdown.Item>
                ))}
              </CustomDropDownButton>
              <CustomDropDownButton title='Settings' align="end">
                <Dropdown.Item
                  onClick={preventDropdownClose} 
                >
                  Granularity: &nbsp;
                  <select
                    name="alphabets" 
                    id="alphabets"
                    value={granularity}
                    onChange={(e) => setGranularity(e.target.value as 'sentence' | 'paragraph')} // Set the granularity
                    onClick={preventDropdownClose} 
                    style={{
                      width: 'auto',
                      display: 'inline-block',
                      padding: '5px',
                    }}
                  >
                    <option value="paragraph">Paragraph</option>
                    <option value="sentence">Sentence</option>
                  </select>
                </Dropdown.Item>
                <hr/>
                <DropdownItem
                  onClick={(event) => {
                    toggleLeftVisibility();
                    preventDropdownClose(event);
                  }}
                >
                  <input
                    type="checkbox"
                    checked={!leftVisibility}
                    onChange={toggleLeftVisibility}
                    style={{
                      transform: 'scale(1.5)', // Increase size by a factor of 2 (adjust as needed)
                      marginRight: '10px', // Space between checkbox and text
                      width: '20px'
                    }} 
                    key={leftVisibility as any} // Changing the key forces the rerender

                  /> clear left column</DropdownItem>
                <DropdownItem
                  onClick={(event) => {
                    toggleRightVisibility();
                    preventDropdownClose(event);
                  }}
                >
                  <input
                    type="checkbox"
                    checked={!rightVisibility}
                    onChange={toggleRightVisibility}
                    style={{
                      transform: 'scale(1.5)', // Increase size by a factor of 2 (adjust as needed)
                      marginRight: '10px', // Space between checkbox and text
                      width: '20px'
                    }} 
                    key={rightVisibility as any} // Changing the key forces the rerender
                  /> clear right column</DropdownItem>
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
