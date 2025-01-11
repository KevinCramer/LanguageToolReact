import { AudioTranscription, ComprehensionLanguage, TranscriptionType } from '../../types/learningSections/ComprehensionTypes';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { languages as allLanguages } from '../data/structured-data/comprehension';
import CustomDropDownButton from '../components/atoms/CustomDropDownButton';
import { lightGrey, lingoCommandIsLocked, mobileBreakPoint } from '../constants';
import CustomDropDownButtonWhite from '../components/atoms/CustomDropDownButtonWhite';
import CustomSwitch from '../components/atoms/CustomSwitch';
import RenderTableCell from '../components/molecules/RenderTableCell';
import LockIcon from '@mui/icons-material/Lock';
import { useAuth } from '../contexts/AuthContext';
import { useDispatch } from 'react-redux';
import { denyPermission } from '../redux-store/lock';

const ComprehensionContent = (props: { languageNumber: number; howToGuideVideo?: any }) => {
  const dispatch = useDispatch();

  //@ts-ignore
  const { currentUser } = useAuth();

  const userIsLoggedIn = currentUser && currentUser.email

  const navigate = useNavigate();
  const { topicSlug } = useParams();
  const location = useLocation();

  const currentLanguage: ComprehensionLanguage = allLanguages[props.languageNumber];

  const initialAudioTranscription =
    currentLanguage.audioTranscriptions.find((t) => t.slugName === topicSlug) || currentLanguage.audioTranscriptions[0];

  const queryParams = new URLSearchParams(location.search);
  const initialTranscriptionInEnglish = queryParams.get('eng') === 'T';
  const initialAlphabet = parseInt(queryParams.get('numAlphabet') || '0');
  const initialLeft =
    queryParams.get('L') ||
    (currentLanguage.numForeignAlphabets > 1 ? TranscriptionType.WritingSystem3 : TranscriptionType.WritingSystem1);
  const initialRight = queryParams.get('R') || TranscriptionType.English;
  const initialGranularity = queryParams.get('gran') || 'paragraph';

  const [currentAudioTranscription, setCurrentAudioTranscription] =
    useState<AudioTranscription>(initialAudioTranscription);

  const changeTranscription = (topic: AudioTranscription) => {
    if(topic.isLocked && lingoCommandIsLocked && !userIsLoggedIn ){
      dispatch(denyPermission());
    }
    else{
      navigate(`/${currentLanguage.languageName.toLowerCase()}/comprehension/${topic.slugName}`, { replace: true });
      return setCurrentAudioTranscription(topic);}

  }

  const [transcriptionInEnglish, setTranscriptionInEnglish] = useState(initialTranscriptionInEnglish);
  const [currentAlphabet, setCurrentAlphabet] = useState(initialAlphabet);
  const [granularity, setGranularity] = useState(initialGranularity); // Granularity state

  const preventDropdownClose = (event: any) => {
    event.stopPropagation(); // Prevent click event from closing the dropdown
  };

  const [currentLeft, setCurrentLeft] = useState(initialLeft);
  const [currentRight, setCurrentRight] = useState(initialRight);
  const [leftVisibility, setLeftVisibility] = useState(true);
  const toggleLeftVisibility = () => { return setLeftVisibility(!leftVisibility)}
  const toggleRightVisibility = () => { return setRightVisibility(!rightVisibility)}
  const toggleGranularity = () => { return setGranularity(granularity === 'sentence' ? 'paragraph' : 'sentence')}

  const [rightVisibility, setRightVisibility] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);

  const titleMap: Record<TranscriptionType, string> = {
    [TranscriptionType.Audio]: `${currentLanguage.languageName} Audio`,
    [TranscriptionType.English]: 'English Transcription',
    [TranscriptionType.WritingSystem1]: `${currentLanguage.languageName} ${
      currentLanguage.numForeignAlphabets > 1 ? '(Roman Alphabetisation)' : ''
    }`,
    [TranscriptionType.WritingSystem2v2]: `${currentLanguage.languageName} (Hiragana and Katakana with spacing)`,
    [TranscriptionType.WritingSystem2]: `${currentLanguage.languageName} (Hiragana and Katakana)`,
    [TranscriptionType.WritingSystem3]: `${currentLanguage.languageName} (Hiragana, Katakana, and Kanji)`,
  };

  const updateURL = (slugName: string, left: TranscriptionType, right: TranscriptionType, granularity: string) => {
    const query = new URLSearchParams(location.search);
    query.set('L', left);
    query.set('R', right);
    query.set('gran', granularity)
    navigate(`/${currentLanguage.languageName.toLowerCase()}/comprehension/${slugName}?${query.toString()}`, {
      replace: true,
    });
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    query.set('eng', transcriptionInEnglish ? 'T' : 'F');
    updateURL(topicSlug as string, currentLeft as TranscriptionType, currentRight as TranscriptionType, granularity); // Call updateURL here
  }, [transcriptionInEnglish, currentLeft, currentRight, topicSlug, granularity]);

  const toggleVisibility = (setter: React.Dispatch<React.SetStateAction<boolean>>) => () => {
    setter((prev) => !prev);
  };

  const renderDropdownItems = (current: TranscriptionType, changeHandler: (type: TranscriptionType) => void) => {
    return Object.entries(titleMap).map(([key, title]) => {
      const transcriptionType = key as TranscriptionType;
      const showCondition =
        transcriptionType !== TranscriptionType.Audio &&
        transcriptionType !== TranscriptionType.English &&
        parseInt(transcriptionType.slice(-1)) > currentLanguage.numForeignAlphabets;
      if (showCondition) return null;

      return (
        <li
          key={key}
          onClick={() => changeHandler(transcriptionType)}
          className="cursor-pointer hover:bg-gray-200 p-2"
        >
          {title}
        </li>
      );
    });
  };

  const isSentenceWithNumAlphabets = (sentence: any, numAlphabets: number): boolean => {
    return sentence.foreignText.length === numAlphabets;
  };

  const renderComprehensionTopic = () => {
    // Flatten the paragraphs into individual sentences if granularity is 'sentence'
    const rowsToRender = granularity === 'sentence'
      ? currentAudioTranscription.contents.flatMap((content) =>
        content.sentences.map((sentence) => ({
          sentences: [sentence], // Wrap each sentence in an array to pass to renderTableCell
          audioFile: content.audioFile,
        }))
      )
      : currentAudioTranscription.contents.map((content) => ({
        sentences: content.sentences, // Keep sentences as they are when granularity is 'paragraph'
        audioFile: content.audioFile,
      }));

    return (
      <div>
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              {['Left', 'Right'].map((side) => (
                <th
                  key={side}
                  className="border border-gray-300 px-4 py-2 text-left"
                >
                  <CustomDropDownButtonWhite
                    title={
                      titleMap[(side === 'Left' ? currentLeft : currentRight) as TranscriptionType].length > 20
                        ? `${titleMap[(side === 'Left' ? currentLeft : currentRight) as TranscriptionType].substring(0, 20)}...`
                        : titleMap[(side === 'Left' ? currentLeft : currentRight) as TranscriptionType]
                    }
                  >
                    <ul className="bg-white border border-gray-300 rounded shadow-md">
                      {renderDropdownItems(
                        (side === 'Left' ? currentLeft : currentRight) as TranscriptionType,
                        side === 'Left' ? setCurrentLeft : setCurrentRight
                      )}
                    </ul>
                  </CustomDropDownButtonWhite>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowsToRender.map((row, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  <RenderTableCell
                    current={currentLeft as TranscriptionType}
                    visibility={leftVisibility}
                    sentences={row.sentences}
                    audioFile={row.audioFile}
                    granularity={granularity}
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
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

  return (
    <div className='md:text-lg'>
      <h4 className='text-center text-2xl py-12'>
        {currentLanguage.languageName} Reading and Listening Comprehension
      </h4>
      <div className='flex justify-center'>
        <span
          className="text-blue-500 underline text center  py-2"
          onClick={() => setShowPopUp(true)}
        >
          How to Guide (Video)
        </span>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className='flex justify-center'>
          <div className='px-2'>
            <CustomDropDownButton
              title={`Topic: ${
                currentAudioTranscription.name.length > 25
                  ? `${currentAudioTranscription.name.substring(0, 25)}...`
                  : currentAudioTranscription.name
              }`}
            
            >
              <ul className="bg-white border border-gray-300 rounded shadow-md">
                {currentLanguage.audioTranscriptions.map((topic, index) => (
                  <li
                    key={index}
                    onClick={() => changeTranscription(topic)}
                    className="cursor-pointer hover:bg-gray-200 p-2"
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
            </CustomDropDownButton>
          </div>
          <div className='px-2'>
            <CustomDropDownButton title='Settings' align='end'>
              <ul className="bg-white border border-gray-300 rounded shadow-md">
                <li
                  onClick={(event) => {
                    toggleLeftVisibility();
                    preventDropdownClose(event);
                  }}
                  className="cursor-pointer hover:bg-gray-200 p-2 flex items-center"
                >
                  <input
                    type='checkbox'
                    checked={!leftVisibility}
                    onChange={toggleLeftVisibility}
                    disabled={!rightVisibility}
                    className="mr-2"
                  /> 
                  Hide left column
                </li>
                <li
                  onClick={(event) => {
                    toggleRightVisibility();
                    preventDropdownClose(event);
                  }}
                  className="cursor-pointer hover:bg-gray-200 p-2 flex items-center"
                >
                  <input
                    type='checkbox'
                    checked={!rightVisibility}
                    onChange={toggleRightVisibility}
                    disabled={!leftVisibility}
                    className="mr-2"
                  /> 
                  Hide right column
                </li>
              </ul>
            </CustomDropDownButton>
          </div>
        </div>
        <div className="flex items-center my-4 justify-center ">
          <div className='px-2' style={{ fontWeight: granularity === 'sentence' ? 'normal' : '600' }}>
        Paragraphs
          </div>
          <CustomSwitch 
            onChange={toggleGranularity} 
            checked= {granularity === 'sentence'} 
          /> 
          <div className='px-2'style={{ fontWeight: granularity === 'sentence' ? '600' : 'normal' }}>
            Sentences
          </div>               
        </div>
        <div>{renderComprehensionTopic()}</div>
        {showPopUp && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded shadow-lg max-w-lg w-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-300">
                <h5 className="text-lg font-semibold">How to Guide</h5>
                <button onClick={() => setShowPopUp(false)} className="text-gray-500 hover:text-gray-800">&times;</button>
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

export default ComprehensionContent;