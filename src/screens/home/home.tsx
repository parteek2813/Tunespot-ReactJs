import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../library/library";
import UserFeed from "../userFeed/userFeed";
import Player from "../player/player";
import Favorites from "../favorites/favorites";
import "./home.css";
import Sidebar from "../../components/sidebar/sidebar";
import Login from "../auth/login";
import options from "../../spotifyAPI";
import Search from "../search/search";

const Home = () => {
  const [token, setToken] = useState("");
  const [fav, setFav] = useState([]);

  const updateFavorites = (updatedFav: any) => {
    setFav(updatedFav);
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      const _token = options.headers["X-RapidAPI-Key"];
      window.localStorage.setItem("token", _token);
      setToken(_token);
    } else {
      setToken(token);
    }
  }, []);

  console.log(fav);

  // return !token ? (
  //   <Login />
  // ) : (

  return (
    <>
      <Router>
        <div className="main-container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Library changeFav={updateFavorites} />} />
            <Route path="/feed" element={<UserFeed />} />
            {/* <Route path="/trending" element={<Library />} /> */}
            <Route path="/player" element={<Player />} />
            <Route path="/favorites" element={<Favorites favorites={fav} />} />
            <Route path="/Search" element={<Search />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default Home;
