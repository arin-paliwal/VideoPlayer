import React from "react";
import VideoPlayer from "./VideoPlayer";
import ButtonSection from "./ButtonSection";

const HomePage = () => {
  const video = "/video-1.m4v";
  return (
    <div className="bg-black h-screen flex flex-col justify-center">
      <VideoPlayer video={video} />
      <ButtonSection />
    </div>
  );
};

export default HomePage;
