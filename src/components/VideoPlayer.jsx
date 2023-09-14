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

  // return (
  //   <div className="flex">
  //     <ReactPlayer
  //       url={video}
  //       width="640"
  //       height="300"
  //       controls
  //       onEnded={handleVideoEnded}
  //     />
  //     {videoEnded && (
  //       <Popup onClose={handleClosePopup} />
  //     )}
  //   </div>
  // );
  return (
    <div>
      <video width="1100" height="360" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
