import React, { useState, useEffect } from "react";
import "./library.css";
import axios from "axios";
import options from "../../spotifyAPI";
import { IconContext } from "react-icons";
import { AiFillPlayCircle, AiTwotoneHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Music from "../../utils/music.svg";
import Favorites from "../favorites/favorites";

interface LibraryProps {
  changeFav: any;
}
const Library: React.FC<LibraryProps> = (props) => {
  const { changeFav } = props;
  const [albums, setAlbums] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      setAlbums(response.data.albums.items);
      // console.log(response.data.albums?.items[0].data.uri); //getting the uri
    } catch (error) {
      console.log("Errror has occured in fetchData");
    }
  };

  const navigate = useNavigate();

  const playPLayList = (id: string) => {
    navigate("/player", { state: { id: id } });
  };

  const addToFavorites = (albumId: string) => {
    const albumToAdd = albums.find(
      (album) => album["data"]?.["uri"] === albumId
    );
    if (albumToAdd) {
      setFavorites([...favorites, albumToAdd]);
    }
    // console.log(favorites);
  };

  // const navigateToFavorites = () => {
  //   navigate("/favorites", { state: { favorites: favorites } });
  // };

  return (
    <>
      <div className="screen-container">
        <div className="upper-container flex">
          <div className="screen-left">
            <img className="music-svg" src={Music} alt="music" />
          </div>
          <div className="screen-right">
            <div className="right-contents">
              <p className="right-title">Your Favorite Tunes</p>
              <p className="right-subtitle">All ☀️ and All 🌙</p>
            </div>
          </div>
        </div>
        <div className="library-body">
          {albums.map((album) => {
            const newData = album["data"];
            const newImage = album["data"]["coverArt"]["sources"][0];
            const newDate = album["data"]["date"]["year"];
            const newId = album["data"]["uri"];
            console.log(newData?.["name"]);

            return (
              <>
                <div
                  className="playlist-card"
                  key={newId}
                  onClick={() => playPLayList(newId)}
                >
                  <img
                    src={newImage["url"]}
                    className="album-image"
                    alt="album-imagealt"
                  ></img>
                  {/* <p className="album-title"></p> */}

                  <p className="album-subtitle">{newData?.["name"]}</p>

                  <div className="album-fade">
                    <IconContext.Provider
                      value={{
                        size: "40px",
                        color: "#E99D72",
                      }}
                    >
                      <AiFillPlayCircle />
                    </IconContext.Provider>

                    <button
                      className="favorite-button"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToFavorites(newId);
                        changeFav({ favorites });
                      }}
                    >
                      <IconContext.Provider
                        value={{
                          size: "30px",
                          color: "#E99D72",
                        }}
                      >
                        <AiTwotoneHeart />
                      </IconContext.Provider>
                    </button>
                  </div>
                </div>
              </>
              //   <div>
              // <p className="album-title">{newData["name"]}</p>
              // <p className="album-subtitle" style={{ marginLeft: 55 }}>
              //   Realesed: {newDate}
              // </p>
              // </div>
            );
          })}
        </div>

        {/* <button className="favorites-link" onClick={navigateToFavorites}>
          Go to Favorites
        </button> */}
        {/* <button onClick={() => changeFav({ favorites })}>Press here</button> */}
        {/* {favorites.length > 0 && <Favorites favorites={favorites} />} */}
      </div>
    </>
  );
};

export default Library;
