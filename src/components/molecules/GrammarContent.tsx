import {useState } from 'react';
import {Container, Navbar as NavbarBs} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {languages} from '../../data/grammar';

const VocabContent = () => {
  var currentLanguage: any = languages[0]
  var [currentLanguage,setLanguage] = useState(currentLanguage);

  var currentTopic = currentLanguage.topics[0]
  var [currentTopic,setCurrentTopic] = useState(currentTopic)

  const changeCurrentLanguage = 
    ( language: any) => setLanguage(language);
  const changeCurrentTopic = (topic: any) => { return setCurrentTopic(topic);}

  function ShowGrammarExplanation(){
    return (
      <div style={{textAlign:'center'}}>
        {currentTopic.content}
      </div>
    )
  }

  return (
    <div>
      <Container>    
        <NavbarBs>
          <Container style={{justifyContent:'center'}}>
            <DropdownButton style={{margin: '0px 20px 0px 20px'}} variant= 'secondary'
              id="Languages" title=
                {String(currentLanguage.languageName)} size = "sm"> 
              {languages.map((languageItem: any) =>
                <Dropdown.Item onClick = {() => [changeCurrentLanguage(
                  languageItem)]}>
                  {languageItem.languageName}</Dropdown.Item>)}
            </DropdownButton>
            <DropdownButton style={{margin: '0px 20px 0px 20px'}} variant= 'secondary'
              id="Topics" title={'Topic: ' + currentTopic.name} size = "sm">
              {currentLanguage.topics.map((topic: any) =>
                <Dropdown.Item onClick = {() => 
                  changeCurrentTopic(topic)}>{topic.name}</Dropdown.Item>)}
            </DropdownButton>
          </Container>
        </NavbarBs>
        <p></p>
        {ShowGrammarExplanation()}
      </Container>
    </div>
  );
}
 
export default VocabContent;
