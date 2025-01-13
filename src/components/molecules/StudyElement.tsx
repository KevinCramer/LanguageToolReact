import { Navbar } from 'react-bootstrap'
import CustomButton from '../atoms/CustomButton'
import { useEffect, useState } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

const StudyElement = (
  props: 
  {
    BaseLanguageWord: string,
    ForeignLanguageWord: string,
    ForeignLanguageWordAudio: string,
    showAudio: boolean,
    showBaseLanguageFirst: boolean,
    strokeOrderVideo?: any,
    showLeftLabel: boolean, 
  }) => 
{
  const {
    BaseLanguageWord,
    ForeignLanguageWord,
    ForeignLanguageWordAudio,
    showAudio,
    showBaseLanguageFirst,
    strokeOrderVideo,
    showLeftLabel
  } = props;

  const [showPopUp, setShowPopUp] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const foreignLanguageLabelStrokeOrder = <label className='text-blue-500 underline'
    onClick={showBaseLanguageFirst ? displayPopUp : () => {}}>
    <> {ForeignLanguageWord}</>
  </label>;

  const foreignLanguageLabel = (strokeOrderVideo ? foreignLanguageLabelStrokeOrder : 
    <label><>{ForeignLanguageWord}</></label>);

  return (
    <Navbar className='flex justify-between items-center'>
      <div className='flex-grow text-center text-lg'>
        {showLeftLabel ? baseLanguageLabel : foreignLanguageLabel}
      </div>

      {showAudio && (showBaseLanguageFirst ? !showLeftLabel : showLeftLabel) && (
        <div className='flex items-center'>
          <audio src={ForeignLanguageWordAudio} id={ForeignLanguageWordAudio}></audio>
          <button disabled={!ForeignLanguageWord} onClick={handleAudioToggle}>
            {ForeignLanguageWordAudio ? (
              <VolumeUpIcon className={`${isPlaying ? 'text-blue-500' : 'bg-transparent'}`} />
            ) : (
              <VolumeOffIcon />
            )}
          </button>
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
    </Navbar>
  );
};

export default StudyElement;
