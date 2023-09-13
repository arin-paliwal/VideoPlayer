import React from 'react'
import VideoPlayer from './VideoPlayer'

const SecondPage = () => {
    const video="https://public-videos-r01.s3.ap-southeast-2.amazonaws.com/Emilyannjackson+2+R5+small.m4v"
  return (
    <div>
        <VideoPlayer video={video}/>
    </div>
  )
}

export default SecondPage