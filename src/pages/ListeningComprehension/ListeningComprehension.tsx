import './ListeningComprehension.scss';
import { AudioTranscription, Language, Paragraph } from '../../../types/listeningComprehension';
import { Container, Navbar as NavbarBs, Table } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { languages as allLanguages } from '../../data/structured-data/listeningComprehension';
import AudioPlayer from '../../components/atoms/CustomAudioPlayer/CustomAudioPlayer';
import CustomDropDownButton from '../../components/atoms/CustomDropDownButton/CustomDropDownButton';
import CustomSwitch from '../../components/atoms/CustomSwitch/CustomSwitch';
import Dropdown from 'react-bootstrap/Dropdown';

const ListeningComprehensionContent = (props: { languageNumber: number }) => {
  const navigate = useNavigate();
  const { topicSlug } = useParams(); // Extract the topicSlug from the URL

  const currentLanguage: Language = allLanguages[props.languageNumber];

  const initialAudioTranscription = currentLanguage.audioTranscriptions.find(
    (t) => t.slugName === topicSlug
  ) || currentLanguage.audioTranscriptions[0];

  const [currentAudioTranscription, setCurrentAudioTranscription] = useState<AudioTranscription>(
    initialAudioTranscription
  );

  const [transcriptionInEnglish, setTranscriptionInEnglish] = useState(false);

  const changeCurrentAudioTranscription = (currentAudioTranscription: AudioTranscription) => {
    navigate(`/spanish/listening-comprehension/${currentAudioTranscription.slugName}`);
    setCurrentAudioTranscription(currentAudioTranscription);
  };

  const toggleTranscriptionLanguage = () => setTranscriptionInEnglish(!transcriptionInEnglish);

  useEffect(() => {
    const settings = [
      topicSlug
    ]
    navigate(`/spanish/listening-comprehension/${topicSlug}`);

  }, [
    currentLanguage.languageName, topicSlug, currentAudioTranscription.slugName, navigate ]);

  const renderListeningComprehensionTopic = () => (
    <div className="inner-audio-player-and-table-container">
      <div className="div-switch-container">
        <div style={{ marginRight: '10px', fontWeight: transcriptionInEnglish ? '600' : 'normal' }}>
          English
        </div>
        <CustomSwitch
          onChange={toggleTranscriptionLanguage}
          checked={!transcriptionInEnglish}
        />
        <div style={{ marginLeft: '10px', fontWeight: transcriptionInEnglish ? 'normal' : '600' }}>
          {currentLanguage.languageName}
        </div>
      </div>
      <Table striped bordered hover size="sm" className="transcription-table">
        <thead>
          <tr>
            <th>Audio</th>
            <th>Transcription ({transcriptionInEnglish ? 'English' : currentLanguage.languageName})</th>
          </tr>
        </thead>
        <tbody>
          {currentAudioTranscription.contents.map((content: Paragraph, index: number) => (
            <>
              {index !== 0 && (
                <tr>
                  <td colSpan={2} style={{ textAlign: 'center' }}></td>
                </tr>
              )}
              <tr>
                <td style={{ height: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <AudioPlayer audioFile={content.audioFile} />
                  </div>
                </td>
                <td>{transcriptionInEnglish ? content.englishText : content.foreignText}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  );

  return (
    <>
      <h4>{currentLanguage.languageName} Listening Comprehension</h4>
      <Container>
        <NavbarBs>
          <Container className="listening-comprehension-container">
            <div className="inner-listening-comprehension-container">
              <CustomDropDownButton title={`Topic: ${currentAudioTranscription.name}`}>
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
      </Container>
    </>
  );
};

export default ListeningComprehensionContent;