/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Popup from './Popup';

function VideoPlayer({ video }) {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  const handleClosePopup = () => {
    setVideoEnded(false);
  };

  return (
    <div className="relative">
      <ReactPlayer
        url={video}
        width="640"
        height="300"
        controls
        onEnded={handleVideoEnded}
      />
      {videoEnded && (
        <Popup onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default VideoPlayer;
