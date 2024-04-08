import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlay, 
  faPause, 
  faVolumeUp, 
  faShareAlt, 
  faDownload 
} from '@fortawesome/free-solid-svg-icons';

const AudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center space-x-4">
      <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} />
      <button onClick={togglePlayPause} className="bg-green-500 text-white p-2 rounded-full">
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <FontAwesomeIcon icon={faVolumeUp} className="text-gray-400" />
      <FontAwesomeIcon icon={faShareAlt} className="text-gray-400" />
      <FontAwesomeIcon icon={faDownload} className="text-gray-400" />
    </div>
  );
};

export default AudioPlayer;