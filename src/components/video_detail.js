import React from 'react';

const VideoDetail = ({ video }) => {
  // const videoId = video.id.videoId; //will give linting error - read it and decide for yourself
  const { videoId } = video.id; // is example of destructuring
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" title="video-detail" src={url} />
    </div>
  );
};

export default VideoDetail;
