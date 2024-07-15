import './ListeningComprehension.css'
import { AudioTranscription, Language, Paragraph } from '../../../types/listeningComprehension';
import { Container, Navbar as NavbarBs, Table } from 'react-bootstrap';
import { queryParamCompress, queryParamDecompress } from '../../helpers/queryParamHelpers'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { languages as allLanguages } from '../../data/structured-data/listeningComprehension'
import AudioPlayer from '../../components/atoms/CustomAudioPlayer/CustomAudioPlayer';
import CustomButton from '../../components/atoms/CustomDropDownButton/CustomDropDownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { languageToSlugs } from '../../constants'

const ListeningComprehensionContent = () => {
  let languages = allLanguages
  languages = languages.filter(l => l.languageName === 'Spanish')

  const navigate = useNavigate();
  var urlSearchParams = new URLSearchParams(useLocation().search);
  const urlSettings = JSON.parse(
    queryParamDecompress(urlSearchParams.get('s') as string) as string
  ) || []
  const urlLanguage = urlSettings[0]
  var currentLanguage: Language = languages
    .find(l => languageToSlugs[l.languageName] === urlLanguage) || languages[0]
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
        <AudioPlayer audioFile={currentAudioTranscription.audioFile} />
        <div className='inner-audio-player-and-table-container'>
          <Table striped bordered hover size="sm" className='transcription-table'>
            <thead>
              <tr>
                <th>{currentLanguage.languageName }</th>
                <th>{'English' }</th>
              </tr>
            </thead>
            <tbody>
              {currentAudioTranscription.contents.map((content: Paragraph, index: number) => (
                <>
                  { index !== 0 && (<tr key={-index}>
                    <td></td>
                    <td></td>
                  </tr> )}
                  <tr key={index}>
                    <td>{ content.foreignText}</td>
                    <td>{content.englishText}</td>
                  </tr>
                </>      
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }

  return (
    <>
      <h4>Listening Comprehension</h4>
      <Container>    
        <NavbarBs>
          <Container className='listening-comprehension-container'>
            <div className='inner-listening-comprehension-container'>
              <CustomButton title=
                {String(currentLanguage.languageName)}> 
                {languages.map((language: Language, index: number) =>
                  <Dropdown.Item key = {index} onClick = {() => [changeCurrentLanguage(
                    language),changeCurrentAudioTranscription(language.audioTranscriptions[0]) ]}>
                    {language.languageName}</Dropdown.Item>)}
              </CustomButton>
              <CustomButton title={'Topic: ' + currentAudioTranscription.name}>
                {currentLanguage.audioTranscriptions
                  .map((topic: AudioTranscription, index: number) =>
                    <Dropdown.Item key = {index} onClick = {() => 
                      changeCurrentAudioTranscription(topic)}>{topic.name}</Dropdown.Item>)}
              </CustomButton>
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
