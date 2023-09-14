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
    <div className='flex justify-center items-center bg-black h-screen'>
      <video width="1300" height="360" controls>
        <source src="https://scalerstudios.nyc3.cdn.digitaloceanspaces.com/Emilyannjackson%202%20R5%20small.m4v" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
