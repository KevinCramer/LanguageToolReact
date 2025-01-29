import { useEffect, useState } from 'react'
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { consistentStyles } from '../../constants';

const StudyElement = (
  props: 
  {
    BaseLanguageWord: string,
    ForeignLanguageWord: string,
    ForeignLanguageWordAudio: string,
    showAudio: boolean,
    showModifyQuiz: boolean,
    showBaseLanguageFirst: boolean,
    strokeOrderVideo?: any,
    showLeftLabel: boolean, 
    onQuizSelect: (isSelected: boolean) => void; // Added prop for quiz selection
    initialQuizSelect: boolean,
  }) => 
{
  const {
    BaseLanguageWord,
    ForeignLanguageWord,
    ForeignLanguageWordAudio,
    showAudio,
    showModifyQuiz,
    showBaseLanguageFirst,
    strokeOrderVideo,
    showLeftLabel,
    onQuizSelect, // Destructuring the onQuizSelect prop
    initialQuizSelect,
  } = props;

  const [showPopUp, setShowPopUp] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSelected, setIsSelected] = useState(initialQuizSelect); // New state for selection

  // Sync isSelected with initialQuizSelect when it changes
  useEffect(() => {
    setIsSelected(initialQuizSelect);
  }, [initialQuizSelect]);

  const handleAudioToggle = () => {
    const audio = document.getElementById(ForeignLanguageWordAudio) as HTMLAudioElement;
    if (audio) {
      if (audio.paused) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        audio.currentTime = 0; // Reset to the beginning of the audio
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    const audio = document.getElementById(ForeignLanguageWordAudio) as HTMLAudioElement;
    if (audio) {
      const handleAudioEnd = () => {
        setIsPlaying(false);
      };

      audio.addEventListener('ended', handleAudioEnd);
      return () => {
        audio.removeEventListener('ended', handleAudioEnd);
      };
    }
  }, [ForeignLanguageWordAudio]);

  const hidePopUp = () => setShowPopUp(false);
  const displayPopUp = () => setShowPopUp(true);

  const baseLanguageLabel = <label
    onClick={((showBaseLanguageFirst && !strokeOrderVideo) || (!showBaseLanguageFirst && strokeOrderVideo)) ? displayPopUp : () => {}}>
    <>{BaseLanguageWord}</>
  </label>;

  const foreignLanguageLabelStrokeOrder = <label className={`${consistentStyles.blueText} underline cursor-pointer`}
    onClick={showBaseLanguageFirst ? displayPopUp : () => {}}>
    <> {ForeignLanguageWord}</>
  </label>;

  const foreignLanguageLabel = (strokeOrderVideo ? foreignLanguageLabelStrokeOrder : 
    <label><>{ForeignLanguageWord}</></label>);

  // Handle checkbox change to select for quiz
  const toggleSelection = () => {
    const newSelectionState = !isSelected;
    setIsSelected(newSelectionState);
    onQuizSelect(newSelectionState); // Pass the new selection state to the parent component
  };

  return (
    <div className='flex justify-between items-center text-xl'>
      <div className='flex-grow text-center'>
        {showLeftLabel ? baseLanguageLabel : foreignLanguageLabel}
      </div>

      {showAudio && (showBaseLanguageFirst ? !showLeftLabel : showLeftLabel) && (
        <div className='flex items-center'>
          <audio src={ForeignLanguageWordAudio} id={ForeignLanguageWordAudio}></audio>
          <button disabled={!ForeignLanguageWord} onClick={handleAudioToggle}>
            {ForeignLanguageWordAudio ? (
              <VolumeUpIcon className={`${isPlaying ? consistentStyles.blueText : 'bg-transparent'}`} />
            ) : (
              <VolumeOffIcon />
            )}
          </button>
        </div>
      )}
      {showModifyQuiz && !showLeftLabel && (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isSelected} // Use the state to control checkbox
            onChange={toggleSelection} // Call the toggle function on change
            className=" ml-2 cursor-pointer w-4 h-4"
          />
        </div>
      )}
      {strokeOrderVideo && (
        <>
          {showPopUp && (
            <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-900 bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">
                    {ForeignLanguageWord} - Hiragana Stroke Order
                  </h3>
                  <button
                    onClick={hidePopUp}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <video className="w-full" controls>
                    <source src={strokeOrderVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default StudyElement;
