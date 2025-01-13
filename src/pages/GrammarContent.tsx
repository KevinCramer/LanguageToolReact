import { Container, Navbar as NavbarBs } from 'react-bootstrap';
import { GrammarLanguage, Topic } from '../../types/learningSections/GrammarTypes';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CustomDropDownButton from '../components/atoms/CustomDropDownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { languages } from '../data/structured-data/grammar';
import { lightGrey, lingoCommandIsLocked } from '../constants';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import { denyPermission } from '../redux-store/lock';

const GrammarContent = (props: { languageNumber: number }) => {
  const navigate = useNavigate();
  const { topicSlug } = useParams(); // Extract the topicSlug from the URL
  const dispatch = useDispatch();

  //@ts-ignore
  const { currentUser } = useAuth();
  
  const userIsLoggedIn = currentUser && currentUser.email;

  var currentLanguage: GrammarLanguage = languages[props.languageNumber];

  var currentTopic = (currentLanguage.topics as Topic[])
    .find(t => t.slugName === topicSlug) || currentLanguage.topics[0];
  var [currentTopic, setCurrentTopic] = useState(currentTopic);

  const changeCurrentTopic = (topic: Topic) => {
    if (topic.isLocked && lingoCommandIsLocked && !userIsLoggedIn) {
      dispatch(denyPermission());
    } else {
      navigate(`/${currentLanguage.languageName.toLowerCase()}/grammar/${topic.slugName}`, { replace: true });
      setCurrentTopic(topic);
      setIsTopicDropdownOpen(false); // Close the dropdown after selecting an item
    }
  };

  useEffect(() => {
    const settings = [topicSlug];
    navigate(`/${currentLanguage.languageName.toLowerCase()}/grammar/${topicSlug}`, { replace: true });
  }, [currentLanguage.languageName, topicSlug, currentTopic.slugName, navigate]);

  function ShowGrammarExplanation() {
    return (
      <div>
        {currentTopic.contents.map((content: string, index: number) => (
          <div key={index}>{content}</div>
        ))}
      </div>
    );
  }

  const [isTopicDropdownOpen, setIsTopicDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleTopicDropdown = () => setIsTopicDropdownOpen(!isTopicDropdownOpen);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsTopicDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="max-w-screen-md mx-auto md:text-lg">
      <h4 className="text-center text-2xl py-12">
        {languages[props.languageNumber].languageName} Grammar
      </h4>
      <Container>
        <NavbarBs>
          <Container>
            <div className="relative flex justify-center">
              <div className="relative" ref={dropdownRef}>
                <button
                  className="border-[1px] border-b-4 text-sm border-gray-300 bg-200 text-center active:bg-gray-300 hover:bg-gray-200 p-1 pl-2 rounded-lg mb-2"
                  onClick={toggleTopicDropdown}
                >
                  <div className="flex items-center">
                    <div>Topic: {currentTopic.name}</div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2"
                    >
                      <polygon points="12,16 6,8 18,8" fill="black" />
                    </svg>
                  </div>
                </button>
                {isTopicDropdownOpen && (
                  <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow w-64 z-10">
                    <ul className="divide-y divide-gray-200">
                      {currentLanguage.topics.map((topic: Topic, index: number) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                          onClick={() => changeCurrentTopic(topic)}
                        >
                          <div className="flex items-center">
                            {topic.name}
                            {topic.isLocked && lingoCommandIsLocked && !userIsLoggedIn && (
                              <LockIcon className="ml-2" />
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </NavbarBs>
        <p></p>
        <div>{ShowGrammarExplanation()}</div>
      </Container>
    </div>
  );
};

export default GrammarContent;
