import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onSelectVideo }) => {
  const itemList = videos.map(video => {
    return (
      <VideoItem
        onSelectVideo={onSelectVideo}
        key={video.id.videoId}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{itemList}</div>;
};

export default VideoList;
