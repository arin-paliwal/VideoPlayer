import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import ButtonSection from "./ButtonSection";

const HomePage = () => {
  const video =
    "https://scalerstudios.nyc3.cdn.digitaloceanspaces.com/Emilyannjackson%20R4%20small.m4v";

  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  return (
    <div className="bg-black flex h-screen gap-2 flex-col justify-center items-center">
      <div>
        <video width="1100" height="360" controls onEnded={handleVideoEnded}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      {videoEnded && <ButtonSection />}
    </div>
  );
};

export default HomePage;
