import './CustomAudioPlayer.scss'; 
import { pause, play } from 'ionicons/icons';
import { timeElapsed, timeRemaining } from '../../../helpers/audio-player-helpers';
import { useRef, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { Button } from 'react-bootstrap';
import CustomButton from '../CustomButton/CustomButton';

type AudioPlayerProps = {
  audioFile: string;
  audioFile75?: string;
  audioFile50?: string;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioFile, audioFile75, audioFile50 }) => {
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

  const handleSpeedToggle = () => {
    let newSpeed = playbackSpeed;
    if (playbackSpeed === 1) {
      newSpeed = 0.75;
    } else if (playbackSpeed === 0.75) {
      newSpeed = 0.5;
    } else {
      newSpeed = 1;
    }
    setPlaybackSpeed(newSpeed);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src =
        newSpeed === 0.75 ? audioFile75 || audioFile :
          newSpeed === 0.5 ? audioFile50 || audioFile :
            audioFile;
      audioRef.current.playbackRate = newSpeed; // Adjust playback speed
      audioRef.current.play();
    }

    setIsPlaying(true); // Ensure the audio resumes playing after speed toggle
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
        <IonIcon icon={isPlaying ? pause : play} size="large" />
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={(currentSeconds / totalSeconds) * 100 || 0}
        onChange={handleSeek}
      />
      <div className="timestamp-container">
        <div>{timeElapsed(currentSeconds)}</div>
        <div>{timeRemaining(currentSeconds, totalSeconds)}</div>
      </div>
      <button style={{ borderRadius: '5px', borderColor: '#4A4A4A',borderWidth: '1px', color: '#4A4A4A' }} disabled={false} onClick={handleSpeedToggle}>
        Audio Speed: {playbackSpeed === 1 ? '100%' : playbackSpeed === 0.75 ? '75%' : '50%'}
      </button>
    </div>
  );
};

export default AudioPlayer;
