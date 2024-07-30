import './ListeningComprehension.scss'
import { AudioTranscription, Language, Paragraph } from '../../../types/listeningComprehension';
import { Container, Navbar as NavbarBs, Table } from 'react-bootstrap';
import { queryParamCompress, queryParamDecompress } from '../../helpers/query-param-helpers'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { languages as allLanguages } from '../../data/structured-data/listeningComprehension'
import AudioPlayer from '../../components/atoms/CustomAudioPlayer/CustomAudioPlayer';
import CustomDropDownButton from '../../components/atoms/CustomDropDownButton/CustomDropDownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { languageToSlugs } from '../../constants'
import CustomSwitch from '../../components/atoms/CustomSwitch/CustomSwitch';

const ListeningComprehensionContent = (
  props: {
    languageNumber: number
    }) => {
  let languages = allLanguages
  languages = languages.filter(l => l.languageName === 'Spanish')

  const navigate = useNavigate();

  var transcriptionInEnglish = false
  var [transcriptionInEnglish,setTranscriptionInEnglish] = useState(transcriptionInEnglish)
  const changeTranscriptionInEnglishState = () => {
    return setTranscriptionInEnglish((!transcriptionInEnglish))}

  var urlSearchParams = new URLSearchParams(useLocation().search);
  const urlSettings = JSON.parse(
    queryParamDecompress(urlSearchParams.get('s') as string) as string
  ) || []
  const urlLanguage = urlSettings[0]
  var currentLanguage: Language = languages
    .find(l => languageToSlugs[l.languageName] === urlLanguage) || languages[props.languageNumber]
  var [currentLanguage,setLanguage] = useState(currentLanguage);

  const urlTopic = urlSettings[1]
  var currentAudioTranscription = (currentLanguage.audioTranscriptions as AudioTranscription[])
    .find(t => t.slugName === urlTopic) || currentLanguage.audioTranscriptions[0]
  var [currentAudioTranscription,setCurrentAudioTranscription] = useState(
    currentAudioTranscription)

  const changeCurrentLanguage = 
    ( language: Language) => setLanguage(language);
  const changeCurrentAudioTranscription = (topic: AudioTranscription) => { 
    return setCurrentAudioTranscription(topic);}

  useEffect(() => {
    const settings = [
      languageToSlugs[currentLanguage.languageName],
      currentAudioTranscription.slugName, 
      true,
      0, 
      true,
      false,
      false
    ]
    navigate(`?s=${queryParamCompress(JSON.stringify(settings))}`);

  }, [
    currentLanguage.languageName, currentAudioTranscription.slugName, navigate ]);

  function showListeningComprehensionTopic(){
    return (
      <div className='inner-audio-player-and-table-container'>
        <div className='div-switch-container'>
          <div style={{ marginRight: '10px', fontWeight: transcriptionInEnglish ? 'normal' : '600' }}>
                English
          </div>
          <CustomSwitch 
            onChange = {changeTranscriptionInEnglishState}
            checked= {!transcriptionInEnglish} 
          /> 
          <div style = {{ marginLeft: '10px', fontWeight: transcriptionInEnglish ? '600' : 'normal' }}>
            {currentLanguage.languageName}
          </div>  
        </div>    
        <Table striped bordered hover size="sm" className='transcription-table' >
          <thead>
            <tr>
              <th>Audio</th>
              <th>Transcription ({transcriptionInEnglish ? 'English' : currentLanguage.languageName })</th>
            </tr>
          </thead>
          <tbody>
            {currentAudioTranscription.contents.map((content: Paragraph, index: number) => (
              <>
                {index !== 0 && (<tr key={-index}>
                  <td colSpan={2} style={{ textAlign:'center' }}>
                  </td>
                </tr> )}
                <tr key={index}>
                  <td style={{ height: '10px' }}>      
                    <div style={{ display:'flex', alignItems: 'center', height: '100%' }}>
                      <AudioPlayer audioFile={content.audioFile} />
                    </div>   
                  </td>
                  <td>{ transcriptionInEnglish ? content.foreignText : content.englishText}</td>
                </tr>
              </>      
            ))}
          </tbody>
        </Table>
      </div>
    )
  }

  return (
    <>
      <h4>{languages[props.languageNumber].languageName} Listening Comprehension</h4>
      <Container>    
        <NavbarBs>
          <Container className='listening-comprehension-container'>
            <div className='inner-listening-comprehension-container'>
              <CustomDropDownButton title={'Topic: ' + currentAudioTranscription.name}>
                {currentLanguage.audioTranscriptions
                  .map((topic: AudioTranscription, index: number) =>
                    <Dropdown.Item key = {index} onClick = {() => 
                      changeCurrentAudioTranscription(topic)}>{topic.name}</Dropdown.Item>)}
              </CustomDropDownButton>
            </div>
          </Container>
        </NavbarBs>
        <div className='audio-player-and-table-container '>
          {showListeningComprehensionTopic()}
        </div>
      </Container>
    </>
  );
}
 
export default ListeningComprehensionContent;
