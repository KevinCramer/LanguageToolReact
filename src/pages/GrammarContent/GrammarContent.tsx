
import './GrammarContent.scss'
import { Container, Navbar as NavbarBs } from 'react-bootstrap';
import { Language, Topic } from '../../../types/grammarTypes';
import { queryParamCompress, queryParamDecompress } from '../../helpers/query-param-helpers'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomDropDownButton from '../../components/atoms/CustomDropDownButton/CustomDropDownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { languages } from '../../data/structured-data/grammar';
import { languageToSlugs } from '../../constants'

const GrammarContent = () => {
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
  var currentTopic = (currentLanguage.topics as Topic[])
    .find(t => t.slugName === urlTopic) || currentLanguage.topics[0]
  var [currentTopic,setCurrentTopic] = useState(currentTopic)

  const changeCurrentLanguage = 
    ( language: Language) => setLanguage(language);
  const changeCurrentTopic = (topic: Topic) => { return setCurrentTopic(topic);}

  useEffect(() => {
    const settings = [
      languageToSlugs[currentLanguage.languageName],
      currentTopic.slugName, 
      true,
      0, 
      true,
      false,
      false
    ]
    navigate(`?s=${queryParamCompress(JSON.stringify(settings))}`);

  }, [
    currentLanguage.languageName, currentTopic.slugName, navigate ]);
  function ShowGrammarExplanation(){
    return (
      <div className='inner-grammar-explanation-container'>
        {currentTopic.contents.map((content: string, index: number) =>
          <div key = {index}>
            {content}
          </div>                    
        )}
      </div>
    )
  }

  return (
    <>
      <h4>Grammar</h4>
      <Container>    
        <NavbarBs>
          <Container className='grammar-container'>
            <div className='inner-grammar-container'>
              <CustomDropDownButton title=
                {String(currentLanguage.languageName)}> 
                {languages.map((language: Language, index: number) =>
                  <Dropdown.Item key = {index} onClick = {() => [changeCurrentLanguage(
                    language)]}>
                    {language.languageName}</Dropdown.Item>)}
              </CustomDropDownButton>
              <CustomDropDownButton title={'Topic: ' + currentTopic.name}>
                {currentLanguage.topics.map((topic: Topic, index: number) =>
                  <Dropdown.Item key = {index} onClick = {() => 
                    changeCurrentTopic(topic)}>{topic.name}</Dropdown.Item>)}
              </CustomDropDownButton>
            </div>
          </Container>
        </NavbarBs>
        <p></p>
        <div className='grammar-explanation-container'>
          {ShowGrammarExplanation()}
        </div>
      </Container>
    </>
  );
}
 
export default GrammarContent;
