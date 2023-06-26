import React from "react";
import "./audioPlayer.css";
import ProgressCircle from "./progressCircle";
import WaveAnimation from "./waveAnimation";
import Controls from "./controls";

interface currentTrack {
  artists: Array<any>;
  name: string;
}

// flow -- songCard.tsx to albumInfo.tsx with albuminfos / albumUrl.tsx with url's

interface audioPlayerProps {
  currentTrack: currentTrack | any;
  isPlaying: boolean;
}

const AudioPlayer: React.FC<audioPlayerProps> = (props) => {
  const { currentTrack, isPlaying } = props;
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

      <div className="player-right-body flex">
        <p className="song-title">{currentTrack?.name}</p>
        <p className="song-artist"> {artist.join(" | ")}</p>

        <div className="player-right-bottom flex">
          <div className="song-duration flex">
            <p className="duration">0:30</p>
            <WaveAnimation isPlaying={isPlaying} />
            <p className="duration">0:30</p>
          </div>
          <Controls
          // isPlaying={isPlaying}
          // setIsPlaying={setIsPlaying}
          // handleNext={handleNext}
          // handlePrev={handlePrev}
          // total={total}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
