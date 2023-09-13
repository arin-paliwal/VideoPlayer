import React from 'react'
import VideoPlayer from './VideoPlayer'

const SecondPage = () => {
    const video="/video-2.m4v"
  return (
    <div>
        <VideoPlayer video={video}/>
    </div>
  )
}

export default SecondPage