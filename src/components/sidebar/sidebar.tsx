import React from "react";
import "./sidebar.css";
import Profile from "../../utils/profile.jpeg";
import SidebarButton from "./sidebarButton";
import { HiBars3CenterLeft } from "react-icons/hi2";
import {
  AiOutlineSearch,
  AiTwotoneHeart,
  AiFillPlayCircle,
} from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container">
        <div>
          <SidebarButton
            buttonTitle="Home"
            to="/"
            icon={<HiBars3CenterLeft />}
          />
          <SidebarButton
            buttonTitle="Search"
            to="/search"
            icon={<AiOutlineSearch />}
          />
          <SidebarButton
            buttonTitle="Favorite"
            to="/favorites"
            icon={<AiTwotoneHeart />}
          />
          <SidebarButton
            buttonTitle="Playlists"
            to="/trending"
            icon={<AiFillPlayCircle />}
          />
        </div>

        {/* Profile Body */}

        <div className="profile-body">
          <img className="profile-image" src={Profile} alt="profile-image" />
          <p className="profile-text">Hello! Parteek Kumar</p>
  
        </div>
      </div>
    </>
  );
};

export default Sidebar;
