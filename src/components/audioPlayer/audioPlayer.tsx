import React, { useState, useRef } from "react";
import "./audioPlayer.css";
import ProgressCircle from "./progressCircle";
import WaveAnimation from "./waveAnimation";
import Controls from "./controls";
import { Tracks } from "../../utils/types";

interface TracksProps {
  total: Tracks[];
}

interface currentTrack {
  artists: Array<any>;
  name: string;
}

// flow -- songCard.tsx to albumInfo.tsx with albuminfos / albumUrl.tsx with url's

interface audioPlayerProps {
  currentTrack: currentTrack | any;
  currentIndex: number;
  setCurrentIndex: number | any;
}

type BigProps = TracksProps & currentTrack & audioPlayerProps;

const AudioPlayer: React.FC<BigProps> = (props) => {
  const { currentTrack, currentIndex, setCurrentIndex, total } = props;

  console.log(total);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  var audioSource = total[0]?.preview_url;
  const audioRef = useRef(new Audio());

  const intervalRef = useRef();

  const isReady = useRef(false);

  const { duration } = audioRef.current;
  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

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
          percentage={currentPercentage}
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
            <WaveAnimation isPlaying={true} />
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
