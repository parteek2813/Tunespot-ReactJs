import React from "react";
import "./audioPlayer.css";
import ProgressCircle from "./progressCircle";

interface currentTrack {
  name: string;
}

// flow -- songCard.tsx to albumInfo.tsx with albuminfos / albumUrl.tsx with url's

interface audioPlayerProps {
  currentTrack: currentTrack | any;
}

const AudioPlayer: React.FC<audioPlayerProps> = (props) => {
  const { currentTrack } = props;

  return (
    <div className="player-body flex">
      <div className="player-left-body">
        <ProgressCircle
          percentage={75}
          isPlaying={true}
          //   image={}
          size={300}
          color="#C96850"
          strokeWidth={""}
        />
      </div>

      <div className="player-right-body"></div>
    </div>
  );
};

export default AudioPlayer;
