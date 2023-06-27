import React from "react";
import "./public.css";

const Public = () => {
  return (
    <div className="login-error">
      <p>Your details are incorrect. Please try logging in again.</p>
      <a href="http://localhost:3000/">Go back to login page</a>
    </div>
  );
};

export default Public;
