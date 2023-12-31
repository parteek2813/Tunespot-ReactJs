import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import options from "../../spotifyAPI";
import axios from "axios";
import SongCard from "../../components/songCard/songCard";
import Queue from "../../components/queue/queue";
import { Tracks } from "../../utils/types";
import AudioPlayer from "../../components/audioPlayer/audioPlayer";
import Widgets from "../../components/widgets/widgets";

const Player = () => {
  // Get the id of the albums
  const location = useLocation();
  const newLocation = location["state"]["id"].split(":")[2];
  const [tracks, settracks] = useState<Tracks[]>([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (newLocation) {
      fetchData();
    }
  }, [location["state"]]);

  const fetchData = async () => {
    try {
      let playListUri = options.url;
      playListUri = playListUri.replace("/search", "/albums");

      const response = await axios.request({
        ...options,
        url: playListUri,
        params: {
          ids: newLocation,
        },
      });

      settracks(response.data.albums[0].tracks.items);
      setCurrentTrack(response.data.albums[0].tracks.items[0]);
      setImageUrl(response.data.albums[0].images[0].url);
      
    } catch (error) {
      console.log("Errror has occured in fetchData");
    }
  };

  useEffect(() => {
    setCurrentTrack(tracks[currentIndex]);
  }, [currentIndex]);

  return (
    <div className="screen-container flex">
      <div className="left-player-body">
        <AudioPlayer
          currentTrack={currentTrack}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          total={tracks}
          artists={[]}
          name={""}
        />
        <Widgets artistID={currentTrack} />
      </div>
      <div className="right-player-body">
        <SongCard album={currentTrack} url={imageUrl} />
        <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
      </div>
    </div>
  );
};

export default Player;
