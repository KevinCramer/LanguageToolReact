import './CustomAudioPlayer.css'; 
import { pause, play } from 'ionicons/icons';
import { timeElapsed, timeRemaining } from '../../../helpers/audio-player-helpers';
import { useRef, useState } from 'react';
import { IonIcon } from '@ionic/react';

type AudioPlayerProps = {
  audioFile: string;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioFile }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentSeconds, setCurrentSeconds] = useState<number>(0);
  const [totalSeconds, setTotalSeconds] = useState<number>(0);
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

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={audioFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={handlePlayPause}>
        <IonIcon icon={isPlaying ? pause : play } size="large"/>
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={(currentSeconds / totalSeconds) * 100 || 0}
        onChange={handleSeek}
      />
      <div className='timestamp-container'>
        <div>
          {timeElapsed(currentSeconds)}
        </div>
        <div>
          {timeRemaining(currentSeconds, totalSeconds)}
        </div>       
      </div>
    </div>
  );
};

export default AudioPlayer;