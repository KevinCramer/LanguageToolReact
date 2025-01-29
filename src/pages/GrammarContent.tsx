import { GrammarLanguage, Topic } from '../../types/learningSections/GrammarTypes';
import { setBackwardRoute, setForwardRoute } from '../redux-store/route';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { languages } from '../data/structured-data/grammar';
import { consistentStyles, lingoCommandHasLoginLock } from '../constants';
import DropdownButton from '../components/molecules/dropdownButton';
import LockIcon from '@mui/icons-material/Lock';
import PageTitle from '../components/atoms/PageTitle';
import { useAuth } from '../contexts/AuthContext';
import { useDispatch } from 'react-redux';

const GrammarContent = (props: { languageNumber: number }) => {
  const navigate = useNavigate();
  const { topicSlug } = useParams(); // Extract the topicSlug from the URL

  //@ts-ignore
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  const location = useLocation();
  
  const userIsLoggedIn = currentUser && currentUser.email;

  var currentLanguage: GrammarLanguage = languages[props.languageNumber];

  var currentTopic = (currentLanguage.topics as Topic[])
    .find(t => t.slugName === topicSlug) || currentLanguage.topics[0];
  var [currentTopic, setCurrentTopic] = useState(currentTopic);

  const changeCurrentTopic = (topic: Topic) => {
    if(topic.hasLoginLock && lingoCommandHasLoginLock && !userIsLoggedIn ){
      dispatch(setBackwardRoute(location.pathname + location.search));
      dispatch(setForwardRoute((location.pathname + location.search)
        .replace(/(?<=\?s=)[^=-]+(?=-)/, topic.slugName)));
      navigate('/free-content')
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
    <div className="max-w-screen-md mx-auto px-4">
      <PageTitle title={`${languages[props.languageNumber].languageName} Grammar`} />
      <div>
        <div className="relative flex justify-center">
          <div className="relative" ref={dropdownRef}>
          
            <DropdownButton text={`Topic: ${currentTopic.name}`} onClick={toggleTopicDropdown} />
            {isTopicDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow w-64 z-10">
                <ul className="divide-y divide-gray-200">
                  {currentLanguage.topics.map((topic: Topic, index: number) => (
                    <li
                      key={index}
                      className={`${consistentStyles.textBlack} px-4 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-200`}

                      onClick={() => changeCurrentTopic(topic)}
                    >
                      <div className="flex items-center">
                        {topic.name}
                        {topic.hasLoginLock && lingoCommandHasLoginLock && !userIsLoggedIn && (
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
        <p></p>
        <div className={`${consistentStyles.textBlack}`}>{ShowGrammarExplanation()}</div>
      </div>
    </div>
  );
};

export default GrammarContent;
