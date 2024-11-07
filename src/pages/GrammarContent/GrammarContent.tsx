
import './GrammarContent.scss'
import { Container, Navbar as NavbarBs } from 'react-bootstrap';
import { Language, Topic } from '../../../types/grammarTypes';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomDropDownButton from '../../components/atoms/CustomDropDownButton/CustomDropDownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { languages } from '../../data/structured-data/grammar';

const GrammarContent = (
  props: {
    languageNumber: number
    }) => {
  const navigate = useNavigate();
  const { topicSlug } = useParams(); // Extract the topicSlug from the URL

  var currentLanguage: Language = languages[props.languageNumber]

  var currentTopic = (currentLanguage.topics as Topic[])
    .find(t => t.slugName === topicSlug) || currentLanguage.topics[0]
  var [currentTopic,setCurrentTopic] = useState(currentTopic)

  const changeCurrentTopic = (topic: Topic) => {
    navigate(`/${currentLanguage.languageName.toLowerCase()}/grammar/${topic.slugName}`)
    return setCurrentTopic(topic);}

  useEffect(() => {
    const settings = [
      topicSlug
    ]
    navigate(`/${currentLanguage.languageName.toLowerCase()}/grammar/${topicSlug}`);

  }, [
    currentLanguage.languageName, topicSlug, currentTopic.slugName, navigate ]);
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
      <h4> {languages[props.languageNumber].languageName} Grammar</h4>
      <Container>    
        <NavbarBs>
          <Container className='grammar-container'>
            <div className='inner-grammar-container'>
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
};
 
export default GrammarContent;
