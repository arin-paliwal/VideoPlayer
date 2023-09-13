import React from "react";
import VideoPlayer from "./VideoPlayer";
import ButtonSection from "./ButtonSection";

const HomePage = () => {
  const video = "https://public-videos-r01.s3.ap-southeast-2.amazonaws.com/emilyannjackson_R4.mp4";
  return (
    <div className="bg-black h-screen flex flex-col justify-center">
      <VideoPlayer video={video} />
      <ButtonSection />
    </div>
  );
};

export default HomePage;
