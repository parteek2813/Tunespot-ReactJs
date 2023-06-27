import React, { useEffect, useState } from "react";
import "./widgets.css";
import { Tracks } from "../../utils/types";
import options from "../../spotifyAPI";
import axios from "axios";
import WidgetCard from "./widgetCard";

interface WidgetsProps {
  artistID: Tracks[] | any;
}

const Widgets: React.FC<WidgetsProps> = (props) => {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newPodcast, setNewPodcast] = useState([]);
  const { artistID } = props;
  const Aid = artistID?.id;
  //   console.log(artistID?.id); // gettting id here

  useEffect(() => {
    let requestCounter = 0;
    const fetchData = async () => {
      if (requestCounter < 3) {
        try {
          let relatedTracksUri = options.url;
          relatedTracksUri = relatedTracksUri.replace(
            "/search",
            "/artist_related"
          );

          const response = await axios.request({
            ...options,
            url: relatedTracksUri,
            params: {
              id: "2w9zwq3AktTeYYMuhMjju8",
            },
          });

          const a = response.data.artists.slice(0, 3);
          setSimilar(a);
          requestCounter++;
        } catch (error) {
          console.log("Errror has occured in getting related artists");
        }
      }

      if (requestCounter < 3) {
        try {
          let FeatPlaylistUri = options.url;
          FeatPlaylistUri = FeatPlaylistUri.replace("/search", "/playlist");

          const response = await axios.request({
            ...options,
            url: FeatPlaylistUri,
            params: {
              id: "37i9dQZF1DX4Wsb4d7NKfP",
            },
          });

          const b = response.data;
          setFeatured(b);
          requestCounter++;
        } catch (error) {
          console.log("Errror has occured in getting Featured Playlists");
        }
      }

      if (requestCounter < 3) {
        try {
          let PodcastUri = options.url;
          PodcastUri = PodcastUri.replace("/search", "/podcast_episodes");

          const response = await axios.request({
            ...options,
            url: PodcastUri,
            params: {
              id: "0ofXAdFIQQRsCYj9754UFx",
              offset: "0",
              limit: "10",
            },
          });
          const c = response.data;
          setNewPodcast(c);
          requestCounter++;
        } catch (error) {
          console.log("Errror has occured in getting Featured Playlists");
        }
      }
    };

    fetchData();
  }, [Aid]);

  return (
    <>
      <div className="widgets-body flex">
        <WidgetCard
          title="Similar Artists"
          similar={similar}
          featured={featured}
          Podcast={newPodcast}
        />
        <WidgetCard
          title="Similar Artists"
          similar={similar}
          featured={featured}
          Podcast={newPodcast}
        />
        <WidgetCard
          title="Similar Artists"
          similar={similar}
          featured={featured}
          Podcast={newPodcast}
        />
      </div>
    </>
  );
};

export default Widgets;
