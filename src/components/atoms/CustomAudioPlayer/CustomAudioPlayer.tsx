import './CustomAudioPlayer.css'; 
import React, { useRef, useState } from 'react';
import Icon from '@mdi/react';
import { mdiPause, mdiPlay } from '@mdi/js';

const AudioPlayer = ({ audioFile }: any) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
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
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (event: any) => {
    const newTime = (event.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
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
        <Icon path={isPlaying ? mdiPause : mdiPlay} size={2} />
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleSeek}
      />
      <div style={{ display:'flex', flexDirection:'row', justifyContent:'space-between', width: '300px' }}>
        <div>
          {Math.floor(currentTime / 60)}:
          {(Math.floor(currentTime) - 60 * Math.floor(currentTime / 60)).toString()
            .padStart(2, '0')} 
        </div>
        <div>
          {Math.floor((duration - currentTime) / 60)}:
          {(Math.floor(duration - currentTime) - 60 * Math.floor((duration - currentTime) / 60))
            .toString().padStart(2, '0')}
        </div>       
      </div>
    </div>
  );
};

export default AudioPlayer;