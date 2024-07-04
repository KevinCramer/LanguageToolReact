import './CustomAudioPlayer.css'; 
import { pause, play } from 'ionicons/icons';
import { timeElapsed, timeRemaining } from '../../../helpers/audio-player-helpers';
import { useRef, useState } from 'react';
import { IonIcon } from '@ionic/react';

const AudioPlayer = ({ audioFile }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const audioRef = useRef<any>(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentSeconds(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setTotalSeconds(audioRef.current.duration);
  };

  const handleSeek = (event: any) => {
    const newTime = (event.target.value / 100) * totalSeconds;
    audioRef.current.currentSeconds = newTime;
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
      <button
        onClick={handlePlayPause}>
        <IonIcon icon={isPlaying ? pause : play } size="large"/>
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={(currentSeconds / totalSeconds) * 100 || 0}
        onChange={handleSeek}
      />
      <div style={{ 
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width: '300px' }}>
        <div>
          {timeElapsed(currentSeconds)}
        </div>
        <div>
          {timeRemaining(currentSeconds,totalSeconds)}
        </div>       
      </div>
    </div>
  );
};

export default AudioPlayer;
// time
// timeLeft