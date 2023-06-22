import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "./library";
import UserFeed from "./userFeed";
import Player from "./player";
import Favorites from "./favorites";

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/feed" element={<UserFeed />} />
        <Route path="/trending" element={<Library />} />
        <Route path="/player" element={<Player />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default Home;
