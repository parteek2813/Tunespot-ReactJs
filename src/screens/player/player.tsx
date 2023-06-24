import React, { useEffect, useState } from "react";
import "./player.css";
import { useLocation } from "react-router-dom";
import options from "../../spotifyAPI";
import axios from "axios";

const Player = () => {
  // Get the id of the albums
  const location = useLocation();
  const newLocation = location["state"]["id"].split(":")[2];
  const [tracks, settracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState({});
  const [currentIndex, setCurrentIndex] = useState({});

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

      settracks(response.data[0]);
      setCurrentTrack(response.data[0].tracks.items[0]);

      console.log(response.data);
    } catch (error) {
      console.log("Errror has occured in fetchData");
    }
  };

  return (
    <div className="screen-container">
      <div className="left-player-body"></div>
      <div className="right-player-body"></div>
    </div>
  );
};

export default Player;
