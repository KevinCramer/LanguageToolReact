import { AudioTranscription, Language, Paragraph } from '../../../types/listeningComprehension';
import { Container, Navbar as NavbarBs, Table } from 'react-bootstrap';
import { queryParamCompress, queryParamDecompress } from '../../helpers/queryParamHelpers'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { languages as allLanguages } from '../../data/structured-data/listeningComprehension'
import AudioPlayer from '../../components/atoms/CustomAudioPlayer/CustomAudioPlayer';
import Dropdown from 'react-bootstrap/Dropdown';
import { languageToSlugs } from '../../constants'
import MyButton from '../../components/atoms/MyDropDownButton/myDropDownButton';

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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <AudioPlayer audioFile={currentAudioTranscription.audioFile} />
        <div style ={{ width: '300px', height: '20px' }}></div>
        <div style={{ display: 'flex', justifyContent: 'center', }}>
          <Table striped bordered hover size="sm" style={{ width: '350px', border: '1px #AAAAAA' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'center', width: '50%' }}>
                  {currentLanguage.languageName }
                </th>
                <th style={{ textAlign: 'center', width: '50%' }}>
                  {'English' }
                </th>
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
                    <td style={{ verticalAlign: 'middle', color: '#4A4A4A' }} >
                      { content.foreignText}
                    </td>
                    <td style={{ verticalAlign: 'middle', color: '#4A4A4A' }}>     
                      {content.englishText}
                    </td>
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
    <div>
      <h4 style={{ textAlign:'center', paddingBottom: '50px' }}>Listening Comprehension</h4>
      <Container>    
        <NavbarBs>
          <Container style={{ justifyContent:'center' }}>
            <div style={{ 
              width: '400px',
              display:'flex',
              flexDirection: 'row',
              justifyContent: 'center' 
            }}>
              <MyButton title=
                {String(currentLanguage.languageName)}> 
                {languages.map((language: Language, index: number) =>
                  <Dropdown.Item key = {index} onClick = {() => [changeCurrentLanguage(
                    language),changeCurrentAudioTranscription(language.audioTranscriptions[0]) ]}>
                    {language.languageName}</Dropdown.Item>)}
              </MyButton>
              <MyButton title={'Topic: ' + currentAudioTranscription.name}>
                {currentLanguage.audioTranscriptions
                  .map((topic: AudioTranscription, index: number) =>
                    <Dropdown.Item key = {index} onClick = {() => 
                      changeCurrentAudioTranscription(topic)}>{topic.name}</Dropdown.Item>)}
              </MyButton>
            </div>
          </Container>
        </NavbarBs>
        <p></p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {showListeningComprehensionTopic()}
        </div>
      </Container>
    </div>
  );
}
 
export default ListeningComprehensionContent;
