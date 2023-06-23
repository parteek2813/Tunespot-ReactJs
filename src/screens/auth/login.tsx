import React, { useState, useEffect } from "react";
import "./login.css";
import options from "../../spotifyAPI";
import axios from "axios";

const Login = () => {
  const fetchData = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.log("Errror has occured in fetchData");
    }
  };
  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
};

export default Login;
