// components/LocalVideoPlayer.tsx
import React from "react";

interface LocalVideoPlayerProps {
  videoSource: string;
}

const LocalVideoPlayer: React.FC<LocalVideoPlayerProps> = ({ videoSource }) => {
  return (
    <div className="flex justify-center mb-20">
      <video controls width={400} height="auto">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LocalVideoPlayer;
