import { pause, play } from 'ionicons/icons';
import { timeElapsed, timeRemaining } from '../../helpers/audio-player-helpers';
import { useRef, useState } from 'react';
import { IonIcon } from '@ionic/react';

type AudioPlayerProps = {
  audioFile: string;
};

const playbackSpeedOptions = [
  { label: 'normal', value: 0.1 }, // Default playback speed
  { label: 'slow', value: 0.75 }, // 75% speed
  { label: 'very slow', value: 0.5 }, // 50% speed
];

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioFile, }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentSeconds, setCurrentSeconds] = useState<number>(0);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1); // Default to 100% speed (1x)
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentSeconds(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setTotalSeconds(audioRef.current.duration);
    }
  };

  const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = (event.target.valueAsNumber / 100) * totalSeconds;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
    setCurrentSeconds(newTime);
  };

  const handleSpeedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSpeed = parseFloat(event.target.value);
    setPlaybackSpeed(selectedSpeed);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = audioFile;
      audioRef.current.playbackRate = selectedSpeed; // Adjust playback speed
      audioRef.current.play();
    }

    setIsPlaying(true); // Ensure the audio resumes playing after speed change
  };

  return (
    <div>
      <div className='flex justify-center my-4'>
        <div>
          {'speed:\u2002'}
        </div>
        <select
          value={playbackSpeed}
          onChange={handleSpeedChange}
          className='border border-black'
        >
          {playbackSpeedOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={audioFile} type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
      <div className='flex justify-center items-center flex-col max-w-[300px] mx-auto'>
        <button onClick={handlePlayPause} className="mb-2">
          <IonIcon icon={isPlaying ? pause : play} size='large' />
        </button>
        <input
          type='range'
          min='0'
          max='100'
          value={(currentSeconds / totalSeconds) * 100 || 0}
          onChange={handleSeek}
          className='w-full mb-2'
        />
        <div className='flex justify-between w-full'>
          <div>{timeElapsed(currentSeconds)}</div>
          <div>{timeRemaining(currentSeconds, totalSeconds)}</div>
        </div>
      </div>
    </div>
  );
};
export default AudioPlayer;