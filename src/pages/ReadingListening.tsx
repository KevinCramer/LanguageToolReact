import { AudioTranscription, ReadingListeningLanguage, TranscriptionType } 
  from '../../types/learningSections/ReadingListeningTypes';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { languages as allLanguages } from '../data/structured-data/readingListening';
import CustomSwitch from '../components/atoms/CustomSwitch';
import { denyPermission } from '../redux-store/lock';
import { lingoCommandIsLocked } from '../constants';
import LockIcon from '@mui/icons-material/Lock';
import RenderTableCell from '../components/molecules/RenderTableCell';
import { useAuth } from '../contexts/AuthContext';
import { useDispatch } from 'react-redux';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    // Update the windowWidth state when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
  
    // Add event listener to handle window resizing
    window.addEventListener('resize', handleResize);
  
    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return windowWidth;
};

const ReadingListeningContent = (props: { languageNumber: number; howToGuideVideo?: any }) => {
  const dispatch = useDispatch();

  //@ts-ignore
  const { currentUser } = useAuth();
  const userIsLoggedIn = currentUser && currentUser.email;

  const navigate = useNavigate();
  const { topicSlug } = useParams();
  const location = useLocation();

  const currentLanguage: ReadingListeningLanguage = allLanguages[props.languageNumber];

  const initialAudioTranscription =
    currentLanguage.audioTranscriptions.find((t) => t.slugName === topicSlug) 
    || currentLanguage.audioTranscriptions[0];

  const queryParams = new URLSearchParams(location.search);
  const initialLeft =
    queryParams.get('L') ||
    (currentLanguage.numForeignAlphabets > 1 ? TranscriptionType.WritingSystem3 : 
      TranscriptionType.WritingSystem1);
  const initialRight = queryParams.get('R') || TranscriptionType.English;
  const initialGranularity = queryParams.get('gran') || 'paragraph';

  const [currentAudioTranscription, setCurrentAudioTranscription] =
    useState<AudioTranscription>(initialAudioTranscription);

  const changeTranscription = (topic: AudioTranscription) => {
    if(topic.isLocked && lingoCommandIsLocked && !userIsLoggedIn ){
      dispatch(denyPermission());
    }
    else{
      navigate(`/${currentLanguage.languageName
        .toLowerCase()}/reading-listening/${topic.slugName}`, { replace: true });
      return setCurrentAudioTranscription(topic);
    }
  }

  const [granularity, setGranularity] = useState(initialGranularity); 

  const [isTopicDropdownOpen, setIsTopicDropdownOpen] = useState(false);
  const [isSettingsDropdownOpen, setIsSettingsDropdownOpen] = useState(false);

  const [isLeftDropdownOpen, setIsLeftDropdownOpen] = useState(false);
  const [isRightDropdownOpen, setIsRightDropdownOpen] = useState(false);

  const topicDropdownRef = useRef<HTMLDivElement | null>(null);
  const leftDropdownRef = useRef<HTMLDivElement | null>(null);
  const rightDropdownRef = useRef<HTMLDivElement | null>(null);
  const settingsDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (topicDropdownRef.current && !topicDropdownRef.current.contains(event.target as Node)) {
        setIsTopicDropdownOpen(false);
      }
      if (leftDropdownRef.current && !leftDropdownRef.current.contains(event.target as Node)) {
        setIsLeftDropdownOpen(false);
      }
      if (rightDropdownRef.current && !rightDropdownRef.current.contains(event.target as Node)) {
        setIsRightDropdownOpen(false);
      }
      if (settingsDropdownRef.current && !settingsDropdownRef
        .current.contains(event.target as Node)) {
        setIsSettingsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTopicDropdown = () => setIsTopicDropdownOpen(!isTopicDropdownOpen);
  const toggleSettingsDropdown = () => setIsSettingsDropdownOpen(!isSettingsDropdownOpen);

  const preventDropdownClose = (event: any) => {
    event.stopPropagation(); // Prevent click event from closing the dropdown
  };

  const [currentLeft, setCurrentLeft] = useState(initialLeft);
  const [currentRight, setCurrentRight] = useState(initialRight);
  const [leftVisibility, setLeftVisibility] = useState(true);
  const toggleLeftVisibility = () => { return setLeftVisibility(!leftVisibility)}
  const toggleRightVisibility = () => { return setRightVisibility(!rightVisibility)}
  const toggleGranularity = () => { return setGranularity(granularity === 'sentence' 
    ? 'paragraph' : 'sentence')}

  const [rightVisibility, setRightVisibility] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);

  const toggleLeftDropdown = () => setIsLeftDropdownOpen(!isLeftDropdownOpen);
  const toggleRightDropdown = () => setIsRightDropdownOpen(!isRightDropdownOpen);

  const titleMap: Record<TranscriptionType, string> = {
    [TranscriptionType.Audio]: `${currentLanguage.languageName} Audio`,
    [TranscriptionType.English]: 'English Transcription',
    [TranscriptionType.WritingSystem1]: `${currentLanguage.languageName} ${
      currentLanguage.numForeignAlphabets > 1 ? '(Roman Alphabetisation)' : ''
    }`,
    [TranscriptionType.WritingSystem2v2]: 
    `${currentLanguage.languageName} (Hiragana and Katakana with spacing)`,
    [TranscriptionType.WritingSystem2]: `${currentLanguage.languageName} (Hiragana and Katakana)`,
    [TranscriptionType.WritingSystem3]:
     `${currentLanguage.languageName} (Hiragana, Katakana, and Kanji)`,
  };

  const updateURL = (slugName: string, left: TranscriptionType,
    right: TranscriptionType, granularity: string) => {
    const query = new URLSearchParams(location.search);
    query.set('L', left);
    query.set('R', right);
    query.set('gran', granularity)
    navigate(`/${currentLanguage.languageName
      .toLowerCase()}/reading-listening/${slugName}?${query.toString()}`, {
      replace: true,
    });
  };

  useEffect(() => {
    updateURL(topicSlug as string, currentLeft as TranscriptionType,
       currentRight as TranscriptionType, granularity);
  }, [ currentLeft, currentRight, topicSlug, granularity]);

  const renderDropdownItems = (current: TranscriptionType, changeHandler:
    (type: TranscriptionType) => void, side: string) => {
    return Object.entries(titleMap).map(([key, title]) => {
      const transcriptionType = key as TranscriptionType;
      const showCondition =
      transcriptionType !== TranscriptionType.Audio &&
      transcriptionType !== TranscriptionType.English &&
      parseInt(transcriptionType.slice(-1)) > currentLanguage.numForeignAlphabets;

      if (showCondition) return null;

      // Check if the current transcription type is the selected one
      const isSelected = transcriptionType === current;

      return (
        <li
          key={key}
          onClick={() => {
            changeHandler(transcriptionType);
            side === 'Left' ? setIsLeftDropdownOpen(false) : setIsRightDropdownOpen(false);
          }}
          className={`px-4 py-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-200 ${isSelected ? 'bg-gray-100' : ''}`}
        >
          {title}
        </li>
      );
    });
  };

  const renderReadingListeningTopic = () => {
    const rowsToRender = granularity === 'sentence'
      ? currentAudioTranscription.contents.flatMap((content) =>
        content.sentences.map((sentence) => ({
          sentences: [sentence], 
          audioFile: content.audioFile,
        }))
      )
      : currentAudioTranscription.contents.map((content) => ({
        sentences: content.sentences,
        audioFile: content.audioFile,
      }));

    return (
      
      <div className=' mx-2 md:mx-4'>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              {['Left', 'Right'].map((side) => (
                <th
                  key={side}
                  className="border border-gray-300 px-4 py-2 w-1/2 text-center font-normal"
                >
                  <div className="relative">
                    <button
                      className="border-[1px] border-b-4 text-sm border-gray-300 bg-200 text-center active:bg-gray-300 hover:bg-gray-200  p-1 pl-2 rounded-lg mb-2"
                      onClick={() => side === 'Left' ? toggleLeftDropdown() : toggleRightDropdown()}
                    >
                      <div className='flex'>
                        {titleMap[
                (side === 'Left' ? currentLeft : currentRight) as TranscriptionType
                        ].length > 20
                          ? `${titleMap[(side === 'Left' ? currentLeft :
                            currentRight) as TranscriptionType].substring(0, isMobile ? 12 : 20)}...`
                          : titleMap[(side === 'Left' ? currentLeft : 
                            currentRight) as TranscriptionType]}
                        <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <polygon points="12,16 6,8 18,8" fill="black" />
                        </svg>
                      </div>
                    </button>

                    {(side === 'Left' ? isLeftDropdownOpen : isRightDropdownOpen) && (
                      <div ref={side === 'Left' ? leftDropdownRef : rightDropdownRef}
                        className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-300 rounded-lg shadow w-44 md:w-64 z-10">                        
                        <ul className="divide-y divide-gray-200">
                          {renderDropdownItems(
        (side === 'Left' ? currentLeft : currentRight) as TranscriptionType,
        side === 'Left' ? setCurrentLeft : setCurrentRight,
        side // Pass the side ('Left' or 'Right')
                          )}
                        </ul>
                      </div>
                    )}

                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowsToRender.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2 align-top">
                  <RenderTableCell
                    current={currentLeft as TranscriptionType}
                    visibility={leftVisibility}
                    sentences={row.sentences}
                    audioFile={row.audioFile}
                    granularity={granularity}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 align-top">
                  <RenderTableCell
                    current={currentRight as TranscriptionType}
                    visibility={rightVisibility}
                    sentences={row.sentences}
                    audioFile={row.audioFile}
                    granularity={granularity}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const width = useWindowWidth(); // Get the current window width

  // Now you can use width to check screen size in your component
  const isMobile = width < 768; 
  return (
    <div className='text-lg md:text-xl'>
      <h4 className='text-center text-2xl py-12'>
        {currentLanguage.languageName} Reading and Listening Comprehension
      </h4>
      <div className='flex justify-center'>
        <span
          className="text-blue-500 underline text center"
          onClick={() => setShowPopUp(true)}
        >
          How to Guide (Video)
        </span>
      </div>
      <div className="max-w-7xl mx-auto py-4">
        <div className='flex justify-center'>
          <div className="relative px-2" ref={topicDropdownRef}>
            <button
              className="border-[1px] border-b-4 text-sm border-gray-300 bg-200 text-center active:bg-gray-300 hover:bg-gray-200  p-1 pl-2 rounded-lg mb-2"
              onClick={toggleTopicDropdown}
            >
              <div className='flex'>
                <div>
              Topic:{' '}
                  {currentAudioTranscription.name.length > 25
                    ? `${currentAudioTranscription.name.substring(0, 25)}...`
                    : currentAudioTranscription.name}
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="12,16 6,8 18,8" fill="black" />
                </svg>
              </div>
            </button>
            {isTopicDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white border
               border-gray-300 rounded-lg shadow w-64 z-10">
                <ul className="divide-y divide-gray-200">
                  {currentLanguage.audioTranscriptions
                    .map((topic, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        onClick={() => changeTranscription(topic)}
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
          <div className="relative px-2" ref={settingsDropdownRef}>
            <button
              className="border-[1px] border-b-4 text-sm border-gray-300 bg-200 text-center active:bg-gray-300 hover:bg-gray-200  p-1 pl-2 rounded-lg mb-2"
              onClick={toggleSettingsDropdown}
            >
              <div className='flex'>
                <div>
                Settings
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="12,16 6,8 18,8" fill="black" />
                </svg>
              </div> 
            </button>
            {isSettingsDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border
               border-gray-300 rounded-lg shadow w-64 z-10">
                <ul className="divide-y divide-gray-200 text-sm">
                  <li
                    onClick={(event) => {
                      toggleLeftVisibility();
                      preventDropdownClose(event);
                    }}
                    className={`cursor-pointer hover:bg-gray-200 p-2 flex items-center ${!rightVisibility ? 'pointer-events-none opacity-50' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={!leftVisibility}
                      onChange={toggleLeftVisibility}
                      disabled={!rightVisibility}
                      className="mr-2 cursor-pointer w-4 h-4"
                      key={leftVisibility as any}
                    />
          Hide left column
                  </li>
                  <li
                    onClick={(event) => {
                      toggleRightVisibility();
                      preventDropdownClose(event);
                    }}
                    className={`cursor-pointer hover:bg-gray-200 p-2 flex items-center ${!leftVisibility ? 'pointer-events-none opacity-50' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={!rightVisibility}
                      onChange={toggleRightVisibility}
                      disabled={!leftVisibility}
                      className="mr-2 cursor-pointer w-4 h-4"
                      key={rightVisibility as any}
                    />
          Hide right column
                  </li>
                </ul>
              </div>
            )}
          </div> 
        </div>
        <div className="flex items-center my-4 justify-center ">
          <div className='px-2' style={{ fontWeight: granularity === 'sentence'
            ? 'normal' : '600' }}>
        Paragraphs
          </div>
          <CustomSwitch 
            onChange={toggleGranularity} 
            checked= {granularity === 'sentence'} 
          /> 
          <div className='px-2'style={{ fontWeight: granularity === 'sentence' 
            ? '600' : 'normal' }}>
            Sentences
          </div>               
        </div>
        <div>{renderReadingListeningTopic()}</div>
        {showPopUp && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded shadow-lg max-w-lg w-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-300">
                <h5 className="text-lg font-semibold">How to Guide</h5>
                <button onClick={() => setShowPopUp(false)} className="text-gray-500
                 hover:text-gray-800">&times;</button>
              </div>
              <div className="p-4">
                {currentLanguage.languageName === 'Japanese' ? (
                  <div>
                    <video
                      controls
                      src={props.howToGuideVideo}
                      className="w-full rounded"
                    />
                  </div>
                ) : (
                  <div>Video coming soon</div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadingListeningContent;