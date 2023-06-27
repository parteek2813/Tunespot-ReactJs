import React, { useState, useRef, useEffect } from "react";
import "./audioPlayer.css";
import ProgressCircle from "./progressCircle";
import WaveAnimation from "./waveAnimation";
import Controls from "./controls";
import { Tracks } from "../../utils/types";
import Slider from "./slider";

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

  const totalTracks = total.length; // getting tracks array here
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  var audioSource = total[currentIndex]?.preview_url;
  const [volume, setVolume] = useState(0.5);

  // 0th index audio will be played initially
  const audioRef = useRef(new Audio(total[0]?.preview_url));
  const intervalRef: any = useRef();

  const isReady = useRef(false);

  const { duration } = audioRef.current;
  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  // clear any interval present already
  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  };

  // if audio is already playing and play is pressed
  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSource);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // whenever the currentIndex changes , we are pausing the prev song
  // and playing the next song
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSource);

    // before playing the next song
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);
  //   console.log(currentTrack);

  // cleanup useEffect and tracks
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [isPlaying, volume]);

  // handlenext and handlePrev
  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) {
      setCurrentIndex(total.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const addZero = (n: number) => {
    return n > 9 ? "" + n : "0" + n;
  };

  const handleVolumeChange = (value: any) => {
    setVolume(value);
  };

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
            <p className="duration">0:{addZero(Math.round(trackProgress))}</p>
            <WaveAnimation isPlaying={isPlaying} />
            <p className="duration">0:30</p>
          </div>
          <Controls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            handleNext={handleNext}
            handlePrev={handlePrev}
            total={total.length}
          />
          <div className="volume-controls">
            <Slider value={volume} onChange={handleVolumeChange} />
          </div>
          <p className="total"> Total Songs: {totalTracks} </p>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
