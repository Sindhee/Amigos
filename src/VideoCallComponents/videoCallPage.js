// VideoCallPage.js
import React from 'react';
import VideoCall from './videoCall';

const VideoCallPage = ({ setInCall }) => {
  // You can pass setInCall as a prop to VideoCall component
  return (
    <div>
      <h1>You are in a video call.</h1>
      <VideoCall setInCall={setInCall} />
    </div>
  );
};

export default VideoCallPage;
