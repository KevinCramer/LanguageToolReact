import { Container, Navbar as NavbarBs, Table } from 'react-bootstrap';
import {
  Language,
  Topic, 
  VerbConjugationEnglish,
  Word,
  Word1, 
  Word2, 
  Word3 
} from '../../types/vocabTypes'
import { queryParamCompress, queryParamDecompress } from '../helpers/queryParamHelpers'
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { languages as allLanguages } from '../data/words';
import Dropdown from 'react-bootstrap/Dropdown';
import { languageToSlugs } from '../constants'
import { nullOrUndefined } from '../helpers/helperFunctions'
import QuizElement from '../components/atoms/QuizElement';
import { scramble } from '../helpers';
import StudyElement from '../components/molecules/StudyElement';
import '../components/atoms/MyDropDownButton/myDropDownButton.css'
import MyButton from '../components/atoms/MyDropDownButton/myDropDownButton';
import MySwitch from '../components/atoms/MySwitch/mySwitch';
const VocabContent = () => {
  let languages = allLanguages

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
  var currentTopic: Topic = (currentLanguage.topics as Topic[])
    .find(t => t.slugName === urlTopic) || currentLanguage.topics[0]
  var [currentTopic,setCurrentTopic] = useState(currentTopic)
 
  const urlShowBaseLanguage = urlSettings[2]
  var showBaseLanguage = !nullOrUndefined(urlShowBaseLanguage) ? urlShowBaseLanguage : true
  var [showBaseLanguage,setShowBaseLanguage] = useState(showBaseLanguage)
  const changeBaseLanguage = () => { return setShowBaseLanguage(!showBaseLanguage)}

  const urlCurrentAlphabet = urlSettings[3]
  var currentAlphabet: number = parseInt(urlCurrentAlphabet as string) || 0;
  var [currentAlphabet,setCurrentAlphabet] = useState(currentAlphabet)
  const changeCurrentAlphabet = () => { return setCurrentAlphabet(
    currentAlphabet = (currentAlphabet + 1) % currentLanguage.numForeignAlphabets)}

  const urlShowTrueOrder = urlSettings[4]
  var showTrueOrder = !nullOrUndefined(urlShowTrueOrder) ? urlShowTrueOrder : true
  var [showTrueOrder,setShowTrueOrder] = useState(showTrueOrder)
  const changeOrder = () => { return setShowTrueOrder(!showTrueOrder)}
  const changeCurrentLanguage = 
    ( language: Language) => {
      return setLanguage(language)
      ;
    };
  const changeCurrentTopic = (topic: Topic) => {
    return setCurrentTopic(topic);
  }

  const urlQuiz = urlSettings[5]
  var quiz = !nullOrUndefined(urlQuiz) ? urlQuiz : false
  var [quiz,setQuiz] = useState(quiz)
  const changeQuizState = () => {
    return setQuiz((!quiz))}

  const urlAudio = urlSettings[6]
  var audioBool = !nullOrUndefined(urlAudio) ? urlAudio : false 
  var [audioBool,setAudioBool] = useState(audioBool)
  const changeAudioBool = () => { return setAudioBool(!audioBool)}

  // Ensure default language is reflected in the URL if not already present
  useEffect(() => {
    const settings = [
      languageToSlugs[currentLanguage.languageName],
      currentTopic.slugName, 
      showBaseLanguage,
      currentAlphabet, 
      showTrueOrder,
      quiz,
      audioBool
    ]
    navigate(`?s=${queryParamCompress(JSON.stringify(settings))}`);

  }, [
    currentLanguage.languageName, currentTopic.slugName, showBaseLanguage,
    currentAlphabet,showTrueOrder,quiz,audioBool, navigate ]);
  
  function ToggleQuiz(){
    if (quiz) {
      const isVerb = currentTopic.name === 'Verbs'
      var count = 0;
      return ( 
        <div>
          {topicWords.map((pair: Word) =>
            <div key ={showTrueOrder.toString() + (isVerb ?
              (pair.englishWord as VerbConjugationEnglish).infinitive : pair.englishWord)
               + pair.foreignWord[currentAlphabet] + showBaseLanguage}>
              <QuizElement myCounter = {count += 1} questionWord = { showBaseLanguage ? 
                pair.englishWord : pair.foreignWord[currentAlphabet] }
              answerWord = {showBaseLanguage ? pair.foreignWord[currentAlphabet] :
                pair.englishWord} isVerb = {currentTopic.name === 'Verbs'}/>
            </div>                    
          )}
        </div>
      )
    }
    else {
      return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <title>Vocab</title>
          <Table striped bordered hover size="sm" style={{ width: '400px', border: '1px #AAAAAA' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'center', width: '50%', color: '#4A4A4A' }}>
                  {showBaseLanguage ? 'English' : currentLanguage.languageName }
                </th>
                <th style={{ textAlign: 'center', width: '50%', color: '#4A4A4A' }}>
                  {showBaseLanguage ? currentLanguage.languageName : 'English' }
                </th>
              </tr>
            </thead>
            <tbody>
              {topicWords.map((pair: Word, index: number) => (
                <tr key={index}>
                  <td style={{ verticalAlign: 'middle' }} >     
                    <StudyElement 
                      BaseLanguageWord = { showBaseLanguage ? pair.englishWord :
                        pair.foreignWord[currentAlphabet]} 
                      ForeignLanguageWord = {showBaseLanguage ? 
                        pair.foreignWord[currentAlphabet] : pair.englishWord}  
                      ForeignLanguageWordAudio = {pair.foreignAudio} 
                      showAudio = {audioBool} 
                      showBaseLanguageFirst = {showBaseLanguage} 
                      isVerb = {currentTopic.name === 'Verbs'}
                      pronouns = {currentLanguage.pronouns}
                      showLeftLabel = {true}
                    />
                  </td>
                  <td style={{ verticalAlign: 'middle' }}>     
                    <StudyElement 
                      BaseLanguageWord = { showBaseLanguage ? pair.englishWord :
                        pair.foreignWord[currentAlphabet]} 
                      ForeignLanguageWord = {showBaseLanguage ? 
                        pair.foreignWord[currentAlphabet] : pair.englishWord}  
                      ForeignLanguageWordAudio = {pair.foreignAudio} 
                      showAudio = {audioBool} 
                      showBaseLanguageFirst = {showBaseLanguage} 
                      isVerb = {currentTopic.name === 'Verbs'}
                      pronouns = {currentLanguage.pronouns}
                      showLeftLabel = {false}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )
    }
  }
  if(showTrueOrder)
  {
    var topicWords = currentTopic.words
    if(currentTopic.hasOrdering){
      topicWords.sort((a: Word,
        b: Word) => (a.order || 0) < (b.order || 0) ? -1 : 1)
    }
    else {
      topicWords.sort((a: Word,
        b: Word) => 
      {
        const aInfinitive = (a.englishWord as unknown as VerbConjugationEnglish).infinitive
        const bInfinitive = (b.englishWord as unknown as VerbConjugationEnglish).infinitive
        // aInfinitive is only truthy when a (and thus b) are verbs,
        if(aInfinitive) {
          // sort by infinitive property
          return aInfinitive < bInfinitive ? -1 : 1
        }
        else {
          return a.englishWord < b.englishWord ? -1 : 1
        }
         
      }
      )
    }
  }
  else
  {
    var topicWords = scramble(
      currentTopic.words as (Word)[]) as Word1[] | Word2[] | Word3[]
      
  }
  return (
    <div>
      <h4 style={{ textAlign:'center', paddingBottom: '50px' }}>Vocabulary</h4>
      <Container >    
        <NavbarBs>
          <Container style={{ display: 'flex', justifyContent:'center' }}>
            <div style={{ width: '400px', display:'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <MyButton title={currentLanguage.languageName}>
                {languages.map((languageItem: Language, index: number) =>
                  <Dropdown.Item key = {index} onClick = {() => [changeCurrentLanguage(
                    languageItem),
                  setCurrentAlphabet(0),changeCurrentTopic(languageItem.topics[0]) ]}>
                    {languageItem.languageName}</Dropdown.Item>)}
              </MyButton>
              <MyButton title={'Topic: ' + currentTopic.name}>
                {(currentLanguage.topics as Topic[])
                  .map((topic: Topic, index: number) =>
                    <Dropdown.Item key = {index} onClick = {() => 
                      changeCurrentTopic(topic)}>{topic.name}</Dropdown.Item>)}
              </MyButton>
              <MyButton title="Settings" align="end">
                <Dropdown.Item onClick = {changeBaseLanguage}>toggle base language</Dropdown.Item>
                <Dropdown.Item onClick = {() => changeAudioBool()}>
                  {audioBool ? 'hide audio' : 'show audio'}</Dropdown.Item>
                <Dropdown.Item onClick = {changeOrder}>
                  {showTrueOrder ? 'random ordering' : 'default ordering'}</Dropdown.Item>
                {currentLanguage.numForeignAlphabets > 1 && !currentTopic.isAlphabet &&
              <Dropdown.Item onClick = {changeCurrentAlphabet}>
                toggle foreign alphabet</Dropdown.Item>}
              </MyButton>   
            </div>             
          </Container>
        </NavbarBs>
        <NavbarBs>
          <Container style={{ display: 'flex', justifyContent:'center' }}>
            <div style={{ display: 'flex', flexDirection:'row' , }}>
              <div style={{ marginRight: '10px', fontWeight: quiz ? 'normal' : '600' }}>Study</div>
              <MySwitch 
                onChange = {changeQuizState}
                checked= {quiz} 
              /> 
              <div style = {{ marginLeft: '10px', fontWeight: quiz ? '600' : 'normal' }}>
                 Quiz
              </div>               
            </div>
          </Container>
          
        </NavbarBs>
        <p></p>
        {ToggleQuiz()}
      </Container>
    </div>
  );
}
 
export default VocabContent;