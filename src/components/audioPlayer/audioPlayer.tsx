import React from "react";
import "./audioPlayer.css";
import ProgressCircle from "./progressCircle";

interface currentTrack {
  artists: Array<any>;
  name: string;
}

// flow -- songCard.tsx to albumInfo.tsx with albuminfos / albumUrl.tsx with url's

interface audioPlayerProps {
  currentTrack: currentTrack | any;
}

const AudioPlayer: React.FC<audioPlayerProps> = (props) => {
  const { currentTrack } = props;
  console.log(currentTrack);

  const artist: any[] = [];
  // name location: currentTrack.artists[0].name
  currentTrack?.artists?.forEach((element: any) => {
    artist.push(element.name);
  });

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

      <div className="player-right-body">
        <p className="song-title">{currentTrack?.name}</p>
        <p className="song-artist"> {artist.join(" | ")}</p>
      </div>
    </div>
  );
};

export default AudioPlayer;
