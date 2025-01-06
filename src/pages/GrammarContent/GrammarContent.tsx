
import { Container, Navbar as NavbarBs } from 'react-bootstrap';
import { GrammarLanguage, Topic } from '../../../types/learningSections/GrammarTypes';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomDropDownButton from '../../components/atoms/CustomDropDownButton/CustomDropDownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { languages } from '../../data/structured-data/grammar';
import { lightGrey, lingoCommandIsLocked } from '../../constants';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import { denyPermission } from '../../redux-store/lock';

const GrammarContent = (
  props: {
    languageNumber: number
    }) => {
  const navigate = useNavigate();
  const { topicSlug } = useParams(); // Extract the topicSlug from the URL
  const dispatch = useDispatch();

  //@ts-ignore
  const { currentUser } = useAuth();
  
  const userIsLoggedIn = currentUser && currentUser.email

  var currentLanguage: GrammarLanguage = languages[props.languageNumber]

  var currentTopic = (currentLanguage.topics as Topic[])
    .find(t => t.slugName === topicSlug) || currentLanguage.topics[0]
  var [currentTopic,setCurrentTopic] = useState(currentTopic)

  const changeCurrentTopic = (topic: Topic) => {
    if(topic.isLocked && lingoCommandIsLocked && !userIsLoggedIn ){
      dispatch(denyPermission());
    }
    else{
      navigate(`/${currentLanguage.languageName.toLowerCase()}/grammar/${topic.slugName}`, { replace: true });
      return setCurrentTopic(topic);}

  }

  useEffect(() => {
    const settings = [
      topicSlug
    ]
    navigate(`/${currentLanguage.languageName.toLowerCase()}/grammar/${topicSlug}`, { replace: true });

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
      <div className="page-container-no-padding-small-font">
        <div className="central-container">
          <h4> {languages[props.languageNumber].languageName} Grammar</h4>
          <Container>    
            <NavbarBs>
              <Container className='grammar-container'>
                <div className='inner-grammar-container'>
                  <CustomDropDownButton title={'Topic: ' + currentTopic.name}>
                    {currentLanguage.topics.map((topic: Topic, index: number) =>
                      <Dropdown.Item key = {index} 
                        onClick = {() => 
                          changeCurrentTopic(topic)}>
                        <div className="topic-container">
                          {topic.name} {
                            topic.isLocked 
                          && lingoCommandIsLocked 
                          && !userIsLoggedIn
                          && <LockIcon/>}
                        </div>
                      </Dropdown.Item>)}
                  </CustomDropDownButton>
                </div>
              </Container>
            </NavbarBs>
            <p></p>
            <div className='grammar-explanation-container'>
              {ShowGrammarExplanation()}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};
 
export default GrammarContent;
