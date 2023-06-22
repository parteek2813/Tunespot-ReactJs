import React from "react";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../library/library";
import UserFeed from "../userFeed/userFeed";
import Player from "../player/player";
import Favorites from "../favorites/favorites";
import "./home.css";
import Sidebar from "../../components/sidebar/sidebar";

const Home = () => {
  return (
    <Router>
      <div className="main-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<UserFeed />} />
          <Route path="/trending" element={<Library />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
